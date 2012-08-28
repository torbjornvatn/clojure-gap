goog.provide('clojure_gap.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('noir.cljs.client.watcher');
goog.require('clojure.browser.repl');
goog.require('crate.core');
clojure_gap.client.main.$content = jayq.core.$.call(null,"\uFDD0'#content");
var group__4169__auto____5345 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

clojure_gap.client.main.up_and_running = (function up_and_running(){
var elem__4170__auto____5346 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'p","CLJS is compiled and active... Time to build something!"]));

elem__4170__auto____5346.setAttribute("crateGroup",group__4169__auto____5345);
return elem__4170__auto____5346;
});
clojure_gap.client.main.up_and_running.prototype._crateGroup = group__4169__auto____5345;
jayq.core.append.call(null,clojure_gap.client.main.$content,clojure_gap.client.main.up_and_running.call(null));
