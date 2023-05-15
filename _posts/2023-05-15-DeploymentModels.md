---
layout: post
title: "Deployment Models"
date: 2023-05-15
tags: DESIGN
---

A computer is a physical device bound to physical limits: [space and time](https://en.wikipedia.org/wiki/Spacetime).
In other words, the main computer limits are memory size and calculation speed.
If a software solution does not fit in one computer's bounds, a distributed approach is required.

Common [x64 processors](https://en.wikipedia.org/wiki/X86-64) only have sixteen 64-bit [general purpose registers](https://en.wikipedia.org/wiki/Processor_register#GPR).
So they run quite fast out of memory and have to offload data somewhere else.
Moving data in and out of the CPU consumes time and does not contribute to the actual calculation.
Additional memory is available on the CPU chip which is called level one cache.
The size is more or less 32KB and is also quite fast depleted.
The level one cache can offload its demand to the level two cache (\~1MB) and even to the level three cache (\~32MB).
If this is not enough, the data needs to go to the system memory (GB).
If this is still not enough, the data needs to go to the hard drive (TB).
If this is still not enough, the data needs to go to a distributed storage (PB).
Each boundary brings more memory but comes with a price of [latency](https://colin-scott.github.io/personal_website/research/interactive_latency.html).
Keep in mind that the network is the slowest pathway, so avoid it as much as possible.

Besides the memory constraint, there is also the computation speed limit.
The speed is measured by [instructions per second](https://en.wikipedia.org/wiki/Instructions_per_second), which is bound by the CPU [clock speed](https://en.wikipedia.org/wiki/Clock_rate) (~4GHz).
If one CPU core is not enough the solve the problem in time, a distributed approach is necessary.
Most CPUs have extra cores on the die itself to help calculating.
If this is not enough, the load can be distributed to other CPUs on the same system.
If this is not enough, the load needs to be distributed across many systems.
Parallelizing software comes with the overhead of splitting, synchronizing and joining the workload.

Every time a boundary is trespassed, a price has to be payed.
There is no [free lunch](https://en.wikipedia.org/wiki/There_ain%27t_no_such_thing_as_a_free_lunch).
There is no [silver bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet).
There is no [severless](https://en.wikipedia.org/wiki/Serverless_computing).
An important question a software engineer should ask:
How can the solution fit in the minimal necessary physical bounds?
However, answering this question becomes more and more difficult.
The vast landscape of physical devices keeps growing.
And cloud providers add more and more virtual devices with unpredictable performance. 


The follow-up question to system design is often: How can it scale?
Scaling is generally about inflating the balance sheets 
which is often done by on-boarding more customers and consumables. 
This means more computation power to handle the traffic and more space to store the content.
Developers rarely have time to measure and fall in to [premature optimizations](https://wiki.c2.com/?PrematureOptimization), "the root of all evil".
On top of that, scaling is constrained by the maintainers and companies end up [shipping their org chart](https://en.wikipedia.org/wiki/Conway's_law).
Scaling is a complex topic which merits a separate article.

In the end, don't forget your computer science basics, because there is no [magic](https://en.wikipedia.org/wiki/Clarke%27s_three_laws).

![DeploymentModels](/assets/img/DeploymentModels.svg)

Links
* [Distributed computing](https://en.wikipedia.org/wiki/Distributed_computing)
* [Context switch](https://en.wikipedia.org/wiki/Context_switch)
* [Interrupt](https://en.wikipedia.org/wiki/Interrupt)
* [Direct Memory Access](https://de.wikipedia.org/wiki/Direct_Memory_Access)
* [Flynn's taxonomy](https://en.wikipedia.org/wiki/Flynn%27s_taxonomy)
* [Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)
* [Reliability, constant work, and a good cup of coffee](https://aws.amazon.com/builders-library/reliability-and-constant-work/)