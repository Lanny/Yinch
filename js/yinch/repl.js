// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.repl');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cemerick.url');
cljs.core.enable_console_print_BANG_.call(null);
yinch.repl.connect = (function yinch$repl$connect(){
return clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
});
goog.exportSymbol('yinch.repl.connect', yinch.repl.connect);
