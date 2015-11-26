(ns yinch.utils)

(def π (aget js/Math "PI"))
(defn cos [x] (.cos js/Math x))
(defn sin [x] (.sin js/Math x))
(defn abs [x] (.abs js/Math x))
(defn half [x] (/ x 2))


