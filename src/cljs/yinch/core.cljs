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
   (let [[state-chan
          status-chan
          interaction-chan] (ci/start-rendering! :#primaryCanvas)]
     (async/put! state-chan game)
     (go
       (loop [interaction (async/<! interaction-chan)
              current-state game]
         (let [[status new-state] (game/intrepret-move current-state
                                                       interaction)]
           (async/put! state-chan new-state)
           (async/put! status-chan status)
           (recur (async/<! interaction-chan) new-state)))))))
