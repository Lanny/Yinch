(ns yinch.canvas-interface
  (:require [yinch.board :as board]
            [cljs.core.async :as async]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [dommy.core :refer [sel sel1]])
  (:use [yinch.utils :only [π cos sin abs half]]))

(enable-console-print!)

(def bg-color "#888")
(def border 80)
(def piece-colors {:black "#000" :white "#FFF"})
(def lip-colors {:black "#7EC0EE" :white "#7EC0EE"})

(def ^:dynamic *canvas* nil)
(def ^:dynamic *ctx* nil)
(def ^:dynamic *label* true)
(def ^:dynamic *canvas-width* 800)
(def ^:dynamic *canvas-height* 600)
(def ^:dynamic *unit-size* (/ (min (- *canvas-width* border)
                                   (- *canvas-height* border))
                              9))
(def ^:dynamic *tile-size* (* *unit-size* 0.33))

(defn- grid->screen
  "Takes a grid [major minor] (number, letter) coord pair and returns a screen
  [x y] position (relative to canvas top left)."
  [[major minor]]
  (let [center-x (half *canvas-width*)
        center-y (half *canvas-height*)
        l2l-dist (* (cos (/ π 6)) *unit-size*)
        d-major (- major 5)
        d-minor (- minor 5)]
    ; x = center-x + d-minor * l2l-dist
    ; x - center-x = d-minor * l2l-dist
    ; (x - center-x) / l2l-dist = d-minor

    ; y = center-y - (d-major * unit-size) + (d-minor * sin(π/6) * unit-size)
    ; y - (d-minor * sin(π/6) * unit-size) = center-y - (d-major * unit-size)
    ; y - (d-minor * sin(π/6) * unit-size) - center-y = 0 - (d-major * unit-size)
    ; -y + (d-minor * sin(π/6) * unit-size) + center-y = d-major * unit-size
    ; (-y + (d-minor * sin(π/6) * unit-size) + center-y) / unit-size = d-major
    [(+ center-x 
        (* d-minor l2l-dist))
     (- center-y
        (* d-major *unit-size*)
        (* (* -1 d-minor) (sin (/ π 6)) *unit-size*))]))

(defn- screen->grid
  "Takes a screen x, y position (relative to canvas top left) and returns a
  grid position [major, minor] (both 0-indicies)."
  [[x y]]
  (let [center-x (half *canvas-width*)
        center-y (half *canvas-height*)
        l2l-dist (* (cos (/ π 6)) *unit-size*)
        dx (- x center-x)
        dy (- y center-y)
        d-minor (/ dx l2l-dist)
        d-major (/ (+ (* d-minor (sin (/ π 6)) *unit-size*)
                      (- center-y y))
                   *unit-size*)]
    [(.round js/Math (+ 5 d-major))
     (.round js/Math (+ 5 d-minor))]))

(defn- rect!
  "Draw a solid colored rectangle between top left point (x1, y1) and bottom
  right point (x2, y2)."
  [color x1 y1 x2 y2]
  (aset *ctx* "fillStyle" color)
  (.fillRect *ctx* x1 y1 x2 y2))

(defn- line!
  "Draw a line from (x1, y1) to (x2, y2) that is `thickness` pixels wide and
  with the given color"
  [color, thickness, x1, y1, x2, y2]
  (aset *ctx* "strokeStyle" color)
  (aset *ctx* "lineWidth" thickness)
  (.beginPath *ctx*)
  (.moveTo *ctx* x1 y1)
  (.lineTo *ctx* x2 y2)
  (.stroke *ctx*))

(defn- circle!
  "Draw a circle centered a (x, y), with radius r of color `stroke-color` and
  thickness `thickness` and optional fill color."
  ([x y r thickness stroke-color]
   (circle! x y r thickness stroke-color nil))
  ([x y r thickness stroke-color fill-color]
   (.beginPath *ctx*)
   (aset *ctx* "fillStyle" (if (nil? fill-color) "" fill-color))
   (aset *ctx* "strokeStyle" stroke-color)
   (aset *ctx* "lineWidth" thickness)
   (.arc *ctx* x y r 0 (* π 2))
   (if (not (nil? fill-color))
     (.fill *ctx*))
   (.stroke *ctx*)))

(defn- mark!
  [x y]
  (line! "#F00" 1 (+ x 4) (+ y 4) (- x 4) (- y 4))
  (line! "#F00" 1 (+ x 4) (- y 4) (- x 4) (+ y 4)))

(defn- text!
  ([x y text] (text! x y text "#000"))
  ([x y text color] (text! x y text color 12))
  ([x y text color size] (text! x y text color size "sans-serif"))
  ([x y text color size style]
   (aset *ctx* "fillStyle" color)
   (aset *ctx* "font" (str size "px " style))
   (.fillText *ctx* text x y)))

(defn- draw-axis-set!
  "Draw the set of 11 parallel lines at angle θ (in radians) that form one of
  the three axies making up the grid"
  [θ]
  (let [center-x (half *canvas-width*)
        center-y (half *canvas-height*)
        θ* (+ θ (half π))
        l2l-dist (* (cos (/ π 6)) *unit-size*) ; distance between parallels 
        cxInitial (-> (* 5 l2l-dist) ; distance from center to edge
                      (* (cos θ*)) ; the x component thereof
                      (+ center-x)) ; from distance to position on screen
        cyInitial (-> (* 5 l2l-dist)
                      (* (sin θ*))
                      (+ center-y))]
    (loop [cx cxInitial
           cy cyInitial
           [line-length & remaining] board/axis-lengths]
      (let [half-x-run (* (cos θ) (half line-length) *unit-size*)
            half-y-run (* (sin θ) (half line-length) *unit-size*)
            x1 (+ cx half-x-run)
            y1 (+ cy half-y-run)
            x2 (- cx half-x-run)
            y2 (- cy half-y-run)]
        (line! "#000" 1 x1 y1 x2 y2))

      (if (seq remaining)
        (recur (- cx (* (cos θ*) l2l-dist))
               (- cy (* (sin θ*) l2l-dist))
               remaining)))))

(defn- draw-pieces!
  ""
  [game]
  (doall
    (board/for-cell
      (fn [major minor]
        (let [[x y] (grid->screen [major minor])
              cell (get-in game [:board major minor])]
          (case (:type cell)
            :tile (circle! x y *tile-size* 2
                           (:white lip-colors)
                           (:white piece-colors))
            :ring (circle! x y *tile-size* 6
                           (:white piece-colors))
            :empty nil
            (do
              (throw (str "Unexpected cell type. Cell:" cell)))))))))

(defn- annotate-board!
  "Draws the 1-11 a-k annotations around the perimeter of the board"
  ([] (annotate-board! "#000"
                       14
                       "sans-serif"))
  ([color size style]
   (doall
     (for [major (range 11)]
       (let [[x y] (grid->screen [major (board/axis-staggers major)])]
         (text! (- x (/ *unit-size* 6) size)
                (- y (/ *unit-size* 6))
                (board/major-names major) color size style))))
   (doall
    (for [minor (range 11)]
       (let [[x y] (grid->screen [(board/axis-staggers minor) minor])]
         (text! (- x (/ size 4))
                (+ y (/ *unit-size* 2) -3)
                (board/minor-names minor) color size style))))))

(defn init-canvas!
  "Creates a new canvas/context pair given a canvas ID"
  [canvas-id]
  (let [element (.getElementById js/document canvas-id)
        ctx (.getContext element "2d")]
    {:element element
     :ctx ctx
     ; TODO: Don't hardcode these
     :width 800
     :height 600 }))

(defn draw-board!
  [game canvas-data]
  (binding [*canvas* (:element canvas-data)
            *ctx* (:ctx canvas-data)]
    (rect! bg-color 0 0 *canvas-width* *canvas-height*)
    (draw-axis-set! (/ π 6))
    (draw-axis-set! (* -1 (/ π 6)))
    (draw-axis-set! (/ π 2))
    (annotate-board!)
    (draw-pieces! game)))

(defn consume-state!
  "Listens on a chan for game state updates until the chan is closed. Updates
  the screen for each state change."
  [state-chan]
  (go
    (let [canvas-data (init-canvas! "primaryCanvas")]
      (loop [new-state (async/<! state-chan)]
        (draw-board! new-state canvas-data)
        (recur (async/<! state-chan))))))

(defn pump-interaction!
  "Binds event listeners, translates them into user actions (generally clicks
  on the board) and pumps puts them to `interaction-chan`."
  [interaction-chan]
  (dommy/listen! (sel1 :#primaryCanvas) :click
    (fn [e]
      (let [x (aget e "layerX")
            y (aget e "layerY")
            [major minor] (screen->grid [x y])]
        (async/put! interaction-chan {:type :grid-click
                                      :click-info [:black major minor]})))))

(defn start-rendering!
  "Init canvas and return a pair of channels for communicating state and
  receiving user interactions."
  []
  (let [state-chan (async/chan)
        interaction-chan (async/chan)]
    (consume-state! state-chan) 
    (pump-interaction! interaction-chan)
    [state-chan interaction-chan]))

