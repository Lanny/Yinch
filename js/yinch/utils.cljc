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
  #?(:clj 
      (let [raw (Math/signum (float x))
            xt (type x)]
        (cond 
          (= xt Long) (long raw)
          (= xt Integer) (int raw)
          (= xt Float) raw
          (= xt Double) (double raw)))
     :cljs (.sign js/Math x)))

(defn half [x] (/ x 2))

(def other {:black :white :white :black})

(defn pnr
  "Prints x argument and returns it unmodified. Useful for inspecting
  intermediary values in long arrow chains."
  [x]
  (println x)
  x)



