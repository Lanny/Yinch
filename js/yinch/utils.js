// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.utils');
goog.require('cljs.core');
yinch.utils.π = (Math["PI"]);
yinch.utils.cos = (function yinch$utils$cos(x){
return Math.cos(x);
});
yinch.utils.sin = (function yinch$utils$sin(x){
return Math.sin(x);
});
yinch.utils.abs = (function yinch$utils$abs(x){
return Math.abs(x);
});
yinch.utils.signum = (function yinch$utils$signum(x){
return Math.sign(x);
});
yinch.utils.half = (function yinch$utils$half(x){
return (x / (2));
});
yinch.utils.other = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"black","black",1294279647)], null);
/**
 * Prints x argument and returns it unmodified. Useful for inspecting
 * intermediary values in long arrow chains.
 */
yinch.utils.pnr = (function yinch$utils$pnr(x){
cljs.core.println.call(null,x);

return x;
});
