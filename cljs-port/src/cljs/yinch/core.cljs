(ns yinch.core
  (:require [yinch.canvas-interface :as ci]))

(let [canvas-data (ci/init-canvas! "primaryCanvas")]
  (ci/draw-board! nil canvas-data)
  (js/console.log "bla"))
