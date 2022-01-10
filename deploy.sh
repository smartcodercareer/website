#!/bin/bash

domain="www.devakimbo.com"
repo="deploy"
branch="gh-pages"

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

if [[ -d "resources" ]]
then
  echo "Deleting old resources..."
  rm -rf resources
fi

if [[ -d "public" ]]
then
  echo "Deleting old publication..."
  rm -rf public
fi

mkdir public

if [[ -d ".git/worktrees/public/" ]]
then
  echo "Delating .git/worktrees/public/"
  git worktree prune
  git worktree remove -f public
  rm -rf .git/worktrees/public/
fi

if [[ `git br|grep $branch` ]]
then
  git br -D $branch
fi

echo "Checking out $branch branch into public..."
git worktree add -b $branch public $repo/$branch

rm -rf public/*

set -e

# echo "Cleaning up the environment..."
# yarn clean

# echo "Generating site (minified HTML)"
# hugo --minify --cleanDestinationDir --gc

# echo "Generating site (minified HTML)..."
# npm run build:prod:clean

echo "Generating site (minified HTML)"
hugo --minify

cd public

if [[ -n $domain ]]
then
  echo "Adding CNAME"
  echo $domain > CNAME
fi

# paths=("${(@f)$(find . -name '_*')}")
# unset 'paths[-1]'

# include=""

# for i ("$paths[@]") include="$include,\"$i\""

# includes="includes: [$include]"
# include="include: [$include]"

# echo $include > _config.yml
# echo $includes >> _config.yml

echo "Updating $branch branch"
git add --all && git commit --allow-empty -m "Publishing to $branch" && git push -f $repo master:$branch

cd ..