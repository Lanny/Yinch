(ns yinch.game-test
  (:require [clojure.test :refer :all]
            [yinch.board-test :refer [assert-cell]]
            [yinch.game :refer :all]))

(defn play-script
  ""
  ([moves]
   (play-script (new-game) moves))
  ([game moves]
   (play-script game moves true))
  ([game moves halt-on-fail]
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

(deftest test-integration
  (let [script-1 [[:white 6 6]
                  [:black 5 2]
                  [:white 6 7]
                  [:black 7 6]]
        script-2b1 [[:white 6 8]
                    [:black 2 2]
                    [:white 2 3]
                    [:black 2 4]
                    [:white 2 5]
                    [:black 2 6]] ; All rings get placed, no violations
        script-2b2 [[:white 6 8]
                    [:black 6 6]] ; Black tries to take a white occupied space
        script-2b3 [[:white 6 6]] ; White tries to take a space twice
        [status-1 game-1] (play-script script-1)
        [status-2b1 game-2b1] (play-script game-1 script-2b1)
        [status-2b2 game-2b2] (play-script game-1 script-2b2)
        [status-2b3 game-2b3] (play-script game-1 script-2b3)]
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
    (is (= (:rings-placed game-2b3) 4))))
