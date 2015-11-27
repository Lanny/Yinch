(ns yinch.board)

(def axis-lengths
  "The number of edges along each of the axies."
  [3 6 7 8 9 8 9 8 7 6 3])

(def axis-staggers
  "The number of conter-axies that are skipped before an intersection."
  [1 0 0 0 0 1 1 2 3 4 6])

(def major-names
  ["1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12"])

(def minor-names
  ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k"])

(defn for-cell
  "Execute a callback for each valid cell on the board. Non-lazy."
  [cb]
  (doall
    (for [major (range 11)]
      (doall
        (for [minor (range (axis-staggers major)
                           (+ (axis-staggers major)
                              (axis-lengths major)
                              1))]
          (cb major minor))))))

(defn cell-valid?
  "Returns true if cell (major, minor) exists on a (platonic) Yinsh board.
  false otherwise."
  [major minor]
  (and (>= minor (axis-staggers major))
       (<= minor
           (+ (axis-lengths major) (axis-staggers major)))))

(defn check-cell
  "Throws an exception if cell (major, minor) does not exist on a Yinsh board."
  [major minor]
  (if (not (cell-valid? major minor))
    (throw 
      #?(:clj (Exception. (format "(%d, %d) is not a valid cell."
                            major minor))
         :cljs (str "(" major ", " minor ") is not a valid cell.")))))

(defn get-cell
  "Returns the cell stored in board at position (major, minor)."
  [board major minor]
  (get-in board [major minor]))

(defn assoc-cell
  "Returns board with the cell at (major, minor) set to value."
  [board major minor value]
  (check-cell major minor)
  (assoc-in board [major minor] value))

(defn make-board
  "Create a new board object."
  []
  (vec
    (for [major (range 11)]
      (vec
           (for [minor (range 11)]
             (if (and (>= minor (axis-staggers major))
                      (<= minor
                          (+ (axis-lengths major) (axis-staggers major))))
               {:type :empty
                :owner :nil}
               nil))))))
