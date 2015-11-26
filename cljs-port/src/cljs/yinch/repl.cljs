(ns yinch.repl
  (:require
    [clojure.browser.repl :as repl]))

(enable-console-print!)

(defn ^:export connect []
  (repl/connect "http://localhost:9000/repl"))
