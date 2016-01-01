// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.game');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cemerick.url');
goog.require('yinch.board');
goog.require('yinch.utils');
/**
 * Given a game (containing a start position on :highlight-cell) and a target
 * cell, calculate if it is valid to hop a ring from :highlight-cell to target
 * cell.
 */
yinch.game.line_blocked_QMARK_ = (function yinch$game$line_blocked_QMARK_(game,p__11848){
var vec__11851 = p__11848;
var target_major = cljs.core.nth.call(null,vec__11851,(0),null);
var target_minor = cljs.core.nth.call(null,vec__11851,(1),null);
var vec__11852 = new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833).cljs$core$IFn$_invoke$arity$1(game);
var source_major = cljs.core.nth.call(null,vec__11852,(0),null);
var source_minor = cljs.core.nth.call(null,vec__11852,(1),null);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var major_step = yinch.utils.signum.call(null,(target_major - source_major));
var minor_step = yinch.utils.signum.call(null,(target_minor - source_minor));
var major = (source_major + major_step);
var minor = (source_minor + minor_step);
var hopped = false;
var last_occupied = false;
while(true){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"ring","ring",-974350330))){
return true;
} else {
if((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"empty","empty",767870958))) && (!(last_occupied)) && (hopped)){
return true;
} else {
if((cljs.core._EQ_.call(null,major,target_major)) && (cljs.core._EQ_.call(null,minor,target_minor))){
return false;
} else {
var G__11853 = (major + major_step);
var G__11854 = (minor + minor_step);
var G__11855 = (hopped) || (cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"empty","empty",767870958)));
var G__11856 = cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"empty","empty",767870958));
major = G__11853;
minor = G__11854;
hopped = G__11855;
last_occupied = G__11856;
continue;

}
}
}
break;
}
});
/**
 * Takes a game map and returns a game map with all the tile-occupied cells
 * between cell-1 and cell-2 of inverted color.
 */
yinch.game.flip_between = (function yinch$game$flip_between(game,cell_1,cell_2){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.reduce.call(null,(function (board,p__11859){
var vec__11860 = p__11859;
var major = cljs.core.nth.call(null,vec__11860,(0),null);
var minor = cljs.core.nth.call(null,vec__11860,(1),null);
return cljs.core.update_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null),((function (vec__11860,major,minor){
return (function (cell){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"tile","tile",758132866))){
return cljs.core.assoc.call(null,cell,new cljs.core.Keyword(null,"color","color",1011675173),yinch.utils.other.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cell)));
} else {
return cell;
}
});})(vec__11860,major,minor))
);
}),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),yinch.board.cells_between.call(null,cell_1,cell_2)));
});
/**
 * Major/minor pairs of step-increments that permit valid lines.
 */
yinch.game.axial_steps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
/**
 * Returns the member of runs whose center cell is closest to (major, minor) or
 * nil if there there is a tie or or runs is empty.
 */
yinch.game.best_run = (function yinch$game$best_run(runs,major,minor){
var sorted_runs = cljs.core.sort_by.call(null,cljs.core.first,cljs.core.map.call(null,(function (p__11867){
var vec__11868 = p__11867;
var vec__11869 = cljs.core.nth.call(null,vec__11868,(0),null);
var maj1 = cljs.core.nth.call(null,vec__11869,(0),null);
var mn1 = cljs.core.nth.call(null,vec__11869,(1),null);
var vec__11870 = cljs.core.nth.call(null,vec__11868,(1),null);
var maj2 = cljs.core.nth.call(null,vec__11870,(0),null);
var mn2 = cljs.core.nth.call(null,vec__11870,(1),null);
var maj_center = ((maj1 + maj2) / (2));
var mn_center = ((mn1 + mn2) / (2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(yinch.utils.abs.call(null,(maj_center - major)) + yinch.utils.abs.call(null,(mn_center - minor))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maj1,mn1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maj2,mn2], null)], null)], null);
}),runs));
var vec__11866 = cljs.core.first.call(null,sorted_runs);
var best_dist = cljs.core.nth.call(null,vec__11866,(0),null);
var best_run__$1 = cljs.core.nth.call(null,vec__11866,(1),null);
if(cljs.core._EQ_.call(null,best_dist,cljs.core.first.call(null,cljs.core.second.call(null,sorted_runs)))){
return null;
} else {
return best_run__$1;
}
});
/**
 * Finds the furthest cell along a line (determined by step arg) from a test
 * point that has a tile of the same color as the tile in the initial cell.
 */
yinch.game.cast_ray = (function yinch$game$cast_ray(board,p__11871,p__11872){
var vec__11875 = p__11871;
var test_major = cljs.core.nth.call(null,vec__11875,(0),null);
var test_minor = cljs.core.nth.call(null,vec__11875,(1),null);
var vec__11876 = p__11872;
var major_step = cljs.core.nth.call(null,vec__11876,(0),null);
var minor_step = cljs.core.nth.call(null,vec__11876,(1),null);
var color = cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_major,test_minor,new cljs.core.Keyword(null,"color","color",1011675173)], null));
var major = test_major;
var minor = test_minor;
var extremum = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_major,test_minor], null);
while(true){
if(cljs.core.not.call(null,yinch.board.cell_valid_QMARK_.call(null,major,minor))){
return extremum;
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"tile","tile",758132866),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return extremum;
} else {
if(cljs.core._EQ_.call(null,color,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor,new cljs.core.Keyword(null,"color","color",1011675173)], null)))){
var G__11877 = (major + major_step);
var G__11878 = (minor + minor_step);
var G__11879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null);
major = G__11877;
minor = G__11878;
extremum = G__11879;
continue;
} else {
return extremum;

}
}
}
break;
}
});
/**
 * Finds contiguous runs that intersect a single cell. Returns a set of such
 * runs.
 */
yinch.game.find_runs_STAR_ = (function yinch$game$find_runs_STAR_(board,p__11880){
var vec__11893 = p__11880;
var test_major = cljs.core.nth.call(null,vec__11893,(0),null);
var test_minor = cljs.core.nth.call(null,vec__11893,(1),null);
var G__11896 = yinch.game.axial_steps;
var vec__11897 = G__11896;
var vec__11898 = cljs.core.nth.call(null,vec__11897,(0),null);
var major_step = cljs.core.nth.call(null,vec__11898,(0),null);
var minor_step = cljs.core.nth.call(null,vec__11898,(1),null);
var remaining_axes = cljs.core.nthnext.call(null,vec__11897,(1));
var runs = cljs.core.PersistentHashSet.EMPTY;
var G__11896__$1 = G__11896;
var runs__$1 = runs;
while(true){
var vec__11899 = G__11896__$1;
var vec__11900 = cljs.core.nth.call(null,vec__11899,(0),null);
var major_step__$1 = cljs.core.nth.call(null,vec__11900,(0),null);
var minor_step__$1 = cljs.core.nth.call(null,vec__11900,(1),null);
var remaining_axes__$1 = cljs.core.nthnext.call(null,vec__11899,(1));
var runs__$2 = runs__$1;
var maximum = yinch.game.cast_ray.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_major,test_minor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major_step__$1,minor_step__$1], null));
var minimum = yinch.game.cast_ray.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_major,test_minor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-1) * major_step__$1),((-1) * minor_step__$1)], null));
var run_length = (function (){var x__4590__auto__ = ((maximum.call(null,(0)) - minimum.call(null,(0))) - (-1));
var y__4591__auto__ = ((maximum.call(null,(1)) - minimum.call(null,(1))) - (-1));
return ((x__4590__auto__ > y__4591__auto__) ? x__4590__auto__ : y__4591__auto__);
})();
var run_count = (run_length - (4));
var updated_runs = cljs.core.into.call(null,runs__$2,(function (){var iter__5032__auto__ = ((function (G__11896__$1,runs__$1,maximum,minimum,run_length,run_count,vec__11899,vec__11900,major_step__$1,minor_step__$1,remaining_axes__$1,runs__$2,G__11896,vec__11897,vec__11898,major_step,minor_step,remaining_axes,runs,vec__11893,test_major,test_minor){
return (function yinch$game$find_runs_STAR__$_iter__11901(s__11902){
return (new cljs.core.LazySeq(null,((function (G__11896__$1,runs__$1,maximum,minimum,run_length,run_count,vec__11899,vec__11900,major_step__$1,minor_step__$1,remaining_axes__$1,runs__$2,G__11896,vec__11897,vec__11898,major_step,minor_step,remaining_axes,runs,vec__11893,test_major,test_minor){
return (function (){
var s__11902__$1 = s__11902;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11902__$1);
if(temp__4425__auto__){
var s__11902__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11902__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__11902__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__11904 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__11903 = (0);
while(true){
if((i__11903 < size__5031__auto__)){
var offset = cljs.core._nth.call(null,c__5030__auto__,i__11903);
cljs.core.chunk_append.call(null,b__11904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(minimum.call(null,(0)) + (offset * major_step__$1)),(minimum.call(null,(1)) + (offset * minor_step__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((minimum.call(null,(0)) + (offset * major_step__$1)) + (major_step__$1 * (4))),((minimum.call(null,(1)) + (offset * minor_step__$1)) + (minor_step__$1 * (4)))], null)], null));

var G__11905 = (i__11903 + (1));
i__11903 = G__11905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),yinch$game$find_runs_STAR__$_iter__11901.call(null,cljs.core.chunk_rest.call(null,s__11902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11904),null);
}
} else {
var offset = cljs.core.first.call(null,s__11902__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(minimum.call(null,(0)) + (offset * major_step__$1)),(minimum.call(null,(1)) + (offset * minor_step__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((minimum.call(null,(0)) + (offset * major_step__$1)) + (major_step__$1 * (4))),((minimum.call(null,(1)) + (offset * minor_step__$1)) + (minor_step__$1 * (4)))], null)], null),yinch$game$find_runs_STAR__$_iter__11901.call(null,cljs.core.rest.call(null,s__11902__$2)));
}
} else {
return null;
}
break;
}
});})(G__11896__$1,runs__$1,maximum,minimum,run_length,run_count,vec__11899,vec__11900,major_step__$1,minor_step__$1,remaining_axes__$1,runs__$2,G__11896,vec__11897,vec__11898,major_step,minor_step,remaining_axes,runs,vec__11893,test_major,test_minor))
,null,null));
});})(G__11896__$1,runs__$1,maximum,minimum,run_length,run_count,vec__11899,vec__11900,major_step__$1,minor_step__$1,remaining_axes__$1,runs__$2,G__11896,vec__11897,vec__11898,major_step,minor_step,remaining_axes,runs,vec__11893,test_major,test_minor))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,(function (){var x__4590__auto__ = (0);
var y__4591__auto__ = run_count;
return ((x__4590__auto__ > y__4591__auto__) ? x__4590__auto__ : y__4591__auto__);
})()));
})());
if(cljs.core.seq.call(null,remaining_axes__$1)){
var G__11906 = remaining_axes__$1;
var G__11907 = updated_runs;
G__11896__$1 = G__11906;
runs__$1 = G__11907;
continue;
} else {
return updated_runs;
}
break;
}
});
/**
 * Takes a list of cells that have changed recently and returns a set of length
 * 5 runs that include one of more of those cells. Runs are represented as
 * 3 vectors of the format [color [major-1 minor-1] [major-2 minor-2]].
 */
yinch.game.find_runs = (function yinch$game$find_runs(board,cells_to_consider){
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.partial.call(null,yinch.game.find_runs_STAR_,board),cells_to_consider));
});
/**
 * Returns true if no two members of `runs` contain the same cell.
 */
yinch.game.mutually_exclusive_QMARK_ = (function yinch$game$mutually_exclusive_QMARK_(runs){
var run_membership = cljs.core.reduce.call(null,(function (acc,p__11910){
var vec__11911 = p__11910;
var from = cljs.core.nth.call(null,vec__11911,(0),null);
var to = cljs.core.nth.call(null,vec__11911,(1),null);
return clojure.set.union.call(null,acc,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,yinch.board.cells_between.call(null,from,to)));
}),cljs.core.PersistentHashSet.EMPTY,runs);
return cljs.core._EQ_.call(null,cljs.core.count.call(null,run_membership),((5) * cljs.core.count.call(null,runs)));
});
/**
 * Takes a game and a player. Returns the game in a victory state if the player
 * has won, otherwise returns the game unchanged.
 */
yinch.game.check_victory = (function yinch$game$check_victory(game,player){
var ring_count = player.call(null,new cljs.core.Keyword(null,"rings-remaining","rings-remaining",742473055).cljs$core$IFn$_invoke$arity$1(game));
var effective_ring_count = (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game),player)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ring-removal","ring-removal",1265560688))))?(ring_count - (1)):ring_count);
if((effective_ring_count < (3))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"victory","victory",782027403)),new cljs.core.Keyword(null,"winner","winner",714604679),player);
} else {
return game;
}
});
/**
 * 
 */
yinch.game.clear_adtl_runs = (function yinch$game$clear_adtl_runs(game,player){
return yinch.game.clear_runs.call(null,game,yinch.board.cells,player);
});
/**
 * Takes a game and a run. Returns the game with the specified run cleared from
 * the board and in the ring-removal state for the appropriate player. If removal
 * of the run produces a victory condition, return the game in that state.
 */
yinch.game.clear_run = (function yinch$game$clear_run(){
var G__11914 = arguments.length;
switch (G__11914) {
case 2:
return yinch.game.clear_run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return yinch.game.clear_run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.game.clear_run.cljs$core$IFn$_invoke$arity$2 = (function (game,run){
return yinch.game.clear_run.call(null,game,run,null);
});

yinch.game.clear_run.cljs$core$IFn$_invoke$arity$3 = (function (game,p__11915,click_position){
var vec__11916 = p__11915;
var run_start = cljs.core.nth.call(null,vec__11916,(0),null);
var run_end = cljs.core.nth.call(null,vec__11916,(1),null);
var run_color = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),run_start.call(null,(0)),run_start.call(null,(1)),new cljs.core.Keyword(null,"color","color",1011675173)], null));
return cljs.core.reduce.call(null,((function (run_color,vec__11916,run_start,run_end){
return (function (game__$1,p__11917){
var vec__11918 = p__11917;
var major = cljs.core.nth.call(null,vec__11918,(0),null);
var minor = cljs.core.nth.call(null,vec__11918,(1),null);
return cljs.core.assoc_in.call(null,game__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958)], null));
});})(run_color,vec__11916,run_start,run_end))
,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"turn","turn",75759344),run_color),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-removal","ring-removal",1265560688)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),((function (run_color,vec__11916,run_start,run_end){
return (function (p1__11912_SHARP_){
return cljs.core.conj.call(null,p1__11912_SHARP_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear-run","clear-run",830783369),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"run-start","run-start",1984981840),run_start,new cljs.core.Keyword(null,"run-end","run-end",1293087716),run_end,new cljs.core.Keyword(null,"click-position","click-position",-966093927),click_position], null));
});})(run_color,vec__11916,run_start,run_end))
),yinch.board.cells_between.call(null,run_start,run_end));
});

yinch.game.clear_run.cljs$lang$maxFixedArity = 3;
/**
 * Clears a set of runs belonging to a given player.
 */
yinch.game.clear_runs_for_player = (function yinch$game$clear_runs_for_player(game,player,runs){
var first_run = cljs.core.first.call(null,runs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,runs),(0))){
return game;
} else {
if(cljs.core.truth_(yinch.game.mutually_exclusive_QMARK_.call(null,runs))){
return yinch.game.check_victory.call(null,yinch.game.clear_run.call(null,game,first_run),player);
} else {
return yinch.game.check_victory.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"run-pick","run-pick",-1842216705)),new cljs.core.Keyword(null,"turn","turn",75759344),player),player);

}
}
});
/**
 * Takes a game state and a list of cells that have changed recently. The
 * `first-player` arg may be one of :black or :white, that player will be the
 * first to clear their runs.
 */
yinch.game.clear_runs = (function yinch$game$clear_runs(){
var G__11921 = arguments.length;
switch (G__11921) {
case 2:
return yinch.game.clear_runs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return yinch.game.clear_runs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.game.clear_runs.cljs$core$IFn$_invoke$arity$2 = (function (game,cells_to_consider){
return yinch.game.clear_runs.call(null,game,cells_to_consider,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game));
});

yinch.game.clear_runs.cljs$core$IFn$_invoke$arity$3 = (function (game,cells_to_consider,first_player){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"black","black",1294279647),null], null), null),first_player)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"black","black",1294279647),null], null), null),new cljs.core.Symbol(null,"first-player","first-player",-1737016922,null))))].join('')));
}

var runs = yinch.game.find_runs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),cells_to_consider);
var p_runs = cljs.core.group_by.call(null,((function (runs){
return (function (p__11922){
var vec__11923 = p__11922;
var vec__11924 = cljs.core.nth.call(null,vec__11923,(0),null);
var maj = cljs.core.nth.call(null,vec__11924,(0),null);
var mn = cljs.core.nth.call(null,vec__11924,(1),null);
var _ = cljs.core.nthnext.call(null,vec__11923,(1));
return cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),maj,mn,new cljs.core.Keyword(null,"color","color",1011675173)], null));
});})(runs))
,runs);
if(cljs.core.seq.call(null,p_runs.call(null,first_player))){
return yinch.game.clear_runs_for_player.call(null,game,first_player,p_runs.call(null,first_player));
} else {
if(cljs.core.seq.call(null,p_runs.call(null,yinch.utils.other.call(null,first_player)))){
return yinch.game.clear_runs_for_player.call(null,game,yinch.utils.other.call(null,first_player),p_runs.call(null,yinch.utils.other.call(null,first_player)));
} else {
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"next-ring-picker","next-ring-picker",1195671905).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"next-ring-picker","next-ring-picker",1195671905));

}
}
});

yinch.game.clear_runs.cljs$lang$maxFixedArity = 3;
/**
 * Returns a url for viewing a game state.
 */
yinch.game.urlize = (function yinch$game$urlize(){
var G__11927 = arguments.length;
switch (G__11927) {
case 1:
return yinch.game.urlize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return yinch.game.urlize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.game.urlize.cljs$core$IFn$_invoke$arity$1 = (function (game){
return yinch.game.urlize.call(null,game,"http://localhost:3000");
});

yinch.game.urlize.cljs$core$IFn$_invoke$arity$2 = (function (game,base){
return [cljs.core.str(cljs.core.assoc.call(null,cemerick.url.url.call(null,base,"index.html"),new cljs.core.Keyword(null,"anchor","anchor",1549638489),cemerick.url.url_encode.call(null,cljs.core.prn_str.call(null,game))))].join('');
});

yinch.game.urlize.cljs$lang$maxFixedArity = 2;
yinch.game.gipf_pad = (function yinch$game$gipf_pad(s){
return cljs.core.apply.call(null,cljs.core.str,s,cljs.core.map.call(null,cljs.core.constantly.call(null," "),cljs.core.range.call(null,((26) - cljs.core.count.call(null,s)))));
});
yinch.game.gipf_sep = (function yinch$game$gipf_sep(move){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"white","white",-483998618))){
return "\t";
} else {
return "\n";
}
});
yinch.game.game__GT_script = (function yinch$game$game__GT_script(p__11929){
var map__11932 = p__11929;
var map__11932__$1 = ((cljs.core.seq_QMARK_.call(null,map__11932))?cljs.core.apply.call(null,cljs.core.hash_map,map__11932):map__11932);
var history = cljs.core.get.call(null,map__11932__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,((function (map__11932,map__11932__$1,history){
return (function (script,move){
var G__11933 = (((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(move) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(move).fqn:null);
switch (G__11933) {
case "place-ring":
return cljs.core.conj.call(null,script,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(move).call(null,(0)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(move).call(null,(1))], null));

break;
case "ring-move":
return cljs.core.conj.call(null,script,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(move).call(null,(0)),new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(move).call(null,(1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(move).call(null,(0)),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(move).call(null,(1))], null));

break;
case "clear-run":
if((new cljs.core.Keyword(null,"click-position","click-position",-966093927).cljs$core$IFn$_invoke$arity$1(move) == null)){
return script;
} else {
return cljs.core.conj.call(null,script,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"click-position","click-position",-966093927).cljs$core$IFn$_invoke$arity$1(move).call(null,(0)),new cljs.core.Keyword(null,"click-position","click-position",-966093927).cljs$core$IFn$_invoke$arity$1(move).call(null,(1))], null));
}

break;
case "remove-ring":
return cljs.core.conj.call(null,script,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"ring-position","ring-position",-495482370).cljs$core$IFn$_invoke$arity$1(move).call(null,(0)),new cljs.core.Keyword(null,"ring-position","ring-position",-495482370).cljs$core$IFn$_invoke$arity$1(move).call(null,(1))], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(move))].join('')));

}
});})(map__11932,map__11932__$1,history))
,null,history));
});
/**
 * Creates a new game map in the initial state (ring placement, white starts).
 */
yinch.game.new_game = (function yinch$game$new_game(){
var G__11936 = arguments.length;
switch (G__11936) {
case 0:
return yinch.game.new_game.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return yinch.game.new_game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.game.new_game.cljs$core$IFn$_invoke$arity$0 = (function (){
return yinch.game.new_game.call(null,true);
});

yinch.game.new_game.cljs$core$IFn$_invoke$arity$1 = (function (track_history){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"board","board",-1907017633),yinch.board.make_board.call(null),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-placement","ring-placement",939233636),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"rings-placed","rings-placed",-1246402930),(0),new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833),null,new cljs.core.Keyword(null,"rings-remaining","rings-remaining",742473055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),(5),new cljs.core.Keyword(null,"white","white",-483998618),(5)], null),new cljs.core.Keyword(null,"track-history","track-history",-250159393),track_history,new cljs.core.Keyword(null,"history","history",-247395220),null], null);
});

yinch.game.new_game.cljs$lang$maxFixedArity = 1;
yinch.game.place_ring = (function yinch$game$place_ring(game,player,major,minor){
var cell = yinch.board.get_cell.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),major,minor);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"empty","empty",767870958))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"You can not place a ring in an occupied cell."], null),game], null);
} else {
var updated_game = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rings-placed","rings-placed",-1246402930)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"color","color",1011675173),player], null));
var status = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"place-ring","place-ring",-1640618086),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null),new cljs.core.Keyword(null,"player","player",-97687400),player], null))], null);
if((new cljs.core.Keyword(null,"rings-placed","rings-placed",-1246402930).cljs$core$IFn$_invoke$arity$1(updated_game) >= (10))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,cljs.core.assoc.call(null,cljs.core.assoc.call(null,updated_game,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-pick","ring-pick",65558159)),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"black","black",1294279647))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,cljs.core.assoc.call(null,updated_game,new cljs.core.Keyword(null,"turn","turn",75759344),yinch.utils.other.call(null,player))], null);
}
}
});
yinch.game.pick_ring = (function yinch$game$pick_ring(game,player,major,minor){
var cell = yinch.board.get_cell.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),major,minor);
if(cljs.core.not_EQ_.call(null,cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"color","color",1011675173),player], null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"You can only move rings of your own color."], null),game], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906)], null),cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-drop","ring-drop",1096995993))], null);
}
});
yinch.game.drop_ring = (function yinch$game$drop_ring(game,player,major,minor){
var vec__11940 = new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833).cljs$core$IFn$_invoke$arity$1(game);
var from_major = cljs.core.nth.call(null,vec__11940,(0),null);
var from_minor = cljs.core.nth.call(null,vec__11940,(1),null);
if(cljs.core.truth_((function (){var or__4278__auto__ = cljs.core.not.call(null,yinch.board.line_valid_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_major,from_minor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)));
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor,new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"empty","empty",767870958));
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
return yinch.game.line_blocked_QMARK_.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"Not a valid move."], null),game], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906)], null),yinch.game.clear_runs.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,yinch.game.flip_between.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"next-ring-picker","next-ring-picker",1195671905),yinch.utils.other.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game))),new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833),null),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-pick","ring-pick",65558159)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_major,from_minor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),from_major,from_minor,new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"tile","tile",758132866)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),((function (vec__11940,from_major,from_minor){
return (function (p1__11938_SHARP_){
return cljs.core.conj.call(null,p1__11938_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"ring-move","ring-move",122464084),new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)], null));
});})(vec__11940,from_major,from_minor))
),yinch.board.cells_between.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_major,from_minor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game))], null);
}
});
yinch.game.pick_run = (function yinch$game$pick_run(game,player,major,minor){
var run = yinch.game.best_run.call(null,yinch.game.find_runs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)], null)),major,minor);
if((run == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"That cell isn't a part of any run."], null),game], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906)], null),yinch.game.clear_run.call(null,game,run,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null))], null);
}
});
yinch.game.remove_ring = (function yinch$game$remove_ring(game,player,major,minor){
var cell = yinch.board.get_cell.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),major,minor);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"ring","ring",-974350330))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"You must pick a ring to remove from the board."], null),game], null);
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cell),player)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"You must pick a ring of your own color to remove."], null),game], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"remove-ring","remove-ring",-329228090),new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"ring-position","ring-position",-495482370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null)], null))], null),yinch.game.clear_adtl_runs.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rings-remaining","rings-remaining",742473055),player], null),cljs.core.dec),new cljs.core.Keyword(null,"turn","turn",75759344),yinch.utils.other.call(null,player)),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"ring-pick","ring-pick",65558159)),player)], null);

}
}
});
/**
 * Takes a game, player indication, and grid position and returns a pair
 * [status game-map] that represents the result of applying the move (if the
 * move was valid or not, if not why) and the state of the game after the move.
 */
yinch.game.intrepret_click = (function yinch$game$intrepret_click(game,player,major,minor){
if(cljs.core.not.call(null,yinch.board.cell_valid_QMARK_.call(null,major,minor))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"Not a valid board position."], null),game], null);
} else {
if(cljs.core.not_EQ_.call(null,player,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"Not your turn."], null),game], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ring-placement","ring-placement",939233636))){
return yinch.game.place_ring.call(null,game,player,major,minor);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ring-pick","ring-pick",65558159))){
return yinch.game.pick_ring.call(null,game,player,major,minor);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ring-drop","ring-drop",1096995993))){
return yinch.game.drop_ring.call(null,game,player,major,minor);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"run-pick","run-pick",-1842216705))){
return yinch.game.pick_run.call(null,game,player,major,minor);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"ring-removal","ring-removal",1265560688))){
return yinch.game.remove_ring.call(null,game,player,major,minor);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"victory","victory",782027403))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"reason","reason",-2070751759),"The game is over, no futher moves allowed."], null),game], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"reason","reason",-2070751759),"Game appears to be in an invalid state.",new cljs.core.Keyword(null,"game-phase","game-phase",456680589),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game)], null),null], null);

}
}
}
}
}
}
}
}
});
yinch.game.intrepret_move = (function yinch$game$intrepret_move(game,move){
var _PERCENT_ = (function (){var vec__11945 = (function (){var G__11946 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(move) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(move).fqn:null);
switch (G__11946) {
case "grid-click":
return cljs.core.apply.call(null,yinch.game.intrepret_click,game,new cljs.core.Keyword(null,"click-info","click-info",1742344538).cljs$core$IFn$_invoke$arity$1(move));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(move))].join('')));

}
})();
var status = cljs.core.nth.call(null,vec__11945,(0),null);
var new_game = cljs.core.nth.call(null,vec__11945,(1),null);
if(cljs.core.truth_((function (){var and__4266__auto__ = new cljs.core.Keyword(null,"track-history","track-history",-250159393).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(and__4266__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(status),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return and__4266__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,cljs.core.update_in.call(null,new_game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),((function (vec__11945,status,new_game){
return (function (p1__11941_SHARP_){
return cljs.core.apply.call(null,cljs.core.conj,p1__11941_SHARP_,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(status));
});})(vec__11945,status,new_game))
)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new_game], null);
}
})();
if(cljs.core.truth_((function (){var G__11947 = (((cljs.core.get_in.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"status","status",-1997798413)], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"status","status",-1997798413)], null)).fqn:null);
switch (G__11947) {
case "success":
return true;

break;
case "failure":
return cljs.core._EQ_.call(null,_PERCENT_.call(null,(1)),game);

break;
case "error":
return (_PERCENT_ == null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"status","status",-1997798413)], null)))].join('')));

}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"status","status",-1997798413)], null)),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"%","%",-950237169,null),(1)),new cljs.core.Symbol(null,"game","game",1199007694,null)),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});
