(ns clojure-gap.css.styles
  (:require [clj-style.core :as cs]))

(cs/reset-rules!)

(cs/defrule div-wrapper
            [:div#wrapper
             :height "500px"])

(cs/defrule div-content
            [:div#content
             :background "#BCFA99"
             :height "100%"
             :text-align "center"
             :padding "50% 0"])

(cs/defrule arrow
            [:p#arrow
             :font-size "400%"
             :color "#2FBEF9"
             :-webkit-transform "rotate(-45deg)"
             :-webkit-tap-highlight-color "rgba(0,0,0,0)"])

(cs/save "resources/public/css/styles.css")