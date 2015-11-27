(ns yinch.board-test
  (:require [clojure.test :refer :all]
            [yinch.board :refer :all]))

(defn assert-cell
  "Asserts that `board`s (major, minor) cell's keys are a superset of those in
  pattern and that the values on those keys are the same."
  [board major minor pattern]
  (let [cell (get-cell board major minor)]
    (if (nil? pattern)
      (is (nil? cell))
      (is (= (select-keys cell (keys pattern))
             pattern)))))

(deftest test-make-board
  (let [board (make-board)]
    (assert-cell board 6 6 {:type :empty})
    (assert-cell board 0 0 nil)
    (assert-cell board 9 4 {:type :empty})
    (assert-cell board 9 3 nil)
    (assert-cell board 10 5 nil)))

(deftest test-cell-valid?
  (let [valid [[5 5]
               [9 4]
               [8 4]
               [5 1]]
        invalid [[0 0]
                 [11 5]
                 [15 15]
                 [5 10]]]
    (map #(is (apply cell-valid? %)) valid) 
    (map #(is (not (apply cell-valid? %))) invalid)))

(deftest test-assoc-cell
  (let [board (make-board)]
    (let [board (make-board)
          mboard1 (assoc-cell board 6 6 {:type :ring :color :white})
          mboard2 (assoc-cell mboard1 6 5 {:type :tile})
          mboard3 (assoc-cell mboard1 6 6 {:type :empty})]
      (assert-cell mboard1 6 6 {:type :ring :color :white})
      (assert-cell mboard2 6 6 {:type :ring :color :white})
      (assert-cell mboard2 6 5 {:type :tile})
      (assert-cell mboard1 6 6 {:type :ring :color :white})
      (assert-cell mboard3 6 6 {:type :empty})

      (is (thrown? Exception
                   (assoc-cell board 0 0 {:type :white}))))))

