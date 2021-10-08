#!/usr/bin/env sh
clear
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/2021-vue.git master:gh-pages