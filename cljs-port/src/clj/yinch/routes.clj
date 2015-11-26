(ns yinch.routes
  (:use compojure.core
        ring.middleware.resource
        ring.middleware.file-info)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]))

(defroutes main-routes
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/site main-routes)
      (wrap-resource "public")
      (wrap-file-info)))
