---
title: "What Is a Design Pattern"
date: 2020-04-23T13:05:18Z
publishDate: "2020-01-01"
lastmod: "2020-01-01"
author: Adam Faryna
featuredImage: What-is-a-Design-Pattern.jpg
images: []
series: []
tags: ["Design Pattern"]
audio: []
videos: []
draft: false
---

Design patterns are the concept that is often overlooked by the beginner software developers, but what more alarming, by senior developers as well.

In this article, I'm going to demystify what design patterns are and what are the benefits of using them.

So if you are new to design patterns, you can use this post as an introduction.

## What are design patterns?

Design patterns are keywords used by experienced developers to communicate the solutions to the problems.

They are like templates, ways of structuring the code in a way that is proven to solve a particular group of problems successfully.

They are like small and big elements that every application uses behind the scene.

## Benefits of design patterns

Here are the most significant benefits of using design patterns.

### Design patterns as communication language of PROs

Experienced developers know design patterns…

At least some of them…

At least they should.

When you speak with your colegues, you can make an analogy to specific design patterns to better describe your point. That way, it's far easier for your colleagues to imagine the solution you have on your mind.

### Design patterns as solutions to common problems

Design patterns are abstractions that describe a common solution to a particular group of problems.

For example, instead of thinking how to solve that specific challenge, you can start by thinking about design patterns that are often used to solve these kinds of problems.

The more design patterns you know, and the better you understand them, the bigger chances are you will get inspired by one of them and find the optimal solution.

### Design patterns as time savers

While using a design pattern as a problem solver, you save time because pattern implementations are well known.

To find example implementation, you can simply ask Google by typing the pattern name and programming language, for example, "singleton python". That will give you example implementations of [Singleton](/posts/singleton-design-pattern-python-for-web-developers/) pattern written in Python.

### Design patterns reduce the risk of making errors

Your code is also less likely to have bugs because you don't design the solution from scratch. Instead, you choose a solution that is proven and tested. But, it's always a good idea to test the implementation, with automated tests.

## Type of design patterns

There are many types of design patterns suitable for different problem categories.

### Creational patterns

These patterns are used to deal with object creation tasks.

The common example is to use the Singleton pattern to make sure there is no more than one instance of the object in the application.

The most common creational patterns are [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern), [Abstract Factory](/posts/abstract-factory-design-pattern-python-for-web-developers/), [Singleton](/posts/singleton-design-pattern-python-for-web-developers/), [Builder](https://en.wikipedia.org/wiki/Builder_pattern), [Prototype](https://en.wikipedia.org/wiki/Prototype_pattern), [Lazy Initialization](/posts/lazy-initialization-design-pattern-python-for-web-developers/).

### Structural patterns

Structural patterns describe how to combine objects and classes to assemble new structures.

For example, you can use the Adapter pattern to adapt class representing file to be used as a data source for database processing library.

The most common structural patterns are: [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern), [Decorator](http://decorator-design-pattern-python-for-web-developers), [Facade](https://en.wikipedia.org/wiki/Facade_pattern), [Composite](https://en.wikipedia.org/wiki/Composite_pattern), [Proxy](https://en.wikipedia.org/wiki/Proxy_pattern), [Delegation](https://en.wikipedia.org/wiki/Delegation_pattern).

### Behavioral patterns

These kinds of patterns describe ways to implement interactions between different objects.

For example, you can implement multiple algorithms for list sorting using the Strategy pattern - one strategy per algorithm.

The most common behavioral patterns are: [Chain of Responsibility](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern), [Command](https://en.wikipedia.org/wiki/Command_pattern), [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern), [Observer](https://en.wikipedia.org/wiki/Observer_pattern), [State](https://en.wikipedia.org/wiki/State_pattern), [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern), [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern).

### Architectural patterns

These kinds of patterns are used for solving problems on the architecture level.

For example, the common Model-View-Controller (shortly MVC) pattern is very often used to create applications where Model objects and Views are separated, and don't know about each other. The Controller is the component that uses Models and Views, while running application logic.

The most common architectural patterns are: [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), [Client-Server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), [DAO](https://en.wikipedia.org/wiki/Data_access_object), [DTO](https://en.wikipedia.org/wiki/Data_transfer_object), [DDD](https://en.wikipedia.org/wiki/Domain-driven_design), [Interceptor](https://en.wikipedia.org/wiki/Interceptor_pattern), [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control).

### Functional patterns

These design patterns are used in functional programming.

The most common functional patterns are: [Closure](https://en.wikipedia.org/wiki/Closure_(computer_programming)), [Generator](https://en.wikipedia.org/wiki/Generator_(computer_programming)), [Currying](https://en.wikipedia.org/wiki/Currying), [Function Composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science)).

### Concurrency patterns

These design patterns are used to solve problems related to concurrent access to the application.

For example, you can use the Thread-Local Storage pattern to create separate data storage for every started thread.

The most common concurrency patterns are: [Immutable Object](https://en.wikipedia.org/wiki/Immutable_object), [Thread-Local Storage](https://en.wikipedia.org/wiki/Thread-local_storage), [Read-Write Lock](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock).

## Should I learn design patterns?

Well, if you want to be perceived as an expert programmer, then YES, 100%!

You should know at least some of the most common design patterns.

There are not many things more disappointing in the coding world than the expert developer that doesn't have a clue how common design pattern works.

So if you are new to the design pattern world, please do yourself a favor and learn at least the most common ones like [Singleton](/posts/singleton-design-pattern-python-for-web-developers/), [Decorator](/posts/decorator-design-pattern-python-for-web-developers/), [Prototype](https://en.wikipedia.org/wiki/Prototype_pattern), [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern), [Abstract Factory](/posts/abstract-factory-design-pattern-python-for-web-developers/), [MVP](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter), [Lazy Initialization](/posts/lazy-initialization-design-pattern-python-for-web-developers/), [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern), [Builder](https://en.wikipedia.org/wiki/Builder_pattern), and [Observer](https://en.wikipedia.org/wiki/Observer_pattern).

Yes, this list has more than one item, but those patterns are the ones every no beginner software developer should know.

Learning design patterns will bring you to the world of new ways of creative problem-solving. If you would grasp how these patterns work, you will become a much better developer.

## Conclusion

You can't know too many design patterns, but you can know too few.

Design patterns are bread and butter for every professional developer. Most of the programming problems are solved by using one or multiple of them.

At some point in our professional career, we think in design patterns first and write custom code as a fallback.

If you have any questions related to this post, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
