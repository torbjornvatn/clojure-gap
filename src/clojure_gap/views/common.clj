(ns clojure-gap.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css html5]]
        [clojure-gap.css.styles]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "clojure-gap"]
               (include-css "/css/reset.css")
               (include-css "/css/default.css")]
              [:body
               [:div#wrapper
                content]
               (cljs/include-scripts :with-jquery)])
  (save-styles)
)