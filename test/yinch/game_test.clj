(ns yinch.game-test
  (:require [clojure.test :refer :all]
            [yinch.board :as board]
            [yinch.board-test :refer [assert-cell]]
            [yinch.game :refer :all]
            [clojure.pprint :refer [pprint]]))

(defn play-script
  ""
  ([moves]
   (play-script (new-game true) moves))
  ([game moves]
   (play-script game moves true))
  ([game moves halt-on-fail]
   (loop [game game
          [[player major minor] & remaining-moves] moves]
     (let [[status game] (intrepret-move game {:type :grid-click
                                               :click-info [player major minor]})]
       (cond
         (and halt-on-fail
              (not= (:status status) :success))
           [status game]
         (seq remaining-moves)
           (recur game remaining-moves)
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

(deftest test-mutually-execlusive?
  (is (= (mutually-exclusive? #{[[4 2] [4 6]]}) true)) ; Single run
  (is (= (mutually-exclusive? #{[[4 3] [4 7]]}) true)) ; same

  ; Now a length-6 run, definitionally non-mutually execlusive
  (is (= (mutually-exclusive? #{[[4 2] [4 6]] [[4 3] [4 7]]}) false))

  ; And a cross-run (two length-5 runs about different axes with one shared
  ; tile).
  (is (= (mutually-exclusive? #{[[4 2] [4 6]] [[1 3] [5 1]]}) false)))

(deftest test-6-run
  (let [script [[:white 5 5] [:black 10 9] [:white 5 4] [:black 10 8]
                [:white 5 6] [:black 10 7] [:white 5 3] [:black 10 6]
                [:white 5 7] [:black 9 9] [:black 9 9] [:black 9 10]
                [:white 5 6] [:white 6 7] [:black 10 9] [:black 9 8]
                [:white 5 4] [:white 4 3] [:black 10 8] [:black 9 7]
                [:white 5 7] [:white 4 6] [:black 10 7] [:black 9 6]
                [:white 5 3] [:white 5 2] [:black 9 10] [:black 8 10]
                [:white 5 2] [:white 5 1] [:black 9 8] [:black 8 8]
                [:white 5 5] [:white 6 6]]
        [game status] (play-script script)
        [g-f6 s-f6] (play-script [[:white 5 5]])
        [g-e6 s-e6] (play-script [[:white 5 4]])
        [g-c6 c-c6] (play-script [[:white 5 2]])
        [g-h6 c-h6] (play-script [[:white 5 8]])]
    (is (= (:status status) :success))
    (is (= (:phase game) :run-pick))
    (is (= (:turn game) :white))
    (is (= (get-in game [:board 5 5 :type]) :tile))
    (is (= (get-in game [:board 6 6 :type]) :ring))

    (is (= (:status s-f6) :success))
    (is (= (:phase g-f6) :ring-pick))
    (is (= (:turn g-f6) :black))
    (is (= (get-in g-f6 [:board 5 5 :type]) :empty))
    (is (= (get-in g-f6 [:board 5 2 :type]) :tile))

    (is (= g-f6 g-h6))

    (is (= (:status s-e6) :success))
    (is (= (:phase g-e6) :ring-pick))
    (is (= (:turn g-e6) :black))
    (is (= (get-in g-e6 [:board 5 2 :type]) :empty))
    (is (= (get-in g-e6 [:board 5 5 :type]) :tile))

    (is (= g-e6 g-c6))))

(deftest test-cross-run
  (let [script [[:white 5 5] [:black 10 9] [:white 5 4] [:black 10 8]
                [:white 5 6] [:black 10 7] [:white 5 3] [:black 10 6]
                [:white 5 7] [:black 9 9] [:black 9 9] [:black 9 10]
                [:white 5 6] [:white 6 7] [:black 10 9] [:black 9 8]
                [:white 5 4] [:white 4 3] [:black 10 8] [:black 9 7]
                [:white 5 7] [:white 4 6] [:black 10 7] [:black 9 6]
                [:white 5 3] [:white 5 2] [:black 9 10] [:black 8 10]
                [:white 5 2] [:white 5 1] [:black 9 8] [:black 8 8]
                [:white 6 7] [:white 6 6] [:black 8 10] [:black 7 10]
                [:white 6 6] [:white 7 7] [:black 8 8] [:black 8 9]
                [:white 7 7] [:white 7 6] [:black 9 6] [:black 7 4]
                [:white 4 3] [:white 4 4] [:black 7 4] [:black 8 5]
                [:white 4 4] [:white 3 3] [:black 8 5] [:black 8 4]
                [:white 3 3] [:white 2 2]]
        [game status] (play-script script)]
    nil))

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
        script-4b1 [[:white 2 3]  ; Pick a ring, drop it two cells beyond a
                    [:white 2 0]] ; tile.
        script-4b2 [[:white 2 3]  ; Pick a ring, drop it one cell beyond a
                    [:white 2 1]] ; tile. Valid move.
        script-4b3 [[:white 6 6]  ; Setup a white len-5 run.
                    [:white 6 5]
                    [:black 4 2]
                    [:black 4 3]
                    [:white 6 7]
                    [:white 7 7]
                    [:black 2 4]
                    [:black 3 4]
                    [:white 6 5]
                    [:white 6 4]
                    [:black 3 4]
                    [:black 4 4]
                    [:white 6 4]
                    [:white 6 3]
                    [:black 4 4]
                    [:black 4 5]
                    [:white 6 3]
                    [:white 6 2]]
        script-5b1 [[:white 6 2]] ; Pick a ring to remove, valid
        script-5b2 [[:white 6 3]] ; Pick a tile during ring-removal, invalid
        script-5b3 [[:white 6 1]] ; Pick an empty cell during ring-removal
        script-5b4 [[:white -1 -1]] ; Pick an invalid cell during ring-removal


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
        [status-3b8 game-3b8] (play-script game-2b1 script-3b8)
        [status-4b1 game-4b1] (play-script game-3b5 script-4b1)
        [status-4b2 game-4b2] (play-script game-3b5 script-4b2)
        [status-4b3 game-4b3] (play-script game-3b5 script-4b3)
        [status-5b1 game-5b1] (play-script game-4b3 script-5b1)
        [status-5b2 game-5b2] (play-script game-4b3 script-5b2)
        [status-5b3 game-5b3] (play-script game-4b3 script-5b3)
        [status-5b4 game-5b4] (play-script game-4b3 script-5b4)]
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

    (is (= (:status status-3b8) :failure))

    (is (= (:status status-4b1) :failure))
    (is (= (get-in game-4b1 [:board 2 3 :type]) :ring))
    (is (= (get-in game-4b1 [:board 2 0 :type]) :empty))

    (is (= (:status status-4b2) :success))
    (is (= (get-in game-4b2 [:board 2 1 :type]) :ring))
    (is (= (get-in game-4b2 [:board 2 3 :type]) :tile))
    (is (= (get-in game-4b2 [:board 2 3 :color]) :white))

    (is (= (:phase game-4b3) :ring-removal))
    (is (= (:turn game-4b3) :white))
    (is (= (get-in game-4b3 [:board 6 7 :type]) :empty))
    (is (= (get-in game-4b3 [:board 6 6 :type]) :empty))
    (is (= (get-in game-4b3 [:board 6 5 :type]) :empty))
    (is (= (get-in game-4b3 [:board 6 4 :type]) :empty))
    (is (= (get-in game-4b3 [:board 6 3 :type]) :empty))
    (is (= (get-in game-4b3 [:rings-remaining :white]) 5))
    (is (= (get-in game-4b3 [:rings-remaining :black]) 5))

    (is (= (:status status-5b1) :success))
    (is (= (get-in game-5b1 [:rings-remaining :white]) 4))
    (is (= (get-in game-5b1 [:rings-remaining :black]) 5))
    (is (= (get-in game-5b1 [:board 6 2 :type]) :empty))
    (is (= (:turn game-5b1) :black))
    (is (= (:phase game-5b1) :ring-pick))

    (is (= (:status status-5b2) :failure))
    (is (= (get-in game-5b2 [:rings-remaining :white]) 5))
    (is (= (get-in game-5b2 [:board 6 2 :type]) :ring))
    (is (= (get-in game-5b2 [:board 6 2 :color]) :white))

    (is (= (:status status-5b3) :failure))
    (is (= (get-in game-5b3 [:rings-remaining :white]) 5))
    (is (= (get-in game-5b3 [:board 6 2 :type]) :ring))
    (is (= (get-in game-5b3 [:board 6 2 :color]) :white))

    (is (= (:status status-5b4) :failure))
    (is (= (get-in game-5b4 [:rings-remaining :white]) 5))
    (is (= (get-in game-5b4 [:board 6 2 :type]) :ring))
    (is (= (get-in game-5b4 [:board 6 2 :color]) :white))

    ; Sanity check that replaying a script derived from history produces the
    ; same game.
    (is (= game-5b4
           ((play-script (game->script game-5b4)) 1)))))
