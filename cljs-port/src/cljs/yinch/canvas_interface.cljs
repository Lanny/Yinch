(ns yinch.canvas-interface)

(enable-console-print!)

(def bgColor "#888")

; Just for ease of use
(def π (aget js/Math "PI"))
(defn- cos [x] (.cos js/Math x))
(defn- sin [x] (.sin js/Math x))
(defn- abs [x] (.abs js/Math x))
(defn- half [x] (/ x 2))

(def ^:dynamic *canvas* nil)
(def ^:dynamic *ctx* nil)
(def ^:dynamic *label* true)
(def ^:dynamic *canvas-width* 800)
(def ^:dynamic *canvas-height* 600)
(def ^:dynamic *unit-size* (/ (min *canvas-width* *canvas-height*) 9))

(def axis-lengths
  "The number of points along each of the axies"
  [3 6 7 8 9 8 9 8 7 6 3])

(def major-names
  ["1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12"])

(def minor-names
  ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j0" "j" "k"])

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

(defn- text!
  ([x y text] (text! x y text "#000"))
  ([x y text color] (text! x y text color 12))
  ([x y text color size] (text! x y text color size "sans-serif"))
  ([x y text color size style]
   (aset *ctx* "fillStyle" color)
   (aset *ctx* "font" (str size "% " style))
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
           [line-length & remaining] axis-lengths]
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

(defn- grid->screen
  "Takes a grid [major minor] (number, letter) coord pair and returns a screen
  [x y] position"
  [[major minor]]
  (let [center-x (half *canvas-width*)
        center-y (half *canvas-height*)
        l2l-dist (* (cos (/ π 6)) *unit-size*)
        d-major (- major 5)
        d-minor (- minor 5)]
    (print d-major d-minor)
    [(+ center-x 
        (* d-minor l2l-dist))
     (- center-y
        (* d-major *unit-size*)
        (* (abs d-minor) (sin (/ π 6)) *unit-size*))]))

(defn- draw-pieces!
  ""
  []
  (apply mark! (grid->screen [1 1]))
  (apply mark! (grid->screen [5 5]))
  (let [[x y] (grid->screen [1 1])]
    (print "2 a -> " x y))
  (doall
    (for [major axis-lengths
          minor axis-lengths]
      (let [[x y] nil];(grid->screen [major minor])]
        #_(mark! x y)))))

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
  [board canvas-data]
  (binding [*canvas* (:element canvas-data)
            *ctx* (:ctx canvas-data)]
    (rect! bgColor 0 0 *canvas-width* *canvas-height*)
    (draw-axis-set! (/ π 6))
    (draw-axis-set! (* -1 (/ π 6)))
    (draw-axis-set! (/ π 2))
    (draw-pieces!)
    ))
