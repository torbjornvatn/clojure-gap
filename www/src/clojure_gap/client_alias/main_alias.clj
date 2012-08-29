(ns clojure-gap.client-alias.main-alias
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $content ($ :#content)) ; jayq getting element

(defn alert [text]
  (js/navigator.notification.alert text nil "Din posisjon er"))

(defn onSuccess [position]
  (alert (str "Lat: " js/position.coords.latitude 
              "\nLong: " js/position.coords.longitude)))

(defn onError [error]
  (alert (str js/error.code)))

(defn ^:export alertPosition []
  (js/navigator.geolocation.getCurrentPosition onSuccess onError))

(defpartial get-position []
            [:p#arrow 
             {:onclick "clojure_gap.client.main.alertPosition(this); return false;"} 
             "➤"])

(append $content (get-position)) ; jayq calling jQuery.append()