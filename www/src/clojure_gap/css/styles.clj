(ns clojure-gap.css.styles
  (:require [clj-style.core :as cs]))

(cs/reset-rules!)

(cs/defrule div-wrapper
            [:div#wrapper
             :height "500px"])

(cs/defrule div-content
            [:div#content
             :background "#BCFA99"
             :height "100%"])

(cs/save "resources/public/css/styles.css")