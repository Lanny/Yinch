(ns yinch.canvas-interface-3d
  (:require [yinch.glBridge :as glb])
  (:require-macros [dommy.core :refer [sel sel1]])
  (:use [yinch.utils :only [pnr]]))

(defn init-gl
  ""
  [canvas]
  (let [gl (.getContext canvas "experimental-webgl")]
    (aset gl "viewportWidth" (aget canvas "width"))
    (aset gl "viewportHeight" (aget canvas "height"))
    gl))

(defn start-rendering!
  ""
  [canvas-selector]
  ;(let [gl (init-gl (sel1 canvas-selector))]
  (let [view (glb/CanvasView)]
    [nil nil nil]))
