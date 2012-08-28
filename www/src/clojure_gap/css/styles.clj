(ns clojure-gap.css.styles
  (:require [clj-style.core :as cs]))

(cs/defrule  div-content
  [:div#content
   :background "blue"])

(defn save-styles []
  (cs/save "resources/public/css/styles.css"))
