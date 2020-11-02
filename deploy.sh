#!/bin/sh

# domain="appdy.net"
repo="deploy"
branch="gh-pages"

# DIR=$(dirname "$0")

# cd $DIR/..

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

if [[ -d "public" ]]
then
  echo "Deleting old publication"
  rm -rf public
fi

mkdir public
git worktree prune

if [[ -d ".git/worktrees/public/" ]]
then
  rm -rf .git/worktrees/public/
fi

echo "Checking out $branch branch into public"
git worktree add -B $branch public $repo/$branch

# echo "Removing existing files"
# rm -rf public/*

echo "Generating site"
hugo

# cd public

if [[ -z $domain ]]
then
  echo $domain > public/CNAME
fi

echo "Updating $branch branch"
git add --all . && git commit -m "Publishing to $branch"

# cd ..