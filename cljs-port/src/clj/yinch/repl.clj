(ns yinch.repl)

(require 'cljs.repl)
(require 'cljs.repl.browser)

(defn -main []
  (cljs.repl/repl (cljs.repl.browser/repl-env)
                    :watch "src/cljs"
                    :output-dir ".out"))
