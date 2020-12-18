---
title: What Is Object Oriented Programming
date: 2020-04-14T10:08:00Z
publishDate: 2020-04-14T11:08:00Z
lastmod: 2020-04-14T10:10:00Z
authors: ["Adam Faryna"]
images: ["what-is-object-oriented-programming.jpg"]
series: []
tags: ["Beginner", "OOP"]
audio: []
videos: []
draft: false
---

In this post, I'm gonna teach you what object oriented programming is. I will skip all the bollocks and explain it to you in the simplest way ever, buy using a video game as an example.

The simplest way to describe object oriented programming (also called OOP) is to use a game analogy. Why, because most of the video games are built using object oriented paradigm.

## The Game

Let's use the example of the game where we have two races fighting with each other "Human and Goblins". It's a 3rd person perspective role-playing game, and you can take a side of goblins or humans.

If you choose humans, you will lead a group of human heroes protecting peasants from bands of goblins. If you choose goblins, you will lead a group of goblin heroes protecting peasants from bands of humans.

We will use UML2 class diagram notation for modeling.

### Classes and objects

To model this world, we will have object Human. It can look like this. Human has properties typical to the characteristics that all of us has. He has a first name, last name, date of birth, gender, and national insurance number.
{{< figure src="diagram-1-Human-1.jpg" title="UML2 class diagram for Human type" >}}

He also has some methods that we can invoke on him. We can make him consume some food, rest for X number of hours, sniff some object, and so on. This is the definition of the class Human, and this class is used to create objects of type Human. Every object we create using this class will have this set of properties and methods.

Let's create a class Goblin.

As you can see, the Goblin class is very similar to Human. It has almost the same set of properties and methods. The only difference is goblins can play goblin chess while Human play regular chess. They also have different insurance numbers.

{{< figure src="diagram-2-Human-Goblin-1.jpg" title="UML2 class diagram for Human and Goblin types" >}}

Because there are so many commonalities between these two classes, we can try to model it in a more object oriented way.

### Inheritance

Now, as you see we created class Humanoid, which is a class that both classes Human and Goblin may inherit. We can move all the common properties and methods to the new class.

The class like Humanoid is called parent class or superclass for both Human and Goblin classes. The Human and Goblin classes now become subclasses or child classes of Humanoid. This is a simple inheritance scenario in object oriented programming.

{{< figure src="diagram-3-Inheritance-1.jpg" title="UML2 class diagram for with inheritance" >}}

Let's assume in our game the world has more species than just humans and goblins. We have a deers and boars as well. Again, both of these types have set of properties and methods similar to Humanoids. But can we consider these objects as a humanoids?

{{< figure src="diagram-4-Deer-Boar-1.jpg" title="UML2 class diagram for Deer and Boar types" >}}

Not really. What we can do instead is to create another class, let's call it Animal that will gather properties common for all the animals in the game.

{{< figure src="diagram-5-Animal-1.jpg" title="UML2 class diagram for Animal type" >}}

Now, as you see, it looks much better. We moved all the common properties to the shared superclass, and our diagram looks much cleaner.

But as you see, we still have a duplication here. There are a lot of similarities between Humanoid and Animal, but we don't want to create an inheritance relationship between them. What we can do is to introduce another class that will be superclass for both Human and Animal.

### Generalization

That's what we have got. We introduced class Creature. It gathers all the shared properties and methods for both Human and Animal classes.

{{< figure src="diagram-6-Creature-1.jpg" title="UML2 class diagram for Creature type" >}}

This is multiple level inheritance because the depth of it is more than 2.

What worth noticing here is that we will never want to create an instance of class Animal, Humanoid, or Creature. These classes are just carriers of shared properties and methods that help us model the app in the way we want. Because of that, these classes are called abstract; to communicate, they are not meant to be instantiated. We won't be creating any objects from them.

We can create as many levels of abstractions as want, but it should be justified. We don't want to complicate our app.

Our example shows that this multi-level hierarchy was necessary to achieve an optimal model that will work for us. Everything was done for a reason.

## Interactions

Ok, so we have all of these classes. Maybe you asking yourself a question about how it all interact with each other to make a game?

The objects we created are our application model. They don't provide any functionalities. They are just figures. To wrap it up into a game, we need much more than that.

But let's keep things as simple as possible and assume we have all the pieces. To create the game we need some controller.

Let's create another class named Game, which will be our controller class. This class will generate humans, animals, and goblins and make them interact with each other.

{{< figure src="diagram-7-Game-1.jpg" title="UML2 class diagram for Game type" >}}

The Game class will create only one object of the game at a time. When that happens, it will render the world of the game and put all the creatures into it. It will also bind a user interface so we can play it, not only watch it.

Maybe, you can think that the codebase of the class Game will be huge, but in practice, it should be very small. It will control the game by delegating tasks like user interface, world rendering, characters rendering, physics, to other highly specialized classes.

The presented example is a very simplified model of object oriented programming, or shortly OOP that shows the entire concept of this paradigm. It boils down to structuring the application as a group of highly specialized classes and connecting them in the way they will provide functionalities for our app.

## Object Oriented Programming for code grouping

Another way of looking at object oriented programming is a tool for grouping similar functionalities together.

{{< figure src="diagram-8-RenderUtils-1.jpg" title="UML2 class diagram for RenderUtils type" >}}

For example, our game may have a class RenderUtils, and this class is not mean to be instantiated, it also not meant to be extended by any subclasses. It just groups methods related to rendering, that other objects may invoke.

## Object oriented programming languages

There are not many strictly object oriented languages on the market. The most noticeable are Java and C#.

Many other popular programming languages like Python, Ruby, ES6, Typescript, PHP, have built-in support for OOP. But, you can easily use these languages without coding any classes.

In most of the programming languages, the concept of OOP is optional, but in spite of it, it's heavly used. That's because of the possibility of keeping functionalities grouped in objects that make codebase so much easier to manage.

## Code generation

It's worth mentioning that if you would be modeling your application the same way - using UML notation - you could generate a skeleton codebase, literally the entire structure of the classes right from the class diagrams.

There is nothing exciting in coding application model, and you can save time by just generating it from the UML class diagram.

## Conclusion

This ends up, probably the simplest object oriented programming tutorial ever recorded.

What OOP helps you to do is to focus on a small, single piece of application, without messing around with other parts.

I'm personally a huge fan of the concept of OOP, and I hope you already see the value it provides to the world of programming.

If you are still struggling with understanding the concept of OOP, let me know in the comments below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

And as always, stay focused!
