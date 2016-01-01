// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__20726 = string;
var G__20726__$1 = (((G__20726 == null))?null:[cljs.core.str(G__20726)].join(''));
var G__20726__$2 = (((G__20726__$1 == null))?null:encodeURIComponent(G__20726__$1));
var G__20726__$3 = (((G__20726__$2 == null))?null:G__20726__$2.replace("+","%20"));
return G__20726__$3;
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__20728 = string;
var G__20728__$1 = (((G__20728 == null))?null:[cljs.core.str(G__20728)].join(''));
var G__20728__$2 = (((G__20728__$1 == null))?null:decodeURIComponent(G__20728__$1));
return G__20728__$2;
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__20732 = cljs.core.seq.call(null,m);
var G__20732__$1 = (((G__20732 == null))?null:cljs.core.sort.call(null,G__20732));
var G__20732__$2 = (((G__20732__$1 == null))?null:cljs.core.map.call(null,((function (G__20732,G__20732__$1){
return (function (p__20733){
var vec__20734 = p__20733;
var k = cljs.core.nth.call(null,vec__20734,(0),null);
var v = cljs.core.nth.call(null,vec__20734,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str(v)].join(''))], null);
});})(G__20732,G__20732__$1))
,G__20732__$1));
var G__20732__$3 = (((G__20732__$2 == null))?null:cljs.core.interpose.call(null,"&",G__20732__$2));
var G__20732__$4 = (((G__20732__$3 == null))?null:cljs.core.flatten.call(null,G__20732__$3));
var G__20732__$5 = (((G__20732__$4 == null))?null:cljs.core.apply.call(null,cljs.core.str,G__20732__$4));
return G__20732__$5;
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,qstr))){
var G__20736 = clojure.string.split.call(null,qstr,/&/);
var G__20736__$1 = (((G__20736 == null))?null:cljs.core.seq.call(null,G__20736));
var G__20736__$2 = (((G__20736__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__20736__$1));
var G__20736__$3 = (((G__20736__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__20736__$2));
var G__20736__$4 = (((G__20736__$3 == null))?null:cljs.core.apply.call(null,cljs.core.hash_map,G__20736__$3));
return G__20736__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
* @param {*} protocol
* @param {*} username
* @param {*} password
* @param {*} host
* @param {*} port
* @param {*} path
* @param {*} query
* @param {*} anchor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq.call(null,self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4873__auto__,k__4874__auto__){
var self__ = this;
var this__4873__auto____$1 = this;
return cljs.core._lookup.call(null,this__4873__auto____$1,k__4874__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4875__auto__,k20738,else__4876__auto__){
var self__ = this;
var this__4875__auto____$1 = this;
var G__20740 = (((k20738 instanceof cljs.core.Keyword))?k20738.fqn:null);
switch (G__20740) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20738,else__4876__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4887__auto__,writer__4888__auto__,opts__4889__auto__){
var self__ = this;
var this__4887__auto____$1 = this;
var pr_pair__4890__auto__ = ((function (this__4887__auto____$1){
return (function (keyval__4891__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4888__auto__,cljs.core.pr_writer,""," ","",opts__4889__auto__,keyval__4891__auto__);
});})(this__4887__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4888__auto__,pr_pair__4890__auto__,"#cemerick.url.URL{",", ","}",opts__4889__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4871__auto__){
var self__ = this;
var this__4871__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4867__auto__){
var self__ = this;
var this__4867__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4877__auto__){
var self__ = this;
var this__4877__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4868__auto__){
var self__ = this;
var this__4868__auto____$1 = this;
var h__4694__auto__ = self__.__hash;
if(!((h__4694__auto__ == null))){
return h__4694__auto__;
} else {
var h__4694__auto____$1 = cljs.core.hash_imap.call(null,this__4868__auto____$1);
self__.__hash = h__4694__auto____$1;

return h__4694__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4869__auto__,other__4870__auto__){
var self__ = this;
var this__4869__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4266__auto__ = other__4870__auto__;
if(cljs.core.truth_(and__4266__auto__)){
var and__4266__auto____$1 = (this__4869__auto____$1.constructor === other__4870__auto__.constructor);
if(and__4266__auto____$1){
return cljs.core.equiv_map.call(null,this__4869__auto____$1,other__4870__auto__);
} else {
return and__4266__auto____$1;
}
} else {
return and__4266__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4882__auto__,k__4883__auto__){
var self__ = this;
var this__4882__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__4883__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4882__auto____$1),self__.__meta),k__4883__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4883__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4880__auto__,k__4881__auto__,G__20737){
var self__ = this;
var this__4880__auto____$1 = this;
var pred__20741 = cljs.core.keyword_identical_QMARK_;
var expr__20742 = k__4881__auto__;
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__20742))){
return (new cemerick.url.URL(G__20737,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__20742))){
return (new cemerick.url.URL(self__.protocol,G__20737,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__20737,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__20737,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__20737,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__20737,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__20737,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20741.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__20742))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__20737,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4881__auto__,G__20737),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4885__auto__){
var self__ = this;
var this__4885__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4872__auto__,G__20737){
var self__ = this;
var this__4872__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__20737,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4878__auto__,entry__4879__auto__){
var self__ = this;
var this__4878__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4879__auto__)){
return cljs.core._assoc.call(null,this__4878__auto____$1,cljs.core._nth.call(null,entry__4879__auto__,(0)),cljs.core._nth.call(null,entry__4879__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4878__auto____$1,entry__4879__auto__);
}
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__4907__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__4907__auto__,writer__4908__auto__){
return cljs.core._write.call(null,writer__4908__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__20739){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__20739),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__20739),null,cljs.core.dissoc.call(null,G__20739,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__20746 = clojure.string.split.call(null,(function (){var or__4278__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__4278__auto__)){
return or__4278__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__20746,(0),null);
var pass = cljs.core.nth.call(null,vec__20746,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__4266__auto__ = cljs.core.seq.call(null,user);
if(and__4266__auto__){
return user;
} else {
return and__4266__auto__;
}
})(),(function (){var and__4266__auto__ = cljs.core.seq.call(null,pass);
if(and__4266__auto__){
return pass;
} else {
return and__4266__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record.
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(){
var G__20750 = arguments.length;
switch (G__20750) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5329__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5329__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_.call(null,url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq20747){
var G__20748 = cljs.core.first.call(null,seq20747);
var seq20747__$1 = cljs.core.next.call(null,seq20747);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__20748,seq20747__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);
