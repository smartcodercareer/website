---
title: Lazy Initialization Design Pattern Python for Web Developers
date: 2020-04-27T14:12:38Z
publishDate: 2020-04-27
lastmod: 2020-01-01
authors: ["Adam Faryna"]
image: Lazy-Initialization-Design-Pattern-Python-for-Web-Developers.jpg
images: []
series: []
tags: ["Design Pattern", "Python", "Python3"]
audio: []
videos: []
draft: false
---

In this post, you will learn what Lazy Initialization design pattern is, how to implement it using Python, when it makes sense to use it, and when it will be an overkill.

Lazy Initialization is one of the most popular design patterns, and every professional software developer no matter what languages he uses should be familiar with it, if he is serious about his career.

If you are looking for a good introduction to design patterns, check out the article [What is a Design Pattern](/posts/what-is-a-design-pattern).

## What is the Lazy Initialization design pattern?

The Lazy Initialization, also called Lazy Loading is a very simple but powerful a creational design pattern that allows us to delay initialization of the object until it is needed.

It is used to increase application performance, speed up the initialization process, and reduces resource consumption: bandwidth, database load, RAM, and CPU usage.

## Using Lazy Initialization in Python

Let's assume we have implemented an online shop where we have an object `Customer` that may have a list of orders he created. Without Lazy Loading, we would probably have an entire list of orders retrieved from the database every time we will create object `Customer`. Even if there were no orders in the customer account, we would query the database.

Even worse, if we want to get the list of every customer without caring about the orders, all the data would be fetched, and potentially multiple queries to the database would be created.

To fix this problem, we can implement model `Customer` like below:

```python
class Customer:
    def __init__(self):
        self._orders = None

    def get_orders(self):
        if self._orders is None:
            self._orders = self._load_orders()
        return self._orders

    def _load_orders(self):
        print("loading orders")
        return []

customer = Customer()

customer.get_orders()
customer.get_orders()
customer.get_orders()
customer.get_orders()
customer.get_orders()
```

The output of this program is:

```bash
loading orders
```

In our `Customer` class, we retrieve a list of customer orders by calling the `get_orders` method. Initially, we set the list of orders to None, which means that it wasn't initiated yet. If we used an empty list instead, it would conflict with the scenario when the customer has no orders.

The conditional statement inside `get_orders` method makes sure we will fetch orders only once. Any subsequent calls will result in reusing the data that was already loaded.

That structure makes creating instances of `Customer` cheap because expensive operations are executed only on demand.

## Where can we use Lazy Initialization?

We can use Lazy Loading on every layer of our application. For example, we may have a long web page with images all around. We can delay the loading of these images until the user scrolls to their position.

We should use Lazy Initialization everywhere where both of the conditions are met:

- part of object properties are not mandatory to use the object
- full initialization of the object involves the execution of expensive operations like database queries, API calls, reading files, generating data, etc.

Using it in other scenarios, doesn't make much sense.

It's worth mention that because Lazy Initialization involves caching, loaded data may become stale at some point. It may or may not be an issue for us, but if we want to prevent that from happening, we can implement an additional mechanism to refresh property value on demand.

## Conclusion

The Lazy Initialization is one of these widely used design patterns that many developers even not consider as a design pattern, but just good coding practice.

It's easy to imagine how clunky and bulky modern applications would be without utilizing this design pattern. Especially in the mobile world with limited bandwidth, energy, and processing power.

If you have any questions related to this article, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
