// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('yinch.game');
goog.require('yinch.canvas_interface');
goog.require('cemerick.url');
goog.require('cljs.reader');
goog.require('yinch.utils');
/**
 * 
 */
yinch.core.start = (function yinch$core$start(){
var G__11707 = arguments.length;
switch (G__11707) {
case 0:
return yinch.core.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return yinch.core.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});
goog.exportSymbol('yinch.core.start', yinch.core.start);

yinch.core.start.cljs$core$IFn$_invoke$arity$0 = (function (){
var init_hash = (document["location"]["hash"]);
if(cljs.core.empty_QMARK_.call(null,init_hash)){
return yinch.core.start.call(null,yinch.game.new_game.call(null));
} else {
return yinch.core.start.call(null,cljs.reader.read_string.call(null,cemerick.url.url_decode.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,init_hash)))));
}
});

yinch.core.start.cljs$core$IFn$_invoke$arity$1 = (function (game){
var vec__11708 = yinch.canvas_interface.start_rendering_BANG_.call(null,new cljs.core.Keyword(null,"#primaryCanvas","#primaryCanvas",1664716416));
var state_chan = cljs.core.nth.call(null,vec__11708,(0),null);
var status_chan = cljs.core.nth.call(null,vec__11708,(1),null);
var interaction_chan = cljs.core.nth.call(null,vec__11708,(2),null);
cljs.core.async.put_BANG_.call(null,state_chan,game);

var c__8284__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan){
return (function (state_11726){
var state_val_11727 = (state_11726[(1)]);
if((state_val_11727 === (1))){
var state_11726__$1 = state_11726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11726__$1,(2),interaction_chan);
} else {
if((state_val_11727 === (2))){
var inst_11710 = (state_11726[(2)]);
var inst_11711 = inst_11710;
var inst_11712 = game;
var state_11726__$1 = (function (){var statearr_11728 = state_11726;
(statearr_11728[(7)] = inst_11711);

(statearr_11728[(8)] = inst_11712);

return statearr_11728;
})();
var statearr_11729_11741 = state_11726__$1;
(statearr_11729_11741[(2)] = null);

(statearr_11729_11741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11727 === (3))){
var inst_11711 = (state_11726[(7)]);
var inst_11712 = (state_11726[(8)]);
var inst_11717 = (state_11726[(9)]);
var inst_11715 = yinch.game.intrepret_move.call(null,inst_11712,inst_11711);
var inst_11716 = cljs.core.nth.call(null,inst_11715,(0),null);
var inst_11717__$1 = cljs.core.nth.call(null,inst_11715,(1),null);
var inst_11718 = cljs.core.async.put_BANG_.call(null,state_chan,inst_11717__$1);
var inst_11719 = cljs.core.async.put_BANG_.call(null,status_chan,inst_11716);
var state_11726__$1 = (function (){var statearr_11730 = state_11726;
(statearr_11730[(10)] = inst_11718);

(statearr_11730[(11)] = inst_11719);

(statearr_11730[(9)] = inst_11717__$1);

return statearr_11730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11726__$1,(5),interaction_chan);
} else {
if((state_val_11727 === (4))){
var inst_11724 = (state_11726[(2)]);
var state_11726__$1 = state_11726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11726__$1,inst_11724);
} else {
if((state_val_11727 === (5))){
var inst_11717 = (state_11726[(9)]);
var inst_11721 = (state_11726[(2)]);
var inst_11711 = inst_11721;
var inst_11712 = inst_11717;
var state_11726__$1 = (function (){var statearr_11731 = state_11726;
(statearr_11731[(7)] = inst_11711);

(statearr_11731[(8)] = inst_11712);

return statearr_11731;
})();
var statearr_11732_11742 = state_11726__$1;
(statearr_11732_11742[(2)] = null);

(statearr_11732_11742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan))
;
return ((function (switch__8222__auto__,c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan){
return (function() {
var yinch$core$state_machine__8223__auto__ = null;
var yinch$core$state_machine__8223__auto____0 = (function (){
var statearr_11736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11736[(0)] = yinch$core$state_machine__8223__auto__);

(statearr_11736[(1)] = (1));

return statearr_11736;
});
var yinch$core$state_machine__8223__auto____1 = (function (state_11726){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_11726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e11737){if((e11737 instanceof Object)){
var ex__8226__auto__ = e11737;
var statearr_11738_11743 = state_11726;
(statearr_11738_11743[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11744 = state_11726;
state_11726 = G__11744;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
yinch$core$state_machine__8223__auto__ = function(state_11726){
switch(arguments.length){
case 0:
return yinch$core$state_machine__8223__auto____0.call(this);
case 1:
return yinch$core$state_machine__8223__auto____1.call(this,state_11726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yinch$core$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = yinch$core$state_machine__8223__auto____0;
yinch$core$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = yinch$core$state_machine__8223__auto____1;
return yinch$core$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan))
})();
var state__8286__auto__ = (function (){var statearr_11739 = f__8285__auto__.call(null);
(statearr_11739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);

return statearr_11739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto__,vec__11708,state_chan,status_chan,interaction_chan))
);

return c__8284__auto__;
});

yinch.core.start.cljs$lang$maxFixedArity = 1;
