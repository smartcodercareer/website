---
title: Abstract Factory Design Pattern Python for Web Developers
date: 2020-04-26T16:16:52Z
publishDate: 2020-04-26
lastmod: 2020-01-01
authors: ["Adam Faryna"]
images: ["abstract-factory-design-pattern-python-for-web-developers.jpg"]
series: []
tags: ["Design Pattern", "Python", "Python3"]
audio: []
videos: []
draft: false
---

In this post, we will talk about the Abstract Factory design pattern, how to use it, when to use it, and what is of equal importance when not to use it. This is an advanced topic as all design patterns require an in-depth knowledge of programming language semantic, but if you are Python developer already, and you want to top up your professional skills, this video is for you.

There is a big chance you will never need to implement an Abstract Factory design pattern. Still, it definitely pays off to know it, not only because it's a shame to be a professional developer who doesn't know it - it is a shame, though - but also it will improve your object-oriented programming sense.

And the beauty of every design pattern is you can use it across the languages.

If you are looking for a good introduction to design patterns, check out the article [What is a Design Pattern](/posts/what-is-a-design-pattern/).

## What is the Abstract Factory Design Pattern?

Abstract Factory is a creational design pattern used when we want to have a way to create objects of a specific type when the type of created objects can be easily switched without changing the code.

It helps promote loosely coupling and easily extendable codebase.

## Creating Abstract Factory in Python

Let's assume we are working on the game, where there will be different species Orc and Goblins.

By using the Abstract Factory pattern, we can easily switch from one factory to another, creating creatures of the specific type without messing up the codebase. That's a perfect scenario for Abstract Factory.

Let's create some enumerate types and basic `CreatureType` first:

```python
from enum import Enum, auto


class CreatureType(Enum):
    PEASANT = "peasant"
    SOLDIER = "soldier"
    KING = "king"


class CreatureRace(Enum):
    ORC = "orc"
    GOBLIN = "goblin"


class Creature:
    def __init__(self, race, kind):
        self.race = race
        self.kind = kind

    def describe(self):
        print("race: " + self.race.value + ", kind: " + self.kind.value)
```

We need implementation of Creature for both Goblin and Orc types, with different roles:

```python
class Orc(Creature):
    def __init__(self, kind):
        super().__init__(CreatureRace.ORC, kind)


class OrcPeasant(Orc):
    def __init__(self):
        super().__init__(CreatureType.PEASANT)


class OrcSoldier(Orc):
    def __init__(self):
        super().__init__(CreatureType.SOLDIER)


class OrcKing(Orc):
    def __init__(self):
        super().__init__(CreatureType.KING)


class Goblin(Creature):
    def __init__(self, kind):
        super().__init__(CreatureRace.GOBLIN, kind)


class GoblinPeasant(Goblin):
    def __init__(self):
        super().__init__(CreatureType.PEASANT)


class GoblinSoldier(Goblin):
    def __init__(self):
        super().__init__(CreatureType.SOLDIER)


class GoblinKing(Goblin):
    def __init__(self):
        super().__init__(CreatureType.KING)
```

And finally, we can create our abstract factory class and factories for both of the races:

```python
class CreatureFactory:
    def getPeasant(self):
        pass

    def getSoldier(self):
        pass

    def getKing(self):
        pass


class OrcFactory(CreatureFactory):
    def getPeasant(self):
        return OrcPeasant()

    def getSoldier(self):
        return OrcSoldier()

    def getKing(self):
        return OrcKing()


class GoblinFactory(CreatureFactory):
    def getPeasant(self):
        return GoblinPeasant()

    def getSoldier(self):
        return GoblinSoldier()

    def getKing(self):
        return GoblinKing()
```

As you see, both of our factories extend the abstract `CreatureFactory`. This construction will give us the flexibility to easily switch factories and produce a different kinds of objects on demand.

Entire codebase with testing code:

```python
from enum import Enum, auto


class CreatureType(Enum):
    PEASANT = "peasant"
    SOLDIER = "soldier"
    KING = "king"


class CreatureRace(Enum):
    ORC = "orc"
    GOBLIN = "goblin"


class Creature:
    def __init__(self, race, kind):
        self.race = race
        self.kind = kind

    def describe(self):
        print("race: " + self.race.value + ", kind: " + self.kind.value)


class Orc(Creature):
    def __init__(self, kind):
        super().__init__(CreatureRace.ORC, kind)


class OrcPeasant(Orc):
    def __init__(self):
        super().__init__(CreatureType.PEASANT)


class OrcSoldier(Orc):
    def __init__(self):
        super().__init__(CreatureType.SOLDIER)


class OrcKing(Orc):
    def __init__(self):
        super().__init__(CreatureType.KING)


class Goblin(Creature):
    def __init__(self, kind):
        super().__init__(CreatureRace.GOBLIN, kind)


class GoblinPeasant(Goblin):
    def __init__(self):
        super().__init__(CreatureType.PEASANT)


class GoblinSoldier(Goblin):
    def __init__(self):
        super().__init__(CreatureType.SOLDIER)


class GoblinKing(Goblin):
    def __init__(self):
        super().__init__(CreatureType.KING)


class CreatureFactory:
    def getPeasant(self):
        pass

    def getSoldier(self):
        pass

    def getKing(self):
        pass


class OrcFactory(CreatureFactory):
    def getPeasant(self):
        return OrcPeasant()

    def getSoldier(self):
        return OrcSoldier()

    def getKing(self):
        return OrcKing()


class GoblinFactory(CreatureFactory):
    def getPeasant(self):
        return GoblinPeasant()

    def getSoldier(self):
        return GoblinSoldier()

    def getKing(self):
        return GoblinKing()


land = "goblin"
creature_factory = None

if (land == "orc"):
    creature_factory = OrcFactory()
else:
    creature_factory = GoblinFactory()

peasant = creature_factory.getPeasant()
soldier = creature_factory.getSoldier()
king = creature_factory.getKing()

peasant.describe()
soldier.describe()
king.describe()
```

The output of this program is:

```bash
race: goblin, kind: peasant
race: goblin, kind: soldier
race: goblin, kind: king
```

We use polymorphism to call methods relevant to the `CreatureFactory` class, while the implementation depends on configuration via the `land` variable.

As you can see, by simply changing the value of the `land` variable, we can control what types of objects are created in the application.

## Where can we use Abstract Factory?

We can use the Abstract Factory design pattern everywhere we know we will be creating multiple instances of the same objects, and we need to be able to switch their implementation to different ones without changing the codebase. These kinds of objects should share the same interface.

The use of this pattern is recommended if you know that odds are high that more implementation for created objects types may be available later, so we want to make our application future proof. As in our game example, we can easily introduce other races to the game by just adding a new race model and related factory class.

That pattern is often used on frameworks configuration level, for example, for creating Statements objects for database connection (JDBC in Java).

We shouldn't implement Abstract Factory when we plan to create only a single or a few instances of objects of the specific type, and we will reuse these instances in the application rather than create new ones.

## Conclusion

The Abstract Factory is not the most commonly used design pattern that thousands of developers are creating every day. But it's one of the cornerstones of many applications, frameworks that we use.

Knowing when we shouldn't use it is of equal importance as to know it because errors on the architectural level spoil the implementation layer as well.

If you have any questions related to this article, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
