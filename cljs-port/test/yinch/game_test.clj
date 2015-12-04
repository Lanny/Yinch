(ns yinch.game-test
  (:require [clojure.test :refer :all]
            [yinch.board :as board]
            [yinch.board-test :refer [assert-cell]]
            [yinch.game :refer :all]
            [clojure.pprint :refer [pprint]]))

(defn play-script
  ""
  ([moves]
   (play-script (new-game) moves))
  ([game moves]
   (play-script game moves true))
  ([game moves halt-on-fail]
     (println "juju")
   (loop [game game
          [[player major minor] & moves] moves]
     (let [[status game] (intrepret-click game player major minor)]
       (cond
         (and halt-on-fail
              (not= (:status status) :success))
           [status game]
         (seq moves)
           (recur game moves)
         true
          [status game])))))

(deftest test-new-game
  "Kind of a dumb test but w/e."
  (let [game (new-game)]
    (is (not (nil? (:board game))))
    (is (:phase game) :ring-placement)
    (is (:turn game) :white)))

(deftest test-find-runs
  (let [board (-> (board/make-board)
                  (assoc-in [4 2] {:type :tile :color :white})
                  (assoc-in [4 3] {:type :tile :color :white})
                  (assoc-in [4 4] {:type :tile :color :white})
                  (assoc-in [4 5] {:type :tile :color :white})
                  (assoc-in [4 6] {:type :tile :color :white})
                  (assoc-in [4 7] {:type :tile :color :white})
                  (assoc-in [7 2] {:type :tile :color :black})
                  (assoc-in [7 3] {:type :tile :color :black})
                  (assoc-in [7 4] {:type :tile :color :black})
                  (assoc-in [7 5] {:type :tile :color :white})
                  (assoc-in [7 6] {:type :tile :color :black}))
        runs1 (find-runs board [[4 2] [4 3] [4 4] [4 5] [4 6] [4 7]])
        runs2 (find-runs board [[4 6]])
        runs3 (find-runs board [[7 3] [7 4]])]
    (is (= runs1 #{[[4 2] [4 6]] [[4 3] [4 7]]}))
    (is (= runs2 #{[[4 2] [4 6]] [[4 3] [4 7]]}))
    (is (= runs3 #{}))))

(deftest test-integration
  (let [script-1 [[:white 6 6]   ; Throw down two rings each.
                  [:black 5 2]
                  [:white 6 7]
                  [:black 7 6]]

        script-2b1 [[:white 6 8] ; All rings get placed, no violations.
                    [:black 2 2]
                    [:white 2 3]
                    [:black 2 4]
                    [:white 2 5]
                    [:black 2 6]]
        script-2b2 [[:white 6 8]  ; Black tries to take a white occupied space.
                    [:black 6 6]] 
        script-2b3 [[:white 6 6]] ; White tries to take a space twice.

        script-3b1 [[:black 2 2]] ; Pick a ring, don't drop it.
        script-3b2 [[:black 6 6]] ; Pick white's ring.
        script-3b3 [[:black 9 5]] ; Pick an empty position.
        script-3b4 [[:black 2 2]  ; Pick a ring. Drop it one cell away.
                    [:black 3 2]]
        script-3b5 [[:black 2 2]  ; Pick a ring. Drop it two cells away.
                    [:black 4 2]]
        script-3b6 [[:black 2 4]  ; Pick a ring. Move contra-diag
                    [:black 4 6]]
        script-3b7 [[:black 2 4]  ; Pick a ring. Drop it on an opponent's ring.
                    [:black 6 8]]
        script-3b8 [[:black 2 4]  ; Pick a ring. Drop it beyond an opponent's
                    [:black 6 8]] ; ring.

        [status-1 game-1] (play-script script-1)
        [status-2b1 game-2b1] (play-script game-1 script-2b1)
        [status-2b2 game-2b2] (play-script game-1 script-2b2)
        [status-2b3 game-2b3] (play-script game-1 script-2b3)
        [status-3b1 game-3b1] (play-script game-2b1 script-3b1)
        [status-3b2 game-3b2] (play-script game-2b1 script-3b2)
        [status-3b3 game-3b3] (play-script game-2b1 script-3b3)
        [status-3b4 game-3b4] (play-script game-2b1 script-3b4)
        [status-3b5 game-3b5] (play-script game-2b1 script-3b5)
        [status-3b6 game-3b6] (play-script game-2b1 script-3b6)
        [status-3b7 game-3b7] (play-script game-2b1 script-3b7)
        [status-3b8 game-3b8] (play-script game-2b1 script-3b8)]
    (is (= (:status status-1) :success))
    (is (= (:phase game-1) :ring-placement))
    (is (= (:turn game-1) :white))
    (is (= (:rings-placed game-1) 4))

    (is (= (:status status-2b1) :success))
    (is (= (:phase game-2b1) :ring-pick))
    (is (= (:turn game-2b1) :black))
    (is (= (:rings-placed game-2b1) 10))

    (is (= (:status status-2b2) :failure))
    (is (= (:turn game-2b2) :black))
    (is (= (:rings-placed game-2b2) 5))

    (is (= (:status status-2b3) :failure))
    (is (= (:turn game-2b3) :white))
    (is (= (:rings-placed game-2b3) 4))

    (is (= (:status status-3b1) :success))
    (is (= (:highlight-cell game-3b1) [2 2]))
    ; Board should not have changed as a result of a ring pick.
    (is (= (:board game-2b1) (:board game-3b1)))

    (is (= (:status status-3b2) :failure))
    (is (= (:turn game-3b2) :black))
    (is (= (:status status-3b3) :failure))
    (is (= (:turn game-3b3) :black))

    (is (= (get-in game-3b4 [:board 2 2 :type]) :tile))
    (is (= (get-in game-3b4 [:board 2 2 :color]) :black))
    (is (= (get-in game-3b4 [:board 3 2 :type]) :ring))
    (is (= (get-in game-3b4 [:board 3 2 :color]) :black))

    (is (= (get-in game-3b5 [:board 2 2 :type]) :tile))
    (is (= (get-in game-3b5 [:board 2 2 :color]) :black))
    (is (= (get-in game-3b5 [:board 4 2 :type]) :ring))
    (is (= (get-in game-3b5 [:board 4 2 :color]) :black))

    (is (= (get-in game-3b6 [:board 2 4 :type]) :tile))
    (is (= (get-in game-3b6 [:board 2 4 :color]) :black))
    (is (= (get-in game-3b6 [:board 4 6 :type]) :ring))
    (is (= (get-in game-3b6 [:board 4 6 :color]) :black))

    (is (= (:status status-3b7) :failure))

    (is (= (:status status-3b8) :failure))))
