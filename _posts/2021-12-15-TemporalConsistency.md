---
layout: post
title: "Temporal Consistency"
date: 2021-12-15
tags: JAVA, BITEMPORAL
---


Humans have problems in the real world. The purpose of computers is to help humans. 
Many computer systems model the real world in order solve these problems.
One fundamental property of the real world is time. It exists everywhere and is predictable.
Time is an universal common denominator for everything, including computers.
Even if the systems are not connected physically, they are still linked through the time dimension.
This allows to correlate data and extract useful information.

Simple systems might get away with blocking constraints to achieve consistency. 
But this gets too blocking for complex systems which have to process many events from multiple sources.
One solution is remove the blocking constraints and let the data flow.
Then you have take temporal snapshots of the data to see if it is consistent enough to process further.
This shifts the validation from the input to the output.
This is in line with the Unix philosophy: "Be liberal in what you accept, and conservative in what you send".

The quality of the data depends also on the precision of the physical clocks.
This is especially important in virtual environments such as the cloud.
So take your time to configure each clock in the system to reduce time inconsistencies.

![Temporal Consistency](/assets/img/TemporalConsistency.svg)

Links:
* [Event-driven architecture](https://en.wikipedia.org/wiki/Event-driven_architecture)
* [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)
* [Stream processing](https://en.wikipedia.org/wiki/Stream_processing)
* [Pipeline](https://en.wikipedia.org/wiki/Pipeline_%28software%29)
* [Data-driven programming](https://en.wikipedia.org/wiki/Data-driven_programming)
* [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)
* [Designing Data-Intensive Applications](https://dataintensive.net)
* [Jon Postel](http://www.postel.org/postel.html)
* [ClockBound](https://github.com/aws/clock-bound)
* [Keeping Time With Amazon Time Sync Service](https://aws.amazon.com/blogs/aws/keeping-time-with-amazon-time-sync-service)
* [Building a more accurate time service at Facebook scale](https://engineering.fb.com/2020/03/18/production-engineering/ntp-service)
