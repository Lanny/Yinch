// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yinch.canvas_interface');
goog.require('cljs.core');
goog.require('yinch.board');
goog.require('yinch.game');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('yinch.utils');
cljs.core.enable_console_print_BANG_.call(null);
yinch.canvas_interface.bg_color = "#888";
yinch.canvas_interface.grid_border = (80);
yinch.canvas_interface.total_border = (10);
yinch.canvas_interface.piece_colors = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"#000",new cljs.core.Keyword(null,"white","white",-483998618),"#FFF"], null);
yinch.canvas_interface.lip_colors = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"#7EC0EE",new cljs.core.Keyword(null,"white","white",-483998618),"#7EC0EE"], null);
yinch.canvas_interface.ring_slot_color = "#555";
yinch.canvas_interface.run_marker_color = "#800000";
yinch.canvas_interface._STAR_canvas_STAR_ = null;
yinch.canvas_interface._STAR_ctx_STAR_ = null;
yinch.canvas_interface._STAR_perspective_STAR_ = new cljs.core.Keyword(null,"white","white",-483998618);
yinch.canvas_interface._STAR_label_STAR_ = true;
yinch.canvas_interface._STAR_canvas_width_STAR_ = (800);
yinch.canvas_interface._STAR_canvas_height_STAR_ = (600);
yinch.canvas_interface._STAR_unit_size_STAR_ = ((function (){var x__4597__auto__ = (yinch.canvas_interface._STAR_canvas_width_STAR_ - yinch.canvas_interface.grid_border);
var y__4598__auto__ = (yinch.canvas_interface._STAR_canvas_height_STAR_ - yinch.canvas_interface.grid_border);
return ((x__4597__auto__ < y__4598__auto__) ? x__4597__auto__ : y__4598__auto__);
})() / (9));
yinch.canvas_interface._STAR_tile_size_STAR_ = (yinch.canvas_interface._STAR_unit_size_STAR_ * 0.33);
/**
 * Takes a grid [major minor] (number, letter) coord pair and returns a screen
 * [x y] position (relative to canvas top left).
 */
yinch.canvas_interface.grid__GT_screen = (function yinch$canvas_interface$grid__GT_screen(p__10710){
var vec__10712 = p__10710;
var major = cljs.core.nth.call(null,vec__10712,(0),null);
var minor = cljs.core.nth.call(null,vec__10712,(1),null);
var center_x = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_width_STAR_);
var center_y = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_height_STAR_);
var l2l_dist = (yinch.utils.cos.call(null,(yinch.utils.π / (6))) * yinch.canvas_interface._STAR_unit_size_STAR_);
var d_major = (major - (5));
var d_minor = (minor - (5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (d_minor * l2l_dist)),((center_y - (d_major * yinch.canvas_interface._STAR_unit_size_STAR_)) - ((((-1) * d_minor) * yinch.utils.sin.call(null,(yinch.utils.π / (6)))) * yinch.canvas_interface._STAR_unit_size_STAR_))], null);
});
/**
 * Takes a screen x, y position (relative to canvas top left) and returns a
 * grid position [major, minor] (both 0-indicies).
 */
yinch.canvas_interface.screen__GT_grid = (function yinch$canvas_interface$screen__GT_grid(p__10713){
var vec__10715 = p__10713;
var x = cljs.core.nth.call(null,vec__10715,(0),null);
var y = cljs.core.nth.call(null,vec__10715,(1),null);
var center_x = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_width_STAR_);
var center_y = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_height_STAR_);
var l2l_dist = (yinch.utils.cos.call(null,(yinch.utils.π / (6))) * yinch.canvas_interface._STAR_unit_size_STAR_);
var dx = (x - center_x);
var dy = (y - center_y);
var d_minor = (dx / l2l_dist);
var d_major = ((((d_minor * yinch.utils.sin.call(null,(yinch.utils.π / (6)))) * yinch.canvas_interface._STAR_unit_size_STAR_) + (center_y - y)) / yinch.canvas_interface._STAR_unit_size_STAR_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round(((5) + d_major)),Math.round(((5) + d_minor))], null);
});
/**
 * Draw a solid colored rectangle between top left point (x1, y1) and bottom
 * right point (x2, y2).
 */
yinch.canvas_interface.rect_BANG_ = (function yinch$canvas_interface$rect_BANG_(color,x1,y1,x2,y2){
(yinch.canvas_interface._STAR_ctx_STAR_["fillStyle"] = color);

return yinch.canvas_interface._STAR_ctx_STAR_.fillRect(x1,y1,x2,y2);
});
/**
 * Draw a line from (x1, y1) to (x2, y2) that is `thickness` pixels wide and
 * with the given color
 */
yinch.canvas_interface.line_BANG_ = (function yinch$canvas_interface$line_BANG_(color,thickness,cap_style,x1,y1,x2,y2){
(yinch.canvas_interface._STAR_ctx_STAR_["strokeStyle"] = color);

(yinch.canvas_interface._STAR_ctx_STAR_["lineWidth"] = thickness);

(yinch.canvas_interface._STAR_ctx_STAR_["lineCap"] = cap_style);

yinch.canvas_interface._STAR_ctx_STAR_.beginPath();

yinch.canvas_interface._STAR_ctx_STAR_.moveTo(x1,y1);

yinch.canvas_interface._STAR_ctx_STAR_.lineTo(x2,y2);

return yinch.canvas_interface._STAR_ctx_STAR_.stroke();
});
/**
 * Draw a circle centered a (x, y), with radius r of color `stroke-color` and
 * thickness `thickness` and optional fill color.
 */
yinch.canvas_interface.circle_BANG_ = (function yinch$canvas_interface$circle_BANG_(){
var G__10717 = arguments.length;
switch (G__10717) {
case 5:
return yinch.canvas_interface.circle_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return yinch.canvas_interface.circle_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.canvas_interface.circle_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (x,y,r,thickness,stroke_color){
return yinch.canvas_interface.circle_BANG_.call(null,x,y,r,thickness,stroke_color,null);
});

yinch.canvas_interface.circle_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (x,y,r,thickness,stroke_color,fill_color){
yinch.canvas_interface._STAR_ctx_STAR_.beginPath();

(yinch.canvas_interface._STAR_ctx_STAR_["fillStyle"] = (((fill_color == null))?"":fill_color));

(yinch.canvas_interface._STAR_ctx_STAR_["strokeStyle"] = stroke_color);

(yinch.canvas_interface._STAR_ctx_STAR_["lineWidth"] = thickness);

yinch.canvas_interface._STAR_ctx_STAR_.arc(x,y,r,(0),(yinch.utils.π * (2)));

if(!((fill_color == null))){
yinch.canvas_interface._STAR_ctx_STAR_.fill();
} else {
}

return yinch.canvas_interface._STAR_ctx_STAR_.stroke();
});

yinch.canvas_interface.circle_BANG_.cljs$lang$maxFixedArity = 6;
yinch.canvas_interface.mark_BANG_ = (function yinch$canvas_interface$mark_BANG_(x,y){
yinch.canvas_interface.line_BANG_.call(null,"#F00",(1),"butt",(x + (4)),(y + (4)),(x - (4)),(y - (4)));

return yinch.canvas_interface.line_BANG_.call(null,"#F00",(1),"butt",(x + (4)),(y - (4)),(x - (4)),(y + (4)));
});
yinch.canvas_interface.text_BANG_ = (function yinch$canvas_interface$text_BANG_(){
var G__10720 = arguments.length;
switch (G__10720) {
case 3:
return yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,text){
return yinch.canvas_interface.text_BANG_.call(null,x,y,text,"#000");
});

yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (x,y,text,color){
return yinch.canvas_interface.text_BANG_.call(null,x,y,text,color,(12));
});

yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (x,y,text,color,size){
return yinch.canvas_interface.text_BANG_.call(null,x,y,text,color,size,"sans-serif");
});

yinch.canvas_interface.text_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (x,y,text,color,size,style){
(yinch.canvas_interface._STAR_ctx_STAR_["fillStyle"] = color);

(yinch.canvas_interface._STAR_ctx_STAR_["font"] = [cljs.core.str(size),cljs.core.str("px "),cljs.core.str(style)].join(''));

return yinch.canvas_interface._STAR_ctx_STAR_.fillText(text,x,y);
});

yinch.canvas_interface.text_BANG_.cljs$lang$maxFixedArity = 6;
/**
 * Draw the set of 11 parallel lines at angle θ (in radians) that form one of
 * the three axies making up the grid
 */
yinch.canvas_interface.draw_axis_set_BANG_ = (function yinch$canvas_interface$draw_axis_set_BANG_(θ){
var center_x = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_width_STAR_);
var center_y = yinch.utils.half.call(null,yinch.canvas_interface._STAR_canvas_height_STAR_);
var θ_STAR_ = (θ + yinch.utils.half.call(null,yinch.utils.π));
var l2l_dist = (yinch.utils.cos.call(null,(yinch.utils.π / (6))) * yinch.canvas_interface._STAR_unit_size_STAR_);
var cxInitial = ((((5) * l2l_dist) * yinch.utils.cos.call(null,θ_STAR_)) + center_x);
var cyInitial = ((((5) * l2l_dist) * yinch.utils.sin.call(null,θ_STAR_)) + center_y);
var cx = cxInitial;
var cy = cyInitial;
var G__10727 = yinch.board.axis_lengths;
var vec__10728 = G__10727;
var line_length = cljs.core.nth.call(null,vec__10728,(0),null);
var remaining = cljs.core.nthnext.call(null,vec__10728,(1));
var cx__$1 = cx;
var cy__$1 = cy;
var G__10727__$1 = G__10727;
while(true){
var cx__$2 = cx__$1;
var cy__$2 = cy__$1;
var vec__10729 = G__10727__$1;
var line_length__$1 = cljs.core.nth.call(null,vec__10729,(0),null);
var remaining__$1 = cljs.core.nthnext.call(null,vec__10729,(1));
var half_x_run_10730 = ((yinch.utils.cos.call(null,θ) * yinch.utils.half.call(null,line_length__$1)) * yinch.canvas_interface._STAR_unit_size_STAR_);
var half_y_run_10731 = ((yinch.utils.sin.call(null,θ) * yinch.utils.half.call(null,line_length__$1)) * yinch.canvas_interface._STAR_unit_size_STAR_);
var x1_10732 = (cx__$2 + half_x_run_10730);
var y1_10733 = (cy__$2 + half_y_run_10731);
var x2_10734 = (cx__$2 - half_x_run_10730);
var y2_10735 = (cy__$2 - half_y_run_10731);
yinch.canvas_interface.line_BANG_.call(null,"#000",(1),"butt",x1_10732,y1_10733,x2_10734,y2_10735);

if(cljs.core.seq.call(null,remaining__$1)){
var G__10736 = (cx__$2 - (yinch.utils.cos.call(null,θ_STAR_) * l2l_dist));
var G__10737 = (cy__$2 - (yinch.utils.sin.call(null,θ_STAR_) * l2l_dist));
var G__10738 = remaining__$1;
cx__$1 = G__10736;
cy__$1 = G__10737;
G__10727__$1 = G__10738;
continue;
} else {
return null;
}
break;
}
});
/**
 * 
 */
yinch.canvas_interface.draw_pieces_BANG_ = (function yinch$canvas_interface$draw_pieces_BANG_(game){
return cljs.core.doall.call(null,yinch.board.for_cell.call(null,(function (major,minor){
var vec__10741 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
var x = cljs.core.nth.call(null,vec__10741,(0),null);
var y = cljs.core.nth.call(null,vec__10741,(1),null);
var cell = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),major,minor], null));
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cell);
var G__10742 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell).fqn:null);
switch (G__10742) {
case "tile":
return yinch.canvas_interface.circle_BANG_.call(null,x,y,yinch.canvas_interface._STAR_tile_size_STAR_,(2),yinch.canvas_interface.lip_colors.call(null,color),yinch.canvas_interface.piece_colors.call(null,color));

break;
case "ring":
return yinch.canvas_interface.circle_BANG_.call(null,x,y,yinch.canvas_interface._STAR_tile_size_STAR_,(6),yinch.canvas_interface.piece_colors.call(null,color));

break;
case "empty":
return null;

break;
default:
throw [cljs.core.str("Unexpected cell type. Cell:"),cljs.core.str(cell)].join('');

}
})));
});
/**
 * Draws the 1-11 a-k annotations around the perimeter of the board.
 */
yinch.canvas_interface.annotate_board_BANG_ = (function yinch$canvas_interface$annotate_board_BANG_(){
var G__10745 = arguments.length;
switch (G__10745) {
case 0:
return yinch.canvas_interface.annotate_board_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return yinch.canvas_interface.annotate_board_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.canvas_interface.annotate_board_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return yinch.canvas_interface.annotate_board_BANG_.call(null,"#000",(14),"sans-serif");
});

yinch.canvas_interface.annotate_board_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (color,size,style){
cljs.core.doall.call(null,(function (){var iter__5032__auto__ = (function yinch$canvas_interface$iter__10746(s__10747){
return (new cljs.core.LazySeq(null,(function (){
var s__10747__$1 = s__10747;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10747__$1);
if(temp__4425__auto__){
var s__10747__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10747__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__10747__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__10749 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__10748 = (0);
while(true){
if((i__10748 < size__5031__auto__)){
var major = cljs.core._nth.call(null,c__5030__auto__,i__10748);
cljs.core.chunk_append.call(null,b__10749,(function (){var vec__10752 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,yinch.board.axis_staggers.call(null,major)], null));
var x = cljs.core.nth.call(null,vec__10752,(0),null);
var y = cljs.core.nth.call(null,vec__10752,(1),null);
return yinch.canvas_interface.text_BANG_.call(null,((x - (yinch.canvas_interface._STAR_unit_size_STAR_ / (6))) - size),(y - (yinch.canvas_interface._STAR_unit_size_STAR_ / (6))),yinch.board.major_names.call(null,major),color,size,style);
})());

var G__10763 = (i__10748 + (1));
i__10748 = G__10763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10749),yinch$canvas_interface$iter__10746.call(null,cljs.core.chunk_rest.call(null,s__10747__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10749),null);
}
} else {
var major = cljs.core.first.call(null,s__10747__$2);
return cljs.core.cons.call(null,(function (){var vec__10753 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,yinch.board.axis_staggers.call(null,major)], null));
var x = cljs.core.nth.call(null,vec__10753,(0),null);
var y = cljs.core.nth.call(null,vec__10753,(1),null);
return yinch.canvas_interface.text_BANG_.call(null,((x - (yinch.canvas_interface._STAR_unit_size_STAR_ / (6))) - size),(y - (yinch.canvas_interface._STAR_unit_size_STAR_ / (6))),yinch.board.major_names.call(null,major),color,size,style);
})(),yinch$canvas_interface$iter__10746.call(null,cljs.core.rest.call(null,s__10747__$2)));
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

return cljs.core.doall.call(null,(function (){var iter__5032__auto__ = (function yinch$canvas_interface$iter__10754(s__10755){
return (new cljs.core.LazySeq(null,(function (){
var s__10755__$1 = s__10755;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10755__$1);
if(temp__4425__auto__){
var s__10755__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10755__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__10755__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__10757 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__10756 = (0);
while(true){
if((i__10756 < size__5031__auto__)){
var minor = cljs.core._nth.call(null,c__5030__auto__,i__10756);
cljs.core.chunk_append.call(null,b__10757,(function (){var vec__10760 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yinch.board.axis_staggers.call(null,minor),minor], null));
var x = cljs.core.nth.call(null,vec__10760,(0),null);
var y = cljs.core.nth.call(null,vec__10760,(1),null);
return yinch.canvas_interface.text_BANG_.call(null,(x - (size / (4))),((y + (yinch.canvas_interface._STAR_unit_size_STAR_ / (2))) + (-3)),yinch.board.minor_names.call(null,minor),color,size,style);
})());

var G__10764 = (i__10756 + (1));
i__10756 = G__10764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10757),yinch$canvas_interface$iter__10754.call(null,cljs.core.chunk_rest.call(null,s__10755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10757),null);
}
} else {
var minor = cljs.core.first.call(null,s__10755__$2);
return cljs.core.cons.call(null,(function (){var vec__10761 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yinch.board.axis_staggers.call(null,minor),minor], null));
var x = cljs.core.nth.call(null,vec__10761,(0),null);
var y = cljs.core.nth.call(null,vec__10761,(1),null);
return yinch.canvas_interface.text_BANG_.call(null,(x - (size / (4))),((y + (yinch.canvas_interface._STAR_unit_size_STAR_ / (2))) + (-3)),yinch.board.minor_names.call(null,minor),color,size,style);
})(),yinch$canvas_interface$iter__10754.call(null,cljs.core.rest.call(null,s__10755__$2)));
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

yinch.canvas_interface.annotate_board_BANG_.cljs$lang$maxFixedArity = 3;
yinch.canvas_interface.draw_run_marker_BANG_ = (function yinch$canvas_interface$draw_run_marker_BANG_(game,hover_cell){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"run-pick","run-pick",-1842216705))) && (!((hover_cell == null)))){
var run = yinch.game.best_run.call(null,yinch.game.find_runs.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hover_cell], null)),hover_cell.call(null,(0)),hover_cell.call(null,(1)));
var vec__10767 = yinch.canvas_interface.grid__GT_screen.call(null,cljs.core.first.call(null,run));
var x1 = cljs.core.nth.call(null,vec__10767,(0),null);
var y1 = cljs.core.nth.call(null,vec__10767,(1),null);
var vec__10768 = yinch.canvas_interface.grid__GT_screen.call(null,cljs.core.second.call(null,run));
var x2 = cljs.core.nth.call(null,vec__10768,(0),null);
var y2 = cljs.core.nth.call(null,vec__10768,(1),null);
return yinch.canvas_interface.line_BANG_.call(null,yinch.canvas_interface.run_marker_color,(4),"round",x1,y1,x2,y2);
} else {
return null;
}
});
yinch.canvas_interface.draw_player_ring_slots_BANG_ = (function yinch$canvas_interface$draw_player_ring_slots_BANG_(game,player,corner){
var initial_offset = (yinch.canvas_interface.total_border + yinch.canvas_interface._STAR_tile_size_STAR_);
var l2l_dist = (yinch.utils.cos.call(null,(yinch.utils.π / (6))) * yinch.canvas_interface._STAR_unit_size_STAR_);
var vec__10774 = ((cljs.core._EQ_.call(null,corner,new cljs.core.Keyword(null,"ne","ne",-1792628743)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(yinch.canvas_interface._STAR_canvas_width_STAR_ - initial_offset),initial_offset,(l2l_dist * (-1))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_offset,(yinch.canvas_interface._STAR_canvas_height_STAR_ - initial_offset),l2l_dist], null));
var ix = cljs.core.nth.call(null,vec__10774,(0),null);
var y = cljs.core.nth.call(null,vec__10774,(1),null);
var x_step = cljs.core.nth.call(null,vec__10774,(2),null);
return cljs.core.doall.call(null,(function (){var iter__5032__auto__ = ((function (initial_offset,l2l_dist,vec__10774,ix,y,x_step){
return (function yinch$canvas_interface$draw_player_ring_slots_BANG__$_iter__10775(s__10776){
return (new cljs.core.LazySeq(null,((function (initial_offset,l2l_dist,vec__10774,ix,y,x_step){
return (function (){
var s__10776__$1 = s__10776;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10776__$1);
if(temp__4425__auto__){
var s__10776__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10776__$2)){
var c__5030__auto__ = cljs.core.chunk_first.call(null,s__10776__$2);
var size__5031__auto__ = cljs.core.count.call(null,c__5030__auto__);
var b__10778 = cljs.core.chunk_buffer.call(null,size__5031__auto__);
if((function (){var i__10777 = (0);
while(true){
if((i__10777 < size__5031__auto__)){
var idx = cljs.core._nth.call(null,c__5030__auto__,i__10777);
cljs.core.chunk_append.call(null,b__10778,(function (){var slot_color = ((((player.call(null,new cljs.core.Keyword(null,"rings-remaining","rings-remaining",742473055).cljs$core$IFn$_invoke$arity$1(game)) - ((2) - idx)) < (3)))?yinch.canvas_interface.piece_colors.call(null,player):yinch.canvas_interface.ring_slot_color);
return yinch.canvas_interface.circle_BANG_.call(null,(ix + (idx * x_step)),y,yinch.canvas_interface._STAR_tile_size_STAR_,(6),slot_color);
})());

var G__10779 = (i__10777 + (1));
i__10777 = G__10779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10778),yinch$canvas_interface$draw_player_ring_slots_BANG__$_iter__10775.call(null,cljs.core.chunk_rest.call(null,s__10776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10778),null);
}
} else {
var idx = cljs.core.first.call(null,s__10776__$2);
return cljs.core.cons.call(null,(function (){var slot_color = ((((player.call(null,new cljs.core.Keyword(null,"rings-remaining","rings-remaining",742473055).cljs$core$IFn$_invoke$arity$1(game)) - ((2) - idx)) < (3)))?yinch.canvas_interface.piece_colors.call(null,player):yinch.canvas_interface.ring_slot_color);
return yinch.canvas_interface.circle_BANG_.call(null,(ix + (idx * x_step)),y,yinch.canvas_interface._STAR_tile_size_STAR_,(6),slot_color);
})(),yinch$canvas_interface$draw_player_ring_slots_BANG__$_iter__10775.call(null,cljs.core.rest.call(null,s__10776__$2)));
}
} else {
return null;
}
break;
}
});})(initial_offset,l2l_dist,vec__10774,ix,y,x_step))
,null,null));
});})(initial_offset,l2l_dist,vec__10774,ix,y,x_step))
;
return iter__5032__auto__.call(null,cljs.core.range.call(null,(3)));
})());
});
/**
 * Draws the 6 ring slots and populates them with rings and such.
 */
yinch.canvas_interface.draw_ring_slots_BANG_ = (function yinch$canvas_interface$draw_ring_slots_BANG_(game){
yinch.canvas_interface.draw_player_ring_slots_BANG_.call(null,game,yinch.canvas_interface._STAR_perspective_STAR_,new cljs.core.Keyword(null,"sw","sw",833113913));

return yinch.canvas_interface.draw_player_ring_slots_BANG_.call(null,game,yinch.utils.other.call(null,yinch.canvas_interface._STAR_perspective_STAR_),new cljs.core.Keyword(null,"ne","ne",-1792628743));
});
/**
 * Writes the phase the game is in, in the top-right corner.
 */
yinch.canvas_interface.draw_phase_BANG_ = (function yinch$canvas_interface$draw_phase_BANG_(game){
return yinch.canvas_interface.text_BANG_.call(null,yinch.canvas_interface.total_border,(yinch.canvas_interface.total_border + (14)),[cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"black","black",1294279647)))?"Black ":"White ")),cljs.core.str((function (){var G__10781 = (((new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game).fqn:null);
switch (G__10781) {
case "ring-placement":
return "to place a ring on the board.";

break;
case "ring-pick":
return "to pick a ring to move.";

break;
case "ring-drop":
return [cljs.core.str("to pick a place to drop the ring currently at "),cljs.core.str(yinch.board.minor_names.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833).cljs$core$IFn$_invoke$arity$1(game),(1)))),cljs.core.str(yinch.board.major_names.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833).cljs$core$IFn$_invoke$arity$1(game),(0)))),cljs.core.str(".")].join('');

break;
case "run-pick":
return "to pick a run to remove from the board.";

break;
case "ring-removal":
return "to pick a ring to remove from the board.";

break;
case "victory":
return "has won!";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(game))].join('')));

}
})())].join(''),yinch.canvas_interface.piece_colors.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game)),(14));
});
/**
 * 
 */
yinch.canvas_interface.draw_highlight_BANG_ = (function yinch$canvas_interface$draw_highlight_BANG_(p__10783){
var map__10787 = p__10783;
var map__10787__$1 = ((cljs.core.seq_QMARK_.call(null,map__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);
var cell = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"highlight-cell","highlight-cell",-1286629833));
if((cell == null)){
return null;
} else {
var vec__10788 = cell;
var major = cljs.core.nth.call(null,vec__10788,(0),null);
var minor = cljs.core.nth.call(null,vec__10788,(1),null);
var vec__10789 = yinch.canvas_interface.grid__GT_screen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [major,minor], null));
var cx = cljs.core.nth.call(null,vec__10789,(0),null);
var cy = cljs.core.nth.call(null,vec__10789,(1),null);
var r = (yinch.canvas_interface._STAR_tile_size_STAR_ * (2));
var x1 = (cx - r);
var y1 = (cy - r);
var gradient = yinch.canvas_interface._STAR_ctx_STAR_.createRadialGradient(cx,cy,r,cx,cy,(0));
gradient.addColorStop(0.551,"transparent");

gradient.addColorStop(0.55,"yellow");

gradient.addColorStop((0),"transparent");

(yinch.canvas_interface._STAR_ctx_STAR_["fillStyle"] = gradient);

return yinch.canvas_interface._STAR_ctx_STAR_.fillRect(x1,y1,((2) * r),((2) * r));
}
});
/**
 * Creates a new canvas/context pair given a selector to the canvas. The board
 * will be rendered from the perspective of the given player, or white if no
 * palyer is specified.
 */
yinch.canvas_interface.init_canvas_BANG_ = (function yinch$canvas_interface$init_canvas_BANG_(){
var G__10791 = arguments.length;
switch (G__10791) {
case 1:
return yinch.canvas_interface.init_canvas_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return yinch.canvas_interface.init_canvas_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

yinch.canvas_interface.init_canvas_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (canvas_id){
return yinch.canvas_interface.init_canvas_BANG_.call(null,canvas_id,new cljs.core.Keyword(null,"white","white",-483998618));
});

yinch.canvas_interface.init_canvas_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (canvas_id,perspective){
var element = document.querySelector(dommy.core.selector.call(null,canvas_id));
var ctx = element.getContext("2d");
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",1974019749),element,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"perspective","perspective",1459886798),perspective,new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null);
});

yinch.canvas_interface.init_canvas_BANG_.cljs$lang$maxFixedArity = 2;
yinch.canvas_interface.draw_board_BANG_ = (function yinch$canvas_interface$draw_board_BANG_(game,canvas_data,hover_cell){
var _STAR_canvas_STAR_10796 = yinch.canvas_interface._STAR_canvas_STAR_;
var _STAR_ctx_STAR_10797 = yinch.canvas_interface._STAR_ctx_STAR_;
var _STAR_perspective_STAR_10798 = yinch.canvas_interface._STAR_perspective_STAR_;
yinch.canvas_interface._STAR_canvas_STAR_ = new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(canvas_data);

yinch.canvas_interface._STAR_ctx_STAR_ = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(canvas_data);

yinch.canvas_interface._STAR_perspective_STAR_ = new cljs.core.Keyword(null,"perspective","perspective",1459886798).cljs$core$IFn$_invoke$arity$1(canvas_data);

try{yinch.canvas_interface.rect_BANG_.call(null,yinch.canvas_interface.bg_color,(0),(0),yinch.canvas_interface._STAR_canvas_width_STAR_,yinch.canvas_interface._STAR_canvas_height_STAR_);

yinch.canvas_interface.draw_axis_set_BANG_.call(null,(yinch.utils.π / (6)));

yinch.canvas_interface.draw_axis_set_BANG_.call(null,((-1) * (yinch.utils.π / (6))));

yinch.canvas_interface.draw_axis_set_BANG_.call(null,(yinch.utils.π / (2)));

yinch.canvas_interface.annotate_board_BANG_.call(null);

yinch.canvas_interface.draw_ring_slots_BANG_.call(null,game);

yinch.canvas_interface.draw_highlight_BANG_.call(null,game);

yinch.canvas_interface.draw_pieces_BANG_.call(null,game);

yinch.canvas_interface.draw_run_marker_BANG_.call(null,game,cljs.core.deref.call(null,hover_cell));

return yinch.canvas_interface.draw_phase_BANG_.call(null,game);
}finally {yinch.canvas_interface._STAR_perspective_STAR_ = _STAR_perspective_STAR_10798;

yinch.canvas_interface._STAR_ctx_STAR_ = _STAR_ctx_STAR_10797;

yinch.canvas_interface._STAR_canvas_STAR_ = _STAR_canvas_STAR_10796;
}});
/**
 * Listens on a chan for game state updates until the chan is closed. Updates
 * the screen for each state change.
 */
yinch.canvas_interface.consume_state_BANG_ = (function yinch$canvas_interface$consume_state_BANG_(canvas_data,game_state,hover_cell){
var state_chan = cljs.core.async.chan.call(null);
var c__8284__auto___10853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___10853,state_chan){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___10853,state_chan){
return (function (state_10839){
var state_val_10840 = (state_10839[(1)]);
if((state_val_10840 === (1))){
var state_10839__$1 = state_10839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10839__$1,(2),state_chan);
} else {
if((state_val_10840 === (2))){
var inst_10827 = (state_10839[(2)]);
var inst_10828 = inst_10827;
var state_10839__$1 = (function (){var statearr_10841 = state_10839;
(statearr_10841[(7)] = inst_10828);

return statearr_10841;
})();
var statearr_10842_10854 = state_10839__$1;
(statearr_10842_10854[(2)] = null);

(statearr_10842_10854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10840 === (3))){
var inst_10828 = (state_10839[(7)]);
var inst_10830 = (function (){var new_state = inst_10828;
return ((function (new_state,inst_10828,state_val_10840,c__8284__auto___10853,state_chan){
return (function (old_state){
return new_state;
});
;})(new_state,inst_10828,state_val_10840,c__8284__auto___10853,state_chan))
})();
var inst_10831 = cljs.core.swap_BANG_.call(null,game_state,inst_10830);
var inst_10832 = yinch.canvas_interface.draw_board_BANG_.call(null,inst_10828,canvas_data,hover_cell);
var state_10839__$1 = (function (){var statearr_10843 = state_10839;
(statearr_10843[(8)] = inst_10831);

(statearr_10843[(9)] = inst_10832);

return statearr_10843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10839__$1,(5),state_chan);
} else {
if((state_val_10840 === (4))){
var inst_10837 = (state_10839[(2)]);
var state_10839__$1 = state_10839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10839__$1,inst_10837);
} else {
if((state_val_10840 === (5))){
var inst_10834 = (state_10839[(2)]);
var inst_10828 = inst_10834;
var state_10839__$1 = (function (){var statearr_10844 = state_10839;
(statearr_10844[(7)] = inst_10828);

return statearr_10844;
})();
var statearr_10845_10855 = state_10839__$1;
(statearr_10845_10855[(2)] = null);

(statearr_10845_10855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8284__auto___10853,state_chan))
;
return ((function (switch__8222__auto__,c__8284__auto___10853,state_chan){
return (function() {
var yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__ = null;
var yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____0 = (function (){
var statearr_10849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10849[(0)] = yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__);

(statearr_10849[(1)] = (1));

return statearr_10849;
});
var yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____1 = (function (state_10839){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_10839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e10850){if((e10850 instanceof Object)){
var ex__8226__auto__ = e10850;
var statearr_10851_10856 = state_10839;
(statearr_10851_10856[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10857 = state_10839;
state_10839 = G__10857;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__ = function(state_10839){
switch(arguments.length){
case 0:
return yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____0.call(this);
case 1:
return yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____1.call(this,state_10839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____0;
yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto____1;
return yinch$canvas_interface$consume_state_BANG__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___10853,state_chan))
})();
var state__8286__auto__ = (function (){var statearr_10852 = f__8285__auto__.call(null);
(statearr_10852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___10853);

return statearr_10852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___10853,state_chan))
);


return state_chan;
});
/**
 * Returns a channel with and listens, expecting status maps which are in turn
 * presented to the user.
 */
yinch.canvas_interface.consume_status_BANG_ = (function yinch$canvas_interface$consume_status_BANG_(){
var status_chan = cljs.core.async.chan.call(null);
var c__8284__auto___10948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___10948,status_chan){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___10948,status_chan){
return (function (state_10925){
var state_val_10926 = (state_10925[(1)]);
if((state_val_10926 === (7))){
var inst_10905 = (state_10925[(7)]);
var inst_10908 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_10905);
var inst_10909 = alert(inst_10908);
var state_10925__$1 = state_10925;
var statearr_10927_10949 = state_10925__$1;
(statearr_10927_10949[(2)] = inst_10909);

(statearr_10927_10949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (1))){
var state_10925__$1 = state_10925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10925__$1,(2),status_chan);
} else {
if((state_val_10926 === (4))){
var inst_10923 = (state_10925[(2)]);
var state_10925__$1 = state_10925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10925__$1,inst_10923);
} else {
if((state_val_10926 === (6))){
var state_10925__$1 = state_10925;
var statearr_10928_10950 = state_10925__$1;
(statearr_10928_10950[(2)] = null);

(statearr_10928_10950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (3))){
var inst_10905 = (state_10925[(7)]);
var inst_10916 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10905);
var state_10925__$1 = state_10925;
var G__10929_10951 = (((inst_10916 instanceof cljs.core.Keyword))?inst_10916.fqn:null);
switch (G__10929_10951) {
case "success":
var statearr_10930_10953 = state_10925__$1;
(statearr_10930_10953[(1)] = (6));


break;
case "failure":
var statearr_10931_10954 = state_10925__$1;
(statearr_10931_10954[(1)] = (7));


break;
case "error":
var statearr_10932_10955 = state_10925__$1;
(statearr_10932_10955[(1)] = (8));


break;
default:
var statearr_10933_10956 = state_10925__$1;
(statearr_10933_10956[(1)] = (9));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (2))){
var inst_10904 = (state_10925[(2)]);
var inst_10905 = inst_10904;
var state_10925__$1 = (function (){var statearr_10934 = state_10925;
(statearr_10934[(7)] = inst_10905);

return statearr_10934;
})();
var statearr_10935_10957 = state_10925__$1;
(statearr_10935_10957[(2)] = null);

(statearr_10935_10957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (9))){
var inst_10905 = (state_10925[(7)]);
var inst_10913 = [cljs.core.str("Unexpected status"),cljs.core.str(inst_10905)].join('');
var inst_10914 = (function(){throw inst_10913})();
var state_10925__$1 = state_10925;
var statearr_10936_10958 = state_10925__$1;
(statearr_10936_10958[(2)] = inst_10914);

(statearr_10936_10958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (5))){
var inst_10918 = (state_10925[(2)]);
var state_10925__$1 = (function (){var statearr_10937 = state_10925;
(statearr_10937[(8)] = inst_10918);

return statearr_10937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10925__$1,(10),status_chan);
} else {
if((state_val_10926 === (10))){
var inst_10920 = (state_10925[(2)]);
var inst_10905 = inst_10920;
var state_10925__$1 = (function (){var statearr_10938 = state_10925;
(statearr_10938[(7)] = inst_10905);

return statearr_10938;
})();
var statearr_10939_10959 = state_10925__$1;
(statearr_10939_10959[(2)] = null);

(statearr_10939_10959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10926 === (8))){
var inst_10911 = alert("Yo, the programmer messed up real bad.");
var state_10925__$1 = state_10925;
var statearr_10940_10960 = state_10925__$1;
(statearr_10940_10960[(2)] = inst_10911);

(statearr_10940_10960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8284__auto___10948,status_chan))
;
return ((function (switch__8222__auto__,c__8284__auto___10948,status_chan){
return (function() {
var yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__ = null;
var yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____0 = (function (){
var statearr_10944 = [null,null,null,null,null,null,null,null,null];
(statearr_10944[(0)] = yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__);

(statearr_10944[(1)] = (1));

return statearr_10944;
});
var yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____1 = (function (state_10925){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_10925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e10945){if((e10945 instanceof Object)){
var ex__8226__auto__ = e10945;
var statearr_10946_10961 = state_10925;
(statearr_10946_10961[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10962 = state_10925;
state_10925 = G__10962;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__ = function(state_10925){
switch(arguments.length){
case 0:
return yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____0.call(this);
case 1:
return yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____1.call(this,state_10925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____0;
yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto____1;
return yinch$canvas_interface$consume_status_BANG__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___10948,status_chan))
})();
var state__8286__auto__ = (function (){var statearr_10947 = f__8285__auto__.call(null);
(statearr_10947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___10948);

return statearr_10947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___10948,status_chan))
);


return status_chan;
});
/**
 * Binds event listeners, translates them into user actions (generally clicks
 * on the board) and pumps puts them to the returned channel.
 */
yinch.canvas_interface.pump_interaction_BANG_ = (function yinch$canvas_interface$pump_interaction_BANG_(canvas_data,game_state){
var interaction_chan = cljs.core.async.chan.call(null);
dommy.core.listen_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(canvas_data),new cljs.core.Keyword(null,"click","click",1912301393),((function (interaction_chan){
return (function (e){
var x = (e["layerX"]);
var y = (e["layerY"]);
var vec__10964 = yinch.canvas_interface.screen__GT_grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var major = cljs.core.nth.call(null,vec__10964,(0),null);
var minor = cljs.core.nth.call(null,vec__10964,(1),null);
var player = new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_state));
return cljs.core.async.put_BANG_.call(null,interaction_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid-click","grid-click",1849433699),new cljs.core.Keyword(null,"click-info","click-info",1742344538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,major,minor], null)], null));
});})(interaction_chan))
);

return interaction_chan;
});
/**
 * Binds handlers that may change visual or meta-state of the game but which
 * may not produce interactions or alter the state of the game object.
 */
yinch.canvas_interface.bind_internal_handlers_BANG_ = (function yinch$canvas_interface$bind_internal_handlers_BANG_(canvas_data,game_state,hover_cell){
dommy.core.listen_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(canvas_data),new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (e){
var G__10966 = (e["keyCode"]);
switch (G__10966) {
case (68):
return cljs.core.print.call(null,yinch.game.urlize.call(null,cljs.core.deref.call(null,game_state)));

break;
case (83):
return cljs.core.print.call(null,yinch.game.game__GT_script.call(null,cljs.core.deref.call(null,game_state)));

break;
default:
return null;

}
}));

return dommy.core.listen_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(canvas_data),new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),(function (e){
var x = (e["layerX"]);
var y = (e["layerY"]);
var cell = yinch.canvas_interface.screen__GT_grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var old_val = cljs.core.deref.call(null,hover_cell);
var new_val = cljs.core.swap_BANG_.call(null,hover_cell,cljs.core.constantly.call(null,cell));
if((cljs.core.not_EQ_.call(null,new_val,old_val)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_state)),new cljs.core.Keyword(null,"run-pick","run-pick",-1842216705)))){
return yinch.canvas_interface.draw_board_BANG_.call(null,cljs.core.deref.call(null,game_state),canvas_data,hover_cell);
} else {
return null;
}
}));
});
/**
 * Init canvas and return a 3-vec of channels for communicating state, status,
 * and receiving user interactions.
 */
yinch.canvas_interface.start_rendering_BANG_ = (function yinch$canvas_interface$start_rendering_BANG_(canvas_selector){
var canvas_data = yinch.canvas_interface.init_canvas_BANG_.call(null,canvas_selector);
var game_state = cljs.core.atom.call(null,null);
var hover_cell = cljs.core.atom.call(null,null);
var state_chan = yinch.canvas_interface.consume_state_BANG_.call(null,canvas_data,game_state,hover_cell);
var status_chan = yinch.canvas_interface.consume_status_BANG_.call(null);
var interaction_chan = yinch.canvas_interface.pump_interaction_BANG_.call(null,canvas_data,game_state);
yinch.canvas_interface.bind_internal_handlers_BANG_.call(null,canvas_data,game_state,hover_cell);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_chan,status_chan,interaction_chan], null);
});
