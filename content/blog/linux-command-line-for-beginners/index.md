---
title: Linux Command Line for Beginners
date: 2020-04-17T09:53:00Z
publishDate: 2020-04-17T10:53:00Z
lastmod: 2020-04-17T09:55:00Z
authors: ["Adam Faryna"]
images: ["linux-command-line-for-beginners.jpg"]
series: []
tags: ["Beginner", "Command Line", "Git", "Programming"]
audio: []
videos: []
draft: false
---

Command line is one of these things that officially nobody expects you to know, but if you don't know if you will struggle hard in your entire IT career.

If you do anything with Linux and you don't know the command line, it's about time to change it.

In this post, you will learn the basics of the Linux command line, focusing only on the essential parts that you will be using 90% of the time.

By the way, all the information in this post relates to the terminal in Linux and macOS. I don't cover the Windows command line here, which used to be significantly different.

## Command Line, Terminal, Console

First, let's clear the meaning of this word because, as you probably have noticed, some people say command line, terminal, or console interchangeably.

A terminal runs in a graphical environment on its own window.

The console mode is available when we didn't start a graphical environment, or we boot our computer is one of recovery or emergency modes.

In practice, there is no much of the difference if we run the command line in the console or terminal. This is probably the biggest reason why people use phrases command line, terminal, and console as aliases. To make things simpler, I will do exactly the same in this post. So don't get confused when I use any of these three. Let's assume they all mean the same.

Are you wondering if the command line is something that you should learn?

Let's address that as well.

## Why to learn the command line?

If you already started learning to code, you probably noticed that almost every tutorial you can find, relate to some console commands that you need to invoke before you would be able to create your app.

Even after that, you pass that stage; you will have to run more commands to run tests, build the project, and deploy the changes to the server. Everything happens via the command line.

The truth is, everyone who is building his career as a programmer today needs to know at least the basics of the Linux command line. Without it, we just can't do our work.

To give you an example. Let say you want to set up a Python development environment. You will need to install Python from the command line. To install additional Python packages, you will need to use the command line tool called pip.

The same is true for projects build in Node.js, React, Angular, Ruby, or literally anything else.

Sometimes you can be lucky, and you will find a gui wrapper for common terminal tool. Still, most of the time, these wrappers have limited functionalities, and they are not reliable for professional work.

Command line is the king, and it's just very, very painful to don't know the basics.

But I have good news for you. In this post, you will learn everything you need to know to start using command line tools, straight away.

I will not exhaust the entire topic because it would take plenty of hours to do so. And it just doesn't make sense to duplicate all the information that is already available over the internet.

You can always deepen your knowledge later as much as you like, it's up to you.

## How to open command line?

If you are on macOS to open command line press Command+space and type 'terminal', then click on the first result that will appear.

On the Linux, it all depends on the Linux distribution and graphical environment you are using if you can't find any related icon on the screen, ask Google for help.

Now, let's get started with the first command.

## Manuals

Manuals are awesome! They let you get the list and descriptions of all the features of the command you are interested in. When you start working with the terminal, you will love them.

To open the manual of specific command just type:

```bash
man
```

For example you can type `man mkdir` to open manual for `mkdir` command.

You can even run

```bash
man man
```

To get the manual about using the `man` command.

When you start working with the Linux command line, you will quickly notice that most of the commands have manuals available. You don't have to ask Google how to use particular command and what parameters are available, and you can do that without leaving console.

If you use a very minimalistic Linux environment, it's possible that the manuals are not available. That means they aren't installed.

Very often, we run as minimal Linux instance as possible, to save precious resources for more critical tasks. In that case, many of the optional features are stripped off. But if you need any of them, you can install them at any time. Just type in Google "X install man" where X is the name of your Linux distribution, for example, Debian or Fedora, and follow the instructions.

## Understanding file path

In the Linux command line there are two ways of targeting the file or directory - by providing an absolute or relative path.

The absolute path is the path that starts from the lowest directory level, which is `/`. The relative path starts from where we are now.

The move one folder level down, we use two dots `..`.

The single dot character `.` represents the current working directory.

There is also a special character `~` which means the current user home directory.

## Getting current directory path

If you work a lot in the terminal, you may lose orientation in which folder you are. It's a good idea to know in what place we are before we start changing things.

Your terminal prompt may show you already your working directory, or it shows you the last folder in the path - to keep it short. But if that's not the case you can always get the current directory path by running:

```bash
pwd
```

The output may look like this.

```bash
/usr/local/bin
```

This command will return the complete working directory path, so you will know exactly where you are.

For more information about the usage of the `pwd` command type `man pwd`.

## Moving around

To move from one folder to another, we use the single command:

```bash
cd [path-to-directory]
```

As an optional parameter, you can put the absolute or relative path to the directory you want to switch to.

Another way of using this command is by calling it without giving it any parameters. That is equivalent to running `cd ~`, it will set the current working directory to the current user home directory.

If you run:

```bash
cd ..
```

That command will set the current working directory to the directory one level lower in the current path. For example, if you are at `/usr/local/bin` after running this command, you will land at `/usr/local`.

For more information about the usage of the `cd` command type `man cd`.

## Listing directory content

Listing content of the directory is very handy, and you can do it by running:

```bash
ls [path-to-directory]
```

When you just run this command without any parameters, it will list the content of the current directory.

Have you noticed something? That's right! The Linux nerds make it very easy for us to use the terminal. The main reason why they did that is, they use it as well, for many hours a day, so they want it to be easy too.

You can also pass the path to the directory you want the content to list on the screen.

There is a chance that returned folders and files will look all the same, so it's impossible to differentiate folders from regular files. To fix that, you can add additional parameter `-G` (for macOS) or `--color=auto` (for Linux) to display colored output. It makes the output much more readable.

```bash
ls --color=auto
```

If you prefer to have colored output every single time you run `ls` command, run this command

```bash
echo "alias ls='ls --color=auto'" >> ~/.bash_profile &amp;&amp; source ~/.bash_profile
```

That will set an alias in your user .bash_profile configuration file for your user that will make every invocation of `ls` include parameter `--color=auto` as well. It will also read the configuration file so the alias will be available immediately.

For more information about the usage of the `ls` command type `man ls`.

## Creating a folder

To create directory call:

```bash
mkdir [-p] directory-name
```

That command will create `directory-name` in the current folder.

The most commonly used additional parameter is `-p`. It will let you pass not only the folder name but the entire path for the new folder. It will create a target folder and all the intermediate folders needed to make the path valid.

For more information about the usage of the `mkdir` command type `man mkdir`.

## Moving file or folder

<br>To move files and folders, you call the command:

```bash
mv target-file target-destination
```

That command will move `target-file` from the current folder to `target-destination`.

For more information about the usage of the `mv` command type `man mv`.

## Coping file or folder

To copy files from one location to another, you use the command:

```bash
cp [-r] target-file target-destination
```

You can also use this command to copy folders, but you have to pass additional parameter `-r`.

For more information about the usage of the `cp` command type `man cp`.

## Searching for file

From time to time, we need to find a file or folder with particular characteristics, like, for example, a specific name or containing phrase in its name.

For this task, we can use the powerful `find` command. This command has very complex and can be used in many ways. You can find all of the ways to use this command by reading it's by manual. To display manual for `find` command, type:

```bash
man find
```

For more information about the usage of the `find` command type `man find`.

## Searching for files that contain the phrase

Another common task is searching for the file containing a specific phrase. It's effortless to do it using the Linux command line, just run the command:

```bash
grep phrase target-file
```

That command will return the line of text from the `target-file` that contains the searched phrase.

You can also run grep to search for a phrase through all the files available in directory and subdirectories. You do it by running:

```bash
grep -H -R phrase target-folder
```

That makes grep run recursively in `target-folder` returning the lines of text that contain the phrase and name of the files in all the files in `target-folder`, and it's subfolders.

For more information about the usage of the `grep` command type `man grep`.

## Using git in terminal

Git is purely the terminal tool.

If you worked with git without using the terminal, you have been using either gui wrapper or code editor plugin.

That's what most of the developers do though their careers. They are afraid of the terminal, and they don't want to make an exception for the git. So they use the wrappers.

What they miss are advanced features that are not available outside console or hard to use in the wrappers. They probably don't know how the git really works, and what operations are necessary to be done to perform common tasks.

Git run from the terminal makes it very clear what we do and why we do it.

Git is a reason enough to learn the basics of the command line.

Give it a shot. Soon you will see how convenient and easy it is, and maybe as many others did, you will switch any git related task to be done in the terminal.

For more information about the usage of the `git` command type `man git`.

### Initialize git repository

When we starting new project, before we can start staging, pushing, pulling, merging and all other things we need to initialize git repotitory.

The simple command for it is:

```bash
git init
```

After that you are free to run any the git command.

### Cloning git repository

If you want to work with some existing repository you found online - for example on the Github. You would need to clone this repository to your local workspace. To do that run:

```bash
git clone [optional-folder-name]
```

This command will create new folder, named after project name, and copy it's concent into that folder.

If the project has any modules you can clone the project and all of it's modules at once by running instead:

```bash
git clone [optional-folder-name] --recurse-submodules --remote-submodules
```

This command will also update the modules to it's latest versions (the `--remote-submodules` parameter).

In this tutorial I will give you only the basics of git in command line. This topics definitely deserves separate article, so I will craft one for your convenience.

## Subtle differences between command lines

Every Linux and macOS system has some form of the command line.

We can say that Linux reached the level of maturity to the point; its command line didn't change much in the last years.

MacOS tends to be more dynamic, and the terminal may vary between one major version to another.

I created a shortlist of most common differences so that you will avoid surprises along the way.

Here are the most differences between Linux and macOS command lines.

If you switch from Linux to macOS terminal fairly often, you will probably notice even more differences than the one mentioned below. Don't get discouraged, there is always some way around or counterpart available. If you get stuck, try to ask on our Discord channel or ask Google.

### MacOS command line is more strict about parameters

Linux is very liberal when you can put command parameters. Most often, you can put them in any order you like, so if you forgot to add the parameter at the beginning, you probably still can do it at the end.

MacOS wouldn't let you do that. All the parameters have to be passed before the directory or file name you are targeting. So if you would try to glue the missing parameter at the end of the command, the command will complain that it was used in the wrong way.

### Some of the commands are different

MacOS has special commands to do things like creating new users, adding a user to the group etc.

Every Linux distribution performs these tasks, in the same way, no matter what Linux distribution you are using.

For example, to create a new user on Linux, you would call `useradd`, to do the same on macOS you need to run `dscl` or `sysadminctl -addUser` (depending on macOS version you are using).

### On macOS, some of the commands have different parameters

For example, while using popular `sed` command on Linux, you may use `-r` parameter to invoke extended regular expressions. The achieve the same effect on macOS, you use `-E` instead.

The same is true about the `ls` command we mentioned before. To have colored output on macOS you can't run `--color=auto`, because that option doesn't exist. You should use `-G` instead, to achieve similar results.

## Bonus tip

Most of the Linux distributions run Bash as the default shell. This is a tool and programming language itself. But if you are a programmer, you may want to replace it with [zsh](https://www.zsh.org/). zsh is fully compatible with Bash, and it provides many features that make the life of the programmer so much simpler.

My favorite is git projects support and files &amp; folders name autosuggestions.

You can find more about this project [here](https://www.zsh.org/).

This project will help you install additional extensions [oh-my-zsh](https://ohmyz.sh/).

## Conclusion

Congratulations, now you know the basics of using the Linux command line.

The command line is a very powerful tool, and every software developer, no matter what language he is using, is obligated to know at least the basics of it.

I hope after you read this article, the Linux command line doesn't sound cryptic for you anymore, and you will be able to perform simple tasks using the command mentioned above.

If you not only read this article but also run some of these commands on your own, big plus for you. Because you will train, you will train your muscles to remember them. If you didn't, give yourself a couple of minutes to play around with these commands now, so the last 5 minutes spent on reading this article will not be wasted.

If you don't have the command line on your computer or you are using Windows, use one of the online command lines available. You can find them by asking Google "online bash repl". Here is a good working [example](https://repl.it/languages/bash).

If you have any questions related to this post, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
