#!/bin/bash

# domain="gh.devakimbo.com"
domain="devakimbo.github.io/site-2"
repo="deploy"
branch="gh-pages"

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

# if [[ -d ".git/worktrees/public/" ]]
# then
#   echo "Delating .git/worktrees/public/"
#   rm -rf .git/worktrees/public/
# fi

git worktree remove -f public
git worktree prune
git br -D gh-pages

if [[ -d "resources" ]]
then
  echo "Deleting old resources"
  rm -rf resources
fi

# npm run build:prod:clean

if [[ -d "public" ]]
then
  echo "Deleting old publication"
  rm -rf public
fi

mkdir public

echo "Checking out $branch branch into public"
git worktree add -b $branch public $repo/$branch

rm -rf public/*

echo "Generating site (minified HTML)"
npm run build:prod

cd public

if [[ -n $domain ]]
then
  echo "Adding CNAME"
  echo $domain > CNAME
fi

echo "Updating $branch branch"
git add --all && git commit --allow-empty -m "Publishing to $branch" && git push -f $repo $branch

cd ..