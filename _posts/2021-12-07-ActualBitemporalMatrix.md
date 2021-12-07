---
layout: post
title: "Actual Bitemporal Matrix"
date: 2021-12-07
tags: JAVA, BITEMPORAL
---

A bitemporal model consists of two time dimensions. Each of them can be in the past, present or future.
This results in nine different possibilities. Yet, many of them are being overlooked or even considered wrong.
Time is a complex matter and time travel even more. It seems that only the current and the past is well understood.
That's why there are so many temporal models focusing only on those two possibilities.
But if you zoom out a little, you will notice that these are part of a more general model.
This will unlock many interesting features for free:
* the possibility to correct past data, without destroying it
* the possibility to prepare future data
* the possibility to cope with delayed or early events
* the possibility to construct consistent data sets, similar to [Double_buffering](https://en.wikipedia.org/wiki/Multiple_buffering#Double_buffering_in_computer_graphics)
* ...

Be aware that time comparison is crucial and bound to the time precision in your model.
The time precision should match your requirements, and can be anything: milliseconds, hours, days, ...
Additionally, the precision does not have to be identical on both axes.
Take advantage of this flexibility and create the perfect model for your problem.

![Actual Bitemporal Matrix](/assets/img/ActualBitemporalMatrix.svg)

Links:
* [Bitemporal Data: Theory and Practice, Tom Johnston](https://books.google.lu/books?id=tF5zAwAAQBAJ)