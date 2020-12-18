---
title: 47 Git Aliases That Will Make You More Productive
date: 2020-04-19T21:50:14Z
publishDate: 2020-04-19T21:50:14Z
lastmod: 2020-04-19T15:50:14Z
authors: ["Adam Faryna"]
images: ["47-git-aliases-that-will-make-you-more-productive.jpg"]
series: []
tags: ["Git", "Hacks", "Web Development"]
audio: []
videos: []
draft: false
---

Many seasoned developers type long git commands every time they need to perform a simple task, they forget the attributes or entire commands. It's a shame to see senior developer typing 40 characters without a second thought.

In this post, I'm going to show you killer git feature that sadly many developers overlook. That's git aliases. If you know it already, bear with me because I will share with you my secret 47 aliases that I can't imagine programming without.

If you use git a lot via command line and you probably already know what git aliases are.

If you use any GUI tool instead of the terminal to run git commands, well, it's possible that after you get familiar with git aliases, you will switch your git workflow entirely to the terminal.

Git aliases are a simple but very effective way to increase our productivity while using git.

If you are new to git aliases, let me give you a brief introduction.

For example, if you want to display the repository log as a nice colored tree, you will type something like this.

```bash
git log --graph --date=relative --pretty=tformat:'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%an %ad)%Creset'
```

If you have an alias, you can just type `git ls` to get the same effect.

This also relates to other commands. You can literally shortcut any custom git command you want.

What I really like about git aliases is that you can use alias inside alias like for example here:

```gitconfig
assumed = "!git ls-files -v | grep ^h | cut -c 3-"
unassumeall = "!git assumed | xargs git update-index --no-assume-unchanged"
```

You can find the entire list of 47 the most handy git aliases with the descriptions below:

```gitconfig
[alias]
  # list all aliases
  la = "!git config -l | grep alias | cut -c 7-"
  # log as graph tree
  ls = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an>%Creset' --abbrev-commit --all --branches
  # formated log with stats
  ll = log --pretty=format:'* %Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an>%Creset' --decorate --numstat --all --branches
  # log as series of patches
  fl = log -p
  # grep over the log and return commit and files
  fi = log --all --pretty=\"format:%Cgreen%H %Cblue%s%Creset\" --name-status --grep
  # formated, colored reflog
  rl = reflog --pretty=format:\"%Cred%h%Creset %C(auto)%gd%Creset %C(auto)%gs%C(reset) %C(green)(%cr)%C(reset) %C(bold blue)&lt;%an>%Creset\" --abbrev-commit
  # add all files to index and stage
  a = add --all
  # add all file to index and stage with patch mode
  ap = add --all -p
  # show diff of the given revision
  dr  = "!f() { git diff "$1"^.."$1"; }; f "
  # find file path in code base
  f = "!git ls-files | grep -i "
  # search code base for string
  gr = grep -Ii
  # amend last commit
  cia = commit --amend --reuse-message=HEAD --edit -v -q
  # commit
  ci = commit -v -q
  # assume unchanded for single file
  assume = update-index --assume-unchanged
  # unassume unchanded for single file
  unassume = update-index --no-assume-unchanged
  # list all assume unchanged files
  assumed = "!git ls-files -v | grep ^h | cut -c 3-"
  # unassume all assume unchanged files
  unassumeall = "!git assumed | xargs git update-index --no-assume-unchanged"
  # show last tag
  lt = describe --tags --abbrev=0
  re = remote
  rev = remote -v
  rp = replace --format=long
  pl = pull
  ps = push
  pst = push --tags
  cp = cherry-pick
  st = status -s
  fe = fetch
  fea = fetch -a
  ci = commit
  co = checkout
  br = branch
  brr = branch -r
  di = diff
  diff = diff
  dc = diff --cached HEAD^
  r = reset
  r1 = reset HEAD^
  r2 = reset HEAD^^
  ss = stash
  # list all stashes in nice colo format
  sl = stash list --pretty=format:\"%C(red)%h%C(reset) - %C(dim yellow)(%C(bold magenta)%gd%C(dim yellow))%C(reset) %&lt;(70,trunc)%s %C(green)(%cr) %C(bold blue)&lt;%an>%C(reset)\"
  sd = stash show -p
  mt = mergetool
  dt = difftool
  sub = submodule
  # update all modules to most recent versions
  subu = submodule update --recursive --remote --merge
  # find parent branch for current branch
  parent = "!git show-branch | grep '*' | grep -v \"$(git rev-parse --abbrev-ref HEAD)\" | head -n1 | sed 's/.*\\[\\(.*\\)\\].*/\\1/' | sed 's/[\\^~].*//' #"
  # show details of last commit
  sh = show
```

You can copy and paste them to your `.gitconfig`, but what I recommend instead is go through this list and copy and paste only the ones that you found useful, or you think that they will be handy.

Try to use some of them afterward, but careful because some of them are destructive. You can also change the shortcuts for something more convenient if you prefer it.

## Conclusion

So here it is, the list of 47 git aliases that I found every web developer must-have to use git in a productive way.

I hope they will increase your productivity while working in the console, and if you were using any GUI tool maybe, these shortcuts would replace it as well.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

If you know any other aliases that you often use, let me know in the comment below.

Stay focused!
