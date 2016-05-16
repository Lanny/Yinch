(ns yinch.canvas-interface-3d
  (:require [yinch.glBridge :as glb]
            [cljs.core.async :as async]
            [dommy.core :refer-macros [sel sel1]]
            cljsjs.gl-matrix)
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:use [yinch.utils :only [pnr]]))

(defn consume-state!
  [view]
  (let [state-chan (async/chan)]
    (go
      (loop [new-state (async/<! state-chan)]
        (.offerState view new-state)
        (recur (async/<! state-chan))))
    state-chan))

(defn consume-status!
  [view]
  (let [status-chan (async/chan)]
    (go
      (loop [status (async/<! status-chan)]
        (.offerStatus view status)
        (recur (async/<! status-chan))))
    status-chan))

(defn pump-interaction!
  [view]
  (let [interaction-chan (async/chan)
        cb #(as-> % interaction
                 (js->clj interaction :keywordize-keys true)
                 (async/put! interaction-chan interaction))]
    (.registerInteractionCallback view cb)
    interaction-chan))

(defn start-rendering!
  ""
  [canvas-selector]
  (->> canvas-selector
       (sel1)
       (new glb/CanvasView)
       ((juxt consume-state! consume-status! pump-interaction!))))
