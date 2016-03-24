(ns yinch.canvas-interface
  (:require [yinch.board :as board]
            [yinch.game :as game]
            [cljs.core.async :as async]
            [dommy.core :as dommy])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [dommy.core :refer [sel sel1]])
  (:use [yinch.utils :only [π cos sin abs half other]]))

(enable-console-print!)

(def bg-color "#888")
(def grid-border 80)
(def total-border 10)
(def piece-colors {:black "#000" :white "#FFF"})
(def lip-colors {:black "#7EC0EE" :white "#7EC0EE"})
(def ring-slot-color "#555")
(def run-marker-color "#800000")

(def ^:dynamic *canvas* nil)
(def ^:dynamic *ctx* nil)
(def ^:dynamic *perspective* :white)
(def ^:dynamic *label* true)
(def ^:dynamic *canvas-width* 800)
(def ^:dynamic *canvas-height* 600)
(def ^:dynamic *unit-size* (/ (min (- *canvas-width* grid-border)
                                   (- *canvas-height* grid-border))
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
  [color thickness cap-style x1 y1 x2 y2]
  (aset *ctx* "strokeStyle" color)
  (aset *ctx* "lineWidth" thickness)
  (aset *ctx* "lineCap" cap-style)
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
  (line! "#F00" 1 "butt" (+ x 4) (+ y 4) (- x 4) (- y 4))
  (line! "#F00" 1 "butt" (+ x 4) (- y 4) (- x 4) (+ y 4)))

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
        (line! "#000" 1 "butt" x1 y1 x2 y2))

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
              cell (get-in game [:board major minor])
              color (:color cell)]
          (case (:type cell)
            :tile (circle! x y *tile-size* 2
                           (lip-colors color)
                           (piece-colors color))
            :ring (circle! x y *tile-size* 6
                           (piece-colors color))
            :empty nil
            (do
              (throw (str "Unexpected cell type. Cell:" cell)))))))))

(defn- annotate-board!
  "Draws the 1-11 a-k annotations around the perimeter of the board."
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

(defn- draw-run-marker!
  [game hover-cell]
  (if (and (= (:phase game) :run-pick)
           (not (nil? hover-cell)))
    (let [run (-> game
                  (:board)
                  (game/find-runs [hover-cell])
                  (game/best-run (hover-cell 0) (hover-cell 1)))
          [x1 y1] (grid->screen (first run))
          [x2 y2] (grid->screen (second run))]
      (line! run-marker-color 4 "round" x1 y1 x2 y2))))

(defn- draw-player-ring-slots!
  [game player corner]
  (let [initial-offset (+ total-border *tile-size*)
        l2l-dist (* (cos (/ π 6)) *unit-size*)
        [ix y x-step] (if (= corner :ne) 
                        [(- *canvas-width* initial-offset)
                         initial-offset
                         (* l2l-dist -1)]
                        [initial-offset
                         (- *canvas-height* initial-offset)
                         l2l-dist])]
    (doall
      (for [idx (range 3)]
        (let [slot-color (if (-> game
                                 (:rings-remaining)
                                 (player)
                                 (- (- 2 idx))
                                 (< 3))
                           (piece-colors player)
                           ring-slot-color)]
          (circle! (+ ix (* idx x-step))
                   y *tile-size* 6 slot-color))))))

(defn- draw-ring-slots!
  "Draws the 6 ring slots and populates them with rings and such."
  [game]
  (draw-player-ring-slots! game *perspective* :sw)
  (draw-player-ring-slots! game (other *perspective*) :ne))

(defn- draw-phase!
  "Writes the phase the game is in, in the top-right corner."
  [game]
  (text! 
    total-border
    (+ total-border 14)
    (str (if (= (:turn game) :black) "Black " "White ")
         (case (:phase game)
           :ring-placement "to place a ring on the board."
           :ring-pick "to pick a ring to move."
           :ring-drop
             (str "to pick a place to drop the ring currently at "
                  (board/minor-names (-> game :highlight-cell (get 1)))
                  (board/major-names (-> game :highlight-cell (get 0)))
                  ".")
           :run-pick "to pick a run to remove from the board."
           :ring-removal "to pick a ring to remove from the board."
           :victory "has won!"))
    (piece-colors (:turn game)) 14))

(defn- draw-highlight!
  ""
  [{cell :highlight-cell}]
  (if (nil? cell)
    nil
    (let [[major minor] cell
          [cx cy] (grid->screen [major minor])
          r (* *tile-size* 2)
          x1 (- cx r)
          y1 (- cy r)
          gradient (.createRadialGradient *ctx* cx cy r cx cy 0)]
      (.addColorStop gradient 0.551 "transparent")
      (.addColorStop gradient 0.55 "yellow")
      (.addColorStop gradient 0 "transparent")
      (aset *ctx* "fillStyle" gradient)

      (.fillRect *ctx* x1 y1 (* 2 r) (* 2 r)))))

(defn init-canvas!
  "Creates a new canvas/context pair given a selector to the canvas. The board
  will be rendered from the perspective of the given player, or white if no
  palyer is specified."
  ([canvas-id]
   (init-canvas! canvas-id :white))
  ([canvas-id perspective]
   (let [element (sel1 canvas-id)
         ctx (.getContext element "2d")]
     {:element element
      :ctx ctx
      :perspective perspective
      ; TODO: Don't hardcode these
      :width 800
      :height 600 })))

(defn draw-board!
  [game canvas-data hover-cell]
  (binding [*canvas* (:element canvas-data)
            *ctx* (:ctx canvas-data)
            *perspective* (:perspective canvas-data)]
    (rect! bg-color 0 0 *canvas-width* *canvas-height*)
    (draw-axis-set! (/ π 6))
    (draw-axis-set! (* -1 (/ π 6)))
    (draw-axis-set! (/ π 2))
    (annotate-board!)
    (draw-ring-slots! game)
    (draw-highlight! game)
    (draw-pieces! game)
    (draw-run-marker! game @hover-cell)
    (draw-phase! game)))

(defn consume-state!
  "Listens on a chan for game state updates until the chan is closed. Updates
  the screen for each state change."
  [canvas-data game-state hover-cell]
  (let [state-chan (async/chan)]
    (go
      (loop [new-state (async/<! state-chan)]
        (swap! game-state (fn [old-state] new-state))
        (draw-board! new-state canvas-data hover-cell)
        (recur (async/<! state-chan))))
    state-chan))

(defn consume-status!
  "Returns a channel with and listens, expecting status maps which are in turn
  presented to the user."
  []
  (let [status-chan (async/chan)]
    (go
      (loop [status (async/<! status-chan)]
        (case (:status status)
          :success
            nil
          :failure
            (js/alert (:reason status))
          :error
            (js/alert "Yo, the programmer messed up real bad.")
          (throw (str "Unexpected status" status)))
        (recur (async/<! status-chan))))
    status-chan))

(defn pump-interaction!
  "Binds event listeners, translates them into user actions (generally clicks
  on the board) and pumps puts them to the returned channel."
  [canvas-data game-state]
  (let [interaction-chan (async/chan)]
    (dommy/listen! (:element canvas-data) :click
      (fn [e]
        (let [x (aget e "layerX")
              y (aget e "layerY")
              [major minor] (screen->grid [x y])
              player (:turn @game-state)]
          (async/put! interaction-chan {:type :grid-click
                                        :click-info [player major minor]}))))
    interaction-chan))

(defn bind-internal-handlers!
  "Binds handlers that may change visual or meta-state of the game but which
  may not produce interactions or alter the state of the game object."
  [canvas-data game-state hover-cell]
  (dommy/listen! (:element canvas-data) :keydown
    (fn [e]
      (case (aget e "keyCode")
        68 (print (game/urlize @game-state))
        83 (print (game/game->script @game-state))
        nil)))

  (dommy/listen! (:element canvas-data) :mousemove
    (fn [e]
      (let [x (aget e "layerX")
            y (aget e "layerY")
            cell (screen->grid [x y])
            old-val @hover-cell
            new-val (swap! hover-cell (constantly cell))]
        ; If we didn't change the val or if we're not run-picking then there's
        ; no need to redraw the screen.
        (if (and (not= new-val old-val)
                 (= (:phase @game-state) :run-pick))
          (draw-board! @game-state canvas-data hover-cell))))))

(defn start-rendering!
  "Init canvas and return a 3-vec of channels for communicating state, status,
  and receiving user interactions."
  [canvas-selector]
  (let [canvas-data (init-canvas! canvas-selector)
        game-state (atom nil) ; state of the game "right now"
        hover-cell (atom nil) ; the cell the user currently has their mouse over
        state-chan (consume-state! canvas-data game-state hover-cell)
        status-chan (consume-status!)
        interaction-chan (pump-interaction! canvas-data game-state)]
    (bind-internal-handlers! canvas-data game-state hover-cell)
    [state-chan status-chan interaction-chan]))

