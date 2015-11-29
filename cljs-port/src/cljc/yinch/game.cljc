(ns yinch.game
  (:require [yinch.board :as board]
            [cemerick.url :as url])
  (:use [yinch.utils :only [other signum]]))

(defn- line-blocked?
  "Given a game (containing a start position on :highlight-cell) and a target
  cell, calculate if it is valid to hop a ring from :highlight-cell to target
  cell."
  [game [target-major target-minor]]
  (let [[source-major source-minor] (:highlight-cell game)
        board (:board game)
        major-step (signum (- target-major target-minor))
        minor-step (signum (- target-major target-minor))]
    (loop [major source-major
           minor source-minor
           hopped false
           last-occupied false]
      (cond
        (= (get-in board [major minor :type]) :ring)
          false
        (and (not= (-> board major minor :type) :tile)
             (not last-occupied)
             hopped)
          false
        :default
          (recur (+ major major-step)
                 (+ minor minor-step)
                 (or hopped (not= (-> board major minor :type) :empty))
                 (not= (-> board major minor :type) :empty))))))

(defn urlize
  "Returns a url for viewing a game state."
  ([board]
   (urlize board "http://localhost:3000"))
  ([board base]
   (->> board
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
               (assoc :turn player))]
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
  
