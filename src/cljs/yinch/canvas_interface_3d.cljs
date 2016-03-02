(ns yinch.canvas-interface-3d
  (:require [goog.math :as math])
  (:use [yinch.utils :only [pnr cos sin π]]))

(defn vec3
  [x y z]
  (new math/Matrix (array (array x y z)))) 

(defn mat4
  ([x1  x2  x3  x4
    x5  x6  x7  x8
    x9  x10 x11 x12
    x13 x14 x15 x16]
   (new math/Matrix (array
                    (array x1  x2  x3  x4)
                    (array x5  x6  x7  x8)
                    (array x9  x10 x11 x12)
                    (array x13 x14 x15 x16))))
  ([r1 r2 r3 r4]
   (new math/Matrix (array
                    (apply array r1)
                    (apply array r2)
                    (apply array r3)
                    (apply array r4)))))

(defn scale-mat4
  ([s] (mat4 s 0 0 0
             0 s 0 0
             0 0 s 0
             0 0 0 1))
  ([x y z] (mat4 x 0 0 0
                 0 y 0 0
                 0 0 z 0
                 0 0 0 1)))

(defn multEach
  ""
  [coll mat]
  (map #(.multipy mat %) coll))

(defn ring-points
  "Returns n equidistant points in the xy plane that are distance 1 from the
  origin."
  [n]
  (vec
    (for [vert-idx (range n)]
      (let [ang (* 2 π (/ vert-idx n))
            x (cos ang)
            y (sin ang)]
        (vec3 x y 0)))))

(defn form-plate
  "Returns a vector of points forming a flat plate in the xy plane centered
  on the origin when rendered as a tirangle strip."
  [resolution]
  (let [points (ring-points resolution)
        mid-point (quot resolution 2)
        left-half (take mid-point points)
        right-half (take mid-point (reverse points))
        combined (vec (interleave left-half right-half))]
    (if (odd? resolution)
      (conj combined (points mid-point))
      combined)))

(defn form-tile*
  "Returns a vector of verticies in a triangle strip forming a cylinder with
  radius and height 1 centered on the origin"
  [resolution]
  (let [top-mat (mat4 [1 0 0 0]
                      [0 1 0 0]
                      [0 0 1 0.5]
                      [0 0 0 1])
        bottom-mat (mat4 [1 0 0 0]
                         [0 1 0 0]
                         [0 0 1 -0.5]
                         [0 0 0 1])

        plate (form-plate resolution)
        top-plate (multEach plate top-mat)
        bottom-plate (reverse (multEach plate bottom-mat))

        ring (ring-points resolution)
        top-ring (multEach ring top-mat)
        bottom-ring (multEach ring bottom-mat)
        hull (-> (interleave top-ring bottom-ring)
                 (conj (first top-ring))
                 (conj (first bottom-ring)))]
    (concat top-plate hull bottom-plate)))

(defn form-tile
  "Returns a vector of verticies in a triangle strip forming a cylinder."
  [radius height resolution]
  (-> resolution
      form-tile*
      (multEach (scale-mat4 radius radius height))))

(defn draw-scene!
  ""
  [gl game])

(defn start-rendering!
  ""
  [canvas-selector]
  [nil nil nil])
