---
title: How the Internet Works
date: 2020-04-21T22:23:29Z
publishDate: 2020-04-21T23:23:29Z
lastmod: 2020-04-21T22:30:29Z
authors: ["Adam Faryna"]
images: ["how-the-internet-works.jpg"]
series: []
tags: ["Beginner", "Web Development"]
audio: []
videos: []
draft: false
---

If you are a web developer, many people will expect that you know how the web works. If you didn't figure out that yet, this article is a good opportunity to know everything you should know without going too deep into not important details.

## Client - server model

Simply put, the Internet works in a client-server manner.

The client is our web browser like Chrome or Safari, and the server is an HTTP server. HTTP is the protocol used for communication between them.

The Internet is built with a global, vast network of data centers connected together via optical fiber wires.

Data centers host HTTP servers, databases, and other things.

{{< figure src="network-of-data-centers.jpg" title="fig 1. Network of data centers" >}}

## Client request a website

When we want to visit any particular website, we type the domain name, and the browser, in a magical way, takes us to the requested web page.

Not really magical, but what happens undercovers the browser don't know what does amazon.com means, so he has to ask nearest DNS server, domain name resolution server - and there are networks of them as well - for IP address of the amazon.com. Because the browser needs an IP address, he is not happy with just having a domain name.

On the Internet, everything is identified by a unique IP address, even our computers, and mobile phones.

The browser resolves a domain name to IP address and caches it into the local DNS table, so next time we will want to see amazon.com, the browser will look up to the local table instead of asking remote DNS servers, which will be much faster.

## HTTP and HTTPS

The domain address can also contain protocol prefix HTTP or HTTPS. When it does, the entire address become URL, which means a uniform resource locator.

When the URL starts with HTTP, we request to download the website using a standard, unencrypted connection. HTTPS means that we request an encrypted connection, and when it's successful, we will see on the screen padlock icon like the one below.

## Server response

If everything is ok, the server replies which HTML5 format document. This HTML5 format may contain references to other resources like fonts, stylesheet files, script files, which will be downloaded next.

To get these extra resources, our internet browser may make many requests to receive all of them.

{{< figure src="http-request-and-response.jpg" title="fig 2. HTTP request and response" >}}

## Tracking server requests

If we are curious about what is actually downloaded when you go to the amazon.com website, you can open the browser inspector tool - every popular browser have one - go to the Network tab, and reload the page. You will see all the requests that were made to load this web page.

{{< figure src="tracking-webpage-download.jpg" title="fig 3. Tracking server requests" >}}

## Conclusion

So this is how the Internet works in a nutshell. I gave you an overview of the process and the most important actors involved.

If you want to dwell deeper into details, how particular problems are solved, and how this entire network is possible at all, feel free to do it. But this article contains the essence that every web developer should know about the Internet. Everything else is a bonus.

If you have any questions related to this post, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

Stay curious!
