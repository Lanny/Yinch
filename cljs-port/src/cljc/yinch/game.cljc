(ns yinch.game
  (:require [yinch.board :as board]
            [cemerick.url :as url])
  (:use [yinch.utils :only [other]]))

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
       (assoc game :highlight-cell [major minor])])))

(defn drop-ring [game player major minor] nil)

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
      [{:status :failed
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
  
