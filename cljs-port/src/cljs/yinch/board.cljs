(ns yinch.board)

(def axis-lengths
  "The number of edges along each of the axies"
  [3 6 7 8 9 8 9 8 7 6 3])

(def axis-staggers
  "The number of conter-axies that are skipped before an intersection"
  [1 0 0 0 0 1 1 2 3 4 6])

(def major-names
  ["1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12"])

(def minor-names
  ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k"])

(defn for-cell
  "Execute a callback for each valid cell on the board. Non-lazy"
  [cb]
  (doall
    (for [major (range 11)]
      (do
      (print (range (axis-staggers major)
                    (+ (axis-staggers major)
                       (axis-lengths major))))
      (doall
        (for [minor (range (axis-staggers major)
                           (+ (axis-staggers major)
                              (axis-lengths major)
                              1))]
          (cb major minor)))))))

