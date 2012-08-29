goog.provide('clojure_gap.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('crate.core');
clojure_gap.client.main.$content = jayq.core.$.call(null,"\uFDD0'#content");
clojure_gap.client.main.alert = (function alert(text){
return navigator['notification']['alert'].call(null,text,null,"Din posisjon er");
});
clojure_gap.client.main.onSuccess = (function onSuccess(position){
return clojure_gap.client.main.alert.call(null,cljs.core.str.call(null,"Lat: ",position['coords']['latitude'],"\nLong: ",position['coords']['longitude']));
});
clojure_gap.client.main.onError = (function onError(error){
return clojure_gap.client.main.alert.call(null,cljs.core.str.call(null,error['code']));
});
clojure_gap.client.main.alertPosition = (function alertPosition(){
return navigator['geolocation']['getCurrentPosition'].call(null,clojure_gap.client.main.onSuccess,clojure_gap.client.main.onError);
});
goog.exportSymbol('clojure_gap.client.main.alertPosition', clojure_gap.client.main.alertPosition);
var group__4206__auto____5304 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

clojure_gap.client.main.get_position = (function get_position(){
var elem__4207__auto____5305 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'p",cljs.core.ObjMap.fromObject(["\uFDD0'onclick"],{"\uFDD0'onclick":"clojure_gap.client.main.alertPosition(this); return false;"}),"\u27A4"]));

elem__4207__auto____5305.setAttribute("crateGroup",group__4206__auto____5304);
return elem__4207__auto____5305;
});
clojure_gap.client.main.get_position.prototype._crateGroup = group__4206__auto____5304;
jayq.core.append.call(null,clojure_gap.client.main.$content,clojure_gap.client.main.get_position.call(null));
