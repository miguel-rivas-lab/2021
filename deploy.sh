#!/usr/bin/env sh
repo_name=`basename "$PWD"`

npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:miguel-rivas/`$repo_name`.git master:gh-pages

cd -