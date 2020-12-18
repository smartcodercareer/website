---
title: Singleton Design Pattern Python for Web Developers
date: 2020-11-30T23:29:19Z
publishDate: 2020-11-30
lastmod: 2020-01-01
authors: ["Adam Faryna"]
images: ["singleton-design-pattern-python-for-web-developers.jpg"]
series: []
tags: ["Design Pattern", "Python", "Python3"]
audio: []
videos: []
draft: false
---

In this article, you will learn the most popular and the simplest design pattern that every web developer and every software developer, in general, should know about. This design pattern is Singleton.

You will not only learn how and when to use Singleton but also when not to use it.

If you are new to design patterns learning the Singleton is a good place to start.

If you are looking for a good introduction to design patterns, check out the article [What is a Design Pattern](/posts/what-is-a-design-pattern).

## What is the Singleton?

Singleton is a creational design pattern, that helps us make sure that our application has no more than one instance of a specific class.

That's very handy when we want to use the same object across the application, and when we need to have an easy access to it in any place in the code.

By keeping and reusing only one instance of the class, we reduce the application load time, memory consumption, code readability, and maintainability.

Thanks to this pattern, we also don't have to think about how we can access the instance. The solution to this problem is already build-in the design pattern.

## Creating Singleton in Python

Let's implement Singleton for Logger object. This is the most popular scenario when the Singleton pattern is used.

The example implementation can look like this.

```python
class Logger:
    _instance = None

    def __init__(self):
        if (Logger._instance == None):
            Logger._instance = self
        else:
            raise Exception(self.__class__.__name__ + " is a singleton!")

    @staticmethod
    def instance():
        if (Logger._instance == None):
            Logger._instance = Logger()
        return Logger._instance
```

The structure of the Logger `__init__` function keeps from creating more than one instance of the class. If we try to create subsequent Logger objects, the `__init__` function will raise an exception.

The structure of `__init__` function guarantees that the number of created instances will be limited to one, but our class still needs an easy way to access created instance whenever we will need it.

That's why we introduced `instance` static method. We use it to retrieve Logger instance object whenever we want it.

As you may notice, the `instance` method creates a new object only when it doesn't already exist. That way of accessing static or instance property is called [Lazy Initialization](/posts/lazy-initialization-design-pattern-python-for-web-developers/) and it's another popular design pattern.

While working with Singleton class, we may not create instances of the class by hand. Instead, we use the provided `instance` static method. When retrieving the object via the `instance` method, we don't have to think if the object was already created, because it's created on-fly when it's needed. That makes Singleton design pattern very convenient to use.

## Where can we use Singleton?

Singleton is very simple and easy to use pattern. Sadly, because of that, many unexperienced developers overuse it by trying to adapt many not suitable classes to be Singleton. It makes codebase confusing, and it's a very bad coding practice.

There is only one situation when you should consider using Singleton pattern. It may be suitable only when you will need at most one instance of the class across the application, and only if you will need to have access to it in any place in the code.

If the scenario that you are considering doesn't match these two requirements, you definitely not need a Singleton.

## Conclusion

Singleton is one of the most widely known design patterns in the software development world. Every programming language that supports object-oriented programming let us to create Singletons in one way or the other.

Learning Singleton is also a good way to start learning design patterns, and every professional software developer is expected to know at least basic ones.

If you have any questions related to this article, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
