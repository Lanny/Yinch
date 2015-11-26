(ns yinch.canvas-interface)

(def bgColor "#888")

(def ^:dynamic canvas nil)
(def ^:dynamic ctx nil)
(def ^:dynamic canvas-width 800)
(def ^:dynamic canvas-height 600)

(defn- rect
  "Draw a solid colored rectangle between top left point (x1, y1) and bottom
  right point (x2, y2)."
  [color x1 y1 x2 y2]
  (aset ctx "fillStyle" color)
  (.fillRect ctx 0 0 canvas-width canvas-height))

(defn init-canvas!
  "Creates a new canvas/context pair given a canvas ID."
  [canvas-id]
  (let [element (.getElementById js/document canvas-id)
        ctx nil ];#_(.getContext element "2d")]
    {:element element
     :ctx ctx
     ; TODO: Don't hardcode these
     :width 800
     :height 600 }))

(defn draw-board!
  [board canvas-data]
  (with-bindings {#'canvas (:element canvas-data)
                  #'ctx (:ctx canvas-data)}
    (rect bgColor 0 0 canvas-width canvas-height)))

(js/console.log "Test, 123")
