#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 npm run docs:build
yarn docs:build

# 进入生成的文件夹
cd ../vueDist/dist

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../vueDist/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:luoanqi1993/test2022.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -