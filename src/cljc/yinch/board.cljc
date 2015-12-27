(ns yinch.board
  (:use [yinch.utils :only [signum]]))

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

(def cells
  (reduce (partial apply conj)
          (for-cell (fn [maj mn] [maj mn]))))

(defn cell-valid?
  "Returns true if cell (major, minor) exists on a (platonic) Yinsh board.
  false otherwise."
  [major minor]
  (and (contains? axis-staggers major)
       (contains? axis-staggers minor)
       (>= minor (axis-staggers major))
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

(defn line-valid?
  "Returns true if there is a straight line on a Yinch board between the given
  pair of cells designated by [major minor] pairs."
  [start end]
  (let [[start-major start-minor] start
        [end-major end-minor] end
        major-delta (- end-major start-major)
        minor-delta (- end-minor start-minor)]
    (and (apply cell-valid? start) ; Gotta be valid cels
         (apply cell-valid? end)
         (not (= start end)) ; A line must have a length
         (or ; Traversal may be along a major/minor axis (first case) or
             ; a contra-axis (second case)
           (or (zero? major-delta)
               (zero? minor-delta))
           (and (= major-delta minor-delta) ; No possible uneven contra-diag move
                (= (signum major-delta) (signum minor-delta)))))))

(defn cells-between
  "Returns a list of cells that lie between from and to cells or nil if there
  is no line between them."
  [from to]
  (if-not (line-valid? from to)
    nil
    (let [[from-major from-minor] from
          [to-major to-minor] to
          major-step (signum (- to-major from-major))
          minor-step (signum (- to-minor from-minor))]
      (loop [major from-major
             minor from-minor
             cells '()]
        (if (and (= major to-major)
                 (= minor to-minor))
          (conj cells [major minor])
          (recur (+ major major-step)
                 (+ minor minor-step)
                 (conj cells [major minor])))))))

(defn flip-cell
  "Returns the board with the cell at (major, minor) set to the opposite color.
  It is an error to flip a cell of any type other than :tile"
  [board major minor]
  (check-cell major minor)
  (let [row (board major)
        cell (row minor)
        cell-type (:type cell)]
    (if (not= cell-type :tile)
      #?(:clj (Exception.
                (format "(%d, %d) is of type :%s, must be of type :tile."
                  major minor (str cell-type)))
         :cljs (str "(" major ", " minor ") is of type :" cell-type
                    "must be of type :tile."))
      (->> (if (= (:color cell) :white) :black :white)
           (assoc cell :color)
           (assoc row minor)
           (assoc board major)))))

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
