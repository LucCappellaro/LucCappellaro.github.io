---
layout: post
title: "Docker reduces security?"
date: 2021-10-13
tags: JAVA
---

1. running Docker containers -> running the Docker daemon ([source](https://docs.docker.com/engine/security/#docker-daemon-attack-surface))
2. more services -> larger attack surface ([source](https://www.cs.cmu.edu/afs/cs/usr/wing/www/publications/ManadhataWing04.pdf))
3. larger attack surface -> lower security ([source](https://en.wikipedia.org/wiki/Attack_surface))

This means by [logical transitivity](https://en.wikipedia.org/wiki/Transitive_relation):
running Docker containers -> lower security

Why is this so often ignored?
Why does nobody talk about it?
Aren’t we allowed to criticize the trendy things?
I’m not against containers, I just try to get the facts straight.
Avoiding Docker in the context of security is desirable.

There are multiple possibilities without Docker:

* There are alternatives to Docker. But this might just shift the problem to another tool. (e.g. [Bocker](https://github.com/p8952/bocker))
* Run the “container” with raw linux kernel features ([source](https://platform.sh/blog/2020/the-container-is-a-lie/))
* Transform the Docker container to a disk image and run it on “bare-metal” (e.g. [docker-to-linux](https://iximiuz.com/en/posts/from-docker-container-to-bootable-linux-disk-image/))
* Run the container directly on “bare-metal” (e.g. [Kerla](https://github.com/nuta/kerla#running-a-docker-image-experimental))
* …

“Security engineers working on Virtualization Security should push for as much attack surface reduction as possible” ([source](https://googleprojectzero.blogspot.com/2021/06/an-epyc-escape-case-study-of-kvm.html#h.jz5frebdego5))