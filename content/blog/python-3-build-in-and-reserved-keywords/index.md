---
title: Python 3 Build in and Reserved Keywords
date: 2020-04-22T18:27:21Z
publishDate: 2020-04-22T19:27:21Z
lastmod: 2020-04-22T18:30:21Z
authors: ["Adam Faryna"]
images: ["python-3-build-in-and-reserved-keywords.jpg"]
series: []
tags: ["Python", "Python3"]
audio: []
videos: []
draft: false
---

In this post, I'm gonna give you the list of Python 3 reserved keywords. This list is handy when you will be creating variables, function names, and classes.

It would also help while crafting documentation and code for fellow developers to avoid making references to the concepts that are not related and could cause confusion.

Knowing these keywords will not only make you a better Python programmer but will also make you look more mature as a programmer.

Newbie coders often forgot that the particular word is a reserved keyword, and create confusing names for functions and variables. They don't know or remember all the abstractions enclosed in the programming language. And it's common for inexperienced developers. You don't want to be perceived as one of them, do you?

The list is not hard to remember, but it doesn't make sense to learn it. Instead, read it once or twice, and go back to it every time you need to refresh your memory while working with the code.

Over time you will notice that you will know every element on the list without learning it.

The list is grouped by the context where a particular keyword can occur.

## Boolean related

- [True](https://docs.python.org/3/library/constants.html?highlight=false#True)
- [False](https://docs.python.org/3/library/constants.html?highlight=false#False)

## Special values

- [None](https://docs.python.org/3/library/constants.html?highlight=none#None)

## Module [asyncio](https://docs.python.org/3/library/asyncio.html) related

- async
- await

## Modules related

- [import](https://docs.python.org/3/library/2to3.html?highlight=import#2to3fixer-import) - used to import the content of the module into the current module
- [as](https://docs.python.org/3/reference/import.html?highlight=import#submodules) - used together with 'import' specifies an alias for imported module
- [from](https://docs.python.org/3/reference/import.html?highlight=import#submodules) - used together with 'import', it specifies the module to import, and 'import' specifies what functions will be imported

## Functions related

- [def](https://docs.python.org/3/reference/compound_stmts.html#function-definitions) - define function
- [pass](https://docs.python.org/3/reference/simple_stmts.html#the-pass-statement) - skip the function definition
- [return](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement) - return value from the function
- [lambda](https://docs.python.org/3/reference/compound_stmts.html#index-24) - used for creating anonymous, inline functions, without self parameter
- [global](https://docs.python.org/3/reference/simple_stmts.html#index-22) - used for declaring a variable inside a function as global (as it was declared outside the function)
- [nonlocal](https://docs.python.org/3/reference/simple_stmts.html#index-44) - marks the variable that it refers to the variable defined outside the function, used only when we change the value in nested function (closures)

## Conditional statements related

- [if](https://docs.python.org/3/reference/compound_stmts.html#if) - starts a conditional block
- [else](https://docs.python.org/3/reference/compound_stmts.html#else) - alternative block in a conditional block
- [elif](https://docs.python.org/3/reference/compound_stmts.html#the-if-statement) - alternative conditional block with condition check
- [is](https://docs.python.org/3/reference/expressions.html#is) - returns true if two objects are the same

## Logical operators

- [and](https://docs.python.org/3/reference/expressions.html#and) - expression result into True only if both operands are True
- [or](https://docs.python.org/3/reference/expressions.html#and) - expression result into True only if any of operands is True
- [not](https://docs.python.org/3/reference/expressions.html#and) - expression result into True only if the operand is False
- [in](https://docs.python.org/3/reference/expressions.html#in) - used to test if a sequence (string, list, tuple) contains a value

## Loops related

- [for](https://docs.python.org/3/reference/compound_stmts.html#for) - starts for loop block
- [while](https://docs.python.org/3/reference/compound_stmts.html#while) - starts while loop block
- [break](https://docs.python.org/3/reference/simple_stmts.html#break) - exit execution of the loop
- [continue](https://docs.python.org/3/reference/simple_stmts.html#the-continue-statement) - skips current loop iteration and go to the next one

## Control flow

- [with](https://docs.python.org/3/reference/compound_stmts.html#with) - declares a control-flow structure
- [as](https://docs.python.org/3/reference/compound_stmts.html#with) - used together with 'with'

## Exceptions related

- [try](https://docs.python.org/3/reference/compound_stmts.html#try) - starts try/except block
- [raise](https://docs.python.org/3/reference/simple_stmts.html#raise) - throws an exception
- [except](https://docs.python.org/3/reference/compound_stmts.html#except) - starts specific exception handling block
- [finally](https://docs.python.org/3/reference/compound_stmts.html#finally) - starts block executed after the try/except block execution is finished

## Class related

- [class](https://docs.python.org/3/glossary.html#term-class) - used to declare a class
- [pass](https://docs.python.org/3/reference/simple_stmts.html#index-20) - used to declare that child class will have the same declaration as it's parent class
- [del](https://docs.python.org/3/reference/simple_stmts.html#del) - deletes the class

## Variables related

- [del](https://docs.python.org/3/reference/simple_stmts.html#del) - deletes the variable or removes value from the sequence (list, tuple, string)

## Generators related

- [yield](https://docs.python.org/3/reference/expressions.html#index-22) - pauses generator execution and returns the value

## Assertion related

- [assert](https://docs.python.org/3/reference/simple_stmts.html#assert) - declares assertion condition

## Conclusion

The list of Python keywords is a good asset to have on hand. Even experienced programmers forget some of these keywords.

To our advantage, Python doesn't have many built-in keywords, and they are very easy to remember when you craft a lot of code on a daily basis.

If you have any questions related to this post, leave the comment below.

If you found this post helpful, consider sharing it, so I will be motivated to publish more posts that will help you get the IT career you want.

As always, stay focused!
