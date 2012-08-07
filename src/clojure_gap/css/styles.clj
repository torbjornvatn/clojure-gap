(ns clojure-gap.css.styles
  (:require [clj-style.core :as cs]))

(cs/defrule  div-foo
  [:div#foo
   :margin "0px"
   [:span.bar
    :color "red"
    :font-weight "bold"
    [:a:hover
     :text-decoration "none"]]])

(defn save-styles []
  (cs/save "resources/public/css/styles.css"))
