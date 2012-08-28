(ns clojure-gap.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append]])
  (:use-macros [crate.macros :only [defpartial]]))

;;************************************************
;; Dev stuff
;;************************************************

;(watcher/init)
;;(repl/connect "http://localhost:9000/repl")

;;************************************************
;; Code
;;************************************************

(def $content ($ :#content)) ;jayq calling jQuery

(defpartial up-and-running []
  [:p "CLJS is compiled and active... Time to build something!"])

(append $content (up-and-running))

