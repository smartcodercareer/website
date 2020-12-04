#!/bin/sh

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

if [[ -d "public" ]]
then
  echo "Deleting old publication"
  rm -rf public
fi

mkdir public
git worktree prune

if [[ -d ".git/worktrees/public/" ]]
then
  echo "Delating .git/worktrees/public/"
  rm -rf .git/worktrees/public/
fi

echo "Checking out $branch branch into public"
git worktree add -B $branch public $repo/$branch

echo "Generating site (minified HTML)"
hugo --minify

cd public

if [[ -n $domain ]]
then
  echo "Adding CNAME"
  echo $domain > CNAME
fi

echo "Updating $branch branch"
git add --all && git commit --allow-empty -m "Publishing to $branch" && git push -f $repo $branch

cd ..