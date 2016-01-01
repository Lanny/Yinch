(ns yinch.repl
  (:require
    [clojure.browser.repl :as repl]
    [cemerick.url :as url]))

(enable-console-print!)

(defn ^:export connect []
  (repl/connect "http://localhost:9000/repl"))
