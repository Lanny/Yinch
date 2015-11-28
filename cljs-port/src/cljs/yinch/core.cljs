(ns yinch.core
  (:require [cljs.reader :as reader]
            [cemerick.url :as url]
            [yinch.canvas-interface :as ci]
            [yinch.game :as game])
  (:use [yinch.utils :only [pnr]]))

(defn ^:export start
  ""
  ([]
   (let [init-hash (aget js/document "location" "hash")]
     (if (empty? init-hash)
       (start (game/new-game))
       (->> init-hash
            (rest)
            (apply str)
            (url/url-decode)
            (reader/read-string)
            (start)))))
  ([game]
    (let [canvas-data (ci/init-canvas! "primaryCanvas")]
      (ci/draw-board! game canvas-data)
      (js/console.log "bla!!"))))
