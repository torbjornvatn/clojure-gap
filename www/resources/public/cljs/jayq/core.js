goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__7244){
var vec__7245__7246 = p__7244;
var context__7247 = cljs.core.nth.call(null,vec__7245__7246,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__7247)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__7247);
}
};
var $ = function (sel,var_args){
var p__7244 = null;
if (goog.isDef(var_args)) {
  p__7244 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__7244);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__7248){
var sel = cljs.core.first(arglist__7248);
var p__7244 = cljs.core.rest(arglist__7248);
return $__delegate.call(this, sel, p__7244);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__7250 = null;
var G__7250__7251 = (function (this$,k){
var or__3548__auto____7249 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{return null;
}
});
var G__7250__7252 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__7250 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__7250__7251.call(this,this$,k);
case  3 :
return G__7250__7252.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7250;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__7254 = null;
var G__7254__7255 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__7254__7256 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__7254 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__7254__7255.call(this,_,k);
case  3 :
return G__7254__7256.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7254;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__7258){
var vec__7259__7260 = p__7258;
var v__7261 = cljs.core.nth.call(null,vec__7259__7260,0,null);

var a__7262 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__7261)))
{return $elem.attr(a__7262);
} else
{return $elem.attr(a__7262,v__7261);
}
};
var attr = function ($elem,a,var_args){
var p__7258 = null;
if (goog.isDef(var_args)) {
  p__7258 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__7258);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__7263){
var $elem = cljs.core.first(arglist__7263);
var a = cljs.core.first(cljs.core.next(arglist__7263));
var p__7258 = cljs.core.rest(cljs.core.next(arglist__7263));
return attr__delegate.call(this, $elem, a, p__7258);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__7264){
var vec__7265__7266 = p__7264;
var v__7267 = cljs.core.nth.call(null,vec__7265__7266,0,null);

var k__7268 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__7267)))
{return $elem.data(k__7268);
} else
{return $elem.data(k__7268,v__7267);
}
};
var data = function ($elem,k,var_args){
var p__7264 = null;
if (goog.isDef(var_args)) {
  p__7264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__7264);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__7269){
var $elem = cljs.core.first(arglist__7269);
var k = cljs.core.first(cljs.core.next(arglist__7269));
var p__7264 = cljs.core.rest(cljs.core.next(arglist__7269));
return data__delegate.call(this, $elem, k, p__7264);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__7270 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__7270);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__7271 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__7271);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__7272){
var vec__7273__7274 = p__7272;
var speed__7275 = cljs.core.nth.call(null,vec__7273__7274,0,null);
var on_finish__7276 = cljs.core.nth.call(null,vec__7273__7274,1,null);

return $elem.hide(speed__7275,on_finish__7276);
};
var hide = function ($elem,var_args){
var p__7272 = null;
if (goog.isDef(var_args)) {
  p__7272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__7272);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__7277){
var $elem = cljs.core.first(arglist__7277);
var p__7272 = cljs.core.rest(arglist__7277);
return hide__delegate.call(this, $elem, p__7272);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__7278){
var vec__7279__7280 = p__7278;
var speed__7281 = cljs.core.nth.call(null,vec__7279__7280,0,null);
var on_finish__7282 = cljs.core.nth.call(null,vec__7279__7280,1,null);

return $elem.show(speed__7281,on_finish__7282);
};
var show = function ($elem,var_args){
var p__7278 = null;
if (goog.isDef(var_args)) {
  p__7278 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__7278);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__7283){
var $elem = cljs.core.first(arglist__7283);
var p__7278 = cljs.core.rest(arglist__7283);
return show__delegate.call(this, $elem, p__7278);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__7284){
var vec__7285__7286 = p__7284;
var speed__7287 = cljs.core.nth.call(null,vec__7285__7286,0,null);
var on_finish__7288 = cljs.core.nth.call(null,vec__7285__7286,1,null);

return $elem.fadeOut(speed__7287,on_finish__7288);
};
var fade_out = function ($elem,var_args){
var p__7284 = null;
if (goog.isDef(var_args)) {
  p__7284 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__7284);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__7289){
var $elem = cljs.core.first(arglist__7289);
var p__7284 = cljs.core.rest(arglist__7289);
return fade_out__delegate.call(this, $elem, p__7284);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__7290){
var vec__7291__7292 = p__7290;
var speed__7293 = cljs.core.nth.call(null,vec__7291__7292,0,null);
var on_finish__7294 = cljs.core.nth.call(null,vec__7291__7292,1,null);

return $elem.fadeIn(speed__7293,on_finish__7294);
};
var fade_in = function ($elem,var_args){
var p__7290 = null;
if (goog.isDef(var_args)) {
  p__7290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__7290);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__7295){
var $elem = cljs.core.first(arglist__7295);
var p__7290 = cljs.core.rest(arglist__7295);
return fade_in__delegate.call(this, $elem, p__7290);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__7296){
var vec__7297__7298 = p__7296;
var speed__7299 = cljs.core.nth.call(null,vec__7297__7298,0,null);
var on_finish__7300 = cljs.core.nth.call(null,vec__7297__7298,1,null);

return $elem.slideUp(speed__7299,on_finish__7300);
};
var slide_up = function ($elem,var_args){
var p__7296 = null;
if (goog.isDef(var_args)) {
  p__7296 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__7296);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__7301){
var $elem = cljs.core.first(arglist__7301);
var p__7296 = cljs.core.rest(arglist__7301);
return slide_up__delegate.call(this, $elem, p__7296);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__7302){
var vec__7303__7304 = p__7302;
var speed__7305 = cljs.core.nth.call(null,vec__7303__7304,0,null);
var on_finish__7306 = cljs.core.nth.call(null,vec__7303__7304,1,null);

return $elem.slideDown(speed__7305,on_finish__7306);
};
var slide_down = function ($elem,var_args){
var p__7302 = null;
if (goog.isDef(var_args)) {
  p__7302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__7302);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__7307){
var $elem = cljs.core.first(arglist__7307);
var p__7302 = cljs.core.rest(arglist__7307);
return slide_down__delegate.call(this, $elem, p__7302);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__7308){
var vec__7309__7310 = p__7308;
var v__7311 = cljs.core.nth.call(null,vec__7309__7310,0,null);

if(cljs.core.truth_(v__7311))
{return $elem.val(v__7311);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__7308 = null;
if (goog.isDef(var_args)) {
  p__7308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__7308);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__7312){
var $elem = cljs.core.first(arglist__7312);
var p__7308 = cljs.core.rest(arglist__7312);
return val__delegate.call(this, $elem, p__7308);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__7313,content,callback){
var vec__7314__7315 = p__7313;
var method__7316 = cljs.core.nth.call(null,vec__7314__7315,0,null);
var uri__7317 = cljs.core.nth.call(null,vec__7314__7315,1,null);

var params__7318 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__7316)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__7317,params__7318);
});
