(defproject yinch "0.1.0-SNAPSHOT"
  :description "Browser implementation of the Yinsh board game."
  :url "https://github.com/RyanJenkins/Yinch"
  :license {:name "GNU General Public License, version 2"
            :url "https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.8.34"
                                    :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.async "0.2.374"]
                 [compojure "1.1.6"]
                 [prismatic/dommy "1.1.0"]
                 [com.aphyr/prism "0.1.3"]
                 [com.cemerick/url "0.1.1"]]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-ring "0.8.7"]
            [com.aphyr/prism "0.1.3"]]
  ;:hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"
                 "src/cljc"]
  :profiles {:cljs-repl {:main ^:skip-aot yinch.repl}}
  :aliases {"cljs-repl" ["with-profile" "cljs-repl" "run"]}
  :ring {:handler yinch.routes/app}
  :cljsbuild {:repl-listen-port 9000
              :repl-launch-commands
              {"chrome" ["chrome"
                         "http://localhost:3000/repl.html"
                         :stdout ".repl-chrome-out"
                         :stderr ".repl-chrome-err"] }
              :builds [{:source-paths ["src/cljs" "src/cljc"]
                        :compiler {:output-dir "resources/public/js"
                                   :output-to "resources/public/js/main.js"
                                   :source-map "resources/public/js/main.map.js"
                                   :libs ["src/js/"]
                                   :optimizations :whitespace
                                   :pretty-print true}}]})
