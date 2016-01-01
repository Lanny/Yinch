// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.board');
goog.require('cljs.core');
goog.require('yinch.utils');
/**
 * The number of edges along each of the axies.
 */
yinch.board.axis_lengths = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6),(7),(8),(9),(8),(9),(8),(7),(6),(3)], null);
/**
 * The number of conter-axies that are skipped before an intersection.
 */
yinch.board.axis_staggers = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(1),(1),(2),(3),(4),(6)], null);
yinch.board.major_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4","5","6","7","8","9","10","11","12"], null);
yinch.board.minor_names = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h","i","j","k"], null);
/**
 * Execute a callback for each valid cell on the board. Non-lazy.
 */
yinch.board.for_cell = (function yinch$board$for_cell(cb){
return cljs.core.doall.call(null,(function (){var iter__5032__auto__ = (function yinch$board$for_cell_$_iter__11769(s__11770){
return (new cljs.core.LazySeq(null,(function (){
var s__11770__$1 = s__11770;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11770__$1);
if(temp__4425__auto__){
var s__11770__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11770__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__11770__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__11772 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__11771 = (0);
while(true){
if((i__11771 < size__5031__auto__)){
var major = cljs.core._nth.call(null,c__5030__auto__,i__11771);
cljs.core.chunk_append.call(null,b__11772,cljs.core.doall.call(null,(function (){var iter__5032__auto__ = ((function (i__11771,major,c__5030__auto__,size__5031__auto__,b__11772,s__11770__$2,temp__4425__auto__){
return (function yinch$board$for_cell_$_iter__11769_$_iter__11781(s__11782){
return (new cljs.core.LazySeq(null,((function (i__11771,major,c__5030__auto__,size__5031__auto__,b__11772,s__11770__$2,temp__4425__auto__){
return (function (){
var s__11782__$1 = s__11782;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__11782__$1);
if(temp__4425__auto____$1){
var s__11782__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11782__$2)){
var c__5030__auto____$1 = cljs.core.chunk_first.call(null,s__11782__$2);
var size__5031__auto____$1 = cljs.core.count.call(null,c__5030__auto____$1);
var b__11784 = cljs.core.chunk_buffer.call(null,size__5031__auto____$1);
if((function (){var i__11783 = (0);
while(true){
if((i__11783 < size__5031__auto____$1)){
var minor = cljs.core._nth.call(null,c__5030__auto____$1,i__11783);
cljs.core.chunk_append.call(null,b__11784,cb.call(null,major,minor));

var G__11789 = (i__11783 + (1));
i__11783 = G__11789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11784),yinch$board$for_cell_$_iter__11769_$_iter__11781.call(null,cljs.core.chunk_rest.call(null,s__11782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11784),null);
}
} else {
var minor = cljs.core.first.call(null,s__11782__$2);
return cljs.core.cons.call(null,cb.call(null,major,minor),yinch$board$for_cell_$_iter__11769_$_iter__11781.call(null,cljs.core.rest.call(null,s__11782__$2)));
}
} else {
return null;
}
break;
}
});})(i__11771,major,c__5030__auto__,size__5031__auto__,b__11772,s__11770__$2,temp__4425__auto__))
,null,null));
});})(i__11771,major,c__5030__auto__,size__5031__auto__,b__11772,s__11770__$2,temp__4425__auto__))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,yinch.board.axis_staggers.call(null,major),((yinch.board.axis_staggers.call(null,major) + yinch.board.axis_lengths.call(null,major)) + (1))));
})()));

var G__11790 = (i__11771 + (1));
i__11771 = G__11790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11772),yinch$board$for_cell_$_iter__11769.call(null,cljs.core.chunk_rest.call(null,s__11770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11772),null);
}
} else {
var major = cljs.core.first.call(null,s__11770__$2);
return cljs.core.cons.call(null,cljs.core.doall.call(null,(function (){var iter__5032__auto__ = ((function (major,s__11770__$2,temp__4425__auto__){
return (function yinch$board$for_cell_$_iter__11769_$_iter__11785(s__11786){
return (new cljs.core.LazySeq(null,((function (major,s__11770__$2,temp__4425__auto__){
return (function (){
var s__11786__$1 = s__11786;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__11786__$1);
if(temp__4425__auto____$1){
var s__11786__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11786__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__11786__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__11788 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__11787 = (0);
while(true){
if((i__11787 < size__5031__auto__)){
var minor = cljs.core._nth.call(null,c__5030__auto__,i__11787);
cljs.core.chunk_append.call(null,b__11788,cb.call(null,major,minor));

var G__11791 = (i__11787 + (1));
i__11787 = G__11791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11788),yinch$board$for_cell_$_iter__11769_$_iter__11785.call(null,cljs.core.chunk_rest.call(null,s__11786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11788),null);
}
} else {
var minor = cljs.core.first.call(null,s__11786__$2);
return cljs.core.cons.call(null,cb.call(null,major,minor),yinch$board$for_cell_$_iter__11769_$_iter__11785.call(null,cljs.core.rest.call(null,s__11786__$2)));
}
} else {
return null;
}
break;
}
});})(major,s__11770__$2,temp__4425__auto__))
,null,null));
});})(major,s__11770__$2,temp__4425__auto__))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,yinch.board.axis_staggers.call(null,major),((yinch.board.axis_staggers.call(null,major) + yinch.board.axis_lengths.call(null,major)) + (1))));
})()),yinch$board$for_cell_$_iter__11769.call(null,cljs.core.rest.call(null,s__11770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5032__auto__.call(null,cljs.core.range.call(null,(11)));
})());
});
yinch.board.cells = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.conj),yinch.board.for_cell.call(null,(function (maj,mn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maj,mn], null);
})));
/**
 * Returns true if cell (major, minor) exists on a (platonic) Yinsh board.
 * false otherwise.
 */
yinch.board.cell_valid_QMARK_ = (function yinch$board$cell_valid_QMARK_(major,minor){
return (cljs.core.contains_QMARK_.call(null,yinch.board.axis_staggers,major)) && (cljs.core.contains_QMARK_.call(null,yinch.board.axis_staggers,minor)) && ((minor >= yinch.board.axis_staggers.call(null,major))) && ((minor <= (yinch.board.axis_lengths.call(null,major) + yinch.board.axis_staggers.call(null,major))));
});
/**
 * Throws an exception if cell (major, minor) does not exist on a Yinsh board.
 */
yinch.board.check_cell = (function yinch$board$check_cell(major,minor){
if(cljs.core.not.call(null,yinch.board.cell_valid_QMARK_.call(null,major,minor))){
throw [cljs.core.str("("),cljs.core.str(major),cljs.core.str(", "),cljs.core.str(minor),cljs.core.str(") is not a valid cell.")].join('');
} else {
return null;
}
});
/**
 * Returns true if there is a straight line on a Yinch board between the given
 * pair of cells designated by [major minor] pairs.
 */
yinch.board.line_valid_QMARK_ = (function yinch$board$line_valid_QMARK_(start,end){
var vec__11794 = start;
var start_major = cljs.core.nth.call(null,vec__11794,(0),null);
var start_minor = cljs.core.nth.call(null,vec__11794,(1),null);
var vec__11795 = end;
var end_major = cljs.core.nth.call(null,vec__11795,(0),null);
var end_minor = cljs.core.nth.call(null,vec__11795,(1),null);
var major_delta = (end_major - start_major);
var minor_delta = (end_minor - start_minor);
var and__4266__auto__ = cljs.core.apply.call(null,yinch.board.cell_valid_QMARK_,start);
if(cljs.core.truth_(and__4266__auto__)){
var and__4266__auto____$1 = cljs.core.apply.call(null,yinch.board.cell_valid_QMARK_,end);
if(cljs.core.truth_(and__4266__auto____$1)){
return (!(cljs.core._EQ_.call(null,start,end))) && ((((major_delta === (0))) || ((minor_delta === (0)))) || ((cljs.core._EQ_.call(null,major_delta,minor_delta)) && (cljs.core._EQ_.call(null,yinch.utils.signum.call(null,major_delta),yinch.utils.signum.call(null,minor_delta)))));
} else {
return and__4266__auto____$1;
}
} else {
return and__4266__auto__;
}
});
/**
 * Returns a list of cells that lie between from and to cells or nil if there
 * is no line between them.
 */
yinch.board.cells_between = (function yinch$board$cells_between(from,to){
if(cljs.core.not.call(null,yinch.board.line_valid_QMARK_.call(null,from,to))){
return null;
} else {
var vec__11798 = from;
var from_major = cljs.core.nth.call(null,vec__11798,(0),null);
var from_minor = cljs.core.nth.call(null,vec__11798,(1),null);
var vec__11799 = to;
var to_major = cljs.core.nth.call(null,vec__11799,(0),null);
var to_minor = cljs.core.nth.call(null,vec__11799,(1),null);
var major_step = yinch.utils.signum.call(null,(to_major - from_major));
var minor_step = yinch.utils.signum.call(null,(to_minor - from_minor));
var major = from_major;
var minor = from_minor;
var cells = cljs.core.List.EMPTY;
while(true){
if((cljs.core._EQ_.call(null,major,to_major)) && (cljs.core._EQ_.call(null,minor,to_minor))){
return cljs.core.conj.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
} else {
var G__11800 = (major + major_step);
var G__11801 = (minor + minor_step);
var G__11802 = cljs.core.conj.call(null,cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
major = G__11800;
minor = G__11801;
cells = G__11802;
continue;
}
break;
}
}
});
/**
 * Returns the board with the cell at (major, minor) set to the opposite color.
 * It is an error to flip a cell of any type other than :tile
 */
yinch.board.flip_cell = (function yinch$board$flip_cell(board,major,minor){
yinch.board.check_cell.call(null,major,minor);

var row = board.call(null,major);
var cell = row.call(null,minor);
var cell_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.not_EQ_.call(null,cell_type,new cljs.core.Keyword(null,"tile","tile",758132866))){
return [cljs.core.str("("),cljs.core.str(major),cljs.core.str(", "),cljs.core.str(minor),cljs.core.str(") is of type :"),cljs.core.str(cell_type),cljs.core.str("must be of type :tile.")].join('');
} else {
return cljs.core.assoc.call(null,board,major,cljs.core.assoc.call(null,row,minor,cljs.core.assoc.call(null,cell,new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"white","white",-483998618)))?new cljs.core.Keyword(null,"black","black",1294279647):new cljs.core.Keyword(null,"white","white",-483998618)))));
}
});
/**
 * Returns the cell stored in board at position (major, minor).
 */
yinch.board.get_cell = (function yinch$board$get_cell(board,major,minor){
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
});
/**
 * Returns board with the cell at (major, minor) set to value.
 */
yinch.board.assoc_cell = (function yinch$board$assoc_cell(board,major,minor,value){
yinch.board.check_cell.call(null,major,minor);

return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null),value);
});
/**
 * Create a new board object.
 */
yinch.board.make_board = (function yinch$board$make_board(){
return cljs.core.vec.call(null,(function (){var iter__5032__auto__ = (function yinch$board$make_board_$_iter__11823(s__11824){
return (new cljs.core.LazySeq(null,(function (){
var s__11824__$1 = s__11824;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11824__$1);
if(temp__4425__auto__){
var s__11824__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11824__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__11824__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__11826 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__11825 = (0);
while(true){
if((i__11825 < size__5031__auto__)){
var major = cljs.core._nth.call(null,c__5030__auto__,i__11825);
cljs.core.chunk_append.call(null,b__11826,cljs.core.vec.call(null,(function (){var iter__5032__auto__ = ((function (i__11825,major,c__5030__auto__,size__5031__auto__,b__11826,s__11824__$2,temp__4425__auto__){
return (function yinch$board$make_board_$_iter__11823_$_iter__11835(s__11836){
return (new cljs.core.LazySeq(null,((function (i__11825,major,c__5030__auto__,size__5031__auto__,b__11826,s__11824__$2,temp__4425__auto__){
return (function (){
var s__11836__$1 = s__11836;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__11836__$1);
if(temp__4425__auto____$1){
var s__11836__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11836__$2)){
var c__5030__auto____$1 = cljs.core.chunk_first.call(null,s__11836__$2);
var size__5031__auto____$1 = cljs.core.count.call(null,c__5030__auto____$1);
var b__11838 = cljs.core.chunk_buffer.call(null,size__5031__auto____$1);
if((function (){var i__11837 = (0);
while(true){
if((i__11837 < size__5031__auto____$1)){
var minor = cljs.core._nth.call(null,c__5030__auto____$1,i__11837);
cljs.core.chunk_append.call(null,b__11838,((((minor >= yinch.board.axis_staggers.call(null,major))) && ((minor <= (yinch.board.axis_lengths.call(null,major) + yinch.board.axis_staggers.call(null,major)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"nil","nil",99600501)], null):null));

var G__11843 = (i__11837 + (1));
i__11837 = G__11843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11838),yinch$board$make_board_$_iter__11823_$_iter__11835.call(null,cljs.core.chunk_rest.call(null,s__11836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11838),null);
}
} else {
var minor = cljs.core.first.call(null,s__11836__$2);
return cljs.core.cons.call(null,((((minor >= yinch.board.axis_staggers.call(null,major))) && ((minor <= (yinch.board.axis_lengths.call(null,major) + yinch.board.axis_staggers.call(null,major)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"nil","nil",99600501)], null):null),yinch$board$make_board_$_iter__11823_$_iter__11835.call(null,cljs.core.rest.call(null,s__11836__$2)));
}
} else {
return null;
}
break;
}
});})(i__11825,major,c__5030__auto__,size__5031__auto__,b__11826,s__11824__$2,temp__4425__auto__))
,null,null));
});})(i__11825,major,c__5030__auto__,size__5031__auto__,b__11826,s__11824__$2,temp__4425__auto__))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,(11)));
})()));

var G__11844 = (i__11825 + (1));
i__11825 = G__11844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11826),yinch$board$make_board_$_iter__11823.call(null,cljs.core.chunk_rest.call(null,s__11824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11826),null);
}
} else {
var major = cljs.core.first.call(null,s__11824__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5032__auto__ = ((function (major,s__11824__$2,temp__4425__auto__){
return (function yinch$board$make_board_$_iter__11823_$_iter__11839(s__11840){
return (new cljs.core.LazySeq(null,((function (major,s__11824__$2,temp__4425__auto__){
return (function (){
var s__11840__$1 = s__11840;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__11840__$1);
if(temp__4425__auto____$1){
var s__11840__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11840__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__11840__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__11842 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__11841 = (0);
while(true){
if((i__11841 < size__5031__auto__)){
var minor = cljs.core._nth.call(null,c__5030__auto__,i__11841);
cljs.core.chunk_append.call(null,b__11842,((((minor >= yinch.board.axis_staggers.call(null,major))) && ((minor <= (yinch.board.axis_lengths.call(null,major) + yinch.board.axis_staggers.call(null,major)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"nil","nil",99600501)], null):null));

var G__11845 = (i__11841 + (1));
i__11841 = G__11845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11842),yinch$board$make_board_$_iter__11823_$_iter__11839.call(null,cljs.core.chunk_rest.call(null,s__11840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11842),null);
}
} else {
var minor = cljs.core.first.call(null,s__11840__$2);
return cljs.core.cons.call(null,((((minor >= yinch.board.axis_staggers.call(null,major))) && ((minor <= (yinch.board.axis_lengths.call(null,major) + yinch.board.axis_staggers.call(null,major)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Keyword(null,"nil","nil",99600501)], null):null),yinch$board$make_board_$_iter__11823_$_iter__11839.call(null,cljs.core.rest.call(null,s__11840__$2)));
}
} else {
return null;
}
break;
}
});})(major,s__11824__$2,temp__4425__auto__))
,null,null));
});})(major,s__11824__$2,temp__4425__auto__))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,(11)));
})()),yinch$board$make_board_$_iter__11823.call(null,cljs.core.rest.call(null,s__11824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5032__auto__.call(null,cljs.core.range.call(null,(11)));
})());
});
