// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(){
var G__12779 = arguments.length;
switch (G__12779) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t12780 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12780 = (function (f,blockable,meta12781){
this.f = f;
this.blockable = blockable;
this.meta12781 = meta12781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12782,meta12781__$1){
var self__ = this;
var _12782__$1 = this;
return (new cljs.core.async.t12780(self__.f,self__.blockable,meta12781__$1));
});

cljs.core.async.t12780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12782){
var self__ = this;
var _12782__$1 = this;
return self__.meta12781;
});

cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12780.cljs$lang$type = true;

cljs.core.async.t12780.cljs$lang$ctorStr = "cljs.core.async/t12780";

cljs.core.async.t12780.cljs$lang$ctorPrWriter = (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t12780");
});

cljs.core.async.__GT_t12780 = (function cljs$core$async$__GT_t12780(f__$1,blockable__$1,meta12781){
return (new cljs.core.async.t12780(f__$1,blockable__$1,meta12781));
});

}

return (new cljs.core.async.t12780(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__12785 = buff;
if(G__12785){
var bit__4952__auto__ = null;
if(cljs.core.truth_((function (){var or__4278__auto__ = bit__4952__auto__;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return G__12785.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12785.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12785);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12785);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__12787 = arguments.length;
switch (G__12787) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 * exception-handler. A promise channel can take exactly one value that consumers
 * will receive. Once full, puts complete but val is dropped (no transfer).
 * Consumers will block until either a value is placed in the channel or the
 * channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(){
var G__12790 = arguments.length;
switch (G__12790) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__12793 = arguments.length;
switch (G__12793) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12795 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12795);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12795,ret){
return (function (){
return fn1.call(null,val_12795);
});})(val_12795,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__12797 = arguments.length;
switch (G__12797) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5163__auto___12799 = n;
var x_12800 = (0);
while(true){
if((x_12800 < n__5163__auto___12799)){
(a[x_12800] = (0));

var G__12801 = (x_12800 + (1));
x_12800 = G__12801;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12802 = (i + (1));
i = G__12802;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12806 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12806 = (function (alt_flag,flag,meta12807){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12807 = meta12807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12808,meta12807__$1){
var self__ = this;
var _12808__$1 = this;
return (new cljs.core.async.t12806(self__.alt_flag,self__.flag,meta12807__$1));
});})(flag))
;

cljs.core.async.t12806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12808){
var self__ = this;
var _12808__$1 = this;
return self__.meta12807;
});})(flag))
;

cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t12806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12806.cljs$lang$type = true;

cljs.core.async.t12806.cljs$lang$ctorStr = "cljs.core.async/t12806";

cljs.core.async.t12806.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t12806");
});})(flag))
;

cljs.core.async.__GT_t12806 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12806(alt_flag__$1,flag__$1,meta12807){
return (new cljs.core.async.t12806(alt_flag__$1,flag__$1,meta12807));
});})(flag))
;

}

return (new cljs.core.async.t12806(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12812 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12812 = (function (alt_handler,flag,cb,meta12813){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12813 = meta12813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12814,meta12813__$1){
var self__ = this;
var _12814__$1 = this;
return (new cljs.core.async.t12812(self__.alt_handler,self__.flag,self__.cb,meta12813__$1));
});

cljs.core.async.t12812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12814){
var self__ = this;
var _12814__$1 = this;
return self__.meta12813;
});

cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12812.cljs$lang$type = true;

cljs.core.async.t12812.cljs$lang$ctorStr = "cljs.core.async/t12812";

cljs.core.async.t12812.cljs$lang$ctorPrWriter = (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t12812");
});

cljs.core.async.__GT_t12812 = (function cljs$core$async$alt_handler_$___GT_t12812(alt_handler__$1,flag__$1,cb__$1,meta12813){
return (new cljs.core.async.t12812(alt_handler__$1,flag__$1,cb__$1,meta12813));
});

}

return (new cljs.core.async.t12812(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12815_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12815_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12816_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12816_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4278__auto__ = wport;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12817 = (i + (1));
i = G__12817;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4278__auto__ = ret;
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4266__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4266__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4266__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5318__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5318__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12820){
var map__12821 = p__12820;
var map__12821__$1 = ((cljs.core.seq_QMARK_.call(null,map__12821))?cljs.core.apply.call(null,cljs.core.hash_map,map__12821):map__12821);
var opts = map__12821__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12818){
var G__12819 = cljs.core.first.call(null,seq12818);
var seq12818__$1 = cljs.core.next.call(null,seq12818);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12819,seq12818__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 * nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 * Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12823 = arguments.length;
switch (G__12823) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8284__auto___12872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___12872){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___12872){
return (function (state_12847){
var state_val_12848 = (state_12847[(1)]);
if((state_val_12848 === (7))){
var inst_12843 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
var statearr_12849_12873 = state_12847__$1;
(statearr_12849_12873[(2)] = inst_12843);

(statearr_12849_12873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (1))){
var state_12847__$1 = state_12847;
var statearr_12850_12874 = state_12847__$1;
(statearr_12850_12874[(2)] = null);

(statearr_12850_12874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (4))){
var inst_12826 = (state_12847[(7)]);
var inst_12826__$1 = (state_12847[(2)]);
var inst_12827 = (inst_12826__$1 == null);
var state_12847__$1 = (function (){var statearr_12851 = state_12847;
(statearr_12851[(7)] = inst_12826__$1);

return statearr_12851;
})();
if(cljs.core.truth_(inst_12827)){
var statearr_12852_12875 = state_12847__$1;
(statearr_12852_12875[(1)] = (5));

} else {
var statearr_12853_12876 = state_12847__$1;
(statearr_12853_12876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (13))){
var state_12847__$1 = state_12847;
var statearr_12854_12877 = state_12847__$1;
(statearr_12854_12877[(2)] = null);

(statearr_12854_12877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (6))){
var inst_12826 = (state_12847[(7)]);
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12847__$1,(11),to,inst_12826);
} else {
if((state_val_12848 === (3))){
var inst_12845 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12847__$1,inst_12845);
} else {
if((state_val_12848 === (12))){
var state_12847__$1 = state_12847;
var statearr_12855_12878 = state_12847__$1;
(statearr_12855_12878[(2)] = null);

(statearr_12855_12878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (2))){
var state_12847__$1 = state_12847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12847__$1,(4),from);
} else {
if((state_val_12848 === (11))){
var inst_12836 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
if(cljs.core.truth_(inst_12836)){
var statearr_12856_12879 = state_12847__$1;
(statearr_12856_12879[(1)] = (12));

} else {
var statearr_12857_12880 = state_12847__$1;
(statearr_12857_12880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (9))){
var state_12847__$1 = state_12847;
var statearr_12858_12881 = state_12847__$1;
(statearr_12858_12881[(2)] = null);

(statearr_12858_12881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (5))){
var state_12847__$1 = state_12847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12859_12882 = state_12847__$1;
(statearr_12859_12882[(1)] = (8));

} else {
var statearr_12860_12883 = state_12847__$1;
(statearr_12860_12883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (14))){
var inst_12841 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
var statearr_12861_12884 = state_12847__$1;
(statearr_12861_12884[(2)] = inst_12841);

(statearr_12861_12884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (10))){
var inst_12833 = (state_12847[(2)]);
var state_12847__$1 = state_12847;
var statearr_12862_12885 = state_12847__$1;
(statearr_12862_12885[(2)] = inst_12833);

(statearr_12862_12885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12848 === (8))){
var inst_12830 = cljs.core.async.close_BANG_.call(null,to);
var state_12847__$1 = state_12847;
var statearr_12863_12886 = state_12847__$1;
(statearr_12863_12886[(2)] = inst_12830);

(statearr_12863_12886[(1)] = (10));


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
}
}
}
}
});})(c__8284__auto___12872))
;
return ((function (switch__8222__auto__,c__8284__auto___12872){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_12867 = [null,null,null,null,null,null,null,null];
(statearr_12867[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_12867[(1)] = (1));

return statearr_12867;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_12847){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_12847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e12868){if((e12868 instanceof Object)){
var ex__8226__auto__ = e12868;
var statearr_12869_12887 = state_12847;
(statearr_12869_12887[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12888 = state_12847;
state_12847 = G__12888;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_12847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_12847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___12872))
})();
var state__8286__auto__ = (function (){var statearr_12870 = f__8285__auto__.call(null);
(statearr_12870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___12872);

return statearr_12870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___12872))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13072){
var vec__13073 = p__13072;
var v = cljs.core.nth.call(null,vec__13073,(0),null);
var p = cljs.core.nth.call(null,vec__13073,(1),null);
var job = vec__13073;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8284__auto___13255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results){
return (function (state_13078){
var state_val_13079 = (state_13078[(1)]);
if((state_val_13079 === (1))){
var state_13078__$1 = state_13078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13078__$1,(2),res,v);
} else {
if((state_val_13079 === (2))){
var inst_13075 = (state_13078[(2)]);
var inst_13076 = cljs.core.async.close_BANG_.call(null,res);
var state_13078__$1 = (function (){var statearr_13080 = state_13078;
(statearr_13080[(7)] = inst_13075);

return statearr_13080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13078__$1,inst_13076);
} else {
return null;
}
}
});})(c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results))
;
return ((function (switch__8222__auto__,c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_13084 = [null,null,null,null,null,null,null,null];
(statearr_13084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__);

(statearr_13084[(1)] = (1));

return statearr_13084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1 = (function (state_13078){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13085){if((e13085 instanceof Object)){
var ex__8226__auto__ = e13085;
var statearr_13086_13256 = state_13078;
(statearr_13086_13256[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13257 = state_13078;
state_13078 = G__13257;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = function(state_13078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1.call(this,state_13078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results))
})();
var state__8286__auto__ = (function (){var statearr_13087 = f__8285__auto__.call(null);
(statearr_13087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13255);

return statearr_13087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___13255,res,vec__13073,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13088){
var vec__13089 = p__13088;
var v = cljs.core.nth.call(null,vec__13089,(0),null);
var p = cljs.core.nth.call(null,vec__13089,(1),null);
var job = vec__13089;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5163__auto___13258 = n;
var __13259 = (0);
while(true){
if((__13259 < n__5163__auto___13258)){
var G__13090_13260 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13090_13260) {
case "compute":
var c__8284__auto___13262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13259,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (__13259,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function (state_13103){
var state_val_13104 = (state_13103[(1)]);
if((state_val_13104 === (1))){
var state_13103__$1 = state_13103;
var statearr_13105_13263 = state_13103__$1;
(statearr_13105_13263[(2)] = null);

(statearr_13105_13263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (2))){
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13103__$1,(4),jobs);
} else {
if((state_val_13104 === (3))){
var inst_13101 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13103__$1,inst_13101);
} else {
if((state_val_13104 === (4))){
var inst_13093 = (state_13103[(2)]);
var inst_13094 = process.call(null,inst_13093);
var state_13103__$1 = state_13103;
if(cljs.core.truth_(inst_13094)){
var statearr_13106_13264 = state_13103__$1;
(statearr_13106_13264[(1)] = (5));

} else {
var statearr_13107_13265 = state_13103__$1;
(statearr_13107_13265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (5))){
var state_13103__$1 = state_13103;
var statearr_13108_13266 = state_13103__$1;
(statearr_13108_13266[(2)] = null);

(statearr_13108_13266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (6))){
var state_13103__$1 = state_13103;
var statearr_13109_13267 = state_13103__$1;
(statearr_13109_13267[(2)] = null);

(statearr_13109_13267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13104 === (7))){
var inst_13099 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13110_13268 = state_13103__$1;
(statearr_13110_13268[(2)] = inst_13099);

(statearr_13110_13268[(1)] = (3));


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
});})(__13259,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
;
return ((function (__13259,switch__8222__auto__,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_13114 = [null,null,null,null,null,null,null];
(statearr_13114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__);

(statearr_13114[(1)] = (1));

return statearr_13114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1 = (function (state_13103){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13115){if((e13115 instanceof Object)){
var ex__8226__auto__ = e13115;
var statearr_13116_13269 = state_13103;
(statearr_13116_13269[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13270 = state_13103;
state_13103 = G__13270;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = function(state_13103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1.call(this,state_13103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__;
})()
;})(__13259,switch__8222__auto__,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
})();
var state__8286__auto__ = (function (){var statearr_13117 = f__8285__auto__.call(null);
(statearr_13117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13262);

return statearr_13117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(__13259,c__8284__auto___13262,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
);


break;
case "async":
var c__8284__auto___13271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13259,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (__13259,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function (state_13130){
var state_val_13131 = (state_13130[(1)]);
if((state_val_13131 === (1))){
var state_13130__$1 = state_13130;
var statearr_13132_13272 = state_13130__$1;
(statearr_13132_13272[(2)] = null);

(statearr_13132_13272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13131 === (2))){
var state_13130__$1 = state_13130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13130__$1,(4),jobs);
} else {
if((state_val_13131 === (3))){
var inst_13128 = (state_13130[(2)]);
var state_13130__$1 = state_13130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13130__$1,inst_13128);
} else {
if((state_val_13131 === (4))){
var inst_13120 = (state_13130[(2)]);
var inst_13121 = async.call(null,inst_13120);
var state_13130__$1 = state_13130;
if(cljs.core.truth_(inst_13121)){
var statearr_13133_13273 = state_13130__$1;
(statearr_13133_13273[(1)] = (5));

} else {
var statearr_13134_13274 = state_13130__$1;
(statearr_13134_13274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13131 === (5))){
var state_13130__$1 = state_13130;
var statearr_13135_13275 = state_13130__$1;
(statearr_13135_13275[(2)] = null);

(statearr_13135_13275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13131 === (6))){
var state_13130__$1 = state_13130;
var statearr_13136_13276 = state_13130__$1;
(statearr_13136_13276[(2)] = null);

(statearr_13136_13276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13131 === (7))){
var inst_13126 = (state_13130[(2)]);
var state_13130__$1 = state_13130;
var statearr_13137_13277 = state_13130__$1;
(statearr_13137_13277[(2)] = inst_13126);

(statearr_13137_13277[(1)] = (3));


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
});})(__13259,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
;
return ((function (__13259,switch__8222__auto__,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_13141 = [null,null,null,null,null,null,null];
(statearr_13141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__);

(statearr_13141[(1)] = (1));

return statearr_13141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1 = (function (state_13130){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13142){if((e13142 instanceof Object)){
var ex__8226__auto__ = e13142;
var statearr_13143_13278 = state_13130;
(statearr_13143_13278[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13279 = state_13130;
state_13130 = G__13279;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = function(state_13130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1.call(this,state_13130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__;
})()
;})(__13259,switch__8222__auto__,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
})();
var state__8286__auto__ = (function (){var statearr_13144 = f__8285__auto__.call(null);
(statearr_13144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13271);

return statearr_13144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(__13259,c__8284__auto___13271,G__13090_13260,n__5163__auto___13258,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13280 = (__13259 + (1));
__13259 = G__13280;
continue;
} else {
}
break;
}

var c__8284__auto___13281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___13281,jobs,results,process,async){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___13281,jobs,results,process,async){
return (function (state_13166){
var state_val_13167 = (state_13166[(1)]);
if((state_val_13167 === (1))){
var state_13166__$1 = state_13166;
var statearr_13168_13282 = state_13166__$1;
(statearr_13168_13282[(2)] = null);

(statearr_13168_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (2))){
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13166__$1,(4),from);
} else {
if((state_val_13167 === (3))){
var inst_13164 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13166__$1,inst_13164);
} else {
if((state_val_13167 === (4))){
var inst_13147 = (state_13166[(7)]);
var inst_13147__$1 = (state_13166[(2)]);
var inst_13148 = (inst_13147__$1 == null);
var state_13166__$1 = (function (){var statearr_13169 = state_13166;
(statearr_13169[(7)] = inst_13147__$1);

return statearr_13169;
})();
if(cljs.core.truth_(inst_13148)){
var statearr_13170_13283 = state_13166__$1;
(statearr_13170_13283[(1)] = (5));

} else {
var statearr_13171_13284 = state_13166__$1;
(statearr_13171_13284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (5))){
var inst_13150 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13166__$1 = state_13166;
var statearr_13172_13285 = state_13166__$1;
(statearr_13172_13285[(2)] = inst_13150);

(statearr_13172_13285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (6))){
var inst_13152 = (state_13166[(8)]);
var inst_13147 = (state_13166[(7)]);
var inst_13152__$1 = cljs.core.async.chan.call(null,(1));
var inst_13153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13154 = [inst_13147,inst_13152__$1];
var inst_13155 = (new cljs.core.PersistentVector(null,2,(5),inst_13153,inst_13154,null));
var state_13166__$1 = (function (){var statearr_13173 = state_13166;
(statearr_13173[(8)] = inst_13152__$1);

return statearr_13173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(8),jobs,inst_13155);
} else {
if((state_val_13167 === (7))){
var inst_13162 = (state_13166[(2)]);
var state_13166__$1 = state_13166;
var statearr_13174_13286 = state_13166__$1;
(statearr_13174_13286[(2)] = inst_13162);

(statearr_13174_13286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13167 === (8))){
var inst_13152 = (state_13166[(8)]);
var inst_13157 = (state_13166[(2)]);
var state_13166__$1 = (function (){var statearr_13175 = state_13166;
(statearr_13175[(9)] = inst_13157);

return statearr_13175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,(9),results,inst_13152);
} else {
if((state_val_13167 === (9))){
var inst_13159 = (state_13166[(2)]);
var state_13166__$1 = (function (){var statearr_13176 = state_13166;
(statearr_13176[(10)] = inst_13159);

return statearr_13176;
})();
var statearr_13177_13287 = state_13166__$1;
(statearr_13177_13287[(2)] = null);

(statearr_13177_13287[(1)] = (2));


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
});})(c__8284__auto___13281,jobs,results,process,async))
;
return ((function (switch__8222__auto__,c__8284__auto___13281,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_13181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__);

(statearr_13181[(1)] = (1));

return statearr_13181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1 = (function (state_13166){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13182){if((e13182 instanceof Object)){
var ex__8226__auto__ = e13182;
var statearr_13183_13288 = state_13166;
(statearr_13183_13288[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13289 = state_13166;
state_13166 = G__13289;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = function(state_13166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1.call(this,state_13166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___13281,jobs,results,process,async))
})();
var state__8286__auto__ = (function (){var statearr_13184 = f__8285__auto__.call(null);
(statearr_13184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13281);

return statearr_13184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___13281,jobs,results,process,async))
);


var c__8284__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto__,jobs,results,process,async){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto__,jobs,results,process,async){
return (function (state_13222){
var state_val_13223 = (state_13222[(1)]);
if((state_val_13223 === (7))){
var inst_13218 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
var statearr_13224_13290 = state_13222__$1;
(statearr_13224_13290[(2)] = inst_13218);

(statearr_13224_13290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (20))){
var state_13222__$1 = state_13222;
var statearr_13225_13291 = state_13222__$1;
(statearr_13225_13291[(2)] = null);

(statearr_13225_13291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (1))){
var state_13222__$1 = state_13222;
var statearr_13226_13292 = state_13222__$1;
(statearr_13226_13292[(2)] = null);

(statearr_13226_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (4))){
var inst_13187 = (state_13222[(7)]);
var inst_13187__$1 = (state_13222[(2)]);
var inst_13188 = (inst_13187__$1 == null);
var state_13222__$1 = (function (){var statearr_13227 = state_13222;
(statearr_13227[(7)] = inst_13187__$1);

return statearr_13227;
})();
if(cljs.core.truth_(inst_13188)){
var statearr_13228_13293 = state_13222__$1;
(statearr_13228_13293[(1)] = (5));

} else {
var statearr_13229_13294 = state_13222__$1;
(statearr_13229_13294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (15))){
var inst_13200 = (state_13222[(8)]);
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13222__$1,(18),to,inst_13200);
} else {
if((state_val_13223 === (21))){
var inst_13213 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
var statearr_13230_13295 = state_13222__$1;
(statearr_13230_13295[(2)] = inst_13213);

(statearr_13230_13295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (13))){
var inst_13215 = (state_13222[(2)]);
var state_13222__$1 = (function (){var statearr_13231 = state_13222;
(statearr_13231[(9)] = inst_13215);

return statearr_13231;
})();
var statearr_13232_13296 = state_13222__$1;
(statearr_13232_13296[(2)] = null);

(statearr_13232_13296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (6))){
var inst_13187 = (state_13222[(7)]);
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13222__$1,(11),inst_13187);
} else {
if((state_val_13223 === (17))){
var inst_13208 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
if(cljs.core.truth_(inst_13208)){
var statearr_13233_13297 = state_13222__$1;
(statearr_13233_13297[(1)] = (19));

} else {
var statearr_13234_13298 = state_13222__$1;
(statearr_13234_13298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (3))){
var inst_13220 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13222__$1,inst_13220);
} else {
if((state_val_13223 === (12))){
var inst_13197 = (state_13222[(10)]);
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13222__$1,(14),inst_13197);
} else {
if((state_val_13223 === (2))){
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13222__$1,(4),results);
} else {
if((state_val_13223 === (19))){
var state_13222__$1 = state_13222;
var statearr_13235_13299 = state_13222__$1;
(statearr_13235_13299[(2)] = null);

(statearr_13235_13299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (11))){
var inst_13197 = (state_13222[(2)]);
var state_13222__$1 = (function (){var statearr_13236 = state_13222;
(statearr_13236[(10)] = inst_13197);

return statearr_13236;
})();
var statearr_13237_13300 = state_13222__$1;
(statearr_13237_13300[(2)] = null);

(statearr_13237_13300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (9))){
var state_13222__$1 = state_13222;
var statearr_13238_13301 = state_13222__$1;
(statearr_13238_13301[(2)] = null);

(statearr_13238_13301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (5))){
var state_13222__$1 = state_13222;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13239_13302 = state_13222__$1;
(statearr_13239_13302[(1)] = (8));

} else {
var statearr_13240_13303 = state_13222__$1;
(statearr_13240_13303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (14))){
var inst_13202 = (state_13222[(11)]);
var inst_13200 = (state_13222[(8)]);
var inst_13200__$1 = (state_13222[(2)]);
var inst_13201 = (inst_13200__$1 == null);
var inst_13202__$1 = cljs.core.not.call(null,inst_13201);
var state_13222__$1 = (function (){var statearr_13241 = state_13222;
(statearr_13241[(11)] = inst_13202__$1);

(statearr_13241[(8)] = inst_13200__$1);

return statearr_13241;
})();
if(inst_13202__$1){
var statearr_13242_13304 = state_13222__$1;
(statearr_13242_13304[(1)] = (15));

} else {
var statearr_13243_13305 = state_13222__$1;
(statearr_13243_13305[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (16))){
var inst_13202 = (state_13222[(11)]);
var state_13222__$1 = state_13222;
var statearr_13244_13306 = state_13222__$1;
(statearr_13244_13306[(2)] = inst_13202);

(statearr_13244_13306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (10))){
var inst_13194 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
var statearr_13245_13307 = state_13222__$1;
(statearr_13245_13307[(2)] = inst_13194);

(statearr_13245_13307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (18))){
var inst_13205 = (state_13222[(2)]);
var state_13222__$1 = state_13222;
var statearr_13246_13308 = state_13222__$1;
(statearr_13246_13308[(2)] = inst_13205);

(statearr_13246_13308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13223 === (8))){
var inst_13191 = cljs.core.async.close_BANG_.call(null,to);
var state_13222__$1 = state_13222;
var statearr_13247_13309 = state_13222__$1;
(statearr_13247_13309[(2)] = inst_13191);

(statearr_13247_13309[(1)] = (10));


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
}
});})(c__8284__auto__,jobs,results,process,async))
;
return ((function (switch__8222__auto__,c__8284__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_13251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__);

(statearr_13251[(1)] = (1));

return statearr_13251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1 = (function (state_13222){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13252){if((e13252 instanceof Object)){
var ex__8226__auto__ = e13252;
var statearr_13253_13310 = state_13222;
(statearr_13253_13310[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13311 = state_13222;
state_13222 = G__13311;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__ = function(state_13222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1.call(this,state_13222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto__,jobs,results,process,async))
})();
var state__8286__auto__ = (function (){var statearr_13254 = f__8285__auto__.call(null);
(statearr_13254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);

return statearr_13254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto__,jobs,results,process,async))
);

return c__8284__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__13313 = arguments.length;
switch (G__13313) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__13316 = arguments.length;
switch (G__13316) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__13319 = arguments.length;
switch (G__13319) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8284__auto___13371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___13371,tc,fc){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___13371,tc,fc){
return (function (state_13345){
var state_val_13346 = (state_13345[(1)]);
if((state_val_13346 === (7))){
var inst_13341 = (state_13345[(2)]);
var state_13345__$1 = state_13345;
var statearr_13347_13372 = state_13345__$1;
(statearr_13347_13372[(2)] = inst_13341);

(statearr_13347_13372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (1))){
var state_13345__$1 = state_13345;
var statearr_13348_13373 = state_13345__$1;
(statearr_13348_13373[(2)] = null);

(statearr_13348_13373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (4))){
var inst_13322 = (state_13345[(7)]);
var inst_13322__$1 = (state_13345[(2)]);
var inst_13323 = (inst_13322__$1 == null);
var state_13345__$1 = (function (){var statearr_13349 = state_13345;
(statearr_13349[(7)] = inst_13322__$1);

return statearr_13349;
})();
if(cljs.core.truth_(inst_13323)){
var statearr_13350_13374 = state_13345__$1;
(statearr_13350_13374[(1)] = (5));

} else {
var statearr_13351_13375 = state_13345__$1;
(statearr_13351_13375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (13))){
var state_13345__$1 = state_13345;
var statearr_13352_13376 = state_13345__$1;
(statearr_13352_13376[(2)] = null);

(statearr_13352_13376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (6))){
var inst_13322 = (state_13345[(7)]);
var inst_13328 = p.call(null,inst_13322);
var state_13345__$1 = state_13345;
if(cljs.core.truth_(inst_13328)){
var statearr_13353_13377 = state_13345__$1;
(statearr_13353_13377[(1)] = (9));

} else {
var statearr_13354_13378 = state_13345__$1;
(statearr_13354_13378[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (3))){
var inst_13343 = (state_13345[(2)]);
var state_13345__$1 = state_13345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13345__$1,inst_13343);
} else {
if((state_val_13346 === (12))){
var state_13345__$1 = state_13345;
var statearr_13355_13379 = state_13345__$1;
(statearr_13355_13379[(2)] = null);

(statearr_13355_13379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (2))){
var state_13345__$1 = state_13345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13345__$1,(4),ch);
} else {
if((state_val_13346 === (11))){
var inst_13322 = (state_13345[(7)]);
var inst_13332 = (state_13345[(2)]);
var state_13345__$1 = state_13345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13345__$1,(8),inst_13332,inst_13322);
} else {
if((state_val_13346 === (9))){
var state_13345__$1 = state_13345;
var statearr_13356_13380 = state_13345__$1;
(statearr_13356_13380[(2)] = tc);

(statearr_13356_13380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (5))){
var inst_13325 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13326 = cljs.core.async.close_BANG_.call(null,fc);
var state_13345__$1 = (function (){var statearr_13357 = state_13345;
(statearr_13357[(8)] = inst_13325);

return statearr_13357;
})();
var statearr_13358_13381 = state_13345__$1;
(statearr_13358_13381[(2)] = inst_13326);

(statearr_13358_13381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (14))){
var inst_13339 = (state_13345[(2)]);
var state_13345__$1 = state_13345;
var statearr_13359_13382 = state_13345__$1;
(statearr_13359_13382[(2)] = inst_13339);

(statearr_13359_13382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (10))){
var state_13345__$1 = state_13345;
var statearr_13360_13383 = state_13345__$1;
(statearr_13360_13383[(2)] = fc);

(statearr_13360_13383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13346 === (8))){
var inst_13334 = (state_13345[(2)]);
var state_13345__$1 = state_13345;
if(cljs.core.truth_(inst_13334)){
var statearr_13361_13384 = state_13345__$1;
(statearr_13361_13384[(1)] = (12));

} else {
var statearr_13362_13385 = state_13345__$1;
(statearr_13362_13385[(1)] = (13));

}

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
}
}
}
}
});})(c__8284__auto___13371,tc,fc))
;
return ((function (switch__8222__auto__,c__8284__auto___13371,tc,fc){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_13366 = [null,null,null,null,null,null,null,null,null];
(statearr_13366[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_13366[(1)] = (1));

return statearr_13366;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_13345){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object)){
var ex__8226__auto__ = e13367;
var statearr_13368_13386 = state_13345;
(statearr_13368_13386[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13387 = state_13345;
state_13345 = G__13387;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_13345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_13345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___13371,tc,fc))
})();
var state__8286__auto__ = (function (){var statearr_13369 = f__8285__auto__.call(null);
(statearr_13369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___13371);

return statearr_13369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___13371,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8284__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto__){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto__){
return (function (state_13451){
var state_val_13452 = (state_13451[(1)]);
if((state_val_13452 === (7))){
var inst_13447 = (state_13451[(2)]);
var state_13451__$1 = state_13451;
var statearr_13453_13474 = state_13451__$1;
(statearr_13453_13474[(2)] = inst_13447);

(statearr_13453_13474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (1))){
var inst_13431 = init;
var state_13451__$1 = (function (){var statearr_13454 = state_13451;
(statearr_13454[(7)] = inst_13431);

return statearr_13454;
})();
var statearr_13455_13475 = state_13451__$1;
(statearr_13455_13475[(2)] = null);

(statearr_13455_13475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (4))){
var inst_13434 = (state_13451[(8)]);
var inst_13434__$1 = (state_13451[(2)]);
var inst_13435 = (inst_13434__$1 == null);
var state_13451__$1 = (function (){var statearr_13456 = state_13451;
(statearr_13456[(8)] = inst_13434__$1);

return statearr_13456;
})();
if(cljs.core.truth_(inst_13435)){
var statearr_13457_13476 = state_13451__$1;
(statearr_13457_13476[(1)] = (5));

} else {
var statearr_13458_13477 = state_13451__$1;
(statearr_13458_13477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (6))){
var inst_13434 = (state_13451[(8)]);
var inst_13438 = (state_13451[(9)]);
var inst_13431 = (state_13451[(7)]);
var inst_13438__$1 = f.call(null,inst_13431,inst_13434);
var inst_13439 = cljs.core.reduced_QMARK_.call(null,inst_13438__$1);
var state_13451__$1 = (function (){var statearr_13459 = state_13451;
(statearr_13459[(9)] = inst_13438__$1);

return statearr_13459;
})();
if(inst_13439){
var statearr_13460_13478 = state_13451__$1;
(statearr_13460_13478[(1)] = (8));

} else {
var statearr_13461_13479 = state_13451__$1;
(statearr_13461_13479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (3))){
var inst_13449 = (state_13451[(2)]);
var state_13451__$1 = state_13451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13451__$1,inst_13449);
} else {
if((state_val_13452 === (2))){
var state_13451__$1 = state_13451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13451__$1,(4),ch);
} else {
if((state_val_13452 === (9))){
var inst_13438 = (state_13451[(9)]);
var inst_13431 = inst_13438;
var state_13451__$1 = (function (){var statearr_13462 = state_13451;
(statearr_13462[(7)] = inst_13431);

return statearr_13462;
})();
var statearr_13463_13480 = state_13451__$1;
(statearr_13463_13480[(2)] = null);

(statearr_13463_13480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (5))){
var inst_13431 = (state_13451[(7)]);
var state_13451__$1 = state_13451;
var statearr_13464_13481 = state_13451__$1;
(statearr_13464_13481[(2)] = inst_13431);

(statearr_13464_13481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (10))){
var inst_13445 = (state_13451[(2)]);
var state_13451__$1 = state_13451;
var statearr_13465_13482 = state_13451__$1;
(statearr_13465_13482[(2)] = inst_13445);

(statearr_13465_13482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13452 === (8))){
var inst_13438 = (state_13451[(9)]);
var inst_13441 = cljs.core.deref.call(null,inst_13438);
var state_13451__$1 = state_13451;
var statearr_13466_13483 = state_13451__$1;
(statearr_13466_13483[(2)] = inst_13441);

(statearr_13466_13483[(1)] = (10));


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
});})(c__8284__auto__))
;
return ((function (switch__8222__auto__,c__8284__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8223__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8223__auto____0 = (function (){
var statearr_13470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13470[(0)] = cljs$core$async$reduce_$_state_machine__8223__auto__);

(statearr_13470[(1)] = (1));

return statearr_13470;
});
var cljs$core$async$reduce_$_state_machine__8223__auto____1 = (function (state_13451){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13471){if((e13471 instanceof Object)){
var ex__8226__auto__ = e13471;
var statearr_13472_13484 = state_13451;
(statearr_13472_13484[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13485 = state_13451;
state_13451 = G__13485;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8223__auto__ = function(state_13451){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8223__auto____1.call(this,state_13451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8223__auto____0;
cljs$core$async$reduce_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8223__auto____1;
return cljs$core$async$reduce_$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto__))
})();
var state__8286__auto__ = (function (){var statearr_13473 = f__8285__auto__.call(null);
(statearr_13473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);

return statearr_13473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto__))
);

return c__8284__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__13487 = arguments.length;
switch (G__13487) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8284__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto__){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto__){
return (function (state_13512){
var state_val_13513 = (state_13512[(1)]);
if((state_val_13513 === (7))){
var inst_13494 = (state_13512[(2)]);
var state_13512__$1 = state_13512;
var statearr_13514_13538 = state_13512__$1;
(statearr_13514_13538[(2)] = inst_13494);

(statearr_13514_13538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (1))){
var inst_13488 = cljs.core.seq.call(null,coll);
var inst_13489 = inst_13488;
var state_13512__$1 = (function (){var statearr_13515 = state_13512;
(statearr_13515[(7)] = inst_13489);

return statearr_13515;
})();
var statearr_13516_13539 = state_13512__$1;
(statearr_13516_13539[(2)] = null);

(statearr_13516_13539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (4))){
var inst_13489 = (state_13512[(7)]);
var inst_13492 = cljs.core.first.call(null,inst_13489);
var state_13512__$1 = state_13512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13512__$1,(7),ch,inst_13492);
} else {
if((state_val_13513 === (13))){
var inst_13506 = (state_13512[(2)]);
var state_13512__$1 = state_13512;
var statearr_13517_13540 = state_13512__$1;
(statearr_13517_13540[(2)] = inst_13506);

(statearr_13517_13540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (6))){
var inst_13497 = (state_13512[(2)]);
var state_13512__$1 = state_13512;
if(cljs.core.truth_(inst_13497)){
var statearr_13518_13541 = state_13512__$1;
(statearr_13518_13541[(1)] = (8));

} else {
var statearr_13519_13542 = state_13512__$1;
(statearr_13519_13542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (3))){
var inst_13510 = (state_13512[(2)]);
var state_13512__$1 = state_13512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13512__$1,inst_13510);
} else {
if((state_val_13513 === (12))){
var state_13512__$1 = state_13512;
var statearr_13520_13543 = state_13512__$1;
(statearr_13520_13543[(2)] = null);

(statearr_13520_13543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (2))){
var inst_13489 = (state_13512[(7)]);
var state_13512__$1 = state_13512;
if(cljs.core.truth_(inst_13489)){
var statearr_13521_13544 = state_13512__$1;
(statearr_13521_13544[(1)] = (4));

} else {
var statearr_13522_13545 = state_13512__$1;
(statearr_13522_13545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (11))){
var inst_13503 = cljs.core.async.close_BANG_.call(null,ch);
var state_13512__$1 = state_13512;
var statearr_13523_13546 = state_13512__$1;
(statearr_13523_13546[(2)] = inst_13503);

(statearr_13523_13546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (9))){
var state_13512__$1 = state_13512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13524_13547 = state_13512__$1;
(statearr_13524_13547[(1)] = (11));

} else {
var statearr_13525_13548 = state_13512__$1;
(statearr_13525_13548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (5))){
var inst_13489 = (state_13512[(7)]);
var state_13512__$1 = state_13512;
var statearr_13526_13549 = state_13512__$1;
(statearr_13526_13549[(2)] = inst_13489);

(statearr_13526_13549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (10))){
var inst_13508 = (state_13512[(2)]);
var state_13512__$1 = state_13512;
var statearr_13527_13550 = state_13512__$1;
(statearr_13527_13550[(2)] = inst_13508);

(statearr_13527_13550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13513 === (8))){
var inst_13489 = (state_13512[(7)]);
var inst_13499 = cljs.core.next.call(null,inst_13489);
var inst_13489__$1 = inst_13499;
var state_13512__$1 = (function (){var statearr_13528 = state_13512;
(statearr_13528[(7)] = inst_13489__$1);

return statearr_13528;
})();
var statearr_13529_13551 = state_13512__$1;
(statearr_13529_13551[(2)] = null);

(statearr_13529_13551[(1)] = (2));


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
}
}
}
});})(c__8284__auto__))
;
return ((function (switch__8222__auto__,c__8284__auto__){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_13533 = [null,null,null,null,null,null,null,null];
(statearr_13533[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_13533[(1)] = (1));

return statearr_13533;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_13512){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13534){if((e13534 instanceof Object)){
var ex__8226__auto__ = e13534;
var statearr_13535_13552 = state_13512;
(statearr_13535_13552[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13553 = state_13512;
state_13512 = G__13553;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_13512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_13512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto__))
})();
var state__8286__auto__ = (function (){var statearr_13536 = f__8285__auto__.call(null);
(statearr_13536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);

return statearr_13536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto__))
);

return c__8284__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj13555 = {};
return obj13555;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4266__auto__ = _;
if(and__4266__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4266__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4914__auto__ = (((_ == null))?null:_);
return (function (){var or__4278__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj13557 = {};
return obj13557;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13779 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13779 = (function (mult,ch,cs,meta13780){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13780 = meta13780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13781,meta13780__$1){
var self__ = this;
var _13781__$1 = this;
return (new cljs.core.async.t13779(self__.mult,self__.ch,self__.cs,meta13780__$1));
});})(cs))
;

cljs.core.async.t13779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13781){
var self__ = this;
var _13781__$1 = this;
return self__.meta13780;
});})(cs))
;

cljs.core.async.t13779.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13779.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13779.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13779.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13779.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13779.cljs$lang$type = true;

cljs.core.async.t13779.cljs$lang$ctorStr = "cljs.core.async/t13779";

cljs.core.async.t13779.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t13779");
});})(cs))
;

cljs.core.async.__GT_t13779 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13779(mult__$1,ch__$1,cs__$1,meta13780){
return (new cljs.core.async.t13779(mult__$1,ch__$1,cs__$1,meta13780));
});})(cs))
;

}

return (new cljs.core.async.t13779(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8284__auto___14000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14000,cs,m,dchan,dctr,done){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14000,cs,m,dchan,dctr,done){
return (function (state_13912){
var state_val_13913 = (state_13912[(1)]);
if((state_val_13913 === (7))){
var inst_13908 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13914_14001 = state_13912__$1;
(statearr_13914_14001[(2)] = inst_13908);

(statearr_13914_14001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (20))){
var inst_13813 = (state_13912[(7)]);
var inst_13823 = cljs.core.first.call(null,inst_13813);
var inst_13824 = cljs.core.nth.call(null,inst_13823,(0),null);
var inst_13825 = cljs.core.nth.call(null,inst_13823,(1),null);
var state_13912__$1 = (function (){var statearr_13915 = state_13912;
(statearr_13915[(8)] = inst_13824);

return statearr_13915;
})();
if(cljs.core.truth_(inst_13825)){
var statearr_13916_14002 = state_13912__$1;
(statearr_13916_14002[(1)] = (22));

} else {
var statearr_13917_14003 = state_13912__$1;
(statearr_13917_14003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (27))){
var inst_13853 = (state_13912[(9)]);
var inst_13855 = (state_13912[(10)]);
var inst_13860 = (state_13912[(11)]);
var inst_13784 = (state_13912[(12)]);
var inst_13860__$1 = cljs.core._nth.call(null,inst_13853,inst_13855);
var inst_13861 = cljs.core.async.put_BANG_.call(null,inst_13860__$1,inst_13784,done);
var state_13912__$1 = (function (){var statearr_13918 = state_13912;
(statearr_13918[(11)] = inst_13860__$1);

return statearr_13918;
})();
if(cljs.core.truth_(inst_13861)){
var statearr_13919_14004 = state_13912__$1;
(statearr_13919_14004[(1)] = (30));

} else {
var statearr_13920_14005 = state_13912__$1;
(statearr_13920_14005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (1))){
var state_13912__$1 = state_13912;
var statearr_13921_14006 = state_13912__$1;
(statearr_13921_14006[(2)] = null);

(statearr_13921_14006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (24))){
var inst_13813 = (state_13912[(7)]);
var inst_13830 = (state_13912[(2)]);
var inst_13831 = cljs.core.next.call(null,inst_13813);
var inst_13793 = inst_13831;
var inst_13794 = null;
var inst_13795 = (0);
var inst_13796 = (0);
var state_13912__$1 = (function (){var statearr_13922 = state_13912;
(statearr_13922[(13)] = inst_13794);

(statearr_13922[(14)] = inst_13795);

(statearr_13922[(15)] = inst_13793);

(statearr_13922[(16)] = inst_13830);

(statearr_13922[(17)] = inst_13796);

return statearr_13922;
})();
var statearr_13923_14007 = state_13912__$1;
(statearr_13923_14007[(2)] = null);

(statearr_13923_14007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (39))){
var state_13912__$1 = state_13912;
var statearr_13927_14008 = state_13912__$1;
(statearr_13927_14008[(2)] = null);

(statearr_13927_14008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (4))){
var inst_13784 = (state_13912[(12)]);
var inst_13784__$1 = (state_13912[(2)]);
var inst_13785 = (inst_13784__$1 == null);
var state_13912__$1 = (function (){var statearr_13928 = state_13912;
(statearr_13928[(12)] = inst_13784__$1);

return statearr_13928;
})();
if(cljs.core.truth_(inst_13785)){
var statearr_13929_14009 = state_13912__$1;
(statearr_13929_14009[(1)] = (5));

} else {
var statearr_13930_14010 = state_13912__$1;
(statearr_13930_14010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (15))){
var inst_13794 = (state_13912[(13)]);
var inst_13795 = (state_13912[(14)]);
var inst_13793 = (state_13912[(15)]);
var inst_13796 = (state_13912[(17)]);
var inst_13809 = (state_13912[(2)]);
var inst_13810 = (inst_13796 + (1));
var tmp13924 = inst_13794;
var tmp13925 = inst_13795;
var tmp13926 = inst_13793;
var inst_13793__$1 = tmp13926;
var inst_13794__$1 = tmp13924;
var inst_13795__$1 = tmp13925;
var inst_13796__$1 = inst_13810;
var state_13912__$1 = (function (){var statearr_13931 = state_13912;
(statearr_13931[(13)] = inst_13794__$1);

(statearr_13931[(14)] = inst_13795__$1);

(statearr_13931[(15)] = inst_13793__$1);

(statearr_13931[(18)] = inst_13809);

(statearr_13931[(17)] = inst_13796__$1);

return statearr_13931;
})();
var statearr_13932_14011 = state_13912__$1;
(statearr_13932_14011[(2)] = null);

(statearr_13932_14011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (21))){
var inst_13834 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13936_14012 = state_13912__$1;
(statearr_13936_14012[(2)] = inst_13834);

(statearr_13936_14012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (31))){
var inst_13860 = (state_13912[(11)]);
var inst_13864 = done.call(null,null);
var inst_13865 = cljs.core.async.untap_STAR_.call(null,m,inst_13860);
var state_13912__$1 = (function (){var statearr_13937 = state_13912;
(statearr_13937[(19)] = inst_13864);

return statearr_13937;
})();
var statearr_13938_14013 = state_13912__$1;
(statearr_13938_14013[(2)] = inst_13865);

(statearr_13938_14013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (32))){
var inst_13853 = (state_13912[(9)]);
var inst_13855 = (state_13912[(10)]);
var inst_13852 = (state_13912[(20)]);
var inst_13854 = (state_13912[(21)]);
var inst_13867 = (state_13912[(2)]);
var inst_13868 = (inst_13855 + (1));
var tmp13933 = inst_13853;
var tmp13934 = inst_13852;
var tmp13935 = inst_13854;
var inst_13852__$1 = tmp13934;
var inst_13853__$1 = tmp13933;
var inst_13854__$1 = tmp13935;
var inst_13855__$1 = inst_13868;
var state_13912__$1 = (function (){var statearr_13939 = state_13912;
(statearr_13939[(9)] = inst_13853__$1);

(statearr_13939[(22)] = inst_13867);

(statearr_13939[(10)] = inst_13855__$1);

(statearr_13939[(20)] = inst_13852__$1);

(statearr_13939[(21)] = inst_13854__$1);

return statearr_13939;
})();
var statearr_13940_14014 = state_13912__$1;
(statearr_13940_14014[(2)] = null);

(statearr_13940_14014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (40))){
var inst_13880 = (state_13912[(23)]);
var inst_13884 = done.call(null,null);
var inst_13885 = cljs.core.async.untap_STAR_.call(null,m,inst_13880);
var state_13912__$1 = (function (){var statearr_13941 = state_13912;
(statearr_13941[(24)] = inst_13884);

return statearr_13941;
})();
var statearr_13942_14015 = state_13912__$1;
(statearr_13942_14015[(2)] = inst_13885);

(statearr_13942_14015[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (33))){
var inst_13871 = (state_13912[(25)]);
var inst_13873 = cljs.core.chunked_seq_QMARK_.call(null,inst_13871);
var state_13912__$1 = state_13912;
if(inst_13873){
var statearr_13943_14016 = state_13912__$1;
(statearr_13943_14016[(1)] = (36));

} else {
var statearr_13944_14017 = state_13912__$1;
(statearr_13944_14017[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (13))){
var inst_13803 = (state_13912[(26)]);
var inst_13806 = cljs.core.async.close_BANG_.call(null,inst_13803);
var state_13912__$1 = state_13912;
var statearr_13945_14018 = state_13912__$1;
(statearr_13945_14018[(2)] = inst_13806);

(statearr_13945_14018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (22))){
var inst_13824 = (state_13912[(8)]);
var inst_13827 = cljs.core.async.close_BANG_.call(null,inst_13824);
var state_13912__$1 = state_13912;
var statearr_13946_14019 = state_13912__$1;
(statearr_13946_14019[(2)] = inst_13827);

(statearr_13946_14019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (36))){
var inst_13871 = (state_13912[(25)]);
var inst_13875 = cljs.core.chunk_first.call(null,inst_13871);
var inst_13876 = cljs.core.chunk_rest.call(null,inst_13871);
var inst_13877 = cljs.core.count.call(null,inst_13875);
var inst_13852 = inst_13876;
var inst_13853 = inst_13875;
var inst_13854 = inst_13877;
var inst_13855 = (0);
var state_13912__$1 = (function (){var statearr_13947 = state_13912;
(statearr_13947[(9)] = inst_13853);

(statearr_13947[(10)] = inst_13855);

(statearr_13947[(20)] = inst_13852);

(statearr_13947[(21)] = inst_13854);

return statearr_13947;
})();
var statearr_13948_14020 = state_13912__$1;
(statearr_13948_14020[(2)] = null);

(statearr_13948_14020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (41))){
var inst_13871 = (state_13912[(25)]);
var inst_13887 = (state_13912[(2)]);
var inst_13888 = cljs.core.next.call(null,inst_13871);
var inst_13852 = inst_13888;
var inst_13853 = null;
var inst_13854 = (0);
var inst_13855 = (0);
var state_13912__$1 = (function (){var statearr_13949 = state_13912;
(statearr_13949[(9)] = inst_13853);

(statearr_13949[(27)] = inst_13887);

(statearr_13949[(10)] = inst_13855);

(statearr_13949[(20)] = inst_13852);

(statearr_13949[(21)] = inst_13854);

return statearr_13949;
})();
var statearr_13950_14021 = state_13912__$1;
(statearr_13950_14021[(2)] = null);

(statearr_13950_14021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (43))){
var state_13912__$1 = state_13912;
var statearr_13951_14022 = state_13912__$1;
(statearr_13951_14022[(2)] = null);

(statearr_13951_14022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (29))){
var inst_13896 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13952_14023 = state_13912__$1;
(statearr_13952_14023[(2)] = inst_13896);

(statearr_13952_14023[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (44))){
var inst_13905 = (state_13912[(2)]);
var state_13912__$1 = (function (){var statearr_13953 = state_13912;
(statearr_13953[(28)] = inst_13905);

return statearr_13953;
})();
var statearr_13954_14024 = state_13912__$1;
(statearr_13954_14024[(2)] = null);

(statearr_13954_14024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (6))){
var inst_13844 = (state_13912[(29)]);
var inst_13843 = cljs.core.deref.call(null,cs);
var inst_13844__$1 = cljs.core.keys.call(null,inst_13843);
var inst_13845 = cljs.core.count.call(null,inst_13844__$1);
var inst_13846 = cljs.core.reset_BANG_.call(null,dctr,inst_13845);
var inst_13851 = cljs.core.seq.call(null,inst_13844__$1);
var inst_13852 = inst_13851;
var inst_13853 = null;
var inst_13854 = (0);
var inst_13855 = (0);
var state_13912__$1 = (function (){var statearr_13955 = state_13912;
(statearr_13955[(9)] = inst_13853);

(statearr_13955[(10)] = inst_13855);

(statearr_13955[(29)] = inst_13844__$1);

(statearr_13955[(20)] = inst_13852);

(statearr_13955[(30)] = inst_13846);

(statearr_13955[(21)] = inst_13854);

return statearr_13955;
})();
var statearr_13956_14025 = state_13912__$1;
(statearr_13956_14025[(2)] = null);

(statearr_13956_14025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (28))){
var inst_13852 = (state_13912[(20)]);
var inst_13871 = (state_13912[(25)]);
var inst_13871__$1 = cljs.core.seq.call(null,inst_13852);
var state_13912__$1 = (function (){var statearr_13957 = state_13912;
(statearr_13957[(25)] = inst_13871__$1);

return statearr_13957;
})();
if(inst_13871__$1){
var statearr_13958_14026 = state_13912__$1;
(statearr_13958_14026[(1)] = (33));

} else {
var statearr_13959_14027 = state_13912__$1;
(statearr_13959_14027[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (25))){
var inst_13855 = (state_13912[(10)]);
var inst_13854 = (state_13912[(21)]);
var inst_13857 = (inst_13855 < inst_13854);
var inst_13858 = inst_13857;
var state_13912__$1 = state_13912;
if(cljs.core.truth_(inst_13858)){
var statearr_13960_14028 = state_13912__$1;
(statearr_13960_14028[(1)] = (27));

} else {
var statearr_13961_14029 = state_13912__$1;
(statearr_13961_14029[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (34))){
var state_13912__$1 = state_13912;
var statearr_13962_14030 = state_13912__$1;
(statearr_13962_14030[(2)] = null);

(statearr_13962_14030[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (17))){
var state_13912__$1 = state_13912;
var statearr_13963_14031 = state_13912__$1;
(statearr_13963_14031[(2)] = null);

(statearr_13963_14031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (3))){
var inst_13910 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13912__$1,inst_13910);
} else {
if((state_val_13913 === (12))){
var inst_13839 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13964_14032 = state_13912__$1;
(statearr_13964_14032[(2)] = inst_13839);

(statearr_13964_14032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (2))){
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13912__$1,(4),ch);
} else {
if((state_val_13913 === (23))){
var state_13912__$1 = state_13912;
var statearr_13965_14033 = state_13912__$1;
(statearr_13965_14033[(2)] = null);

(statearr_13965_14033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (35))){
var inst_13894 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13966_14034 = state_13912__$1;
(statearr_13966_14034[(2)] = inst_13894);

(statearr_13966_14034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (19))){
var inst_13813 = (state_13912[(7)]);
var inst_13817 = cljs.core.chunk_first.call(null,inst_13813);
var inst_13818 = cljs.core.chunk_rest.call(null,inst_13813);
var inst_13819 = cljs.core.count.call(null,inst_13817);
var inst_13793 = inst_13818;
var inst_13794 = inst_13817;
var inst_13795 = inst_13819;
var inst_13796 = (0);
var state_13912__$1 = (function (){var statearr_13967 = state_13912;
(statearr_13967[(13)] = inst_13794);

(statearr_13967[(14)] = inst_13795);

(statearr_13967[(15)] = inst_13793);

(statearr_13967[(17)] = inst_13796);

return statearr_13967;
})();
var statearr_13968_14035 = state_13912__$1;
(statearr_13968_14035[(2)] = null);

(statearr_13968_14035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (11))){
var inst_13793 = (state_13912[(15)]);
var inst_13813 = (state_13912[(7)]);
var inst_13813__$1 = cljs.core.seq.call(null,inst_13793);
var state_13912__$1 = (function (){var statearr_13969 = state_13912;
(statearr_13969[(7)] = inst_13813__$1);

return statearr_13969;
})();
if(inst_13813__$1){
var statearr_13970_14036 = state_13912__$1;
(statearr_13970_14036[(1)] = (16));

} else {
var statearr_13971_14037 = state_13912__$1;
(statearr_13971_14037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (9))){
var inst_13841 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13972_14038 = state_13912__$1;
(statearr_13972_14038[(2)] = inst_13841);

(statearr_13972_14038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (5))){
var inst_13791 = cljs.core.deref.call(null,cs);
var inst_13792 = cljs.core.seq.call(null,inst_13791);
var inst_13793 = inst_13792;
var inst_13794 = null;
var inst_13795 = (0);
var inst_13796 = (0);
var state_13912__$1 = (function (){var statearr_13973 = state_13912;
(statearr_13973[(13)] = inst_13794);

(statearr_13973[(14)] = inst_13795);

(statearr_13973[(15)] = inst_13793);

(statearr_13973[(17)] = inst_13796);

return statearr_13973;
})();
var statearr_13974_14039 = state_13912__$1;
(statearr_13974_14039[(2)] = null);

(statearr_13974_14039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (14))){
var state_13912__$1 = state_13912;
var statearr_13975_14040 = state_13912__$1;
(statearr_13975_14040[(2)] = null);

(statearr_13975_14040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (45))){
var inst_13902 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13976_14041 = state_13912__$1;
(statearr_13976_14041[(2)] = inst_13902);

(statearr_13976_14041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (26))){
var inst_13844 = (state_13912[(29)]);
var inst_13898 = (state_13912[(2)]);
var inst_13899 = cljs.core.seq.call(null,inst_13844);
var state_13912__$1 = (function (){var statearr_13977 = state_13912;
(statearr_13977[(31)] = inst_13898);

return statearr_13977;
})();
if(inst_13899){
var statearr_13978_14042 = state_13912__$1;
(statearr_13978_14042[(1)] = (42));

} else {
var statearr_13979_14043 = state_13912__$1;
(statearr_13979_14043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (16))){
var inst_13813 = (state_13912[(7)]);
var inst_13815 = cljs.core.chunked_seq_QMARK_.call(null,inst_13813);
var state_13912__$1 = state_13912;
if(inst_13815){
var statearr_13980_14044 = state_13912__$1;
(statearr_13980_14044[(1)] = (19));

} else {
var statearr_13981_14045 = state_13912__$1;
(statearr_13981_14045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (38))){
var inst_13891 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13982_14046 = state_13912__$1;
(statearr_13982_14046[(2)] = inst_13891);

(statearr_13982_14046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (30))){
var state_13912__$1 = state_13912;
var statearr_13983_14047 = state_13912__$1;
(statearr_13983_14047[(2)] = null);

(statearr_13983_14047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (10))){
var inst_13794 = (state_13912[(13)]);
var inst_13796 = (state_13912[(17)]);
var inst_13802 = cljs.core._nth.call(null,inst_13794,inst_13796);
var inst_13803 = cljs.core.nth.call(null,inst_13802,(0),null);
var inst_13804 = cljs.core.nth.call(null,inst_13802,(1),null);
var state_13912__$1 = (function (){var statearr_13984 = state_13912;
(statearr_13984[(26)] = inst_13803);

return statearr_13984;
})();
if(cljs.core.truth_(inst_13804)){
var statearr_13985_14048 = state_13912__$1;
(statearr_13985_14048[(1)] = (13));

} else {
var statearr_13986_14049 = state_13912__$1;
(statearr_13986_14049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (18))){
var inst_13837 = (state_13912[(2)]);
var state_13912__$1 = state_13912;
var statearr_13987_14050 = state_13912__$1;
(statearr_13987_14050[(2)] = inst_13837);

(statearr_13987_14050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (42))){
var state_13912__$1 = state_13912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13912__$1,(45),dchan);
} else {
if((state_val_13913 === (37))){
var inst_13880 = (state_13912[(23)]);
var inst_13784 = (state_13912[(12)]);
var inst_13871 = (state_13912[(25)]);
var inst_13880__$1 = cljs.core.first.call(null,inst_13871);
var inst_13881 = cljs.core.async.put_BANG_.call(null,inst_13880__$1,inst_13784,done);
var state_13912__$1 = (function (){var statearr_13988 = state_13912;
(statearr_13988[(23)] = inst_13880__$1);

return statearr_13988;
})();
if(cljs.core.truth_(inst_13881)){
var statearr_13989_14051 = state_13912__$1;
(statearr_13989_14051[(1)] = (39));

} else {
var statearr_13990_14052 = state_13912__$1;
(statearr_13990_14052[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13913 === (8))){
var inst_13795 = (state_13912[(14)]);
var inst_13796 = (state_13912[(17)]);
var inst_13798 = (inst_13796 < inst_13795);
var inst_13799 = inst_13798;
var state_13912__$1 = state_13912;
if(cljs.core.truth_(inst_13799)){
var statearr_13991_14053 = state_13912__$1;
(statearr_13991_14053[(1)] = (10));

} else {
var statearr_13992_14054 = state_13912__$1;
(statearr_13992_14054[(1)] = (11));

}

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
}
}
}
}
}
});})(c__8284__auto___14000,cs,m,dchan,dctr,done))
;
return ((function (switch__8222__auto__,c__8284__auto___14000,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8223__auto__ = null;
var cljs$core$async$mult_$_state_machine__8223__auto____0 = (function (){
var statearr_13996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13996[(0)] = cljs$core$async$mult_$_state_machine__8223__auto__);

(statearr_13996[(1)] = (1));

return statearr_13996;
});
var cljs$core$async$mult_$_state_machine__8223__auto____1 = (function (state_13912){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_13912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e13997){if((e13997 instanceof Object)){
var ex__8226__auto__ = e13997;
var statearr_13998_14055 = state_13912;
(statearr_13998_14055[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14056 = state_13912;
state_13912 = G__14056;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8223__auto__ = function(state_13912){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8223__auto____1.call(this,state_13912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8223__auto____0;
cljs$core$async$mult_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8223__auto____1;
return cljs$core$async$mult_$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14000,cs,m,dchan,dctr,done))
})();
var state__8286__auto__ = (function (){var statearr_13999 = f__8285__auto__.call(null);
(statearr_13999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14000);

return statearr_13999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14000,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14058 = arguments.length;
switch (G__14058) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14061 = {};
return obj14061;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4266__auto__ = m;
if(and__4266__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4914__auto__ = (((m == null))?null:m);
return (function (){var or__4278__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5318__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5318__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14066){
var map__14067 = p__14066;
var map__14067__$1 = ((cljs.core.seq_QMARK_.call(null,map__14067))?cljs.core.apply.call(null,cljs.core.hash_map,map__14067):map__14067);
var opts = map__14067__$1;
var statearr_14068_14071 = state;
(statearr_14068_14071[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14067,map__14067__$1,opts){
return (function (val){
var statearr_14069_14072 = state;
(statearr_14069_14072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14067,map__14067__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14070_14073 = state;
(statearr_14070_14073[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14062){
var G__14063 = cljs.core.first.call(null,seq14062);
var seq14062__$1 = cljs.core.next.call(null,seq14062);
var G__14064 = cljs.core.first.call(null,seq14062__$1);
var seq14062__$2 = cljs.core.next.call(null,seq14062__$1);
var G__14065 = cljs.core.first.call(null,seq14062__$2);
var seq14062__$3 = cljs.core.next.call(null,seq14062__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14063,G__14064,G__14065,seq14062__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14193 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14193 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14194){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14194 = meta14194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14195,meta14194__$1){
var self__ = this;
var _14195__$1 = this;
return (new cljs.core.async.t14193(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14194__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14195){
var self__ = this;
var _14195__$1 = this;
return self__.meta14194;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14193.cljs$lang$type = true;

cljs.core.async.t14193.cljs$lang$ctorStr = "cljs.core.async/t14193";

cljs.core.async.t14193.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14193");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14193 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14193(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14194){
return (new cljs.core.async.t14193(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14194));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14193(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8284__auto___14312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14265){
var state_val_14266 = (state_14265[(1)]);
if((state_val_14266 === (7))){
var inst_14209 = (state_14265[(7)]);
var inst_14214 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14209);
var state_14265__$1 = state_14265;
var statearr_14267_14313 = state_14265__$1;
(statearr_14267_14313[(2)] = inst_14214);

(statearr_14267_14313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (20))){
var inst_14224 = (state_14265[(8)]);
var state_14265__$1 = state_14265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14265__$1,(23),out,inst_14224);
} else {
if((state_val_14266 === (1))){
var inst_14199 = (state_14265[(9)]);
var inst_14199__$1 = calc_state.call(null);
var inst_14200 = cljs.core.seq_QMARK_.call(null,inst_14199__$1);
var state_14265__$1 = (function (){var statearr_14268 = state_14265;
(statearr_14268[(9)] = inst_14199__$1);

return statearr_14268;
})();
if(inst_14200){
var statearr_14269_14314 = state_14265__$1;
(statearr_14269_14314[(1)] = (2));

} else {
var statearr_14270_14315 = state_14265__$1;
(statearr_14270_14315[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (24))){
var inst_14217 = (state_14265[(10)]);
var inst_14209 = inst_14217;
var state_14265__$1 = (function (){var statearr_14271 = state_14265;
(statearr_14271[(7)] = inst_14209);

return statearr_14271;
})();
var statearr_14272_14316 = state_14265__$1;
(statearr_14272_14316[(2)] = null);

(statearr_14272_14316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (4))){
var inst_14199 = (state_14265[(9)]);
var inst_14205 = (state_14265[(2)]);
var inst_14206 = cljs.core.get.call(null,inst_14205,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14207 = cljs.core.get.call(null,inst_14205,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14208 = cljs.core.get.call(null,inst_14205,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14209 = inst_14199;
var state_14265__$1 = (function (){var statearr_14273 = state_14265;
(statearr_14273[(11)] = inst_14208);

(statearr_14273[(12)] = inst_14207);

(statearr_14273[(7)] = inst_14209);

(statearr_14273[(13)] = inst_14206);

return statearr_14273;
})();
var statearr_14274_14317 = state_14265__$1;
(statearr_14274_14317[(2)] = null);

(statearr_14274_14317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (15))){
var state_14265__$1 = state_14265;
var statearr_14275_14318 = state_14265__$1;
(statearr_14275_14318[(2)] = null);

(statearr_14275_14318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (21))){
var inst_14217 = (state_14265[(10)]);
var inst_14209 = inst_14217;
var state_14265__$1 = (function (){var statearr_14276 = state_14265;
(statearr_14276[(7)] = inst_14209);

return statearr_14276;
})();
var statearr_14277_14319 = state_14265__$1;
(statearr_14277_14319[(2)] = null);

(statearr_14277_14319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (13))){
var inst_14261 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
var statearr_14278_14320 = state_14265__$1;
(statearr_14278_14320[(2)] = inst_14261);

(statearr_14278_14320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (22))){
var inst_14259 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
var statearr_14279_14321 = state_14265__$1;
(statearr_14279_14321[(2)] = inst_14259);

(statearr_14279_14321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (6))){
var inst_14263 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14265__$1,inst_14263);
} else {
if((state_val_14266 === (25))){
var state_14265__$1 = state_14265;
var statearr_14280_14322 = state_14265__$1;
(statearr_14280_14322[(2)] = null);

(statearr_14280_14322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (17))){
var inst_14239 = (state_14265[(14)]);
var state_14265__$1 = state_14265;
var statearr_14281_14323 = state_14265__$1;
(statearr_14281_14323[(2)] = inst_14239);

(statearr_14281_14323[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (3))){
var inst_14199 = (state_14265[(9)]);
var state_14265__$1 = state_14265;
var statearr_14282_14324 = state_14265__$1;
(statearr_14282_14324[(2)] = inst_14199);

(statearr_14282_14324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (12))){
var inst_14225 = (state_14265[(15)]);
var inst_14218 = (state_14265[(16)]);
var inst_14239 = (state_14265[(14)]);
var inst_14239__$1 = inst_14218.call(null,inst_14225);
var state_14265__$1 = (function (){var statearr_14283 = state_14265;
(statearr_14283[(14)] = inst_14239__$1);

return statearr_14283;
})();
if(cljs.core.truth_(inst_14239__$1)){
var statearr_14284_14325 = state_14265__$1;
(statearr_14284_14325[(1)] = (17));

} else {
var statearr_14285_14326 = state_14265__$1;
(statearr_14285_14326[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (2))){
var inst_14199 = (state_14265[(9)]);
var inst_14202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14199);
var state_14265__$1 = state_14265;
var statearr_14286_14327 = state_14265__$1;
(statearr_14286_14327[(2)] = inst_14202);

(statearr_14286_14327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (23))){
var inst_14250 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
if(cljs.core.truth_(inst_14250)){
var statearr_14287_14328 = state_14265__$1;
(statearr_14287_14328[(1)] = (24));

} else {
var statearr_14288_14329 = state_14265__$1;
(statearr_14288_14329[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (19))){
var inst_14247 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
if(cljs.core.truth_(inst_14247)){
var statearr_14289_14330 = state_14265__$1;
(statearr_14289_14330[(1)] = (20));

} else {
var statearr_14290_14331 = state_14265__$1;
(statearr_14290_14331[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (11))){
var inst_14224 = (state_14265[(8)]);
var inst_14230 = (inst_14224 == null);
var state_14265__$1 = state_14265;
if(cljs.core.truth_(inst_14230)){
var statearr_14291_14332 = state_14265__$1;
(statearr_14291_14332[(1)] = (14));

} else {
var statearr_14292_14333 = state_14265__$1;
(statearr_14292_14333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (9))){
var inst_14217 = (state_14265[(10)]);
var inst_14217__$1 = (state_14265[(2)]);
var inst_14218 = cljs.core.get.call(null,inst_14217__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14219 = cljs.core.get.call(null,inst_14217__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14220 = cljs.core.get.call(null,inst_14217__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14265__$1 = (function (){var statearr_14293 = state_14265;
(statearr_14293[(10)] = inst_14217__$1);

(statearr_14293[(16)] = inst_14218);

(statearr_14293[(17)] = inst_14219);

return statearr_14293;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14265__$1,(10),inst_14220);
} else {
if((state_val_14266 === (5))){
var inst_14209 = (state_14265[(7)]);
var inst_14212 = cljs.core.seq_QMARK_.call(null,inst_14209);
var state_14265__$1 = state_14265;
if(inst_14212){
var statearr_14294_14334 = state_14265__$1;
(statearr_14294_14334[(1)] = (7));

} else {
var statearr_14295_14335 = state_14265__$1;
(statearr_14295_14335[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (14))){
var inst_14225 = (state_14265[(15)]);
var inst_14232 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14225);
var state_14265__$1 = state_14265;
var statearr_14296_14336 = state_14265__$1;
(statearr_14296_14336[(2)] = inst_14232);

(statearr_14296_14336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (26))){
var inst_14255 = (state_14265[(2)]);
var state_14265__$1 = state_14265;
var statearr_14297_14337 = state_14265__$1;
(statearr_14297_14337[(2)] = inst_14255);

(statearr_14297_14337[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (16))){
var inst_14235 = (state_14265[(2)]);
var inst_14236 = calc_state.call(null);
var inst_14209 = inst_14236;
var state_14265__$1 = (function (){var statearr_14298 = state_14265;
(statearr_14298[(18)] = inst_14235);

(statearr_14298[(7)] = inst_14209);

return statearr_14298;
})();
var statearr_14299_14338 = state_14265__$1;
(statearr_14299_14338[(2)] = null);

(statearr_14299_14338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (10))){
var inst_14225 = (state_14265[(15)]);
var inst_14224 = (state_14265[(8)]);
var inst_14223 = (state_14265[(2)]);
var inst_14224__$1 = cljs.core.nth.call(null,inst_14223,(0),null);
var inst_14225__$1 = cljs.core.nth.call(null,inst_14223,(1),null);
var inst_14226 = (inst_14224__$1 == null);
var inst_14227 = cljs.core._EQ_.call(null,inst_14225__$1,change);
var inst_14228 = (inst_14226) || (inst_14227);
var state_14265__$1 = (function (){var statearr_14300 = state_14265;
(statearr_14300[(15)] = inst_14225__$1);

(statearr_14300[(8)] = inst_14224__$1);

return statearr_14300;
})();
if(cljs.core.truth_(inst_14228)){
var statearr_14301_14339 = state_14265__$1;
(statearr_14301_14339[(1)] = (11));

} else {
var statearr_14302_14340 = state_14265__$1;
(statearr_14302_14340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (18))){
var inst_14225 = (state_14265[(15)]);
var inst_14218 = (state_14265[(16)]);
var inst_14219 = (state_14265[(17)]);
var inst_14242 = cljs.core.empty_QMARK_.call(null,inst_14218);
var inst_14243 = inst_14219.call(null,inst_14225);
var inst_14244 = cljs.core.not.call(null,inst_14243);
var inst_14245 = (inst_14242) && (inst_14244);
var state_14265__$1 = state_14265;
var statearr_14303_14341 = state_14265__$1;
(statearr_14303_14341[(2)] = inst_14245);

(statearr_14303_14341[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14266 === (8))){
var inst_14209 = (state_14265[(7)]);
var state_14265__$1 = state_14265;
var statearr_14304_14342 = state_14265__$1;
(statearr_14304_14342[(2)] = inst_14209);

(statearr_14304_14342[(1)] = (9));


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
}
}
}
}
}
}
});})(c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8222__auto__,c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8223__auto__ = null;
var cljs$core$async$mix_$_state_machine__8223__auto____0 = (function (){
var statearr_14308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14308[(0)] = cljs$core$async$mix_$_state_machine__8223__auto__);

(statearr_14308[(1)] = (1));

return statearr_14308;
});
var cljs$core$async$mix_$_state_machine__8223__auto____1 = (function (state_14265){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14309){if((e14309 instanceof Object)){
var ex__8226__auto__ = e14309;
var statearr_14310_14343 = state_14265;
(statearr_14310_14343[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14344 = state_14265;
state_14265 = G__14344;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8223__auto__ = function(state_14265){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8223__auto____1.call(this,state_14265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8223__auto____0;
cljs$core$async$mix_$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8223__auto____1;
return cljs$core$async$mix_$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8286__auto__ = (function (){var statearr_14311 = f__8285__auto__.call(null);
(statearr_14311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14312);

return statearr_14311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14312,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14346 = {};
return obj14346;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4266__auto__ = p;
if(and__4266__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4266__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4914__auto__ = (((p == null))?null:p);
return (function (){var or__4278__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4266__auto__ = p;
if(and__4266__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4266__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4914__auto__ = (((p == null))?null:p);
return (function (){var or__4278__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__14348 = arguments.length;
switch (G__14348) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4266__auto__ = p;
if(and__4266__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4266__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4914__auto__ = (((p == null))?null:p);
return (function (){var or__4278__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4266__auto__ = p;
if(and__4266__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4266__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4914__auto__ = (((p == null))?null:p);
return (function (){var or__4278__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4914__auto__)]);
if(or__4278__auto__){
return or__4278__auto__;
} else {
var or__4278__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4278__auto____$1){
return or__4278__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__14352 = arguments.length;
switch (G__14352) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4278__auto__,mults){
return (function (p1__14350_SHARP_){
if(cljs.core.truth_(p1__14350_SHARP_.call(null,topic))){
return p1__14350_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14350_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4278__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14353 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14353 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14354){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14354 = meta14354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14355,meta14354__$1){
var self__ = this;
var _14355__$1 = this;
return (new cljs.core.async.t14353(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14354__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14355){
var self__ = this;
var _14355__$1 = this;
return self__.meta14354;
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14353.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14353.cljs$lang$type = true;

cljs.core.async.t14353.cljs$lang$ctorStr = "cljs.core.async/t14353";

cljs.core.async.t14353.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14353");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14353 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14354){
return (new cljs.core.async.t14353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14354));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14353(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8284__auto___14476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14476,mults,ensure_mult,p){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14476,mults,ensure_mult,p){
return (function (state_14427){
var state_val_14428 = (state_14427[(1)]);
if((state_val_14428 === (7))){
var inst_14423 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14429_14477 = state_14427__$1;
(statearr_14429_14477[(2)] = inst_14423);

(statearr_14429_14477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (20))){
var state_14427__$1 = state_14427;
var statearr_14430_14478 = state_14427__$1;
(statearr_14430_14478[(2)] = null);

(statearr_14430_14478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (1))){
var state_14427__$1 = state_14427;
var statearr_14431_14479 = state_14427__$1;
(statearr_14431_14479[(2)] = null);

(statearr_14431_14479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (24))){
var inst_14406 = (state_14427[(7)]);
var inst_14415 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14406);
var state_14427__$1 = state_14427;
var statearr_14432_14480 = state_14427__$1;
(statearr_14432_14480[(2)] = inst_14415);

(statearr_14432_14480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (4))){
var inst_14358 = (state_14427[(8)]);
var inst_14358__$1 = (state_14427[(2)]);
var inst_14359 = (inst_14358__$1 == null);
var state_14427__$1 = (function (){var statearr_14433 = state_14427;
(statearr_14433[(8)] = inst_14358__$1);

return statearr_14433;
})();
if(cljs.core.truth_(inst_14359)){
var statearr_14434_14481 = state_14427__$1;
(statearr_14434_14481[(1)] = (5));

} else {
var statearr_14435_14482 = state_14427__$1;
(statearr_14435_14482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (15))){
var inst_14400 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14436_14483 = state_14427__$1;
(statearr_14436_14483[(2)] = inst_14400);

(statearr_14436_14483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (21))){
var inst_14420 = (state_14427[(2)]);
var state_14427__$1 = (function (){var statearr_14437 = state_14427;
(statearr_14437[(9)] = inst_14420);

return statearr_14437;
})();
var statearr_14438_14484 = state_14427__$1;
(statearr_14438_14484[(2)] = null);

(statearr_14438_14484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (13))){
var inst_14382 = (state_14427[(10)]);
var inst_14384 = cljs.core.chunked_seq_QMARK_.call(null,inst_14382);
var state_14427__$1 = state_14427;
if(inst_14384){
var statearr_14439_14485 = state_14427__$1;
(statearr_14439_14485[(1)] = (16));

} else {
var statearr_14440_14486 = state_14427__$1;
(statearr_14440_14486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (22))){
var inst_14412 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
if(cljs.core.truth_(inst_14412)){
var statearr_14441_14487 = state_14427__$1;
(statearr_14441_14487[(1)] = (23));

} else {
var statearr_14442_14488 = state_14427__$1;
(statearr_14442_14488[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (6))){
var inst_14408 = (state_14427[(11)]);
var inst_14406 = (state_14427[(7)]);
var inst_14358 = (state_14427[(8)]);
var inst_14406__$1 = topic_fn.call(null,inst_14358);
var inst_14407 = cljs.core.deref.call(null,mults);
var inst_14408__$1 = cljs.core.get.call(null,inst_14407,inst_14406__$1);
var state_14427__$1 = (function (){var statearr_14443 = state_14427;
(statearr_14443[(11)] = inst_14408__$1);

(statearr_14443[(7)] = inst_14406__$1);

return statearr_14443;
})();
if(cljs.core.truth_(inst_14408__$1)){
var statearr_14444_14489 = state_14427__$1;
(statearr_14444_14489[(1)] = (19));

} else {
var statearr_14445_14490 = state_14427__$1;
(statearr_14445_14490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (25))){
var inst_14417 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14446_14491 = state_14427__$1;
(statearr_14446_14491[(2)] = inst_14417);

(statearr_14446_14491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (17))){
var inst_14382 = (state_14427[(10)]);
var inst_14391 = cljs.core.first.call(null,inst_14382);
var inst_14392 = cljs.core.async.muxch_STAR_.call(null,inst_14391);
var inst_14393 = cljs.core.async.close_BANG_.call(null,inst_14392);
var inst_14394 = cljs.core.next.call(null,inst_14382);
var inst_14368 = inst_14394;
var inst_14369 = null;
var inst_14370 = (0);
var inst_14371 = (0);
var state_14427__$1 = (function (){var statearr_14447 = state_14427;
(statearr_14447[(12)] = inst_14368);

(statearr_14447[(13)] = inst_14371);

(statearr_14447[(14)] = inst_14393);

(statearr_14447[(15)] = inst_14370);

(statearr_14447[(16)] = inst_14369);

return statearr_14447;
})();
var statearr_14448_14492 = state_14427__$1;
(statearr_14448_14492[(2)] = null);

(statearr_14448_14492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (3))){
var inst_14425 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14427__$1,inst_14425);
} else {
if((state_val_14428 === (12))){
var inst_14402 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14449_14493 = state_14427__$1;
(statearr_14449_14493[(2)] = inst_14402);

(statearr_14449_14493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (2))){
var state_14427__$1 = state_14427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14427__$1,(4),ch);
} else {
if((state_val_14428 === (23))){
var state_14427__$1 = state_14427;
var statearr_14450_14494 = state_14427__$1;
(statearr_14450_14494[(2)] = null);

(statearr_14450_14494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (19))){
var inst_14408 = (state_14427[(11)]);
var inst_14358 = (state_14427[(8)]);
var inst_14410 = cljs.core.async.muxch_STAR_.call(null,inst_14408);
var state_14427__$1 = state_14427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14427__$1,(22),inst_14410,inst_14358);
} else {
if((state_val_14428 === (11))){
var inst_14368 = (state_14427[(12)]);
var inst_14382 = (state_14427[(10)]);
var inst_14382__$1 = cljs.core.seq.call(null,inst_14368);
var state_14427__$1 = (function (){var statearr_14451 = state_14427;
(statearr_14451[(10)] = inst_14382__$1);

return statearr_14451;
})();
if(inst_14382__$1){
var statearr_14452_14495 = state_14427__$1;
(statearr_14452_14495[(1)] = (13));

} else {
var statearr_14453_14496 = state_14427__$1;
(statearr_14453_14496[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (9))){
var inst_14404 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14454_14497 = state_14427__$1;
(statearr_14454_14497[(2)] = inst_14404);

(statearr_14454_14497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (5))){
var inst_14365 = cljs.core.deref.call(null,mults);
var inst_14366 = cljs.core.vals.call(null,inst_14365);
var inst_14367 = cljs.core.seq.call(null,inst_14366);
var inst_14368 = inst_14367;
var inst_14369 = null;
var inst_14370 = (0);
var inst_14371 = (0);
var state_14427__$1 = (function (){var statearr_14455 = state_14427;
(statearr_14455[(12)] = inst_14368);

(statearr_14455[(13)] = inst_14371);

(statearr_14455[(15)] = inst_14370);

(statearr_14455[(16)] = inst_14369);

return statearr_14455;
})();
var statearr_14456_14498 = state_14427__$1;
(statearr_14456_14498[(2)] = null);

(statearr_14456_14498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (14))){
var state_14427__$1 = state_14427;
var statearr_14460_14499 = state_14427__$1;
(statearr_14460_14499[(2)] = null);

(statearr_14460_14499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (16))){
var inst_14382 = (state_14427[(10)]);
var inst_14386 = cljs.core.chunk_first.call(null,inst_14382);
var inst_14387 = cljs.core.chunk_rest.call(null,inst_14382);
var inst_14388 = cljs.core.count.call(null,inst_14386);
var inst_14368 = inst_14387;
var inst_14369 = inst_14386;
var inst_14370 = inst_14388;
var inst_14371 = (0);
var state_14427__$1 = (function (){var statearr_14461 = state_14427;
(statearr_14461[(12)] = inst_14368);

(statearr_14461[(13)] = inst_14371);

(statearr_14461[(15)] = inst_14370);

(statearr_14461[(16)] = inst_14369);

return statearr_14461;
})();
var statearr_14462_14500 = state_14427__$1;
(statearr_14462_14500[(2)] = null);

(statearr_14462_14500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (10))){
var inst_14368 = (state_14427[(12)]);
var inst_14371 = (state_14427[(13)]);
var inst_14370 = (state_14427[(15)]);
var inst_14369 = (state_14427[(16)]);
var inst_14376 = cljs.core._nth.call(null,inst_14369,inst_14371);
var inst_14377 = cljs.core.async.muxch_STAR_.call(null,inst_14376);
var inst_14378 = cljs.core.async.close_BANG_.call(null,inst_14377);
var inst_14379 = (inst_14371 + (1));
var tmp14457 = inst_14368;
var tmp14458 = inst_14370;
var tmp14459 = inst_14369;
var inst_14368__$1 = tmp14457;
var inst_14369__$1 = tmp14459;
var inst_14370__$1 = tmp14458;
var inst_14371__$1 = inst_14379;
var state_14427__$1 = (function (){var statearr_14463 = state_14427;
(statearr_14463[(12)] = inst_14368__$1);

(statearr_14463[(13)] = inst_14371__$1);

(statearr_14463[(15)] = inst_14370__$1);

(statearr_14463[(17)] = inst_14378);

(statearr_14463[(16)] = inst_14369__$1);

return statearr_14463;
})();
var statearr_14464_14501 = state_14427__$1;
(statearr_14464_14501[(2)] = null);

(statearr_14464_14501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (18))){
var inst_14397 = (state_14427[(2)]);
var state_14427__$1 = state_14427;
var statearr_14465_14502 = state_14427__$1;
(statearr_14465_14502[(2)] = inst_14397);

(statearr_14465_14502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14428 === (8))){
var inst_14371 = (state_14427[(13)]);
var inst_14370 = (state_14427[(15)]);
var inst_14373 = (inst_14371 < inst_14370);
var inst_14374 = inst_14373;
var state_14427__$1 = state_14427;
if(cljs.core.truth_(inst_14374)){
var statearr_14466_14503 = state_14427__$1;
(statearr_14466_14503[(1)] = (10));

} else {
var statearr_14467_14504 = state_14427__$1;
(statearr_14467_14504[(1)] = (11));

}

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
}
}
}
}
}
});})(c__8284__auto___14476,mults,ensure_mult,p))
;
return ((function (switch__8222__auto__,c__8284__auto___14476,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_14471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14471[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_14471[(1)] = (1));

return statearr_14471;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_14427){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14472){if((e14472 instanceof Object)){
var ex__8226__auto__ = e14472;
var statearr_14473_14505 = state_14427;
(statearr_14473_14505[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14506 = state_14427;
state_14427 = G__14506;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_14427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_14427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14476,mults,ensure_mult,p))
})();
var state__8286__auto__ = (function (){var statearr_14474 = f__8285__auto__.call(null);
(statearr_14474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14476);

return statearr_14474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14476,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__14508 = arguments.length;
switch (G__14508) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__14511 = arguments.length;
switch (G__14511) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__14514 = arguments.length;
switch (G__14514) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8284__auto___14584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14553){
var state_val_14554 = (state_14553[(1)]);
if((state_val_14554 === (7))){
var state_14553__$1 = state_14553;
var statearr_14555_14585 = state_14553__$1;
(statearr_14555_14585[(2)] = null);

(statearr_14555_14585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (1))){
var state_14553__$1 = state_14553;
var statearr_14556_14586 = state_14553__$1;
(statearr_14556_14586[(2)] = null);

(statearr_14556_14586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (4))){
var inst_14517 = (state_14553[(7)]);
var inst_14519 = (inst_14517 < cnt);
var state_14553__$1 = state_14553;
if(cljs.core.truth_(inst_14519)){
var statearr_14557_14587 = state_14553__$1;
(statearr_14557_14587[(1)] = (6));

} else {
var statearr_14558_14588 = state_14553__$1;
(statearr_14558_14588[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (15))){
var inst_14549 = (state_14553[(2)]);
var state_14553__$1 = state_14553;
var statearr_14559_14589 = state_14553__$1;
(statearr_14559_14589[(2)] = inst_14549);

(statearr_14559_14589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (13))){
var inst_14542 = cljs.core.async.close_BANG_.call(null,out);
var state_14553__$1 = state_14553;
var statearr_14560_14590 = state_14553__$1;
(statearr_14560_14590[(2)] = inst_14542);

(statearr_14560_14590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (6))){
var state_14553__$1 = state_14553;
var statearr_14561_14591 = state_14553__$1;
(statearr_14561_14591[(2)] = null);

(statearr_14561_14591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (3))){
var inst_14551 = (state_14553[(2)]);
var state_14553__$1 = state_14553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14553__$1,inst_14551);
} else {
if((state_val_14554 === (12))){
var inst_14539 = (state_14553[(8)]);
var inst_14539__$1 = (state_14553[(2)]);
var inst_14540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14539__$1);
var state_14553__$1 = (function (){var statearr_14562 = state_14553;
(statearr_14562[(8)] = inst_14539__$1);

return statearr_14562;
})();
if(cljs.core.truth_(inst_14540)){
var statearr_14563_14592 = state_14553__$1;
(statearr_14563_14592[(1)] = (13));

} else {
var statearr_14564_14593 = state_14553__$1;
(statearr_14564_14593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (2))){
var inst_14516 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14517 = (0);
var state_14553__$1 = (function (){var statearr_14565 = state_14553;
(statearr_14565[(9)] = inst_14516);

(statearr_14565[(7)] = inst_14517);

return statearr_14565;
})();
var statearr_14566_14594 = state_14553__$1;
(statearr_14566_14594[(2)] = null);

(statearr_14566_14594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (11))){
var inst_14517 = (state_14553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14553,(10),Object,null,(9));
var inst_14526 = chs__$1.call(null,inst_14517);
var inst_14527 = done.call(null,inst_14517);
var inst_14528 = cljs.core.async.take_BANG_.call(null,inst_14526,inst_14527);
var state_14553__$1 = state_14553;
var statearr_14567_14595 = state_14553__$1;
(statearr_14567_14595[(2)] = inst_14528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (9))){
var inst_14517 = (state_14553[(7)]);
var inst_14530 = (state_14553[(2)]);
var inst_14531 = (inst_14517 + (1));
var inst_14517__$1 = inst_14531;
var state_14553__$1 = (function (){var statearr_14568 = state_14553;
(statearr_14568[(10)] = inst_14530);

(statearr_14568[(7)] = inst_14517__$1);

return statearr_14568;
})();
var statearr_14569_14596 = state_14553__$1;
(statearr_14569_14596[(2)] = null);

(statearr_14569_14596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (5))){
var inst_14537 = (state_14553[(2)]);
var state_14553__$1 = (function (){var statearr_14570 = state_14553;
(statearr_14570[(11)] = inst_14537);

return statearr_14570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14553__$1,(12),dchan);
} else {
if((state_val_14554 === (14))){
var inst_14539 = (state_14553[(8)]);
var inst_14544 = cljs.core.apply.call(null,f,inst_14539);
var state_14553__$1 = state_14553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14553__$1,(16),out,inst_14544);
} else {
if((state_val_14554 === (16))){
var inst_14546 = (state_14553[(2)]);
var state_14553__$1 = (function (){var statearr_14571 = state_14553;
(statearr_14571[(12)] = inst_14546);

return statearr_14571;
})();
var statearr_14572_14597 = state_14553__$1;
(statearr_14572_14597[(2)] = null);

(statearr_14572_14597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (10))){
var inst_14521 = (state_14553[(2)]);
var inst_14522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14553__$1 = (function (){var statearr_14573 = state_14553;
(statearr_14573[(13)] = inst_14521);

return statearr_14573;
})();
var statearr_14574_14598 = state_14553__$1;
(statearr_14574_14598[(2)] = inst_14522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14554 === (8))){
var inst_14535 = (state_14553[(2)]);
var state_14553__$1 = state_14553;
var statearr_14575_14599 = state_14553__$1;
(statearr_14575_14599[(2)] = inst_14535);

(statearr_14575_14599[(1)] = (5));


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
}
}
}
}
}
}
});})(c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8222__auto__,c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_14579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14579[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_14579[(1)] = (1));

return statearr_14579;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_14553){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14580){if((e14580 instanceof Object)){
var ex__8226__auto__ = e14580;
var statearr_14581_14600 = state_14553;
(statearr_14581_14600[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14601 = state_14553;
state_14553 = G__14601;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_14553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_14553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8286__auto__ = (function (){var statearr_14582 = f__8285__auto__.call(null);
(statearr_14582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14584);

return statearr_14582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14584,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__14604 = arguments.length;
switch (G__14604) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___14659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14659,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14659,out){
return (function (state_14634){
var state_val_14635 = (state_14634[(1)]);
if((state_val_14635 === (7))){
var inst_14614 = (state_14634[(7)]);
var inst_14613 = (state_14634[(8)]);
var inst_14613__$1 = (state_14634[(2)]);
var inst_14614__$1 = cljs.core.nth.call(null,inst_14613__$1,(0),null);
var inst_14615 = cljs.core.nth.call(null,inst_14613__$1,(1),null);
var inst_14616 = (inst_14614__$1 == null);
var state_14634__$1 = (function (){var statearr_14636 = state_14634;
(statearr_14636[(7)] = inst_14614__$1);

(statearr_14636[(9)] = inst_14615);

(statearr_14636[(8)] = inst_14613__$1);

return statearr_14636;
})();
if(cljs.core.truth_(inst_14616)){
var statearr_14637_14660 = state_14634__$1;
(statearr_14637_14660[(1)] = (8));

} else {
var statearr_14638_14661 = state_14634__$1;
(statearr_14638_14661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (1))){
var inst_14605 = cljs.core.vec.call(null,chs);
var inst_14606 = inst_14605;
var state_14634__$1 = (function (){var statearr_14639 = state_14634;
(statearr_14639[(10)] = inst_14606);

return statearr_14639;
})();
var statearr_14640_14662 = state_14634__$1;
(statearr_14640_14662[(2)] = null);

(statearr_14640_14662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (4))){
var inst_14606 = (state_14634[(10)]);
var state_14634__$1 = state_14634;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14634__$1,(7),inst_14606);
} else {
if((state_val_14635 === (6))){
var inst_14630 = (state_14634[(2)]);
var state_14634__$1 = state_14634;
var statearr_14641_14663 = state_14634__$1;
(statearr_14641_14663[(2)] = inst_14630);

(statearr_14641_14663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (3))){
var inst_14632 = (state_14634[(2)]);
var state_14634__$1 = state_14634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14634__$1,inst_14632);
} else {
if((state_val_14635 === (2))){
var inst_14606 = (state_14634[(10)]);
var inst_14608 = cljs.core.count.call(null,inst_14606);
var inst_14609 = (inst_14608 > (0));
var state_14634__$1 = state_14634;
if(cljs.core.truth_(inst_14609)){
var statearr_14643_14664 = state_14634__$1;
(statearr_14643_14664[(1)] = (4));

} else {
var statearr_14644_14665 = state_14634__$1;
(statearr_14644_14665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (11))){
var inst_14606 = (state_14634[(10)]);
var inst_14623 = (state_14634[(2)]);
var tmp14642 = inst_14606;
var inst_14606__$1 = tmp14642;
var state_14634__$1 = (function (){var statearr_14645 = state_14634;
(statearr_14645[(11)] = inst_14623);

(statearr_14645[(10)] = inst_14606__$1);

return statearr_14645;
})();
var statearr_14646_14666 = state_14634__$1;
(statearr_14646_14666[(2)] = null);

(statearr_14646_14666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (9))){
var inst_14614 = (state_14634[(7)]);
var state_14634__$1 = state_14634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14634__$1,(11),out,inst_14614);
} else {
if((state_val_14635 === (5))){
var inst_14628 = cljs.core.async.close_BANG_.call(null,out);
var state_14634__$1 = state_14634;
var statearr_14647_14667 = state_14634__$1;
(statearr_14647_14667[(2)] = inst_14628);

(statearr_14647_14667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (10))){
var inst_14626 = (state_14634[(2)]);
var state_14634__$1 = state_14634;
var statearr_14648_14668 = state_14634__$1;
(statearr_14648_14668[(2)] = inst_14626);

(statearr_14648_14668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14635 === (8))){
var inst_14614 = (state_14634[(7)]);
var inst_14606 = (state_14634[(10)]);
var inst_14615 = (state_14634[(9)]);
var inst_14613 = (state_14634[(8)]);
var inst_14618 = (function (){var cs = inst_14606;
var vec__14611 = inst_14613;
var v = inst_14614;
var c = inst_14615;
return ((function (cs,vec__14611,v,c,inst_14614,inst_14606,inst_14615,inst_14613,state_val_14635,c__8284__auto___14659,out){
return (function (p1__14602_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14602_SHARP_);
});
;})(cs,vec__14611,v,c,inst_14614,inst_14606,inst_14615,inst_14613,state_val_14635,c__8284__auto___14659,out))
})();
var inst_14619 = cljs.core.filterv.call(null,inst_14618,inst_14606);
var inst_14606__$1 = inst_14619;
var state_14634__$1 = (function (){var statearr_14649 = state_14634;
(statearr_14649[(10)] = inst_14606__$1);

return statearr_14649;
})();
var statearr_14650_14669 = state_14634__$1;
(statearr_14650_14669[(2)] = null);

(statearr_14650_14669[(1)] = (2));


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
}
});})(c__8284__auto___14659,out))
;
return ((function (switch__8222__auto__,c__8284__auto___14659,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_14654 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14654[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_14654[(1)] = (1));

return statearr_14654;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_14634){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14655){if((e14655 instanceof Object)){
var ex__8226__auto__ = e14655;
var statearr_14656_14670 = state_14634;
(statearr_14656_14670[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14671 = state_14634;
state_14634 = G__14671;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_14634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_14634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14659,out))
})();
var state__8286__auto__ = (function (){var statearr_14657 = f__8285__auto__.call(null);
(statearr_14657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14659);

return statearr_14657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14659,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__14673 = arguments.length;
switch (G__14673) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___14721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14721,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14721,out){
return (function (state_14697){
var state_val_14698 = (state_14697[(1)]);
if((state_val_14698 === (7))){
var inst_14679 = (state_14697[(7)]);
var inst_14679__$1 = (state_14697[(2)]);
var inst_14680 = (inst_14679__$1 == null);
var inst_14681 = cljs.core.not.call(null,inst_14680);
var state_14697__$1 = (function (){var statearr_14699 = state_14697;
(statearr_14699[(7)] = inst_14679__$1);

return statearr_14699;
})();
if(inst_14681){
var statearr_14700_14722 = state_14697__$1;
(statearr_14700_14722[(1)] = (8));

} else {
var statearr_14701_14723 = state_14697__$1;
(statearr_14701_14723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (1))){
var inst_14674 = (0);
var state_14697__$1 = (function (){var statearr_14702 = state_14697;
(statearr_14702[(8)] = inst_14674);

return statearr_14702;
})();
var statearr_14703_14724 = state_14697__$1;
(statearr_14703_14724[(2)] = null);

(statearr_14703_14724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (4))){
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14697__$1,(7),ch);
} else {
if((state_val_14698 === (6))){
var inst_14692 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14704_14725 = state_14697__$1;
(statearr_14704_14725[(2)] = inst_14692);

(statearr_14704_14725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (3))){
var inst_14694 = (state_14697[(2)]);
var inst_14695 = cljs.core.async.close_BANG_.call(null,out);
var state_14697__$1 = (function (){var statearr_14705 = state_14697;
(statearr_14705[(9)] = inst_14694);

return statearr_14705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14697__$1,inst_14695);
} else {
if((state_val_14698 === (2))){
var inst_14674 = (state_14697[(8)]);
var inst_14676 = (inst_14674 < n);
var state_14697__$1 = state_14697;
if(cljs.core.truth_(inst_14676)){
var statearr_14706_14726 = state_14697__$1;
(statearr_14706_14726[(1)] = (4));

} else {
var statearr_14707_14727 = state_14697__$1;
(statearr_14707_14727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (11))){
var inst_14674 = (state_14697[(8)]);
var inst_14684 = (state_14697[(2)]);
var inst_14685 = (inst_14674 + (1));
var inst_14674__$1 = inst_14685;
var state_14697__$1 = (function (){var statearr_14708 = state_14697;
(statearr_14708[(8)] = inst_14674__$1);

(statearr_14708[(10)] = inst_14684);

return statearr_14708;
})();
var statearr_14709_14728 = state_14697__$1;
(statearr_14709_14728[(2)] = null);

(statearr_14709_14728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (9))){
var state_14697__$1 = state_14697;
var statearr_14710_14729 = state_14697__$1;
(statearr_14710_14729[(2)] = null);

(statearr_14710_14729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (5))){
var state_14697__$1 = state_14697;
var statearr_14711_14730 = state_14697__$1;
(statearr_14711_14730[(2)] = null);

(statearr_14711_14730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (10))){
var inst_14689 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14712_14731 = state_14697__$1;
(statearr_14712_14731[(2)] = inst_14689);

(statearr_14712_14731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (8))){
var inst_14679 = (state_14697[(7)]);
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14697__$1,(11),out,inst_14679);
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
}
});})(c__8284__auto___14721,out))
;
return ((function (switch__8222__auto__,c__8284__auto___14721,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_14716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14716[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_14716[(1)] = (1));

return statearr_14716;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_14697){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14717){if((e14717 instanceof Object)){
var ex__8226__auto__ = e14717;
var statearr_14718_14732 = state_14697;
(statearr_14718_14732[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14733 = state_14697;
state_14697 = G__14733;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_14697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_14697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14721,out))
})();
var state__8286__auto__ = (function (){var statearr_14719 = f__8285__auto__.call(null);
(statearr_14719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14721);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14721,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14741 = (function (map_LT_,f,ch,meta14742){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14742 = meta14742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14743,meta14742__$1){
var self__ = this;
var _14743__$1 = this;
return (new cljs.core.async.t14741(self__.map_LT_,self__.f,self__.ch,meta14742__$1));
});

cljs.core.async.t14741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14743){
var self__ = this;
var _14743__$1 = this;
return self__.meta14742;
});

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14744 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14744 = (function (map_LT_,f,ch,meta14742,_,fn1,meta14745){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14742 = meta14742;
this._ = _;
this.fn1 = fn1;
this.meta14745 = meta14745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14746,meta14745__$1){
var self__ = this;
var _14746__$1 = this;
return (new cljs.core.async.t14744(self__.map_LT_,self__.f,self__.ch,self__.meta14742,self__._,self__.fn1,meta14745__$1));
});})(___$1))
;

cljs.core.async.t14744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14746){
var self__ = this;
var _14746__$1 = this;
return self__.meta14745;
});})(___$1))
;

cljs.core.async.t14744.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t14744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14734_SHARP_){
return f1.call(null,(((p1__14734_SHARP_ == null))?null:self__.f.call(null,p1__14734_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14744.cljs$lang$type = true;

cljs.core.async.t14744.cljs$lang$ctorStr = "cljs.core.async/t14744";

cljs.core.async.t14744.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14744");
});})(___$1))
;

cljs.core.async.__GT_t14744 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14744(map_LT___$1,f__$1,ch__$1,meta14742__$1,___$2,fn1__$1,meta14745){
return (new cljs.core.async.t14744(map_LT___$1,f__$1,ch__$1,meta14742__$1,___$2,fn1__$1,meta14745));
});})(___$1))
;

}

return (new cljs.core.async.t14744(self__.map_LT_,self__.f,self__.ch,self__.meta14742,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4266__auto__ = ret;
if(cljs.core.truth_(and__4266__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4266__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14741.cljs$lang$type = true;

cljs.core.async.t14741.cljs$lang$ctorStr = "cljs.core.async/t14741";

cljs.core.async.t14741.cljs$lang$ctorPrWriter = (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14741");
});

cljs.core.async.__GT_t14741 = (function cljs$core$async$map_LT__$___GT_t14741(map_LT___$1,f__$1,ch__$1,meta14742){
return (new cljs.core.async.t14741(map_LT___$1,f__$1,ch__$1,meta14742));
});

}

return (new cljs.core.async.t14741(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14750 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14750 = (function (map_GT_,f,ch,meta14751){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14751 = meta14751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14752,meta14751__$1){
var self__ = this;
var _14752__$1 = this;
return (new cljs.core.async.t14750(self__.map_GT_,self__.f,self__.ch,meta14751__$1));
});

cljs.core.async.t14750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14752){
var self__ = this;
var _14752__$1 = this;
return self__.meta14751;
});

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14750.cljs$lang$type = true;

cljs.core.async.t14750.cljs$lang$ctorStr = "cljs.core.async/t14750";

cljs.core.async.t14750.cljs$lang$ctorPrWriter = (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14750");
});

cljs.core.async.__GT_t14750 = (function cljs$core$async$map_GT__$___GT_t14750(map_GT___$1,f__$1,ch__$1,meta14751){
return (new cljs.core.async.t14750(map_GT___$1,f__$1,ch__$1,meta14751));
});

}

return (new cljs.core.async.t14750(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14756 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14756 = (function (filter_GT_,p,ch,meta14757){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14757 = meta14757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14758,meta14757__$1){
var self__ = this;
var _14758__$1 = this;
return (new cljs.core.async.t14756(self__.filter_GT_,self__.p,self__.ch,meta14757__$1));
});

cljs.core.async.t14756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14758){
var self__ = this;
var _14758__$1 = this;
return self__.meta14757;
});

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14756.cljs$lang$type = true;

cljs.core.async.t14756.cljs$lang$ctorStr = "cljs.core.async/t14756";

cljs.core.async.t14756.cljs$lang$ctorPrWriter = (function (this__4857__auto__,writer__4858__auto__,opt__4859__auto__){
return cljs.core._write.call(null,writer__4858__auto__,"cljs.core.async/t14756");
});

cljs.core.async.__GT_t14756 = (function cljs$core$async$filter_GT__$___GT_t14756(filter_GT___$1,p__$1,ch__$1,meta14757){
return (new cljs.core.async.t14756(filter_GT___$1,p__$1,ch__$1,meta14757));
});

}

return (new cljs.core.async.t14756(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__14760 = arguments.length;
switch (G__14760) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___14803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___14803,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___14803,out){
return (function (state_14781){
var state_val_14782 = (state_14781[(1)]);
if((state_val_14782 === (7))){
var inst_14777 = (state_14781[(2)]);
var state_14781__$1 = state_14781;
var statearr_14783_14804 = state_14781__$1;
(statearr_14783_14804[(2)] = inst_14777);

(statearr_14783_14804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (1))){
var state_14781__$1 = state_14781;
var statearr_14784_14805 = state_14781__$1;
(statearr_14784_14805[(2)] = null);

(statearr_14784_14805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (4))){
var inst_14763 = (state_14781[(7)]);
var inst_14763__$1 = (state_14781[(2)]);
var inst_14764 = (inst_14763__$1 == null);
var state_14781__$1 = (function (){var statearr_14785 = state_14781;
(statearr_14785[(7)] = inst_14763__$1);

return statearr_14785;
})();
if(cljs.core.truth_(inst_14764)){
var statearr_14786_14806 = state_14781__$1;
(statearr_14786_14806[(1)] = (5));

} else {
var statearr_14787_14807 = state_14781__$1;
(statearr_14787_14807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (6))){
var inst_14763 = (state_14781[(7)]);
var inst_14768 = p.call(null,inst_14763);
var state_14781__$1 = state_14781;
if(cljs.core.truth_(inst_14768)){
var statearr_14788_14808 = state_14781__$1;
(statearr_14788_14808[(1)] = (8));

} else {
var statearr_14789_14809 = state_14781__$1;
(statearr_14789_14809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (3))){
var inst_14779 = (state_14781[(2)]);
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14781__$1,inst_14779);
} else {
if((state_val_14782 === (2))){
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14781__$1,(4),ch);
} else {
if((state_val_14782 === (11))){
var inst_14771 = (state_14781[(2)]);
var state_14781__$1 = state_14781;
var statearr_14790_14810 = state_14781__$1;
(statearr_14790_14810[(2)] = inst_14771);

(statearr_14790_14810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (9))){
var state_14781__$1 = state_14781;
var statearr_14791_14811 = state_14781__$1;
(statearr_14791_14811[(2)] = null);

(statearr_14791_14811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (5))){
var inst_14766 = cljs.core.async.close_BANG_.call(null,out);
var state_14781__$1 = state_14781;
var statearr_14792_14812 = state_14781__$1;
(statearr_14792_14812[(2)] = inst_14766);

(statearr_14792_14812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (10))){
var inst_14774 = (state_14781[(2)]);
var state_14781__$1 = (function (){var statearr_14793 = state_14781;
(statearr_14793[(8)] = inst_14774);

return statearr_14793;
})();
var statearr_14794_14813 = state_14781__$1;
(statearr_14794_14813[(2)] = null);

(statearr_14794_14813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (8))){
var inst_14763 = (state_14781[(7)]);
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14781__$1,(11),out,inst_14763);
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
}
});})(c__8284__auto___14803,out))
;
return ((function (switch__8222__auto__,c__8284__auto___14803,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_14798 = [null,null,null,null,null,null,null,null,null];
(statearr_14798[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_14798[(1)] = (1));

return statearr_14798;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_14781){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e14799){if((e14799 instanceof Object)){
var ex__8226__auto__ = e14799;
var statearr_14800_14814 = state_14781;
(statearr_14800_14814[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14815 = state_14781;
state_14781 = G__14815;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_14781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_14781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___14803,out))
})();
var state__8286__auto__ = (function (){var statearr_14801 = f__8285__auto__.call(null);
(statearr_14801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___14803);

return statearr_14801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___14803,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14817 = arguments.length;
switch (G__14817) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8284__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto__){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto__){
return (function (state_14984){
var state_val_14985 = (state_14984[(1)]);
if((state_val_14985 === (7))){
var inst_14980 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_14986_15027 = state_14984__$1;
(statearr_14986_15027[(2)] = inst_14980);

(statearr_14986_15027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (20))){
var inst_14950 = (state_14984[(7)]);
var inst_14961 = (state_14984[(2)]);
var inst_14962 = cljs.core.next.call(null,inst_14950);
var inst_14936 = inst_14962;
var inst_14937 = null;
var inst_14938 = (0);
var inst_14939 = (0);
var state_14984__$1 = (function (){var statearr_14987 = state_14984;
(statearr_14987[(8)] = inst_14937);

(statearr_14987[(9)] = inst_14939);

(statearr_14987[(10)] = inst_14936);

(statearr_14987[(11)] = inst_14938);

(statearr_14987[(12)] = inst_14961);

return statearr_14987;
})();
var statearr_14988_15028 = state_14984__$1;
(statearr_14988_15028[(2)] = null);

(statearr_14988_15028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (1))){
var state_14984__$1 = state_14984;
var statearr_14989_15029 = state_14984__$1;
(statearr_14989_15029[(2)] = null);

(statearr_14989_15029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (4))){
var inst_14925 = (state_14984[(13)]);
var inst_14925__$1 = (state_14984[(2)]);
var inst_14926 = (inst_14925__$1 == null);
var state_14984__$1 = (function (){var statearr_14990 = state_14984;
(statearr_14990[(13)] = inst_14925__$1);

return statearr_14990;
})();
if(cljs.core.truth_(inst_14926)){
var statearr_14991_15030 = state_14984__$1;
(statearr_14991_15030[(1)] = (5));

} else {
var statearr_14992_15031 = state_14984__$1;
(statearr_14992_15031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (15))){
var state_14984__$1 = state_14984;
var statearr_14996_15032 = state_14984__$1;
(statearr_14996_15032[(2)] = null);

(statearr_14996_15032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (21))){
var state_14984__$1 = state_14984;
var statearr_14997_15033 = state_14984__$1;
(statearr_14997_15033[(2)] = null);

(statearr_14997_15033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (13))){
var inst_14937 = (state_14984[(8)]);
var inst_14939 = (state_14984[(9)]);
var inst_14936 = (state_14984[(10)]);
var inst_14938 = (state_14984[(11)]);
var inst_14946 = (state_14984[(2)]);
var inst_14947 = (inst_14939 + (1));
var tmp14993 = inst_14937;
var tmp14994 = inst_14936;
var tmp14995 = inst_14938;
var inst_14936__$1 = tmp14994;
var inst_14937__$1 = tmp14993;
var inst_14938__$1 = tmp14995;
var inst_14939__$1 = inst_14947;
var state_14984__$1 = (function (){var statearr_14998 = state_14984;
(statearr_14998[(8)] = inst_14937__$1);

(statearr_14998[(9)] = inst_14939__$1);

(statearr_14998[(10)] = inst_14936__$1);

(statearr_14998[(11)] = inst_14938__$1);

(statearr_14998[(14)] = inst_14946);

return statearr_14998;
})();
var statearr_14999_15034 = state_14984__$1;
(statearr_14999_15034[(2)] = null);

(statearr_14999_15034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (22))){
var state_14984__$1 = state_14984;
var statearr_15000_15035 = state_14984__$1;
(statearr_15000_15035[(2)] = null);

(statearr_15000_15035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (6))){
var inst_14925 = (state_14984[(13)]);
var inst_14934 = f.call(null,inst_14925);
var inst_14935 = cljs.core.seq.call(null,inst_14934);
var inst_14936 = inst_14935;
var inst_14937 = null;
var inst_14938 = (0);
var inst_14939 = (0);
var state_14984__$1 = (function (){var statearr_15001 = state_14984;
(statearr_15001[(8)] = inst_14937);

(statearr_15001[(9)] = inst_14939);

(statearr_15001[(10)] = inst_14936);

(statearr_15001[(11)] = inst_14938);

return statearr_15001;
})();
var statearr_15002_15036 = state_14984__$1;
(statearr_15002_15036[(2)] = null);

(statearr_15002_15036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (17))){
var inst_14950 = (state_14984[(7)]);
var inst_14954 = cljs.core.chunk_first.call(null,inst_14950);
var inst_14955 = cljs.core.chunk_rest.call(null,inst_14950);
var inst_14956 = cljs.core.count.call(null,inst_14954);
var inst_14936 = inst_14955;
var inst_14937 = inst_14954;
var inst_14938 = inst_14956;
var inst_14939 = (0);
var state_14984__$1 = (function (){var statearr_15003 = state_14984;
(statearr_15003[(8)] = inst_14937);

(statearr_15003[(9)] = inst_14939);

(statearr_15003[(10)] = inst_14936);

(statearr_15003[(11)] = inst_14938);

return statearr_15003;
})();
var statearr_15004_15037 = state_14984__$1;
(statearr_15004_15037[(2)] = null);

(statearr_15004_15037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (3))){
var inst_14982 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14984__$1,inst_14982);
} else {
if((state_val_14985 === (12))){
var inst_14970 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_15005_15038 = state_14984__$1;
(statearr_15005_15038[(2)] = inst_14970);

(statearr_15005_15038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (2))){
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14984__$1,(4),in$);
} else {
if((state_val_14985 === (23))){
var inst_14978 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_15006_15039 = state_14984__$1;
(statearr_15006_15039[(2)] = inst_14978);

(statearr_15006_15039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (19))){
var inst_14965 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_15007_15040 = state_14984__$1;
(statearr_15007_15040[(2)] = inst_14965);

(statearr_15007_15040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (11))){
var inst_14950 = (state_14984[(7)]);
var inst_14936 = (state_14984[(10)]);
var inst_14950__$1 = cljs.core.seq.call(null,inst_14936);
var state_14984__$1 = (function (){var statearr_15008 = state_14984;
(statearr_15008[(7)] = inst_14950__$1);

return statearr_15008;
})();
if(inst_14950__$1){
var statearr_15009_15041 = state_14984__$1;
(statearr_15009_15041[(1)] = (14));

} else {
var statearr_15010_15042 = state_14984__$1;
(statearr_15010_15042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (9))){
var inst_14972 = (state_14984[(2)]);
var inst_14973 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14984__$1 = (function (){var statearr_15011 = state_14984;
(statearr_15011[(15)] = inst_14972);

return statearr_15011;
})();
if(cljs.core.truth_(inst_14973)){
var statearr_15012_15043 = state_14984__$1;
(statearr_15012_15043[(1)] = (21));

} else {
var statearr_15013_15044 = state_14984__$1;
(statearr_15013_15044[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (5))){
var inst_14928 = cljs.core.async.close_BANG_.call(null,out);
var state_14984__$1 = state_14984;
var statearr_15014_15045 = state_14984__$1;
(statearr_15014_15045[(2)] = inst_14928);

(statearr_15014_15045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (14))){
var inst_14950 = (state_14984[(7)]);
var inst_14952 = cljs.core.chunked_seq_QMARK_.call(null,inst_14950);
var state_14984__$1 = state_14984;
if(inst_14952){
var statearr_15015_15046 = state_14984__$1;
(statearr_15015_15046[(1)] = (17));

} else {
var statearr_15016_15047 = state_14984__$1;
(statearr_15016_15047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (16))){
var inst_14968 = (state_14984[(2)]);
var state_14984__$1 = state_14984;
var statearr_15017_15048 = state_14984__$1;
(statearr_15017_15048[(2)] = inst_14968);

(statearr_15017_15048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14985 === (10))){
var inst_14937 = (state_14984[(8)]);
var inst_14939 = (state_14984[(9)]);
var inst_14944 = cljs.core._nth.call(null,inst_14937,inst_14939);
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14984__$1,(13),out,inst_14944);
} else {
if((state_val_14985 === (18))){
var inst_14950 = (state_14984[(7)]);
var inst_14959 = cljs.core.first.call(null,inst_14950);
var state_14984__$1 = state_14984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14984__$1,(20),out,inst_14959);
} else {
if((state_val_14985 === (8))){
var inst_14939 = (state_14984[(9)]);
var inst_14938 = (state_14984[(11)]);
var inst_14941 = (inst_14939 < inst_14938);
var inst_14942 = inst_14941;
var state_14984__$1 = state_14984;
if(cljs.core.truth_(inst_14942)){
var statearr_15018_15049 = state_14984__$1;
(statearr_15018_15049[(1)] = (10));

} else {
var statearr_15019_15050 = state_14984__$1;
(statearr_15019_15050[(1)] = (11));

}

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
}
}
}
});})(c__8284__auto__))
;
return ((function (switch__8222__auto__,c__8284__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____0 = (function (){
var statearr_15023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15023[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__);

(statearr_15023[(1)] = (1));

return statearr_15023;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____1 = (function (state_14984){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_14984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e15024){if((e15024 instanceof Object)){
var ex__8226__auto__ = e15024;
var statearr_15025_15051 = state_14984;
(statearr_15025_15051[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15052 = state_14984;
state_14984 = G__15052;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__ = function(state_14984){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____1.call(this,state_14984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8223__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto__))
})();
var state__8286__auto__ = (function (){var statearr_15026 = f__8285__auto__.call(null);
(statearr_15026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto__);

return statearr_15026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto__))
);

return c__8284__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15054 = arguments.length;
switch (G__15054) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15057 = arguments.length;
switch (G__15057) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15060 = arguments.length;
switch (G__15060) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___15110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___15110,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___15110,out){
return (function (state_15084){
var state_val_15085 = (state_15084[(1)]);
if((state_val_15085 === (7))){
var inst_15079 = (state_15084[(2)]);
var state_15084__$1 = state_15084;
var statearr_15086_15111 = state_15084__$1;
(statearr_15086_15111[(2)] = inst_15079);

(statearr_15086_15111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (1))){
var inst_15061 = null;
var state_15084__$1 = (function (){var statearr_15087 = state_15084;
(statearr_15087[(7)] = inst_15061);

return statearr_15087;
})();
var statearr_15088_15112 = state_15084__$1;
(statearr_15088_15112[(2)] = null);

(statearr_15088_15112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (4))){
var inst_15064 = (state_15084[(8)]);
var inst_15064__$1 = (state_15084[(2)]);
var inst_15065 = (inst_15064__$1 == null);
var inst_15066 = cljs.core.not.call(null,inst_15065);
var state_15084__$1 = (function (){var statearr_15089 = state_15084;
(statearr_15089[(8)] = inst_15064__$1);

return statearr_15089;
})();
if(inst_15066){
var statearr_15090_15113 = state_15084__$1;
(statearr_15090_15113[(1)] = (5));

} else {
var statearr_15091_15114 = state_15084__$1;
(statearr_15091_15114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (6))){
var state_15084__$1 = state_15084;
var statearr_15092_15115 = state_15084__$1;
(statearr_15092_15115[(2)] = null);

(statearr_15092_15115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (3))){
var inst_15081 = (state_15084[(2)]);
var inst_15082 = cljs.core.async.close_BANG_.call(null,out);
var state_15084__$1 = (function (){var statearr_15093 = state_15084;
(statearr_15093[(9)] = inst_15081);

return statearr_15093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15084__$1,inst_15082);
} else {
if((state_val_15085 === (2))){
var state_15084__$1 = state_15084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15084__$1,(4),ch);
} else {
if((state_val_15085 === (11))){
var inst_15064 = (state_15084[(8)]);
var inst_15073 = (state_15084[(2)]);
var inst_15061 = inst_15064;
var state_15084__$1 = (function (){var statearr_15094 = state_15084;
(statearr_15094[(7)] = inst_15061);

(statearr_15094[(10)] = inst_15073);

return statearr_15094;
})();
var statearr_15095_15116 = state_15084__$1;
(statearr_15095_15116[(2)] = null);

(statearr_15095_15116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (9))){
var inst_15064 = (state_15084[(8)]);
var state_15084__$1 = state_15084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15084__$1,(11),out,inst_15064);
} else {
if((state_val_15085 === (5))){
var inst_15064 = (state_15084[(8)]);
var inst_15061 = (state_15084[(7)]);
var inst_15068 = cljs.core._EQ_.call(null,inst_15064,inst_15061);
var state_15084__$1 = state_15084;
if(inst_15068){
var statearr_15097_15117 = state_15084__$1;
(statearr_15097_15117[(1)] = (8));

} else {
var statearr_15098_15118 = state_15084__$1;
(statearr_15098_15118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (10))){
var inst_15076 = (state_15084[(2)]);
var state_15084__$1 = state_15084;
var statearr_15099_15119 = state_15084__$1;
(statearr_15099_15119[(2)] = inst_15076);

(statearr_15099_15119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (8))){
var inst_15061 = (state_15084[(7)]);
var tmp15096 = inst_15061;
var inst_15061__$1 = tmp15096;
var state_15084__$1 = (function (){var statearr_15100 = state_15084;
(statearr_15100[(7)] = inst_15061__$1);

return statearr_15100;
})();
var statearr_15101_15120 = state_15084__$1;
(statearr_15101_15120[(2)] = null);

(statearr_15101_15120[(1)] = (2));


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
}
});})(c__8284__auto___15110,out))
;
return ((function (switch__8222__auto__,c__8284__auto___15110,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_15105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15105[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_15105[(1)] = (1));

return statearr_15105;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_15084){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_15084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e15106){if((e15106 instanceof Object)){
var ex__8226__auto__ = e15106;
var statearr_15107_15121 = state_15084;
(statearr_15107_15121[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15122 = state_15084;
state_15084 = G__15122;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_15084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_15084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___15110,out))
})();
var state__8286__auto__ = (function (){var statearr_15108 = f__8285__auto__.call(null);
(statearr_15108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___15110);

return statearr_15108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___15110,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15124 = arguments.length;
switch (G__15124) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___15193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___15193,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___15193,out){
return (function (state_15162){
var state_val_15163 = (state_15162[(1)]);
if((state_val_15163 === (7))){
var inst_15158 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15164_15194 = state_15162__$1;
(statearr_15164_15194[(2)] = inst_15158);

(statearr_15164_15194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (1))){
var inst_15125 = (new Array(n));
var inst_15126 = inst_15125;
var inst_15127 = (0);
var state_15162__$1 = (function (){var statearr_15165 = state_15162;
(statearr_15165[(7)] = inst_15127);

(statearr_15165[(8)] = inst_15126);

return statearr_15165;
})();
var statearr_15166_15195 = state_15162__$1;
(statearr_15166_15195[(2)] = null);

(statearr_15166_15195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (4))){
var inst_15130 = (state_15162[(9)]);
var inst_15130__$1 = (state_15162[(2)]);
var inst_15131 = (inst_15130__$1 == null);
var inst_15132 = cljs.core.not.call(null,inst_15131);
var state_15162__$1 = (function (){var statearr_15167 = state_15162;
(statearr_15167[(9)] = inst_15130__$1);

return statearr_15167;
})();
if(inst_15132){
var statearr_15168_15196 = state_15162__$1;
(statearr_15168_15196[(1)] = (5));

} else {
var statearr_15169_15197 = state_15162__$1;
(statearr_15169_15197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (15))){
var inst_15152 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15170_15198 = state_15162__$1;
(statearr_15170_15198[(2)] = inst_15152);

(statearr_15170_15198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (13))){
var state_15162__$1 = state_15162;
var statearr_15171_15199 = state_15162__$1;
(statearr_15171_15199[(2)] = null);

(statearr_15171_15199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (6))){
var inst_15127 = (state_15162[(7)]);
var inst_15148 = (inst_15127 > (0));
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15148)){
var statearr_15172_15200 = state_15162__$1;
(statearr_15172_15200[(1)] = (12));

} else {
var statearr_15173_15201 = state_15162__$1;
(statearr_15173_15201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (3))){
var inst_15160 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15162__$1,inst_15160);
} else {
if((state_val_15163 === (12))){
var inst_15126 = (state_15162[(8)]);
var inst_15150 = cljs.core.vec.call(null,inst_15126);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15162__$1,(15),out,inst_15150);
} else {
if((state_val_15163 === (2))){
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15162__$1,(4),ch);
} else {
if((state_val_15163 === (11))){
var inst_15142 = (state_15162[(2)]);
var inst_15143 = (new Array(n));
var inst_15126 = inst_15143;
var inst_15127 = (0);
var state_15162__$1 = (function (){var statearr_15174 = state_15162;
(statearr_15174[(10)] = inst_15142);

(statearr_15174[(7)] = inst_15127);

(statearr_15174[(8)] = inst_15126);

return statearr_15174;
})();
var statearr_15175_15202 = state_15162__$1;
(statearr_15175_15202[(2)] = null);

(statearr_15175_15202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (9))){
var inst_15126 = (state_15162[(8)]);
var inst_15140 = cljs.core.vec.call(null,inst_15126);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15162__$1,(11),out,inst_15140);
} else {
if((state_val_15163 === (5))){
var inst_15127 = (state_15162[(7)]);
var inst_15135 = (state_15162[(11)]);
var inst_15130 = (state_15162[(9)]);
var inst_15126 = (state_15162[(8)]);
var inst_15134 = (inst_15126[inst_15127] = inst_15130);
var inst_15135__$1 = (inst_15127 + (1));
var inst_15136 = (inst_15135__$1 < n);
var state_15162__$1 = (function (){var statearr_15176 = state_15162;
(statearr_15176[(12)] = inst_15134);

(statearr_15176[(11)] = inst_15135__$1);

return statearr_15176;
})();
if(cljs.core.truth_(inst_15136)){
var statearr_15177_15203 = state_15162__$1;
(statearr_15177_15203[(1)] = (8));

} else {
var statearr_15178_15204 = state_15162__$1;
(statearr_15178_15204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (14))){
var inst_15155 = (state_15162[(2)]);
var inst_15156 = cljs.core.async.close_BANG_.call(null,out);
var state_15162__$1 = (function (){var statearr_15180 = state_15162;
(statearr_15180[(13)] = inst_15155);

return statearr_15180;
})();
var statearr_15181_15205 = state_15162__$1;
(statearr_15181_15205[(2)] = inst_15156);

(statearr_15181_15205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (10))){
var inst_15146 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15182_15206 = state_15162__$1;
(statearr_15182_15206[(2)] = inst_15146);

(statearr_15182_15206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (8))){
var inst_15135 = (state_15162[(11)]);
var inst_15126 = (state_15162[(8)]);
var tmp15179 = inst_15126;
var inst_15126__$1 = tmp15179;
var inst_15127 = inst_15135;
var state_15162__$1 = (function (){var statearr_15183 = state_15162;
(statearr_15183[(7)] = inst_15127);

(statearr_15183[(8)] = inst_15126__$1);

return statearr_15183;
})();
var statearr_15184_15207 = state_15162__$1;
(statearr_15184_15207[(2)] = null);

(statearr_15184_15207[(1)] = (2));


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
}
}
}
}
}
});})(c__8284__auto___15193,out))
;
return ((function (switch__8222__auto__,c__8284__auto___15193,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_15188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15188[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_15188[(1)] = (1));

return statearr_15188;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_15162){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_15162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e15189){if((e15189 instanceof Object)){
var ex__8226__auto__ = e15189;
var statearr_15190_15208 = state_15162;
(statearr_15190_15208[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15209 = state_15162;
state_15162 = G__15209;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_15162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_15162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___15193,out))
})();
var state__8286__auto__ = (function (){var statearr_15191 = f__8285__auto__.call(null);
(statearr_15191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___15193);

return statearr_15191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___15193,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15211 = arguments.length;
switch (G__15211) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8284__auto___15284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8284__auto___15284,out){
return (function (){
var f__8285__auto__ = (function (){var switch__8222__auto__ = ((function (c__8284__auto___15284,out){
return (function (state_15253){
var state_val_15254 = (state_15253[(1)]);
if((state_val_15254 === (7))){
var inst_15249 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15255_15285 = state_15253__$1;
(statearr_15255_15285[(2)] = inst_15249);

(statearr_15255_15285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (1))){
var inst_15212 = [];
var inst_15213 = inst_15212;
var inst_15214 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15253__$1 = (function (){var statearr_15256 = state_15253;
(statearr_15256[(7)] = inst_15213);

(statearr_15256[(8)] = inst_15214);

return statearr_15256;
})();
var statearr_15257_15286 = state_15253__$1;
(statearr_15257_15286[(2)] = null);

(statearr_15257_15286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (4))){
var inst_15217 = (state_15253[(9)]);
var inst_15217__$1 = (state_15253[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var inst_15219 = cljs.core.not.call(null,inst_15218);
var state_15253__$1 = (function (){var statearr_15258 = state_15253;
(statearr_15258[(9)] = inst_15217__$1);

return statearr_15258;
})();
if(inst_15219){
var statearr_15259_15287 = state_15253__$1;
(statearr_15259_15287[(1)] = (5));

} else {
var statearr_15260_15288 = state_15253__$1;
(statearr_15260_15288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (15))){
var inst_15243 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15261_15289 = state_15253__$1;
(statearr_15261_15289[(2)] = inst_15243);

(statearr_15261_15289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (13))){
var state_15253__$1 = state_15253;
var statearr_15262_15290 = state_15253__$1;
(statearr_15262_15290[(2)] = null);

(statearr_15262_15290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (6))){
var inst_15213 = (state_15253[(7)]);
var inst_15238 = inst_15213.length;
var inst_15239 = (inst_15238 > (0));
var state_15253__$1 = state_15253;
if(cljs.core.truth_(inst_15239)){
var statearr_15263_15291 = state_15253__$1;
(statearr_15263_15291[(1)] = (12));

} else {
var statearr_15264_15292 = state_15253__$1;
(statearr_15264_15292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (3))){
var inst_15251 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15253__$1,inst_15251);
} else {
if((state_val_15254 === (12))){
var inst_15213 = (state_15253[(7)]);
var inst_15241 = cljs.core.vec.call(null,inst_15213);
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15253__$1,(15),out,inst_15241);
} else {
if((state_val_15254 === (2))){
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15253__$1,(4),ch);
} else {
if((state_val_15254 === (11))){
var inst_15217 = (state_15253[(9)]);
var inst_15221 = (state_15253[(10)]);
var inst_15231 = (state_15253[(2)]);
var inst_15232 = [];
var inst_15233 = inst_15232.push(inst_15217);
var inst_15213 = inst_15232;
var inst_15214 = inst_15221;
var state_15253__$1 = (function (){var statearr_15265 = state_15253;
(statearr_15265[(11)] = inst_15233);

(statearr_15265[(7)] = inst_15213);

(statearr_15265[(12)] = inst_15231);

(statearr_15265[(8)] = inst_15214);

return statearr_15265;
})();
var statearr_15266_15293 = state_15253__$1;
(statearr_15266_15293[(2)] = null);

(statearr_15266_15293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (9))){
var inst_15213 = (state_15253[(7)]);
var inst_15229 = cljs.core.vec.call(null,inst_15213);
var state_15253__$1 = state_15253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15253__$1,(11),out,inst_15229);
} else {
if((state_val_15254 === (5))){
var inst_15217 = (state_15253[(9)]);
var inst_15214 = (state_15253[(8)]);
var inst_15221 = (state_15253[(10)]);
var inst_15221__$1 = f.call(null,inst_15217);
var inst_15222 = cljs.core._EQ_.call(null,inst_15221__$1,inst_15214);
var inst_15223 = cljs.core.keyword_identical_QMARK_.call(null,inst_15214,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15224 = (inst_15222) || (inst_15223);
var state_15253__$1 = (function (){var statearr_15267 = state_15253;
(statearr_15267[(10)] = inst_15221__$1);

return statearr_15267;
})();
if(cljs.core.truth_(inst_15224)){
var statearr_15268_15294 = state_15253__$1;
(statearr_15268_15294[(1)] = (8));

} else {
var statearr_15269_15295 = state_15253__$1;
(statearr_15269_15295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (14))){
var inst_15246 = (state_15253[(2)]);
var inst_15247 = cljs.core.async.close_BANG_.call(null,out);
var state_15253__$1 = (function (){var statearr_15271 = state_15253;
(statearr_15271[(13)] = inst_15246);

return statearr_15271;
})();
var statearr_15272_15296 = state_15253__$1;
(statearr_15272_15296[(2)] = inst_15247);

(statearr_15272_15296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (10))){
var inst_15236 = (state_15253[(2)]);
var state_15253__$1 = state_15253;
var statearr_15273_15297 = state_15253__$1;
(statearr_15273_15297[(2)] = inst_15236);

(statearr_15273_15297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15254 === (8))){
var inst_15213 = (state_15253[(7)]);
var inst_15217 = (state_15253[(9)]);
var inst_15221 = (state_15253[(10)]);
var inst_15226 = inst_15213.push(inst_15217);
var tmp15270 = inst_15213;
var inst_15213__$1 = tmp15270;
var inst_15214 = inst_15221;
var state_15253__$1 = (function (){var statearr_15274 = state_15253;
(statearr_15274[(7)] = inst_15213__$1);

(statearr_15274[(14)] = inst_15226);

(statearr_15274[(8)] = inst_15214);

return statearr_15274;
})();
var statearr_15275_15298 = state_15253__$1;
(statearr_15275_15298[(2)] = null);

(statearr_15275_15298[(1)] = (2));


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
}
}
}
}
}
});})(c__8284__auto___15284,out))
;
return ((function (switch__8222__auto__,c__8284__auto___15284,out){
return (function() {
var cljs$core$async$state_machine__8223__auto__ = null;
var cljs$core$async$state_machine__8223__auto____0 = (function (){
var statearr_15279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15279[(0)] = cljs$core$async$state_machine__8223__auto__);

(statearr_15279[(1)] = (1));

return statearr_15279;
});
var cljs$core$async$state_machine__8223__auto____1 = (function (state_15253){
while(true){
var ret_value__8224__auto__ = (function (){try{while(true){
var result__8225__auto__ = switch__8222__auto__.call(null,state_15253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8225__auto__;
}
break;
}
}catch (e15280){if((e15280 instanceof Object)){
var ex__8226__auto__ = e15280;
var statearr_15281_15299 = state_15253;
(statearr_15281_15299[(5)] = ex__8226__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15300 = state_15253;
state_15253 = G__15300;
continue;
} else {
return ret_value__8224__auto__;
}
break;
}
});
cljs$core$async$state_machine__8223__auto__ = function(state_15253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8223__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8223__auto____1.call(this,state_15253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8223__auto____0;
cljs$core$async$state_machine__8223__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8223__auto____1;
return cljs$core$async$state_machine__8223__auto__;
})()
;})(switch__8222__auto__,c__8284__auto___15284,out))
})();
var state__8286__auto__ = (function (){var statearr_15282 = f__8285__auto__.call(null);
(statearr_15282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8284__auto___15284);

return statearr_15282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8286__auto__);
});})(c__8284__auto___15284,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
