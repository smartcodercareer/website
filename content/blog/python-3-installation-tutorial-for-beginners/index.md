---
title: Python 3 Installation Tutorial for Beginners
date: 2020-06-07T21:47:50Z
publishDate: 2020-06-07T23:47:50Z
lastmod: 2020-06-07T22:47:50Z
authors: ["Adam Faryna"]
images: ["python-installation-for-beginners.jpg"]
series: []
tags: ["App Development", "Beginner", "Python", "Python3", "Tutorial", "Web Development"]
audio: []
videos: ["https://youtu.be/sd0aa3u_drI"]
draft: false
---

In this article, we will set up the entire python development environment from scratch on Windows, macOS, and Linux. So if you are using any of these and you want to have python up and running you are in the right place.

{{< youtube sd0aa3u_drI >}}

This post is part of complete FREE [Python Developer Crash Course](https://youtu.be/sd0aa3u_drI) that we publish on YouTube. We publish programming learning and IT Career videos advice multiple times a week so remember to subscribe to not miss any of them.

To checkout entire course click [the link](https://youtu.be/sd0aa3u_drI).

## Table of Contents
- [Python setup on Windows](#installing-python-on-windows)
    - [Installing Visual Studio Code on Windows](#installing-visual-studio-code-on-windows)
- [Python setup on macOS](#python-setup-on-macos)
    - [Installing Python on macOS via python.org](#installing-python-via-pythonorg)
    - [Installing Python on macOS via Homebrew](#installing-python-via-homebrew)
    - [Installing Python on macOS via pyenv - the best option](#installing-python-via-pyenv---the-best-option)
    - [Visual Studio Code Installation on macOS](#visual-studio-code-installation-on-macos)
- [Python setup on Linux](#python-setup-on-linux)
    - [Installing Python on Linux via a package manager](#installing-python-via-a-package-manager)
    - [Installing Python on Linux via pyenv](#installing-python-via-pyenv)
    - [Visual Studio Code Installation on Linux](#visual-studio-code-installation-on-linux)
- [Visual Studio Code Final Setup](#visual-studio-code-final-setup)
- [Conclusion](#conclusion)

After installing python we will install and configure [Visual Studio Code](https://code.visualstudio.com/)</a>. You may ask...

Why Visual Studio Code?

Visual Studio Code is the easiest to use and most feature-rich code editor available and it's free.

I know maybe you heard that there are better options like VIM or Emacs, and there is a lot of truth in it. But there is a steep learning curve to learn them and takes a lot of time to get productive with them.

While Visual Studio Code gives us all the features we need without spending hours on installing plugins and extra configuration. Everything works almost out of the box.

Ok, let's get started with installing Python on Windows.

## Installing Python on Windows {#installing-python-on-windows}

The recommended way to install Python on Windows is to go to python.org and download the installation bundle from there. So let's do it.

On python.org, hover over Downloads and click Windows. On the next page, we look for the executable installer and click on that.

That will open the instalation window. What's important here is to check "Add Python 3.8 to PATH". That will make python available in the Command Prompt, just by typing python, without typing the entire path to the python interpreter.

Next click installs now.

After installation finish. We will see this window.

From now on we should be able to use python.

## Installing Visual Studio Code on Windows {#installing-visual-studio-code-on-windows}

Installing Visual Studio Code on Windows is very easy, just head over to [code.visualstudio.com](https://code.visualstudio.com/) and download the installation package. So let's do it.

Make sure you check "add to path" which will let you open python files directly from the command prompt.

And check "Register code as an editor for supported file types", as well.

Other options are optional.

After installation, let's check if the Visual Studio Code works as expected.

At this point, Visual Studio Code should work well.

Any further configuration steps will be the same for all the platforms and they will be covered in the last section of this tutorial. You can jump there directly if you want.

## Python setup on macOS {#python-setup-on-macos}

To install Python on macOS, we have a couple of options.

### Installing Python on macOS via python.org {#installing-python-via-pythonorg}

The first way is to go to the python.org and download the installation package from there, but don't do that. It's the worst way to install Python on Mac.

The problem with installing Python that way is that. You will not be able to manage multiple versions of Python and it will be hard to do an update when the new version will show up.

### Installing Python on macOS via Homebrew {#installing-python-via-homebrew}

What you can do instead is to use [Homebrew](https://brew.sh/). If you don't know this tool yet, Homebrew is an unofficial package manager for Mac.

If you haven't installed it yet head over to [brew.sh](https://brew.sh/). And follow the instruction on the [page](https://brew.sh/).

When you have Homebrew installed you can simply type in the Terminal "brew install python" to install Python. But don't do that.

It's actually not the best way to install Python on Mac.

It's still better to install python this way rather than using python.org. Because it would be fairly easy to switch between different python versions and update python later on.

And it's great because we never know when we will need to switch to different Python versions.

But there is an even better way.

### Installing Python on macOS via pyenv - the best option {#installing-python-via-pyenv---the-best-option}

The best way to install Python on Mac is to use a tool called pyenv, which stands for Python version manager.

It can manage multiple Python versions and make it easy to switch, update or delete them if necessary.

It also lets us choose Python version per project and it installs all the files in the user directory so it will not make a mess in the file system. Which is perfect.

To install it we will use Homebrew. Just open the terminal, by typing Terminal in the spotlight and type "brew install pyenv".

Now before we start using it we need to initiate it. We do that by running `pyenv init -` in the terminal.

We will actually need to run it every time we open the new terminal, so to automate it add this code to your `~/.bashrc` or `~/.bash_profile` or another config file for the shell you are using and type those 3 lines.

```bash
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi
```

After that every time you open a new terminal the pyenv will be automatically initiated.

You can install the version of python you want for example `pyenv install 3.8.2` and make it available everywhere type `pyenv global 3.8.2`.

Let's check which version we are using after that.

As you see, the python command calls the Python version we just installed. Great!

You can see the full list of available pyenv options by just typing "pyenv" in the Terminal without any parameters.

Next, we will install the Visual Studio Code.

## Visual Studio Code Installation on macOS {#visual-studio-code-installation-on-macos}

We install Visual Studio Code on Mac in the same way we do it on Windows. Just head over to the [code.visualstudio.com](https://code.visualstudio.com/) and download related package and install it.

Any further configuration steps will be the same for all the platforms so they will be covered in the last part of the tutorial. You can jump there directly if you want.

## Python setup on Linux {#python-setup-on-linux}

### Installing Python on Linux via a package manager {#installing-python-via-a-package-manager}

To install Python on Linux you can use the build-in package manager provided with your Linux.

But you will stumble upon similar problems as we had with macOS and Homebrew.

It will be hard to manage multiple versions of Python at the same time. So installing Python via package manager is not the best way to install Python on Linux.

What you can do instead is to install pyenv Python versions manager as we did for macOS. But we will do it in a bit different way.

## Installing Python on Linux via pyenv {#installing-python-via-pyenv}

To install [pyenv](https://github.com/pyenv/pyenv) we will use [pyenv-installer](https://github.com/pyenv/pyenv-installer). Just head over to the [project page](https://github.com/pyenv/pyenv-installer) and follow the installation instructions.

After that, you will end up with `pyenv` installed on you Linux.

For the `pyenv` configuration check the `pyenv` section for macOS in this tutorial.

## Visual Studio Code Installation on Linux {#visual-studio-code-installation-on-linux}

The recommended way of installing Visual Studio Code on Linux is via build-in package manager. Using a package manager is always preferred way because it's easy to upgrade or uninstall them later.

If you use Debian like distribution just follow the guidance provided on this website [wiki.debian.org/VisualStudioCode](https://wiki.debian.org/VisualStudioCode).

Alternatively, you can just go to the [Visual Studio Code page](https://code.visualstudio.com/) and download the installation bundle from there.

## Visual Studio Code Final Setup {#visual-studio-code-final-setup}

We can now do the final configuration of the Visual Studio Code and check if everything is working.

From now on I will work only on Windows, but all the steps are the same for any other platform.

By default VSC doesn't support Python, we have to install additional plugin.

Let's click on the Extensions and type 'Python'. It will show plenty of results but we are interested only in the plugin provided by Microsoft. Here it is.

You can check the list of all the provided features.

Let's install it.

It's everything you need to get started.

From this moment on when we will work with any python file, the editor will recognize it automatically.

## Conclusion {#conclusion}

Congratulations we just reach the finish line of this tutorial and you should have python development environment up and running.

If you, want to learn Python fast check out my complete FREE [Python Developer Crash Course](https://www.youtube.com/watch?v=Jer5c6qqjek&amp;list=PLwd-mX7gkBYvNTs-NDF90c9AsnqoH1sR0) on our [YouTube channel](https://www.youtube.com/channel/UCP9kyhK4ET0lWapEGtlkwAw).
