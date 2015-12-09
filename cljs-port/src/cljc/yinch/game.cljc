(ns yinch.game
  (:require [clojure.set :as hset]
            [cemerick.url :as url]
            [yinch.board :as board])
  (:use [yinch.utils :only [other signum]]))

(defn- line-blocked?
  "Given a game (containing a start position on :highlight-cell) and a target
  cell, calculate if it is valid to hop a ring from :highlight-cell to target
  cell."
  [game [target-major target-minor]]
  (let [[source-major source-minor] (:highlight-cell game)
        board (:board game)
        major-step (signum (- target-major source-major))
        minor-step (signum (- target-minor source-minor))]
    (loop [major (+ source-major major-step)
           minor (+ source-minor minor-step)
           hopped false
           last-occupied false]
      (cond
        (= (get-in board [major minor :type]) :ring)
          true
        (and (= (get-in board [major minor :type]) :empty)
             (not last-occupied)
             hopped)
          true
        (and (= major target-major)
             (= minor target-minor))
          false
        :default
          (recur (+ major major-step)
                 (+ minor minor-step)
                 (or hopped (not= (get-in board [major minor :type]) :empty))
                 (not= (get-in board [major minor :type]) :empty))))))

(defn- flip-between
  "Takes a game map and returns a game map with all the tile-occupied cells
  between cell-1 and cell-2 of inverted color."
  [game cell-1 cell-2]
  (assoc game :board
    (reduce (fn [board [major minor]]
              (update-in board [major minor]
                (fn [cell]
                  (if (= (:type cell) :tile)
                    (assoc cell :color (other (:color cell)))
                    cell))))
            (:board game)
            (board/cells-between cell-1 cell-2))))

(def axial-steps
  "Major/minor pairs of step-increments that permit valid lines."
  [[1 0] [0 1] [1 1]])

(defn- cast-ray
  "Finds the furthest cell along a line (determined by step arg) from a test
  point that has a tile of the same color as the tile in the initial cell."
  [board [test-major test-minor] [major-step minor-step]]
    (let [color (get-in board [test-major test-minor :color])]
      (loop [major test-major
             minor test-minor
             extremum [test-major test-minor]]
        (cond
          (not (board/cell-valid? major minor))
            extremum
          (not= :tile (get-in board [major minor :type]))
            extremum
          (= color (get-in board [major minor :color]))
            (recur (+ major major-step)
                   (+ minor minor-step)
                   [major minor])
          :default
            extremum))))


(defn- find-runs*
  "Finds contiguous runs that intersect a single cell. Returns a set of such
  runs."
  [board [test-major test-minor]]
  ; Check each axis, major (numbers), minor (letters), and contra-diagonal
  ; (moving along both major and minor lines).
  (loop [[[major-step minor-step] & remaining-axes] axial-steps
         runs #{}]
          ; Find the cell with the maximal sum of major and minor values which
          ; is part of a contiguous run of tiles, the same color as [test-major
          ; test-minor] along this axis. Conceptually the top-right most cell
          ; of any run this test-cell could be in.
    (let [maximum (cast-ray board [test-major test-minor]
                            [major-step minor-step])
          ; Invert the step sign to find the cell with minimal major minor sum
          ; part of a contiguous run.
          minimum (cast-ray board [test-major test-minor]
                            [(* -1 major-step) (* -1 minor-step)])
          ; Distance along this axis from the max cell to the min cell. This
          ; math only works if both cells are valid and lie in a straight line.
          ; This is the length of the contiguous line containing the test cell.
          run-length (max (- (maximum 0) (minimum 0) -1)
                          (- (maximum 1) (minimum 1) -1))
          ; Since every run is 5 cells long, this is the number of runs
          ; containing the test cell. Subtract 4 because 5 - 5 = 0 when that's
          ; actually a valid 5-run
          run-count (- run-length 4)
          ; Roll the runs from this axis into the runs we've calculated for the
          ; other axes so far
          updated-runs (into runs
                             (for [offset (range (max 0 run-count))]
                                ; Start cell of the run
                               [[(+ (minimum 0) (* offset major-step))
                                 (+ (minimum 1) (* offset minor-step))]
                                ; End cell of the run, 4 cells later (for
                                ; an inclusive length between of 5).
                                [(+ (minimum 0) (* offset major-step)
                                    (* major-step 4))
                                 (+ (minimum 1) (* offset minor-step)
                                    (* minor-step 4))]]))]
      (if (seq remaining-axes)
        (recur remaining-axes updated-runs)
        updated-runs))))

(defn find-runs
  "Takes a list of cells that have changed recently and returns a set of length
  5 runs that include one of more of those cells. Runs are represented as
  3 vectors of the format [color [major-1 minor-1] [major-2 minor-2]]."
  [board cells-to-consider]
    (apply hset/union
           (map (partial find-runs* board) cells-to-consider)))

(defn clear-runs
  "Takes a game state and a list of ceels that have changed recently. Returns
  the a modified game with any simple (length of exactly 5) runs cleared and
  the appropriate state in the case of complex (multiple possible) runs."
  [game [from-major from-minor] [to-major to-minor]]
  (let [cells-to-consider (board/cells-between [from-major from-minor]
                                               [to-major to-minor])
        runs (find-runs (:board game) cells-to-consider)]))

(defn urlize
  "Returns a url for viewing a game state."
  ([game]
   (urlize game "http://localhost:3000"))
  ([game base]
   (->> game
        (prn-str)        ; to edn
        (url/url-encode) ; to something we can throw in a hash
        (assoc (url/url base "index.html")
               :anchor)  ; to composed url
        (str))))         ; to string

(defn new-game
  "Creates a new game map in the initial state (ring placement, white starts)."
  []
  {:board (board/make-board)
   :phase :ring-placement
   :turn :white
   :rings-placed 0
   :highlight-cell nil
   :rings-remaining {:black 5
                     :white 5}})

(defn place-ring
  [game player major minor]
  (let [cell (board/get-cell (:board game) major minor)]
    (if (not= (:type cell) :empty)
      [{:status :failure
        :reason "You can not place a ring in an occupied cell."}
       game]
      (let [updated-game (-> game
                             (update-in [:rings-placed] inc) 
                             (assoc-in [:board major minor] {:type :ring
                                                             :color player}))]
        (if (>= (:rings-placed updated-game) 10)
          [{:status :success}
           (-> updated-game
               (assoc :phase :ring-pick)
               (assoc :turn :black))]
          [{:status :success}
           (-> updated-game
               (assoc :turn (other player)))])))))

(defn pick-ring
  [game player major minor]
  (let [cell (board/get-cell (:board game) major minor)]
    (if (not= cell {:type :ring :color player})
      [{:status :failure
        :reason "You can only move rings of your own color."}
       game]
      [{:status :success}
       (-> game
           (assoc :highlight-cell [major minor])
           (assoc :phase :ring-drop))])))

(defn drop-ring
  [game player major minor]
  (let [[from-major from-minor] (:highlight-cell game)]
    (if (or (not (board/line-valid? [from-major from-minor] [major minor]))
            (not= (get-in game [:board major minor :type]) :empty)
            (line-blocked? game [major minor]))
      [{:status :failure
        :reason "Not a valid move."}
       game]
      [{:status :success}
       (-> game
           (update-in [:turn] other)
           (assoc :highlight-cell nil)
           (assoc :phase :ring-pick)
           (flip-between [from-major from-minor] [major minor])
           (assoc-in [:board from-major from-minor :type] :tile)
           (assoc-in [:board major minor] {:type :ring
                                           :color (:turn game)}))])))

(defn intrepret-click
  "Takes a game, player indication, and grid position and returns a pair
  [status game-map] that represents the result of applying the move (if the
  move was valid or not, if not why) and the state of the game after the move."
  [game player major minor]
  (cond
    (not (board/cell-valid? major minor))
      [{:status :failure
        :reason "Not a valid board position."}
       game]
    (not= player (:turn game))
      [{:status :failure
        :reason "Not your turn."}
       game]
    (= (:phase game) :ring-placement)
      (place-ring game player major minor)
    (= (:phase game) :ring-pick)
      (pick-ring game player major minor)
    (= (:phase game) :ring-drop)
      (drop-ring game player major minor)
    :default
      [{:status :error
        :reason "Game appears to be in an invalid state."
        :game-phase (:phase game)}
       nil]))
  
