(ns yinch.canvas-interface)

(def bgColor "#888")

; Just for ease of use
(def π (aget js/Math "PI"))
(defn- cos [x] (.cos js/Math x))
(defn- sin [x] (.sin js/Math x))
(defn- half [x] (/ x 2))

(def ^:dynamic *canvas* nil)
(def ^:dynamic *ctx* nil)
(def ^:dynamic *canvas-width* 800)
(def ^:dynamic *canvas-height* 600)
(def ^:dynamic *unit-size* 50);(/ (min *canvas-width* *canvas-height*) 9))

(def axis-lengths
  "The number of points along each of the axies"
  [3 6 7 8 9 8 9 8 7 6 3])

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

(defn- mark!
  [x y]
  (line! "#F00" 1 (+ x 4) (+ y 4) (- x 4) (- y 4))
  (line! "#F00" 1 (+ x 4) (- y 4) (- x 4) (+ y 4)))

(defn- draw-axis-set!
  ""
  [θ]
  (let [center-x (half *canvas-width*)
        center-y (half *canvas-height*)
        θ* (+ θ (half π))
        cxInitial (-> (* 5 *unit-size*) ; distance from center to edge
                      (* (cos θ*)) ; the x component thereof
                      (+ center-x)) ; from distance to position on screen
        cyInitial (-> (* 5 *unit-size*)
                      (* (sin θ*))
                      (+ center-y))]
    (js/console.log center-x center-y cxInitial cyInitial)
    (loop [cx cxInitial
           cy cyInitial
           [line-length & remaining] axis-lengths]
      (let [half-x-run (* (cos θ) (half line-length) *unit-size*)
            half-y-run (* (sin θ) (half line-length) *unit-size*)
            x1 (+ cx half-x-run)
            y1 (+ cy half-y-run)
            x2 (- cx half-x-run)
            y2 (- cy half-y-run)]
        (mark! cx cy)
        (line! "#000" 1 x1 y1 x2 y2))

      (if (seq remaining)
        (recur (- cx (* (cos θ*) *unit-size* (cos (/ π 6))))
               (- cy (* (sin θ*) *unit-size* (cos (/ π 6))))
               remaining)))))

(defn init-canvas!
  "Creates a new canvas/context pair given a canvas ID."
  [canvas-id]
  (let [element (.getElementById js/document canvas-id)
        ctx (.getContext element "2d")]
    {:element element
     :ctx ctx
     ; TODO: Don't hardcode these
     :width 800
     :height 600 }))

(defn draw-board!
  [board canvas-data]
  (binding [*canvas* (:element canvas-data)
            *ctx* (:ctx canvas-data)]
    (rect! bgColor 0 0 *canvas-width* *canvas-height*)
    (draw-axis-set! (/ π 6))
    ;(draw-axis-set! (* -1 (/ π 6)))
    (draw-axis-set! (/ π 2))
    ))
