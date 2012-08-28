(ns clojure-gap.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]
        [clojure-gap.css.styles]))

(defpartial layout [& content]
            (save-styles) ;Generate CSS at each refresh
            (html5
              [:head
               [:title "clojure-gap"]
               (include-css "css/reset.css")
               (include-css "css/styles.css")]
              [:body
               [:div#wrapper
                content]
               (cljs/include-scripts :with-jquery)]
               (include-js "js/cordova-2.0.0.js")))