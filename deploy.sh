#!/bin/bash

domain="gh.devakimbo.com"
repo="deploy"
branch="gh-pages"

# DIR=$(dirname "$0")

# cd $DIR/..

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

git worktree prune
git br -d gh-pages

if [[ -d "public" ]]
then
  echo "Deleting old publication"
  rm -rf public
fi

mkdir public

if [[ -d ".git/worktrees/public/" ]]
then
  echo "Delating .git/worktrees/public/"
  rm -rf .git/worktrees/public/
fi

echo "Checking out $branch branch into public"
git worktree add -b $branch public $repo/$branch

echo "Generating site (minified HTML)"
npm run build:prod

cd public

if [[ -n $domain ]]
then
  echo "Adding CNAME"
  echo $domain > CNAME
fi

echo "Updating $branch branch"
git commit --allow-empty -m "Publishing to $branch" && git push -f $repo $branch

cd ..