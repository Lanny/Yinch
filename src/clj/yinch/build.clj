(ns yinch.build
  (:require [cljs.build.api :as bapi]))

(def opts {
  :output-dir "resources/public/js"
  :output-to "resources/public/js/main.js"
  :source-map "resources/public/js/main.map.js"
  :libs ["src/js/"]
  :optimizations :whitespace
  :pretty-print true})

(defn -main []
  (bapi/build (bapi/inputs "/Users/lanny/Yinch/src/clj"
                           "/Users/lanny/Yinch/src/cljs") opts))
