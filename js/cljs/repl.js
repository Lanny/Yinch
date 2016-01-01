// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20844_20856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20845_20857 = null;
var count__20846_20858 = (0);
var i__20847_20859 = (0);
while(true){
if((i__20847_20859 < count__20846_20858)){
var f_20860 = cljs.core._nth.call(null,chunk__20845_20857,i__20847_20859);
cljs.core.println.call(null,"  ",f_20860);

var G__20861 = seq__20844_20856;
var G__20862 = chunk__20845_20857;
var G__20863 = count__20846_20858;
var G__20864 = (i__20847_20859 + (1));
seq__20844_20856 = G__20861;
chunk__20845_20857 = G__20862;
count__20846_20858 = G__20863;
i__20847_20859 = G__20864;
continue;
} else {
var temp__4425__auto___20865 = cljs.core.seq.call(null,seq__20844_20856);
if(temp__4425__auto___20865){
var seq__20844_20866__$1 = temp__4425__auto___20865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20844_20866__$1)){
var c__5063__auto___20867 = cljs.core.chunk_first.call(null,seq__20844_20866__$1);
var G__20868 = cljs.core.chunk_rest.call(null,seq__20844_20866__$1);
var G__20869 = c__5063__auto___20867;
var G__20870 = cljs.core.count.call(null,c__5063__auto___20867);
var G__20871 = (0);
seq__20844_20856 = G__20868;
chunk__20845_20857 = G__20869;
count__20846_20858 = G__20870;
i__20847_20859 = G__20871;
continue;
} else {
var f_20872 = cljs.core.first.call(null,seq__20844_20866__$1);
cljs.core.println.call(null,"  ",f_20872);

var G__20873 = cljs.core.next.call(null,seq__20844_20866__$1);
var G__20874 = null;
var G__20875 = (0);
var G__20876 = (0);
seq__20844_20856 = G__20873;
chunk__20845_20857 = G__20874;
count__20846_20858 = G__20875;
i__20847_20859 = G__20876;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4278__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20849 = null;
var count__20850 = (0);
var i__20851 = (0);
while(true){
if((i__20851 < count__20850)){
var vec__20852 = cljs.core._nth.call(null,chunk__20849,i__20851);
var name = cljs.core.nth.call(null,vec__20852,(0),null);
var map__20853 = cljs.core.nth.call(null,vec__20852,(1),null);
var map__20853__$1 = ((cljs.core.seq_QMARK_.call(null,map__20853))?cljs.core.apply.call(null,cljs.core.hash_map,map__20853):map__20853);
var doc = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20853__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20877 = seq__20848;
var G__20878 = chunk__20849;
var G__20879 = count__20850;
var G__20880 = (i__20851 + (1));
seq__20848 = G__20877;
chunk__20849 = G__20878;
count__20850 = G__20879;
i__20851 = G__20880;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20848);
if(temp__4425__auto__){
var seq__20848__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20848__$1)){
var c__5063__auto__ = cljs.core.chunk_first.call(null,seq__20848__$1);
var G__20881 = cljs.core.chunk_rest.call(null,seq__20848__$1);
var G__20882 = c__5063__auto__;
var G__20883 = cljs.core.count.call(null,c__5063__auto__);
var G__20884 = (0);
seq__20848 = G__20881;
chunk__20849 = G__20882;
count__20850 = G__20883;
i__20851 = G__20884;
continue;
} else {
var vec__20854 = cljs.core.first.call(null,seq__20848__$1);
var name = cljs.core.nth.call(null,vec__20854,(0),null);
var map__20855 = cljs.core.nth.call(null,vec__20854,(1),null);
var map__20855__$1 = ((cljs.core.seq_QMARK_.call(null,map__20855))?cljs.core.apply.call(null,cljs.core.hash_map,map__20855):map__20855);
var doc = cljs.core.get.call(null,map__20855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20885 = cljs.core.next.call(null,seq__20848__$1);
var G__20886 = null;
var G__20887 = (0);
var G__20888 = (0);
seq__20848 = G__20885;
chunk__20849 = G__20886;
count__20850 = G__20887;
i__20851 = G__20888;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
