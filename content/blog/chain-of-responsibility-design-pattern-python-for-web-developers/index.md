---
title: Chain of Responsibility Design Pattern Python for Web Developers
date: 2020-04-28T22:14:17Z
publishDate: 2020-04-29T22:14:17Z
lastmod: 2020-04-28T22:14:17Z
authors: ["Adam Faryna"]
images: ["chain-of-responsibility-design-pattern-python-for-web-developers.jpg"]
series: []
tags: ["Design Pattern", "Python", "Python3"]
audio: []
videos: []
draft: false
---

In this tutorial, we are going to talk about the Chain of Responsibility, one of the most omnipresent design pattern in every web development framework.

This design pattern is one of these tools that every web developer should be familiar with. We don't have to know how to code it, but it's important to know how it works.

If you are looking for a good introduction to design patterns, check out the article [What is a Design Pattern](/posts/what-is-a-design-pattern/).

## What is the Chain of Responsibility design pattern?

It's probably safe to say that unless you want to create your own routing library or request processing framework, you probably won't need to implement this pattern ever. Nevertheless, if you are a web developer, it's essential to know how it works, because it's used in probably every implementation of server-side HTTP request processing frameworks and routing libraries.

The Chain of responsibility is a behavioral design pattern where incoming tasks are handled by handlers lined up in the order. Every handler who receives a task may process it, pass it over, or break the chain and stop the task from propagating to the next handler.

Multiple handlers may handle the incoming task without mutual knowledge. Handlers know nothing about the sender nor the receiver of the generated response.

## Creating Chain of Responsibility in Python?

Let's implement the example Chain of Responsibility for the HTTP request processor.

First, let's create an abstract `RequestHandler` class that will be extended by every request handler.

```python
from abc import ABC


class RequestHandler(ABC):
    def handle(self, req, res):
        pass
```

Now let's implement our `RequestProcessor`, and two types `HttpRequest` and `HttpResponse` that will be passed down to handlers.

```python
class HttpRequest:
    def __init__(self, data):
        self.data = data


class HttpResponse:
    pass


class RequestProcessor:
    def __init__(self):
        self._handlers = []

    def add(self, handler):
        self._handlers.append(handler)

    def process(self, data={}):
        req = HttpRequest(data)
        res = HttpResponse()

        for handler in self._handlers:
            if handler.handle(req, res):
                break
```

Let's implement some request handlers to handle different types of HTTP requests and Cors handler to enhance request response with CORS.

```python
class CorsRequestHandler(RequestHandler):
    def handle(self, req, res):
        print(self.__class__.__name__ + " is handling the request")
        self.add_cors_headers(res)

    def add_cors_headers(self, res):
        print("Adding CORS response headers")
        pass


class StaticFileRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "static-file":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")


class ApiCallRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "api-call":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")


class DynamicHtmlRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "dynamic-html":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")
```

Now, let's write testing code where we will create instance of `RequestProcessor`, add instance of every handler in the planned order and initiate some HTTP requests:

```python
request_processor = RequestProcessor()
request_processor.add(CorsRequestHandler())
request_processor.add(StaticFileRequestHandler())
request_processor.add(ApiCallRequestHandler())
request_processor.add(DynamicHtmlRequestHandler())

for idx, flavor in enumerate(["static-file", "api-call", "dynamic-html"]):
    data = {"number": idx+1, "flavor": flavor}
    print("Processing request with data " + str(data))

    request_processor.process(data)
```

The output of this program is:

```bash
Processing request with data {'number': 1, 'flavor': 'static-file'}
CorsRequestHandler is handling the request
Adding CORS response headers
StaticFileRequestHandler is handling the request
Processing request with data {'number': 2, 'flavor': 'api-call'}
CorsRequestHandler is handling the request
Adding CORS response headers
StaticFileRequestHandler is passing the request
ApiCallRequestHandler is handling the request
Processing request with data {'number': 3, 'flavor': 'dynamic-html'}
CorsRequestHandler is handling the request
Adding CORS response headers
StaticFileRequestHandler is passing the request
ApiCallRequestHandler is passing the request
DynamicHtmlRequestHandler is handling the request
Processing request with data {'number': 4, 'flavor': 'amazon.com'}
CorsRequestHandler is handling the request
Adding CORS response headers
StaticFileRequestHandler is passing the request
ApiCallRequestHandler is passing the request
DynamicHtmlRequestHandler is passing the request
Error404RequestHandler is handling the request
```

Let's break that down. We put `CorsRequestHandler` as a first handler on the list because it will never break the chain. The next one is `StaticFileRequestHandler` because static file requests are the most common. The following request processors `ApiCallRequestHandler`, `DynamicHtmlRequestHandler`, are self-explanatory. The `Error404RequestHandler` handles situations where no other handlers can process the incoming request.

The entire source code:

```python
from abc import ABC


class HttpRequest:
    def __init__(self, data):
        self.data = data


class HttpResponse:
    pass


class RequestHandler(ABC):
    def handle(self, req, res):
        pass


class CorsRequestHandler(RequestHandler):
    def handle(self, req, res):
        print(self.__class__.__name__ + " is handling the request")
        self.add_cors_headers(res)

    def add_cors_headers(self, res):
        print("Adding CORS response headers")
        pass


class StaticFileRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "static-file":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")


class ApiCallRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "api-call":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")


class DynamicHtmlRequestHandler(RequestHandler):
    def handle(self, req, res):
        if req.data["flavor"] == "dynamic-html":
            print(self.__class__.__name__ + " is handling the request")
            return True
        print(self.__class__.__name__ + " is passing the request")


class Error404RequestHandler(RequestHandler):
    def handle(self, req, res):
        print(self.__class__.__name__ + " is handling the request")
        return True

class RequestProcessor:
    def __init__(self):
        self._handlers = []

    def add(self, handler):
        self._handlers.append(handler)

    def process(self, data={}):
        req = HttpRequest(data)
        res = HttpResponse()

        for handler in self._handlers:
            if handler.handle(req, res):
                break


request_processor = RequestProcessor()
request_processor.add(CorsRequestHandler())
request_processor.add(StaticFileRequestHandler())
request_processor.add(ApiCallRequestHandler())
request_processor.add(DynamicHtmlRequestHandler())
request_processor.add(Error404RequestHandler())

for idx, flavor in enumerate(["static-file", "api-call", "dynamic-html", "amazon.com"]):
    data = {"number": idx+1, "flavor": flavor}
    print("Processing request with data " + str(data))

    request_processor.process(data)
```

## Where to use Chain of Responsibility?

The most popular use of Chain of Responsibility pattern is to line up HTTP request handlers like it's done in frameworks like Django, Flask, or ExpressJS. Another good usage scenario is an error logging system, where different kinds of handlers handle errors of a different type.

The Chain of Responsibility can be used in any of the following scenarios:

- when we want to pass incoming requests to one or multiple handlers without specifying response receiver
- when the configuration of the chain shall be specified dynamically
- when we want to pass incoming requests to be processed by one or more handlers without specifying with one

## Conclusion

The Chain of Responsibility is one of these patterns that we don't code very often, but most of the frameworks are using it undercovers.

The main benefit of knowing this pattern is to have a better understanding of popular frameworks, so we can easily learn new technologies and adapt them faster to our workflow.

If you have any questions related to this article, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
