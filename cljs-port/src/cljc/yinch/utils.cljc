(ns yinch.utils)

(def π 
  #?(:clj Math/PI
     :cljs (aget js/Math "PI")))
(defn cos [x]
  #?(:clj (Math/cos x)
     :cljs (.cos js/Math x)))
(defn sin [x]
  #?(:clj (Math/sin x)
     :cljs (.sin js/Math x)))
(defn abs [x]
  #?(:clj (Math/abs x)
     :cljs (.abs js/Math x)))

(defn signum [x]
  #?(:clj (Math/signum x)
     :cljs (.sign js/Math x)))

(defn half [x] (/ x 2))

(def other {:black :white :white :black})


