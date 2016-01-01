#!/usr/bin/env bash

lein cljsbuild once
git checkout gh-pages
git checkout master resources/public/
mv resources/public/* .
rm -r resources
rm repl.html
git reset HEAD resources
