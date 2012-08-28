(ns clojure-gap.css.styles
  (:require [clj-style.core :as cs]))

(cs/reset-rules!)

(cs/defrule  div-content
  [:div#content
   :background "green"])

(cs/save "resources/public/css/styles.css")