(ns yinch.routes
  (:use compojure.core
        ring.middleware.resource
        ring.middleware.not-modified
        ring.middleware.content-type)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]))

(defroutes main-routes
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/site main-routes)
      ; Some versions of the closure compiler's i18n auto-detect as a different
      ; encoding under some browsers, so we force all javascript statics to
      ; have the UTF-8 encoding.
      (wrap-resource "public")
      (wrap-content-type {:mime-types {"js" "text/javascript; charset=utf-8"}})
      (wrap-not-modified)))
