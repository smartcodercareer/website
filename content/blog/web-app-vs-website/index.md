---
title: Web App vs Website
date: 2020-04-16T18:45:42Z
publishDate: 2020-04-16T19:45:42Z
lastmod: 2020-04-16T18:50:42Z
authors: ["Adam Faryna"]
images: ["web-application-vs-website.jpg"]
series: []
tags: ["Back End", "Front End", "Beginner"]
audio: []
videos: []
draft: false
---

There is a lot of confusion about what the website and web application are. And there is a good reason for that. They look very similar at first glance, just another we page - bunch of HTML, CSS, Javascript, and some images. The differences lie undercovers.

Let's define what website and web application really means.

## What is the website?

You can think of a website as web pages that are served in the same form they were sent by the server - as a collection of HTML, CSS, Javascript files, and images.

Every time a user switches between pages, another request to the server is made, and the new view is returned every time as HTML, CSS, Javascript images, and so on.

A typical website can by a static HTML document served from the server (with all the complementary resources) or dynamic HTML rendered by the server, for example, by Wordpress.

Most of the time, websites don't use fancy modern Javascript frameworks like React, Angular, or Vue, because they don't have to. An entire HTML document is already rendered on the server, styles are provided, and user interactions are served by good old jQuery or even plain Javascript.

### Alternative ways to build a websites

In practice, you don't have to build a website if you need one, you can avoid buying the hosting, setting up the server and all of this web admin burden by using one of the services like Wix, Squarespace, or Webflow.

You don't even have to know how to code. You just browse the catalog of templates and choose the one that you think will be a good base for your website. You amend it as needed by using drag and drop editor, so no coding is required. When you finish, just publish it. Everything else will be taken care of for you.

Of course, you have to pay a bit extra for this convenience, but for many people, this extra price is a bargain, compering of the time saved, not thinking about buying good hosting, hiring a developer, and hoping for the best.

You can also achieve a similar result by hosting your website on one of CMS systems like Wordpress. It also has drag &amp; drop plugins that you can use to implement the design. There is definitely more of the work involved rather than by using plug &amp; play service, but it can be a better solution if you need more flexibility and freedom in the long run.

## What is a web application?

Web application, on the other hand, receive application code on the initial request from the server. After that, the HTML views are rendered and modified on the fly by the web application written in Javascript. When needed, web application makes asynchronous Ajax request to the server RestAPI to fetch more data. The server sends the response in JSON format, not as ready to be displayed HTML document. The front end layer receives JSON data and decides how to present it to the user.

Sometimes the initial server response involves generating an HTML page as well, but every subsequent request are served in JSON format.&nbsp;

These kinds of web applications are called universal because part of the rendering is happening on the server site.

Building web application instead of regular website helps reduce bandwidth, increase performance &amp; scalability, and overall user experience. But the costs of creating and maintaining such an application are much higher because of the number of layers that needs to be implemented like: server security, authentication, RestAPI, and data persistence.

Some very complex websites like modern Facebook can only be built as web applications. It was necessary to create frameworks like React, Angular, or Vue, to implement their advanced features.

Web applications are built with the front end part and back end part. What's important to mention is that the web application can exist without the front end part and without the back end, but at least one of them has to be provided.

### Web application with front end only

In the simplest scenario, you can build a web application that only serves the code that is executed on the clients' browser and doesn't interact further with the server or any backend part.

These types of applications can use your browser data storage features and even work offline.

The problem with them is that when working with any application we want to process and store data. While you have only the front end part without the back end, you will not be able to do any sophisticated processing other than the one you can run via Javascript in your browser. So most of the time, these kinds of applications will be only to consume data, not produce or process.

As you see, you can still build web applications without the back end, but the features will be very limited.

### Web application with back end only

Yes, it's possible to build a web application without the front end part. How to do that?

You simply implement the back end part only. So in the result, you will have working RestAPI web services, security layer, and working server that respond to the incoming requests.

Privileged clients would make a request to your server and receive expected data on the other end.

Yes, this is a fully legit web application, and there are plenty it's examples around the internet.

When you start looking at web application development from the perspective of the RestAPI server, you will feel liberated from the necessity of having the front end part.

As a front end for this kind of application, we can use anything that can make an API request. You can use popular API clients like Insomnia, Postman, or even Linux console tool curl. They all can serve as a front end for your application.

### Web application with front end and back end

This scenario is most often in the mind of the people who are interested in web application development.

As you already know, either front end and back end part are optional. You just need one of them to have a web application.

The development tasks for a web application can be split between two groups of developers. One group, front end developers, will take care of the implementation of user interface and interactions, and the second group will take care of the back end.

These teams don't interfere with each other. They just have to agree on the shape of API and can work independently.

It's very common practice to have a single team of people that performs all of these tasks. They are called full-stack developers. They are savvy about the front end and back end so they can contribute to both parts of the application. This kind of scenario is most common in startups, where the team is small and multidisciplinary.

## When to build a website instead of a web application?

Most modern businesses don't need web applications. The website would do a better job.

If you are a business owner or freelancer, and you need a platform to host your portfolio, contact information, your offer, or even online shop - these are probably more than 60% of the websites already available online - the website would be sufficient.

Websites are far, cheaper, and easier to build, maintain, and scale than web applications. And you don't need to know a specialized framework to build them. In the simplest scenario, you can just take a free CMS system like Wordpress and adapt it to your requirements.

## When to build a web application instead of a website?

The best way to decide if you need the web application instead of the website is to ask yourself a question, "can I achieve the same result by just having a website"?

Asking this question is crucial because the costs of building and maintaining a web application are much higher than the website both in time and money.

The most common scenarios where building web application is justified are SaaS services, RestAPI available for multiple clients, sophisticated live dashboards with graphs, applications that have to be available offline.

That's it. If your idea doesn't fit into any one of these, you will do just fine by having a website rather than a web application.

If you feel a little disappointed because you wanted to use that modern Javascript framework to build your next project instead of creating just a website, feel free to do so. Learning is another great reason to choose a web application instead of just a website.

## Conclusion

So, know you know what the difference between website and web application, and when choose to build one or the other.

You probably now understand why most of the internet is build using regular websites rather than fully-fledged web applications. The one reason is, the websites were here far earlier before web applications show up. The second reason is, most of the time, websites are just good enough, and nobody wants to overpay.

But if you want to focus on building web applications, do it! There is a huge market waiting for your services, so you can make a good living while building web applications.

If you have any questions related to this video, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

See you next time, and as always, stay focused!
