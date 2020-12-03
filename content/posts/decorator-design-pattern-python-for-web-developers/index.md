---
title: "Decorator Design Pattern Python for Web Developers"
date: 2020-04-23T22:58:03Z
publishDate: "2020-01-01"
lastmod: "2020-01-01"
author: Adam Faryna
image: Decorator-Design-Pattern-Python-for-Web-Developers.jpg
images: []
series: []
tags: ["Design Pattern", "Python", "Python3"]
audio: []
videos: []
draft: false
---

There are many tutorials and articles online about Decorator design pattern, so why I do another one? The main reason is that many people who make these tutorials don't have much programming experience. So they provide inaccurate or misleading information.

In this tutorial, you will not only learn how Decorator pattern works in Python but also where to use it and how to use it. We will also do some coding.

If you are new to design patterns read [What is Design Pattern](/posts/what-is-a-design-pattern/) first.

## What is the Decorator?

In a nutshell, Python decorator is a function that wraps another function and controls its execution. We do that to enhance the functionality of the wrapped function, without changing implementation of that function.

Decorator is a structural design pattern, because it simplify the design of relationships between entities.

## Creating Decorator in Python

Let's first create a function that we want to decorate.

```python
def house():
    print("house")
```

And the decorator function itself:

```python
def with_garden(f):
    def with_garden_nested():
        f()
        print("with garden")
    return with_garden_nested
```

The `with_garden` function takes a function as a parameter. The `with_garden_nested` is a nested function inside of `with_garden`. We then use the Python feature called "closure" to refer to the outer function parameter `f` and call it. The concept is that when we use this decorator on the `home` function, it will replace the original function with `with_garden_nested` function.

So let's do that:

```python
house = with_garden(house)
```

That's how we decorate function with decorator.

When we call `house` function, you will see that the `house` was called first, and then our "with garden" feature will be added. That's precisely what we have in `with_garden_nested` function.

We can also do the same using special Python decorator syntax, which looks like this:

```python
@with_garden
def house():
    print('house')
```

Doing it this way is just syntactic sugar because both methods work the same. But using the syntax above is the preferred method because it's much easier too read.

Every decorator function is also a Higher Order Function. Higher-Order Function is the function that acts on or return other functions. And that is exactly what our `with_garden` function does.

Let's run this program. Here is the entire code for this example:

```python
def house():
    print("house")


def with_garden(f):
    def with_garden_nested():
        f()
        print("with garden")
    return with_garden_nested


@with_garden
def house():
    print('house')


house()
```

The output is:

```bash
house with garden
```

As you see, it prints "house" first and the "with garden" afterward.

## Applying multiple decorators to a single function

We can apply as many decorators as we want to a single function, or even apply the same decorator multiple times.

Let create two more decorators.

```python
def with_patio(f):
    def with_patio_nested():
        f()
        print("with patio")
    return with_patio_nested


def with_garage(f):
    def with_garage_nested():
        f()
        print("with garage")
    return with_garage_nested
```

And let's apply them on our house function, using decorator notation:

```python
@with_garden
@with_patio
@with_garage
@with_garage
def house():
    print("house")
```

or the same using functional programming:

```
house = with_garage(with_garage(with_patio(with_garden(house))))
```

As you can see, the decorator syntax notation is much easier to read than functional programming notation.

Here is the entire code for this example:

```python
def with_garden(f):
    def with_garden_nested():
        f()
        print("with garden")
    return with_garden_nested


def with_patio(f):
    def with_patio_nested():
        f()
        print("with patio")
    return with_patio_nested


def with_garage(f):
    def with_garage_nested():
        f()
        print("with garage")
    return with_garage_nested


@with_garden
@with_patio
@with_garage
def house():
    print("house")


house()
```

The output is:

```bash
house
with garage
with garage
with patio
with garden
```

As expected, the house is executed first and then every decorator in reverse order.

## Parametrizing decorators

Parametrization is a very powerful feature of the decorators.

Let's assume that the garden can take `size` as a parameter, and the default size if not provided is `regular`. To do it we have to modify `with_garden` decorator function:

```python
def with_garden(size="regular"):
    def with_garden_nested_1(f):
        def with_garden_nested_2():
            f()
            print("with " + size + " garden")
        return with_garden_nested_2
    return with_garden_nested_1
```

To make it work, we had to add another nested function that wraps our previous decorator function.

Let's apply it to our `house` function, together with other decorators using decorator notation:

```python
@with_garden("big")
@with_patio
@with_garage
def house():
    print("house")
```

or the same with functional programming:

```python
house = with_garage(with_patio(with_garden("big")(house)))
```

Here is the entire code for this example:

```python
def with_garden(size="regular"):
    def with_garden_nested_1(f):
        def with_garden_nested_2():
            f()
            print("with " + size + " garden")
        return with_garden_nested_2
    return with_garden_nested_1


def with_patio(f):
    def with_patio_nested():
        f()
        print("with patio")
    return with_patio_nested


def with_garage(f):
    def with_garage_nested():
        f()
        print("with garage")
    return with_garage_nested


@with_garden("big")
@with_patio
@with_garage
def house():
    print("house")


house()
```

The output of this program is:

```bash
house
with garage
with patio
with big garden
```

The output is printed as expected, starting house, garage, patio, and finishing with a big garden.

## Where can we use decorators?

Now, you know how to create decorators in Python. Let's describe a couple of common scenarios when they can be used. We will use only decorator syntax in the following scenarios.

### Disable function

We can implement decorator that disables wrapped function.

The implementation may look like this:

```python
def disable_function(f):
    def disable_function_nested():
        print("function " + f.name + " is disabled!")
        return disable_function_nested


@disable_function
def func():
    print("hello func")


func()
```

The output of this program is:

```bash
function func is disabled!
```

What this decorator does is simply prevent the original function from executing, and showing the message instead.

### Logger

One of the common scenarios is to log the invocation of certain function calls.

The example implementation can look like this:

```python
def logger(f):
    def logger_nested():
        print("calling " + f.name)
        return_val = f()
        print(f.name + " was called")
        return return_val
    return logger_nested


@logger
def func():
    print("func")


func()
```

The output of this program is:

```python
calling func
func
func was called
```

### Access security layer

This example is much more complex. We will use a decorator function to provide additional security access layer to our wrapped function.

First, let's create the `User` class and `UserRole` enumeration.

```python
from enum import IntEnum


class UserRole(IntEnum):
    READER = 1
    WRITER = 2


class User:
    def __init__(self, name, role=UserRole.READER):
        self.name = name
        self.role = role
```

Now, let's create our security check decorator function.

```python
def secured(role):
    def secured_nested_1(f):
        def secured_nested_2(self, user):
            if (role > user.role):
                print(user.name + " " + f.name + " access denied")
            else:
                f(self, user)
        return secured_nested_2
    return secured_nested_1
```

Now, let's create a Blog class, which two functions with different access roles.

```python
class Blog:
    @secured(UserRole.READER)
    def read_post(self, user):
        print(user.name + " read post")

    @secured(UserRole.WRITER)
    def write_post(self, user):
        print(user.name + " insert post")
```

We want to secure two functions with different levels of security - `reading blog posts` available for readers and `writing blog post` available only for writers.

And finally, let's create both the `Blog` and the `User` instances and invoke blog methods.

```python
blog = Blog()
kevin = User("Kevin")

blog.read_post(kevin)
blog.write_post(kevin)
```

Here is the entire code for this example:

```python
from enum import IntEnum


class UserRole(IntEnum):
    READER = 1
    WRITER = 2


class User:
  def __init__(self, name, role=UserRole.READER):
    self.name = name
    self.role = role


def secured(role):
    def secured_nested_1(f):
        def secured_nested_2(self, user):
            if (role > user.role):
                print(user.name + " " + f.__name__ + " access denied")
            else:
                f(self, user)
        return secured_nested_2
    return secured_nested_1


class Blog:
    @secured(UserRole.READER)
    def read_post(self, user):
        print(user.name + " read post")

    @secured(UserRole.WRITER)
    def write_post(self, user):
        print(user.name + " insert post")


blog = Blog()
kevin = User("Kevin")

blog.read_post(kevin)
blog.write_post(kevin)
```

When we run this program it will produce the following output:

```bash
Kevin write_blog_post access denied
Kevin read post
```

As we expected, it says Kevin, as a reader, is allowed to read the blog post but is not allowed to write one.

## Other scenarios

The Decorator design pattern is often used in popular frameworks like Django and Flask. You will use decorators a lot while working with these frameworks and modern Python.

## Conclusion

The Decorator is a very practical, widely used design pattern. As professional Python developers, we probably not create new decorators every day, but we use them very often.

Because of that, it's essential to understand the pattern behind these functions and be able to build a decorator function when it is needed.

If you have any questions related to this article, leave the comment below.

See you next time, and as always, stay focused!
