(ns yinch.core
  (:require [cljs.reader :as reader]
            [cljs.core.async :as async]
            [cemerick.url :as url]
            [yinch.canvas-interface :as ci]
            [yinch.game :as game])
  (:require-macros [cljs.core.async.macros :refer [go]])
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
   (let [[state-chan interaction-chan] (ci/start-rendering!)]
     (async/put! state-chan game)
     (go
       (loop [interaction (async/<! interaction-chan)
              current-state game]
         (case (:type interaction)
           :grid-click
             (do
               (let [[status new-state] (apply game/intrepret-click
                                               current-state
                                               (:click-info interaction))]
                 (async/put! state-chan new-state)
                 (recur (async/<! interaction-chan) new-state)))
           (print "Unexpected interaction:"  interaction)))))))
