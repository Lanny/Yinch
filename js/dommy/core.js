// Compiled by ClojureScript 0.0-3211 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4278__auto__ = elem.textContent;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(){
var G__11998 = arguments.length;
switch (G__11998) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var G__12001 = arguments.length;
switch (G__12001) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var G__12005 = arguments.length;
switch (G__12005) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__12003_SHARP_){
return !((p1__12003_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__12009_12015 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__12010_12016 = null;
var count__12011_12017 = (0);
var i__12012_12018 = (0);
while(true){
if((i__12012_12018 < count__12011_12017)){
var vec__12013_12019 = cljs.core._nth.call(null,chunk__12010_12016,i__12012_12018);
var k_12020 = cljs.core.nth.call(null,vec__12013_12019,(0),null);
var v_12021 = cljs.core.nth.call(null,vec__12013_12019,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_12020),v_12021);

var G__12022 = seq__12009_12015;
var G__12023 = chunk__12010_12016;
var G__12024 = count__12011_12017;
var G__12025 = (i__12012_12018 + (1));
seq__12009_12015 = G__12022;
chunk__12010_12016 = G__12023;
count__12011_12017 = G__12024;
i__12012_12018 = G__12025;
continue;
} else {
var temp__4425__auto___12026 = cljs.core.seq.call(null,seq__12009_12015);
if(temp__4425__auto___12026){
var seq__12009_12027__$1 = temp__4425__auto___12026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12009_12027__$1)){
var c__5063__auto___12028 = cljs.core.chunk_first.call(null,seq__12009_12027__$1);
var G__12029 = cljs.core.chunk_rest.call(null,seq__12009_12027__$1);
var G__12030 = c__5063__auto___12028;
var G__12031 = cljs.core.count.call(null,c__5063__auto___12028);
var G__12032 = (0);
seq__12009_12015 = G__12029;
chunk__12010_12016 = G__12030;
count__12011_12017 = G__12031;
i__12012_12018 = G__12032;
continue;
} else {
var vec__12014_12033 = cljs.core.first.call(null,seq__12009_12027__$1);
var k_12034 = cljs.core.nth.call(null,vec__12014_12033,(0),null);
var v_12035 = cljs.core.nth.call(null,vec__12014_12033,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_12034),v_12035);

var G__12036 = cljs.core.next.call(null,seq__12009_12027__$1);
var G__12037 = null;
var G__12038 = (0);
var G__12039 = (0);
seq__12009_12015 = G__12036;
chunk__12010_12016 = G__12037;
count__12011_12017 = G__12038;
i__12012_12018 = G__12039;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq12007){
var G__12008 = cljs.core.first.call(null,seq12007);
var seq12007__$1 = cljs.core.next.call(null,seq12007);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12008,seq12007__$1);
});
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__12042_12046 = cljs.core.seq.call(null,keywords);
var chunk__12043_12047 = null;
var count__12044_12048 = (0);
var i__12045_12049 = (0);
while(true){
if((i__12045_12049 < count__12044_12048)){
var kw_12050 = cljs.core._nth.call(null,chunk__12043_12047,i__12045_12049);
style.removeProperty(dommy.utils.as_str.call(null,kw_12050));

var G__12051 = seq__12042_12046;
var G__12052 = chunk__12043_12047;
var G__12053 = count__12044_12048;
var G__12054 = (i__12045_12049 + (1));
seq__12042_12046 = G__12051;
chunk__12043_12047 = G__12052;
count__12044_12048 = G__12053;
i__12045_12049 = G__12054;
continue;
} else {
var temp__4425__auto___12055 = cljs.core.seq.call(null,seq__12042_12046);
if(temp__4425__auto___12055){
var seq__12042_12056__$1 = temp__4425__auto___12055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12042_12056__$1)){
var c__5063__auto___12057 = cljs.core.chunk_first.call(null,seq__12042_12056__$1);
var G__12058 = cljs.core.chunk_rest.call(null,seq__12042_12056__$1);
var G__12059 = c__5063__auto___12057;
var G__12060 = cljs.core.count.call(null,c__5063__auto___12057);
var G__12061 = (0);
seq__12042_12046 = G__12058;
chunk__12043_12047 = G__12059;
count__12044_12048 = G__12060;
i__12045_12049 = G__12061;
continue;
} else {
var kw_12062 = cljs.core.first.call(null,seq__12042_12056__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_12062));

var G__12063 = cljs.core.next.call(null,seq__12042_12056__$1);
var G__12064 = null;
var G__12065 = (0);
var G__12066 = (0);
seq__12042_12046 = G__12063;
chunk__12043_12047 = G__12064;
count__12044_12048 = G__12065;
i__12045_12049 = G__12066;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq12040){
var G__12041 = cljs.core.first.call(null,seq12040);
var seq12040__$1 = cljs.core.next.call(null,seq12040);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12041,seq12040__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__12069_12075 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__12070_12076 = null;
var count__12071_12077 = (0);
var i__12072_12078 = (0);
while(true){
if((i__12072_12078 < count__12071_12077)){
var vec__12073_12079 = cljs.core._nth.call(null,chunk__12070_12076,i__12072_12078);
var k_12080 = cljs.core.nth.call(null,vec__12073_12079,(0),null);
var v_12081 = cljs.core.nth.call(null,vec__12073_12079,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_12080,[cljs.core.str(v_12081),cljs.core.str("px")].join(''));

var G__12082 = seq__12069_12075;
var G__12083 = chunk__12070_12076;
var G__12084 = count__12071_12077;
var G__12085 = (i__12072_12078 + (1));
seq__12069_12075 = G__12082;
chunk__12070_12076 = G__12083;
count__12071_12077 = G__12084;
i__12072_12078 = G__12085;
continue;
} else {
var temp__4425__auto___12086 = cljs.core.seq.call(null,seq__12069_12075);
if(temp__4425__auto___12086){
var seq__12069_12087__$1 = temp__4425__auto___12086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12069_12087__$1)){
var c__5063__auto___12088 = cljs.core.chunk_first.call(null,seq__12069_12087__$1);
var G__12089 = cljs.core.chunk_rest.call(null,seq__12069_12087__$1);
var G__12090 = c__5063__auto___12088;
var G__12091 = cljs.core.count.call(null,c__5063__auto___12088);
var G__12092 = (0);
seq__12069_12075 = G__12089;
chunk__12070_12076 = G__12090;
count__12071_12077 = G__12091;
i__12072_12078 = G__12092;
continue;
} else {
var vec__12074_12093 = cljs.core.first.call(null,seq__12069_12087__$1);
var k_12094 = cljs.core.nth.call(null,vec__12074_12093,(0),null);
var v_12095 = cljs.core.nth.call(null,vec__12074_12093,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_12094,[cljs.core.str(v_12095),cljs.core.str("px")].join(''));

var G__12096 = cljs.core.next.call(null,seq__12069_12087__$1);
var G__12097 = null;
var G__12098 = (0);
var G__12099 = (0);
seq__12069_12075 = G__12096;
chunk__12070_12076 = G__12097;
count__12071_12077 = G__12098;
i__12072_12078 = G__12099;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq12067){
var G__12068 = cljs.core.first.call(null,seq12067);
var seq12067__$1 = cljs.core.next.call(null,seq12067);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12068,seq12067__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var G__12105 = arguments.length;
switch (G__12105) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5329__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__12106 = elem;
(G__12106[k__$1] = v);

return G__12106;
} else {
var G__12107 = elem;
G__12107.setAttribute(k__$1,v);

return G__12107;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__12108_12115 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__12109_12116 = null;
var count__12110_12117 = (0);
var i__12111_12118 = (0);
while(true){
if((i__12111_12118 < count__12110_12117)){
var vec__12112_12119 = cljs.core._nth.call(null,chunk__12109_12116,i__12111_12118);
var k_12120__$1 = cljs.core.nth.call(null,vec__12112_12119,(0),null);
var v_12121__$1 = cljs.core.nth.call(null,vec__12112_12119,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_12120__$1,v_12121__$1);

var G__12122 = seq__12108_12115;
var G__12123 = chunk__12109_12116;
var G__12124 = count__12110_12117;
var G__12125 = (i__12111_12118 + (1));
seq__12108_12115 = G__12122;
chunk__12109_12116 = G__12123;
count__12110_12117 = G__12124;
i__12111_12118 = G__12125;
continue;
} else {
var temp__4425__auto___12126 = cljs.core.seq.call(null,seq__12108_12115);
if(temp__4425__auto___12126){
var seq__12108_12127__$1 = temp__4425__auto___12126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12108_12127__$1)){
var c__5063__auto___12128 = cljs.core.chunk_first.call(null,seq__12108_12127__$1);
var G__12129 = cljs.core.chunk_rest.call(null,seq__12108_12127__$1);
var G__12130 = c__5063__auto___12128;
var G__12131 = cljs.core.count.call(null,c__5063__auto___12128);
var G__12132 = (0);
seq__12108_12115 = G__12129;
chunk__12109_12116 = G__12130;
count__12110_12117 = G__12131;
i__12111_12118 = G__12132;
continue;
} else {
var vec__12113_12133 = cljs.core.first.call(null,seq__12108_12127__$1);
var k_12134__$1 = cljs.core.nth.call(null,vec__12113_12133,(0),null);
var v_12135__$1 = cljs.core.nth.call(null,vec__12113_12133,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_12134__$1,v_12135__$1);

var G__12136 = cljs.core.next.call(null,seq__12108_12127__$1);
var G__12137 = null;
var G__12138 = (0);
var G__12139 = (0);
seq__12108_12115 = G__12136;
chunk__12109_12116 = G__12137;
count__12110_12117 = G__12138;
i__12111_12118 = G__12139;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq12100){
var G__12101 = cljs.core.first.call(null,seq12100);
var seq12100__$1 = cljs.core.next.call(null,seq12100);
var G__12102 = cljs.core.first.call(null,seq12100__$1);
var seq12100__$2 = cljs.core.next.call(null,seq12100__$1);
var G__12103 = cljs.core.first.call(null,seq12100__$2);
var seq12100__$3 = cljs.core.next.call(null,seq12100__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12101,G__12102,G__12103,seq12100__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var G__12144 = arguments.length;
switch (G__12144) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5329__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_12150__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12150__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_12150__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__12145_12151 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__12146_12152 = null;
var count__12147_12153 = (0);
var i__12148_12154 = (0);
while(true){
if((i__12148_12154 < count__12147_12153)){
var k_12155__$1 = cljs.core._nth.call(null,chunk__12146_12152,i__12148_12154);
dommy.core.remove_attr_BANG_.call(null,elem,k_12155__$1);

var G__12156 = seq__12145_12151;
var G__12157 = chunk__12146_12152;
var G__12158 = count__12147_12153;
var G__12159 = (i__12148_12154 + (1));
seq__12145_12151 = G__12156;
chunk__12146_12152 = G__12157;
count__12147_12153 = G__12158;
i__12148_12154 = G__12159;
continue;
} else {
var temp__4425__auto___12160 = cljs.core.seq.call(null,seq__12145_12151);
if(temp__4425__auto___12160){
var seq__12145_12161__$1 = temp__4425__auto___12160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12145_12161__$1)){
var c__5063__auto___12162 = cljs.core.chunk_first.call(null,seq__12145_12161__$1);
var G__12163 = cljs.core.chunk_rest.call(null,seq__12145_12161__$1);
var G__12164 = c__5063__auto___12162;
var G__12165 = cljs.core.count.call(null,c__5063__auto___12162);
var G__12166 = (0);
seq__12145_12151 = G__12163;
chunk__12146_12152 = G__12164;
count__12147_12153 = G__12165;
i__12148_12154 = G__12166;
continue;
} else {
var k_12167__$1 = cljs.core.first.call(null,seq__12145_12161__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_12167__$1);

var G__12168 = cljs.core.next.call(null,seq__12145_12161__$1);
var G__12169 = null;
var G__12170 = (0);
var G__12171 = (0);
seq__12145_12151 = G__12168;
chunk__12146_12152 = G__12169;
count__12147_12153 = G__12170;
i__12148_12154 = G__12171;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq12140){
var G__12141 = cljs.core.first.call(null,seq12140);
var seq12140__$1 = cljs.core.next.call(null,seq12140);
var G__12142 = cljs.core.first.call(null,seq12140__$1);
var seq12140__$2 = cljs.core.next.call(null,seq12140__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12141,G__12142,seq12140__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var G__12173 = arguments.length;
switch (G__12173) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var G__12179 = arguments.length;
switch (G__12179) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5329__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___12193 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___12193)){
var class_list_12194 = temp__4423__auto___12193;
var seq__12180_12195 = cljs.core.seq.call(null,classes__$1);
var chunk__12181_12196 = null;
var count__12182_12197 = (0);
var i__12183_12198 = (0);
while(true){
if((i__12183_12198 < count__12182_12197)){
var c_12199 = cljs.core._nth.call(null,chunk__12181_12196,i__12183_12198);
class_list_12194.add(c_12199);

var G__12200 = seq__12180_12195;
var G__12201 = chunk__12181_12196;
var G__12202 = count__12182_12197;
var G__12203 = (i__12183_12198 + (1));
seq__12180_12195 = G__12200;
chunk__12181_12196 = G__12201;
count__12182_12197 = G__12202;
i__12183_12198 = G__12203;
continue;
} else {
var temp__4425__auto___12204 = cljs.core.seq.call(null,seq__12180_12195);
if(temp__4425__auto___12204){
var seq__12180_12205__$1 = temp__4425__auto___12204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12180_12205__$1)){
var c__5063__auto___12206 = cljs.core.chunk_first.call(null,seq__12180_12205__$1);
var G__12207 = cljs.core.chunk_rest.call(null,seq__12180_12205__$1);
var G__12208 = c__5063__auto___12206;
var G__12209 = cljs.core.count.call(null,c__5063__auto___12206);
var G__12210 = (0);
seq__12180_12195 = G__12207;
chunk__12181_12196 = G__12208;
count__12182_12197 = G__12209;
i__12183_12198 = G__12210;
continue;
} else {
var c_12211 = cljs.core.first.call(null,seq__12180_12205__$1);
class_list_12194.add(c_12211);

var G__12212 = cljs.core.next.call(null,seq__12180_12205__$1);
var G__12213 = null;
var G__12214 = (0);
var G__12215 = (0);
seq__12180_12195 = G__12212;
chunk__12181_12196 = G__12213;
count__12182_12197 = G__12214;
i__12183_12198 = G__12215;
continue;
}
} else {
}
}
break;
}
} else {
var seq__12184_12216 = cljs.core.seq.call(null,classes__$1);
var chunk__12185_12217 = null;
var count__12186_12218 = (0);
var i__12187_12219 = (0);
while(true){
if((i__12187_12219 < count__12186_12218)){
var c_12220 = cljs.core._nth.call(null,chunk__12185_12217,i__12187_12219);
var class_name_12221 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_12221,c_12220))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_12221 === ""))?c_12220:[cljs.core.str(class_name_12221),cljs.core.str(" "),cljs.core.str(c_12220)].join('')));
}

var G__12222 = seq__12184_12216;
var G__12223 = chunk__12185_12217;
var G__12224 = count__12186_12218;
var G__12225 = (i__12187_12219 + (1));
seq__12184_12216 = G__12222;
chunk__12185_12217 = G__12223;
count__12186_12218 = G__12224;
i__12187_12219 = G__12225;
continue;
} else {
var temp__4425__auto___12226 = cljs.core.seq.call(null,seq__12184_12216);
if(temp__4425__auto___12226){
var seq__12184_12227__$1 = temp__4425__auto___12226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12184_12227__$1)){
var c__5063__auto___12228 = cljs.core.chunk_first.call(null,seq__12184_12227__$1);
var G__12229 = cljs.core.chunk_rest.call(null,seq__12184_12227__$1);
var G__12230 = c__5063__auto___12228;
var G__12231 = cljs.core.count.call(null,c__5063__auto___12228);
var G__12232 = (0);
seq__12184_12216 = G__12229;
chunk__12185_12217 = G__12230;
count__12186_12218 = G__12231;
i__12187_12219 = G__12232;
continue;
} else {
var c_12233 = cljs.core.first.call(null,seq__12184_12227__$1);
var class_name_12234 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_12234,c_12233))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_12234 === ""))?c_12233:[cljs.core.str(class_name_12234),cljs.core.str(" "),cljs.core.str(c_12233)].join('')));
}

var G__12235 = cljs.core.next.call(null,seq__12184_12227__$1);
var G__12236 = null;
var G__12237 = (0);
var G__12238 = (0);
seq__12184_12216 = G__12235;
chunk__12185_12217 = G__12236;
count__12186_12218 = G__12237;
i__12187_12219 = G__12238;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__12188_12239 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__12189_12240 = null;
var count__12190_12241 = (0);
var i__12191_12242 = (0);
while(true){
if((i__12191_12242 < count__12190_12241)){
var c_12243 = cljs.core._nth.call(null,chunk__12189_12240,i__12191_12242);
dommy.core.add_class_BANG_.call(null,elem,c_12243);

var G__12244 = seq__12188_12239;
var G__12245 = chunk__12189_12240;
var G__12246 = count__12190_12241;
var G__12247 = (i__12191_12242 + (1));
seq__12188_12239 = G__12244;
chunk__12189_12240 = G__12245;
count__12190_12241 = G__12246;
i__12191_12242 = G__12247;
continue;
} else {
var temp__4425__auto___12248 = cljs.core.seq.call(null,seq__12188_12239);
if(temp__4425__auto___12248){
var seq__12188_12249__$1 = temp__4425__auto___12248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12188_12249__$1)){
var c__5063__auto___12250 = cljs.core.chunk_first.call(null,seq__12188_12249__$1);
var G__12251 = cljs.core.chunk_rest.call(null,seq__12188_12249__$1);
var G__12252 = c__5063__auto___12250;
var G__12253 = cljs.core.count.call(null,c__5063__auto___12250);
var G__12254 = (0);
seq__12188_12239 = G__12251;
chunk__12189_12240 = G__12252;
count__12190_12241 = G__12253;
i__12191_12242 = G__12254;
continue;
} else {
var c_12255 = cljs.core.first.call(null,seq__12188_12249__$1);
dommy.core.add_class_BANG_.call(null,elem,c_12255);

var G__12256 = cljs.core.next.call(null,seq__12188_12249__$1);
var G__12257 = null;
var G__12258 = (0);
var G__12259 = (0);
seq__12188_12239 = G__12256;
chunk__12189_12240 = G__12257;
count__12190_12241 = G__12258;
i__12191_12242 = G__12259;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq12175){
var G__12176 = cljs.core.first.call(null,seq12175);
var seq12175__$1 = cljs.core.next.call(null,seq12175);
var G__12177 = cljs.core.first.call(null,seq12175__$1);
var seq12175__$2 = cljs.core.next.call(null,seq12175__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12176,G__12177,seq12175__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var G__12264 = arguments.length;
switch (G__12264) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5329__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___12270 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___12270)){
var class_list_12271 = temp__4423__auto___12270;
class_list_12271.remove(c__$1);
} else {
var class_name_12272 = dommy.core.class$.call(null,elem);
var new_class_name_12273 = dommy.utils.remove_class_str.call(null,class_name_12272,c__$1);
if((class_name_12272 === new_class_name_12273)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_12273);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__12265 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__12266 = null;
var count__12267 = (0);
var i__12268 = (0);
while(true){
if((i__12268 < count__12267)){
var c = cljs.core._nth.call(null,chunk__12266,i__12268);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__12274 = seq__12265;
var G__12275 = chunk__12266;
var G__12276 = count__12267;
var G__12277 = (i__12268 + (1));
seq__12265 = G__12274;
chunk__12266 = G__12275;
count__12267 = G__12276;
i__12268 = G__12277;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12265);
if(temp__4425__auto__){
var seq__12265__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12265__$1)){
var c__5063__auto__ = cljs.core.chunk_first.call(null,seq__12265__$1);
var G__12278 = cljs.core.chunk_rest.call(null,seq__12265__$1);
var G__12279 = c__5063__auto__;
var G__12280 = cljs.core.count.call(null,c__5063__auto__);
var G__12281 = (0);
seq__12265 = G__12278;
chunk__12266 = G__12279;
count__12267 = G__12280;
i__12268 = G__12281;
continue;
} else {
var c = cljs.core.first.call(null,seq__12265__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__12282 = cljs.core.next.call(null,seq__12265__$1);
var G__12283 = null;
var G__12284 = (0);
var G__12285 = (0);
seq__12265 = G__12282;
chunk__12266 = G__12283;
count__12267 = G__12284;
i__12268 = G__12285;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq12260){
var G__12261 = cljs.core.first.call(null,seq12260);
var seq12260__$1 = cljs.core.next.call(null,seq12260);
var G__12262 = cljs.core.first.call(null,seq12260__$1);
var seq12260__$2 = cljs.core.next.call(null,seq12260__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12261,G__12262,seq12260__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var G__12287 = arguments.length;
switch (G__12287) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___12289 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___12289)){
var class_list_12290 = temp__4423__auto___12289;
class_list_12290.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var G__12292 = arguments.length;
switch (G__12292) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var G__12295 = arguments.length;
switch (G__12295) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var G__12301 = arguments.length;
switch (G__12301) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5329__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12302 = parent;
G__12302.appendChild(child);

return G__12302;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12303_12308 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__12304_12309 = null;
var count__12305_12310 = (0);
var i__12306_12311 = (0);
while(true){
if((i__12306_12311 < count__12305_12310)){
var c_12312 = cljs.core._nth.call(null,chunk__12304_12309,i__12306_12311);
dommy.core.append_BANG_.call(null,parent,c_12312);

var G__12313 = seq__12303_12308;
var G__12314 = chunk__12304_12309;
var G__12315 = count__12305_12310;
var G__12316 = (i__12306_12311 + (1));
seq__12303_12308 = G__12313;
chunk__12304_12309 = G__12314;
count__12305_12310 = G__12315;
i__12306_12311 = G__12316;
continue;
} else {
var temp__4425__auto___12317 = cljs.core.seq.call(null,seq__12303_12308);
if(temp__4425__auto___12317){
var seq__12303_12318__$1 = temp__4425__auto___12317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12303_12318__$1)){
var c__5063__auto___12319 = cljs.core.chunk_first.call(null,seq__12303_12318__$1);
var G__12320 = cljs.core.chunk_rest.call(null,seq__12303_12318__$1);
var G__12321 = c__5063__auto___12319;
var G__12322 = cljs.core.count.call(null,c__5063__auto___12319);
var G__12323 = (0);
seq__12303_12308 = G__12320;
chunk__12304_12309 = G__12321;
count__12305_12310 = G__12322;
i__12306_12311 = G__12323;
continue;
} else {
var c_12324 = cljs.core.first.call(null,seq__12303_12318__$1);
dommy.core.append_BANG_.call(null,parent,c_12324);

var G__12325 = cljs.core.next.call(null,seq__12303_12318__$1);
var G__12326 = null;
var G__12327 = (0);
var G__12328 = (0);
seq__12303_12308 = G__12325;
chunk__12304_12309 = G__12326;
count__12305_12310 = G__12327;
i__12306_12311 = G__12328;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq12297){
var G__12298 = cljs.core.first.call(null,seq12297);
var seq12297__$1 = cljs.core.next.call(null,seq12297);
var G__12299 = cljs.core.first.call(null,seq12297__$1);
var seq12297__$2 = cljs.core.next.call(null,seq12297__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12298,G__12299,seq12297__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var G__12333 = arguments.length;
switch (G__12333) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5329__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12334 = parent;
G__12334.insertBefore(child,parent.firstChild);

return G__12334;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12335_12340 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__12336_12341 = null;
var count__12337_12342 = (0);
var i__12338_12343 = (0);
while(true){
if((i__12338_12343 < count__12337_12342)){
var c_12344 = cljs.core._nth.call(null,chunk__12336_12341,i__12338_12343);
dommy.core.prepend_BANG_.call(null,parent,c_12344);

var G__12345 = seq__12335_12340;
var G__12346 = chunk__12336_12341;
var G__12347 = count__12337_12342;
var G__12348 = (i__12338_12343 + (1));
seq__12335_12340 = G__12345;
chunk__12336_12341 = G__12346;
count__12337_12342 = G__12347;
i__12338_12343 = G__12348;
continue;
} else {
var temp__4425__auto___12349 = cljs.core.seq.call(null,seq__12335_12340);
if(temp__4425__auto___12349){
var seq__12335_12350__$1 = temp__4425__auto___12349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12335_12350__$1)){
var c__5063__auto___12351 = cljs.core.chunk_first.call(null,seq__12335_12350__$1);
var G__12352 = cljs.core.chunk_rest.call(null,seq__12335_12350__$1);
var G__12353 = c__5063__auto___12351;
var G__12354 = cljs.core.count.call(null,c__5063__auto___12351);
var G__12355 = (0);
seq__12335_12340 = G__12352;
chunk__12336_12341 = G__12353;
count__12337_12342 = G__12354;
i__12338_12343 = G__12355;
continue;
} else {
var c_12356 = cljs.core.first.call(null,seq__12335_12350__$1);
dommy.core.prepend_BANG_.call(null,parent,c_12356);

var G__12357 = cljs.core.next.call(null,seq__12335_12350__$1);
var G__12358 = null;
var G__12359 = (0);
var G__12360 = (0);
seq__12335_12340 = G__12357;
chunk__12336_12341 = G__12358;
count__12337_12342 = G__12359;
i__12338_12343 = G__12360;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq12329){
var G__12330 = cljs.core.first.call(null,seq12329);
var seq12329__$1 = cljs.core.next.call(null,seq12329);
var G__12331 = cljs.core.first.call(null,seq12329__$1);
var seq12329__$2 = cljs.core.next.call(null,seq12329__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12330,G__12331,seq12329__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___12361 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___12361)){
var next_12362 = temp__4423__auto___12361;
dommy.core.insert_before_BANG_.call(null,elem,next_12362);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var G__12364 = arguments.length;
switch (G__12364) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__12365 = p;
G__12365.removeChild(elem);

return G__12365;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12367){
var vec__12368 = p__12367;
var special_mouse_event = cljs.core.nth.call(null,vec__12368,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__12368,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__12368,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__12368,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4278__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4266__auto__ = related_target;
if(cljs.core.truth_(and__4266__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4266__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__12368,special_mouse_event,real_mouse_event))
});})(vec__12368,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4266__auto__ = selected_target;
if(cljs.core.truth_(and__4266__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4266__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4278__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var argseq__5318__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5318__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq12369){
var G__12370 = cljs.core.first.call(null,seq12369);
var seq12369__$1 = cljs.core.next.call(null,seq12369);
var G__12371 = cljs.core.first.call(null,seq12369__$1);
var seq12369__$2 = cljs.core.next.call(null,seq12369__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12370,G__12371,seq12369__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__12374_12397 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_12398 = cljs.core.nth.call(null,vec__12374_12397,(0),null);
var selector_12399 = cljs.core.nth.call(null,vec__12374_12397,(1),null);
var seq__12375_12400 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__12382_12401 = null;
var count__12383_12402 = (0);
var i__12384_12403 = (0);
while(true){
if((i__12384_12403 < count__12383_12402)){
var vec__12391_12404 = cljs.core._nth.call(null,chunk__12382_12401,i__12384_12403);
var orig_type_12405 = cljs.core.nth.call(null,vec__12391_12404,(0),null);
var f_12406 = cljs.core.nth.call(null,vec__12391_12404,(1),null);
var seq__12385_12407 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12405,new cljs.core.PersistentArrayMap.fromArray([orig_type_12405,cljs.core.identity], true, false)));
var chunk__12387_12408 = null;
var count__12388_12409 = (0);
var i__12389_12410 = (0);
while(true){
if((i__12389_12410 < count__12388_12409)){
var vec__12392_12411 = cljs.core._nth.call(null,chunk__12387_12408,i__12389_12410);
var actual_type_12412 = cljs.core.nth.call(null,vec__12392_12411,(0),null);
var factory_12413 = cljs.core.nth.call(null,vec__12392_12411,(1),null);
var canonical_f_12414 = (cljs.core.truth_(selector_12399)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12398,selector_12399):cljs.core.identity).call(null,factory_12413.call(null,f_12406));
dommy.core.update_event_listeners_BANG_.call(null,elem_12398,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12399,actual_type_12412,f_12406], null),canonical_f_12414);

if(cljs.core.truth_(elem_12398.addEventListener)){
elem_12398.addEventListener(cljs.core.name.call(null,actual_type_12412),canonical_f_12414);
} else {
elem_12398.attachEvent(cljs.core.name.call(null,actual_type_12412),canonical_f_12414);
}

var G__12415 = seq__12385_12407;
var G__12416 = chunk__12387_12408;
var G__12417 = count__12388_12409;
var G__12418 = (i__12389_12410 + (1));
seq__12385_12407 = G__12415;
chunk__12387_12408 = G__12416;
count__12388_12409 = G__12417;
i__12389_12410 = G__12418;
continue;
} else {
var temp__4425__auto___12419 = cljs.core.seq.call(null,seq__12385_12407);
if(temp__4425__auto___12419){
var seq__12385_12420__$1 = temp__4425__auto___12419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12385_12420__$1)){
var c__5063__auto___12421 = cljs.core.chunk_first.call(null,seq__12385_12420__$1);
var G__12422 = cljs.core.chunk_rest.call(null,seq__12385_12420__$1);
var G__12423 = c__5063__auto___12421;
var G__12424 = cljs.core.count.call(null,c__5063__auto___12421);
var G__12425 = (0);
seq__12385_12407 = G__12422;
chunk__12387_12408 = G__12423;
count__12388_12409 = G__12424;
i__12389_12410 = G__12425;
continue;
} else {
var vec__12393_12426 = cljs.core.first.call(null,seq__12385_12420__$1);
var actual_type_12427 = cljs.core.nth.call(null,vec__12393_12426,(0),null);
var factory_12428 = cljs.core.nth.call(null,vec__12393_12426,(1),null);
var canonical_f_12429 = (cljs.core.truth_(selector_12399)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12398,selector_12399):cljs.core.identity).call(null,factory_12428.call(null,f_12406));
dommy.core.update_event_listeners_BANG_.call(null,elem_12398,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12399,actual_type_12427,f_12406], null),canonical_f_12429);

if(cljs.core.truth_(elem_12398.addEventListener)){
elem_12398.addEventListener(cljs.core.name.call(null,actual_type_12427),canonical_f_12429);
} else {
elem_12398.attachEvent(cljs.core.name.call(null,actual_type_12427),canonical_f_12429);
}

var G__12430 = cljs.core.next.call(null,seq__12385_12420__$1);
var G__12431 = null;
var G__12432 = (0);
var G__12433 = (0);
seq__12385_12407 = G__12430;
chunk__12387_12408 = G__12431;
count__12388_12409 = G__12432;
i__12389_12410 = G__12433;
continue;
}
} else {
}
}
break;
}

var G__12434 = seq__12375_12400;
var G__12435 = chunk__12382_12401;
var G__12436 = count__12383_12402;
var G__12437 = (i__12384_12403 + (1));
seq__12375_12400 = G__12434;
chunk__12382_12401 = G__12435;
count__12383_12402 = G__12436;
i__12384_12403 = G__12437;
continue;
} else {
var temp__4425__auto___12438 = cljs.core.seq.call(null,seq__12375_12400);
if(temp__4425__auto___12438){
var seq__12375_12439__$1 = temp__4425__auto___12438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12375_12439__$1)){
var c__5063__auto___12440 = cljs.core.chunk_first.call(null,seq__12375_12439__$1);
var G__12441 = cljs.core.chunk_rest.call(null,seq__12375_12439__$1);
var G__12442 = c__5063__auto___12440;
var G__12443 = cljs.core.count.call(null,c__5063__auto___12440);
var G__12444 = (0);
seq__12375_12400 = G__12441;
chunk__12382_12401 = G__12442;
count__12383_12402 = G__12443;
i__12384_12403 = G__12444;
continue;
} else {
var vec__12394_12445 = cljs.core.first.call(null,seq__12375_12439__$1);
var orig_type_12446 = cljs.core.nth.call(null,vec__12394_12445,(0),null);
var f_12447 = cljs.core.nth.call(null,vec__12394_12445,(1),null);
var seq__12376_12448 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12446,new cljs.core.PersistentArrayMap.fromArray([orig_type_12446,cljs.core.identity], true, false)));
var chunk__12378_12449 = null;
var count__12379_12450 = (0);
var i__12380_12451 = (0);
while(true){
if((i__12380_12451 < count__12379_12450)){
var vec__12395_12452 = cljs.core._nth.call(null,chunk__12378_12449,i__12380_12451);
var actual_type_12453 = cljs.core.nth.call(null,vec__12395_12452,(0),null);
var factory_12454 = cljs.core.nth.call(null,vec__12395_12452,(1),null);
var canonical_f_12455 = (cljs.core.truth_(selector_12399)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12398,selector_12399):cljs.core.identity).call(null,factory_12454.call(null,f_12447));
dommy.core.update_event_listeners_BANG_.call(null,elem_12398,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12399,actual_type_12453,f_12447], null),canonical_f_12455);

if(cljs.core.truth_(elem_12398.addEventListener)){
elem_12398.addEventListener(cljs.core.name.call(null,actual_type_12453),canonical_f_12455);
} else {
elem_12398.attachEvent(cljs.core.name.call(null,actual_type_12453),canonical_f_12455);
}

var G__12456 = seq__12376_12448;
var G__12457 = chunk__12378_12449;
var G__12458 = count__12379_12450;
var G__12459 = (i__12380_12451 + (1));
seq__12376_12448 = G__12456;
chunk__12378_12449 = G__12457;
count__12379_12450 = G__12458;
i__12380_12451 = G__12459;
continue;
} else {
var temp__4425__auto___12460__$1 = cljs.core.seq.call(null,seq__12376_12448);
if(temp__4425__auto___12460__$1){
var seq__12376_12461__$1 = temp__4425__auto___12460__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12376_12461__$1)){
var c__5063__auto___12462 = cljs.core.chunk_first.call(null,seq__12376_12461__$1);
var G__12463 = cljs.core.chunk_rest.call(null,seq__12376_12461__$1);
var G__12464 = c__5063__auto___12462;
var G__12465 = cljs.core.count.call(null,c__5063__auto___12462);
var G__12466 = (0);
seq__12376_12448 = G__12463;
chunk__12378_12449 = G__12464;
count__12379_12450 = G__12465;
i__12380_12451 = G__12466;
continue;
} else {
var vec__12396_12467 = cljs.core.first.call(null,seq__12376_12461__$1);
var actual_type_12468 = cljs.core.nth.call(null,vec__12396_12467,(0),null);
var factory_12469 = cljs.core.nth.call(null,vec__12396_12467,(1),null);
var canonical_f_12470 = (cljs.core.truth_(selector_12399)?cljs.core.partial.call(null,dommy.core.live_listener,elem_12398,selector_12399):cljs.core.identity).call(null,factory_12469.call(null,f_12447));
dommy.core.update_event_listeners_BANG_.call(null,elem_12398,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12399,actual_type_12468,f_12447], null),canonical_f_12470);

if(cljs.core.truth_(elem_12398.addEventListener)){
elem_12398.addEventListener(cljs.core.name.call(null,actual_type_12468),canonical_f_12470);
} else {
elem_12398.attachEvent(cljs.core.name.call(null,actual_type_12468),canonical_f_12470);
}

var G__12471 = cljs.core.next.call(null,seq__12376_12461__$1);
var G__12472 = null;
var G__12473 = (0);
var G__12474 = (0);
seq__12376_12448 = G__12471;
chunk__12378_12449 = G__12472;
count__12379_12450 = G__12473;
i__12380_12451 = G__12474;
continue;
}
} else {
}
}
break;
}

var G__12475 = cljs.core.next.call(null,seq__12375_12439__$1);
var G__12476 = null;
var G__12477 = (0);
var G__12478 = (0);
seq__12375_12400 = G__12475;
chunk__12382_12401 = G__12476;
count__12383_12402 = G__12477;
i__12384_12403 = G__12478;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq12372){
var G__12373 = cljs.core.first.call(null,seq12372);
var seq12372__$1 = cljs.core.next.call(null,seq12372);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12373,seq12372__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__12481_12504 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_12505 = cljs.core.nth.call(null,vec__12481_12504,(0),null);
var selector_12506 = cljs.core.nth.call(null,vec__12481_12504,(1),null);
var seq__12482_12507 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__12489_12508 = null;
var count__12490_12509 = (0);
var i__12491_12510 = (0);
while(true){
if((i__12491_12510 < count__12490_12509)){
var vec__12498_12511 = cljs.core._nth.call(null,chunk__12489_12508,i__12491_12510);
var orig_type_12512 = cljs.core.nth.call(null,vec__12498_12511,(0),null);
var f_12513 = cljs.core.nth.call(null,vec__12498_12511,(1),null);
var seq__12492_12514 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12512,new cljs.core.PersistentArrayMap.fromArray([orig_type_12512,cljs.core.identity], true, false)));
var chunk__12494_12515 = null;
var count__12495_12516 = (0);
var i__12496_12517 = (0);
while(true){
if((i__12496_12517 < count__12495_12516)){
var vec__12499_12518 = cljs.core._nth.call(null,chunk__12494_12515,i__12496_12517);
var actual_type_12519 = cljs.core.nth.call(null,vec__12499_12518,(0),null);
var __12520 = cljs.core.nth.call(null,vec__12499_12518,(1),null);
var keys_12521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12506,actual_type_12519,f_12513], null);
var canonical_f_12522 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12505),keys_12521);
dommy.core.update_event_listeners_BANG_.call(null,elem_12505,dommy.utils.dissoc_in,keys_12521);

if(cljs.core.truth_(elem_12505.removeEventListener)){
elem_12505.removeEventListener(cljs.core.name.call(null,actual_type_12519),canonical_f_12522);
} else {
elem_12505.detachEvent(cljs.core.name.call(null,actual_type_12519),canonical_f_12522);
}

var G__12523 = seq__12492_12514;
var G__12524 = chunk__12494_12515;
var G__12525 = count__12495_12516;
var G__12526 = (i__12496_12517 + (1));
seq__12492_12514 = G__12523;
chunk__12494_12515 = G__12524;
count__12495_12516 = G__12525;
i__12496_12517 = G__12526;
continue;
} else {
var temp__4425__auto___12527 = cljs.core.seq.call(null,seq__12492_12514);
if(temp__4425__auto___12527){
var seq__12492_12528__$1 = temp__4425__auto___12527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12492_12528__$1)){
var c__5063__auto___12529 = cljs.core.chunk_first.call(null,seq__12492_12528__$1);
var G__12530 = cljs.core.chunk_rest.call(null,seq__12492_12528__$1);
var G__12531 = c__5063__auto___12529;
var G__12532 = cljs.core.count.call(null,c__5063__auto___12529);
var G__12533 = (0);
seq__12492_12514 = G__12530;
chunk__12494_12515 = G__12531;
count__12495_12516 = G__12532;
i__12496_12517 = G__12533;
continue;
} else {
var vec__12500_12534 = cljs.core.first.call(null,seq__12492_12528__$1);
var actual_type_12535 = cljs.core.nth.call(null,vec__12500_12534,(0),null);
var __12536 = cljs.core.nth.call(null,vec__12500_12534,(1),null);
var keys_12537 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12506,actual_type_12535,f_12513], null);
var canonical_f_12538 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12505),keys_12537);
dommy.core.update_event_listeners_BANG_.call(null,elem_12505,dommy.utils.dissoc_in,keys_12537);

if(cljs.core.truth_(elem_12505.removeEventListener)){
elem_12505.removeEventListener(cljs.core.name.call(null,actual_type_12535),canonical_f_12538);
} else {
elem_12505.detachEvent(cljs.core.name.call(null,actual_type_12535),canonical_f_12538);
}

var G__12539 = cljs.core.next.call(null,seq__12492_12528__$1);
var G__12540 = null;
var G__12541 = (0);
var G__12542 = (0);
seq__12492_12514 = G__12539;
chunk__12494_12515 = G__12540;
count__12495_12516 = G__12541;
i__12496_12517 = G__12542;
continue;
}
} else {
}
}
break;
}

var G__12543 = seq__12482_12507;
var G__12544 = chunk__12489_12508;
var G__12545 = count__12490_12509;
var G__12546 = (i__12491_12510 + (1));
seq__12482_12507 = G__12543;
chunk__12489_12508 = G__12544;
count__12490_12509 = G__12545;
i__12491_12510 = G__12546;
continue;
} else {
var temp__4425__auto___12547 = cljs.core.seq.call(null,seq__12482_12507);
if(temp__4425__auto___12547){
var seq__12482_12548__$1 = temp__4425__auto___12547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12482_12548__$1)){
var c__5063__auto___12549 = cljs.core.chunk_first.call(null,seq__12482_12548__$1);
var G__12550 = cljs.core.chunk_rest.call(null,seq__12482_12548__$1);
var G__12551 = c__5063__auto___12549;
var G__12552 = cljs.core.count.call(null,c__5063__auto___12549);
var G__12553 = (0);
seq__12482_12507 = G__12550;
chunk__12489_12508 = G__12551;
count__12490_12509 = G__12552;
i__12491_12510 = G__12553;
continue;
} else {
var vec__12501_12554 = cljs.core.first.call(null,seq__12482_12548__$1);
var orig_type_12555 = cljs.core.nth.call(null,vec__12501_12554,(0),null);
var f_12556 = cljs.core.nth.call(null,vec__12501_12554,(1),null);
var seq__12483_12557 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_12555,new cljs.core.PersistentArrayMap.fromArray([orig_type_12555,cljs.core.identity], true, false)));
var chunk__12485_12558 = null;
var count__12486_12559 = (0);
var i__12487_12560 = (0);
while(true){
if((i__12487_12560 < count__12486_12559)){
var vec__12502_12561 = cljs.core._nth.call(null,chunk__12485_12558,i__12487_12560);
var actual_type_12562 = cljs.core.nth.call(null,vec__12502_12561,(0),null);
var __12563 = cljs.core.nth.call(null,vec__12502_12561,(1),null);
var keys_12564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12506,actual_type_12562,f_12556], null);
var canonical_f_12565 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12505),keys_12564);
dommy.core.update_event_listeners_BANG_.call(null,elem_12505,dommy.utils.dissoc_in,keys_12564);

if(cljs.core.truth_(elem_12505.removeEventListener)){
elem_12505.removeEventListener(cljs.core.name.call(null,actual_type_12562),canonical_f_12565);
} else {
elem_12505.detachEvent(cljs.core.name.call(null,actual_type_12562),canonical_f_12565);
}

var G__12566 = seq__12483_12557;
var G__12567 = chunk__12485_12558;
var G__12568 = count__12486_12559;
var G__12569 = (i__12487_12560 + (1));
seq__12483_12557 = G__12566;
chunk__12485_12558 = G__12567;
count__12486_12559 = G__12568;
i__12487_12560 = G__12569;
continue;
} else {
var temp__4425__auto___12570__$1 = cljs.core.seq.call(null,seq__12483_12557);
if(temp__4425__auto___12570__$1){
var seq__12483_12571__$1 = temp__4425__auto___12570__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12483_12571__$1)){
var c__5063__auto___12572 = cljs.core.chunk_first.call(null,seq__12483_12571__$1);
var G__12573 = cljs.core.chunk_rest.call(null,seq__12483_12571__$1);
var G__12574 = c__5063__auto___12572;
var G__12575 = cljs.core.count.call(null,c__5063__auto___12572);
var G__12576 = (0);
seq__12483_12557 = G__12573;
chunk__12485_12558 = G__12574;
count__12486_12559 = G__12575;
i__12487_12560 = G__12576;
continue;
} else {
var vec__12503_12577 = cljs.core.first.call(null,seq__12483_12571__$1);
var actual_type_12578 = cljs.core.nth.call(null,vec__12503_12577,(0),null);
var __12579 = cljs.core.nth.call(null,vec__12503_12577,(1),null);
var keys_12580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12506,actual_type_12578,f_12556], null);
var canonical_f_12581 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_12505),keys_12580);
dommy.core.update_event_listeners_BANG_.call(null,elem_12505,dommy.utils.dissoc_in,keys_12580);

if(cljs.core.truth_(elem_12505.removeEventListener)){
elem_12505.removeEventListener(cljs.core.name.call(null,actual_type_12578),canonical_f_12581);
} else {
elem_12505.detachEvent(cljs.core.name.call(null,actual_type_12578),canonical_f_12581);
}

var G__12582 = cljs.core.next.call(null,seq__12483_12571__$1);
var G__12583 = null;
var G__12584 = (0);
var G__12585 = (0);
seq__12483_12557 = G__12582;
chunk__12485_12558 = G__12583;
count__12486_12559 = G__12584;
i__12487_12560 = G__12585;
continue;
}
} else {
}
}
break;
}

var G__12586 = cljs.core.next.call(null,seq__12482_12548__$1);
var G__12587 = null;
var G__12588 = (0);
var G__12589 = (0);
seq__12482_12507 = G__12586;
chunk__12489_12508 = G__12587;
count__12490_12509 = G__12588;
i__12491_12510 = G__12589;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq12479){
var G__12480 = cljs.core.first.call(null,seq12479);
var seq12479__$1 = cljs.core.next.call(null,seq12479);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12480,seq12479__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__12592_12599 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_12600 = cljs.core.nth.call(null,vec__12592_12599,(0),null);
var selector_12601 = cljs.core.nth.call(null,vec__12592_12599,(1),null);
var seq__12593_12602 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__12594_12603 = null;
var count__12595_12604 = (0);
var i__12596_12605 = (0);
while(true){
if((i__12596_12605 < count__12595_12604)){
var vec__12597_12606 = cljs.core._nth.call(null,chunk__12594_12603,i__12596_12605);
var type_12607 = cljs.core.nth.call(null,vec__12597_12606,(0),null);
var f_12608 = cljs.core.nth.call(null,vec__12597_12606,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_12607,((function (seq__12593_12602,chunk__12594_12603,count__12595_12604,i__12596_12605,vec__12597_12606,type_12607,f_12608,vec__12592_12599,elem_12600,selector_12601){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_12607,dommy$core$this_fn);

return f_12608.call(null,e);
});})(seq__12593_12602,chunk__12594_12603,count__12595_12604,i__12596_12605,vec__12597_12606,type_12607,f_12608,vec__12592_12599,elem_12600,selector_12601))
);

var G__12609 = seq__12593_12602;
var G__12610 = chunk__12594_12603;
var G__12611 = count__12595_12604;
var G__12612 = (i__12596_12605 + (1));
seq__12593_12602 = G__12609;
chunk__12594_12603 = G__12610;
count__12595_12604 = G__12611;
i__12596_12605 = G__12612;
continue;
} else {
var temp__4425__auto___12613 = cljs.core.seq.call(null,seq__12593_12602);
if(temp__4425__auto___12613){
var seq__12593_12614__$1 = temp__4425__auto___12613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12593_12614__$1)){
var c__5063__auto___12615 = cljs.core.chunk_first.call(null,seq__12593_12614__$1);
var G__12616 = cljs.core.chunk_rest.call(null,seq__12593_12614__$1);
var G__12617 = c__5063__auto___12615;
var G__12618 = cljs.core.count.call(null,c__5063__auto___12615);
var G__12619 = (0);
seq__12593_12602 = G__12616;
chunk__12594_12603 = G__12617;
count__12595_12604 = G__12618;
i__12596_12605 = G__12619;
continue;
} else {
var vec__12598_12620 = cljs.core.first.call(null,seq__12593_12614__$1);
var type_12621 = cljs.core.nth.call(null,vec__12598_12620,(0),null);
var f_12622 = cljs.core.nth.call(null,vec__12598_12620,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_12621,((function (seq__12593_12602,chunk__12594_12603,count__12595_12604,i__12596_12605,vec__12598_12620,type_12621,f_12622,seq__12593_12614__$1,temp__4425__auto___12613,vec__12592_12599,elem_12600,selector_12601){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_12621,dommy$core$this_fn);

return f_12622.call(null,e);
});})(seq__12593_12602,chunk__12594_12603,count__12595_12604,i__12596_12605,vec__12598_12620,type_12621,f_12622,seq__12593_12614__$1,temp__4425__auto___12613,vec__12592_12599,elem_12600,selector_12601))
);

var G__12623 = cljs.core.next.call(null,seq__12593_12614__$1);
var G__12624 = null;
var G__12625 = (0);
var G__12626 = (0);
seq__12593_12602 = G__12623;
chunk__12594_12603 = G__12624;
count__12595_12604 = G__12625;
i__12596_12605 = G__12626;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq12590){
var G__12591 = cljs.core.first.call(null,seq12590);
var seq12590__$1 = cljs.core.next.call(null,seq12590);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12591,seq12590__$1);
});
