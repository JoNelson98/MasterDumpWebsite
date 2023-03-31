set -g 

npm run build

cd dist


echo > .nojekyll

git init
git checkout -b master
git add -a
git commit -m "Deploy"

cd-