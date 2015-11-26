(ns yinch.canvas-interface)

(def bgColor "#888")

(def ^:dynamic *canvas* nil)
(def ^:dynamic *ctx* nil)
(def ^:dynamic *canvas-width* 800)
(def ^:dynamic *canvas-height* 600)

(defn- rect
  "Draw a solid colored rectangle between top left point (x1, y1) and bottom
  right point (x2, y2)."
  [color x1 y1 x2 y2]
  (aset *ctx* "fillStyle" color)
  (.fillRect *ctx* x1 y1 x2 y2))

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
    (rect bgColor 0 0 *canvas-width* *canvas-height*)))
