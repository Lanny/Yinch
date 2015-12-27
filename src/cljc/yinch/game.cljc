(ns yinch.game
  (:require [clojure.set :as hset]
            [cemerick.url :as url]
            [yinch.board :as board])
  (:use [yinch.utils :only [other signum abs]]))

(declare clear-runs)

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

(defn- best-run
  "Returns the member of runs whose center cell is closest to (major, minor) or
  nil if there there is a tie or or runs is empty."
  [runs major minor]
  (let [sorted-runs (->> runs
                         ; create a seq of [distance run] pairs
                         (map (fn [[[maj1 mn1] [maj2 mn2]]]
                                (let [maj-center (/ (+ maj1 maj2) 2)
                                      mn-center (/ (+ mn1 mn2) 2)]
                                  [(+ (abs (- maj-center major))
                                      (abs (- mn-center minor)))
                                   [[maj1 mn1] [maj2 mn2]]])))
                         ; and sort it
                         (sort-by first))
        [best-dist best-run] (first sorted-runs)]
    (if (= best-dist (-> sorted-runs second first))
      nil
      best-run)))

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

(defn mutually-exclusive?
  "Returns true if no two members of `runs` contain the same cell."
  [runs]
  ; Find the set of all cells contained in all runs
  (let [run-membership (reduce (fn [acc [from to]]
                                 (->> (board/cells-between from to)
                                      (into #{})
                                      (hset/union acc)))
                               #{} runs)]
    ; If the n runs are mutually execlusive then there should be exactly 5*n
    ; cells in the union of all the runs cell memberships
    (= (count run-membership)
       (* 5 (count runs)))))

(defn- check-victory
  "Takes a game and a player. Returns the game in a victory state if the player
  has won, otherwise returns the game unchanged."
  [game player]
  (let [ring-count (player (:rings-remaining game))
        effective-ring-count (if (and (= (:turn game) player)
                                      (= (:phase game) :ring-removal))
                               (dec ring-count)
                               ring-count)]
    (if (< effective-ring-count 3)
      (-> game
          (assoc :phase :victory)
          (assoc :winner player))
      game)))

(defn- clear-adtl-runs
  ""
  [game]
  (println "haz")
  (clear-runs game board/cells))

(defn- clear-run
  "Takes a game and a run. Returns the game with the specified run cleared from
  the board and in the ring-removal state for the appropriate player. If removal
  of the run produces a victory condition, return the game in that state."
  ([game run]
   (clear-run game run nil))
  ([game [run-start run-end] click-position]
   (let [run-color (get-in game [:board (run-start 0) (run-start 1) :color])]
     (clear-adtl-runs
       (reduce (fn [game [major minor]]
                 (assoc-in game [:board major minor] {:type :empty}))
               (-> game
                   (assoc :turn run-color)
                   (assoc :phase :ring-removal)
                   (update-in [:history]
                     #(conj % {:action :clear-run
                               :player (:turn game)
                               :run-start run-start
                               :run-end run-end
                               :click-position click-position})))
               (board/cells-between run-start run-end))))))

(defn- clear-runs-for-player
  "Clears a set of runs belonging to a given player."
  [game player runs]
  (let [first-run (first runs)]
    (cond
      ; no runs exist, take no action. Shouldn't actually come up.
      (= (count runs) 0)
        game
      ; we don't require user input to clear the current set of possible runs
      (mutually-exclusive? runs)
        (-> game
            (clear-run first-run)
            (check-victory player))
      ; we do need user input, put the game into a state for user selection
      :default
        (-> game
            (assoc :phase :run-pick)
            (assoc :turn player)
            (check-victory player)))))

(defn clear-runs
  "Takes a game state and a list of cells that have changed recently."
  [game cells-to-consider]
  (let [runs (find-runs (:board game) cells-to-consider)
        _ (println cells-to-consider)
        _ (println runs)
        p-runs (group-by (fn [[[maj mn] & _]]
                           (get-in game [:board maj mn :color]))
                         runs)
        turn (:turn game)
        other-turn (other turn)]
    (cond
      (-> p-runs turn seq)
        (clear-runs-for-player game turn (-> turn p-runs))
      (-> p-runs other-turn seq)
        (clear-runs-for-player game other-turn (-> other-turn p-runs))
      :default
        game)))

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

;24.xg5-g9xa5;d3-b3
;  4  8 12 16    24
; 5 * 3 + 3 + 9 = 26

(defn- gipf-pad
  [s]
  (apply str s
         (map (constantly " ")
              (range (- 26 (count s))))))

(defn- gipf-sep
  [move]
  (if (= (:player move) :white) "\t" "\n"))

(comment (defn- gipf-gen-entry-text
  [moves]
  (case (:action moves)
    :place-ring
      (str (board/major-names (get-in m [:position 0]))
           (board/minor-names (get-in m [:position 1])))
    nil)))

;(defn game->gipf-notation
;  [{history :history}]
;  (loop [[m & ms] history
;         idx 0
;         tokens (list "\n" (gipf-pad "Black")
;                      "\t" (gipf-pad "White"))]
;    (if (nil? m)
;      (apply str (reverse tokens))
;      (recur ms
;             (inc idx)
;             (conj tokens
;                   (if (= (:player (first ms)) (:player m)) 1 2 ))))))

(defn game->script
  [{history :history}]
  (into []
        (reduce (fn [script move]
                  (case (:action move)
                    :place-ring
                      (conj script
                            [(:player move)
                             ((:position move) 0)
                             ((:position move) 1)])
                    :ring-move
                      (conj script
                            [(:player move) ((:stop move) 0) ((:stop move) 1)]
                            [(:player move) ((:start move) 0) ((:start move) 1)])
                    :clear-run
                      (if (nil? (:click-position move))
                        script
                        (conj script
                              [(:player move)
                               ((:click-position move) 0)
                               ((:click-position move) 1)]))
                    :remove-ring
                      (conj script
                            [(:player move)
                             ((:ring-position move) 0)
                             ((:ring-position move) 1)])))
                nil
                history)))

(defn new-game
  "Creates a new game map in the initial state (ring placement, white starts)."
  ([]
   (new-game true))
  ([track-history]
    {:board (board/make-board)
     :phase :ring-placement
     :turn :white
     :rings-placed 0
     :highlight-cell nil
     :rings-remaining {:black 5
                       :white 5}
     :track-history track-history
     :history nil}))

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
                                                             :color player}))
            status {:status :success
                    :history (list {:action :place-ring
                                    :position [major minor]
                                    :player player})}]
        (if (>= (:rings-placed updated-game) 10)
          [status
           (-> updated-game
               (assoc :phase :ring-pick)
               (assoc :turn :black))]
          [status
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
           (assoc-in [:board major minor] {:type :ring :color (:turn game)})
           (update-in [:history] #(conj % {:action :ring-move
                                           :player player
                                           :start (:highlight-cell game)
                                           :stop [major minor]}))
           (clear-runs (board/cells-between [from-major from-minor]
                                            [major minor])))])))
(defn pick-run
  [game player major minor]
  (let [run (best-run (find-runs (:board game) [[major minor]]) major minor)]
    (if (nil? run)
      [{:status :failure
        :reason "That cell isn't a part of any run."}
       game]
      [{:status :success}
       (clear-run game run [major minor])])))

(defn remove-ring
  [game player major minor]
  (let [cell (board/get-cell (:board game) major minor)]
    (cond
      (not= (:type cell) :ring)
        [{:status :failure
          :reason "You must pick a ring to remove from the board."}
         game]
      (not= (:color cell) player)
        [{:status :failure
          :reason "You must pick a ring of your own color to remove."}
         game]
      :default
        [{:status :success
          :history (list {:action :remove-ring
                          :player player
                          :ring-position [major minor]})}
         (-> game
             (assoc-in [:board major minor] {:type :empty})
             (update-in [:rings-remaining player] dec)
             (assoc :turn (other player))
             (assoc :phase :ring-pick))])))

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
    (= (:phase game) :run-pick)
      (pick-run game player major minor)
    (= (:phase game) :ring-removal)
      (remove-ring game player major minor)
    :default
      [{:status :error
        :reason "Game appears to be in an invalid state."
        :game-phase (:phase game)}
       nil]))
  
(defn intrepret-move
  [game move]
  {:post [(if (= (get-in % [0 :status]) :success)
            true
            (= (% 1) game))]}
  (let [[status new-game] (case (:type move)
                            :grid-click
                              (apply intrepret-click game (:click-info move)))]
    (if (and (:track-history game)
             (= (:status status) :success))
      [status
       (update-in new-game [:history] #(apply conj % (:history status)))]
      [status new-game])))
