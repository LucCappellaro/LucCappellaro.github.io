---
layout: post
title: "Docker reduces security?"
date: 2021-10-13
tags: JAVA
---

1. running Docker containers -> running the Docker daemon ([source](https://docs.docker.com/engine/security/#docker-daemon-attack-surface))
2. more daemons/services/processes -> larger attack surface ([source](https://www.cs.cmu.edu/afs/cs/usr/wing/www/publications/ManadhataWing04.pdf))
3. larger attack surface -> lower security ([source](https://en.wikipedia.org/wiki/Attack_surface))

This means by [logical transitivity](https://en.wikipedia.org/wiki/Transitive_relation):
running Docker containers -> lower security.

But before jumping to conclusions, we should ask at least [five whys](https://en.wikipedia.org/wiki/Five_whys):
* Why do you need Docker?
* Why do you need containers?
* Why do you need isolation?
* Why do you need multiple containers on the same host?
* Why do you need security?

Docker simplifies many tasks and has many features, but as everything it comes with a cost.
So, is it possible to remove this Docker daemon from the equation to increase security?
There are many alternatives, but each of them has different trade-offs.
Some of the tools just shift the security risk, so choose carefully.
Here is a very limited subset of possibilities in no particular order:

* [Podman](https://podman.io) is a deamon-less Docker replacement which is [more secure](https://opensource.com/article/18/10/podman-more-secure-way-run-containers) and uses the [same backend (runc)](https://mkdev.me/en/posts/the-tool-that-really-runs-your-containers-deep-dive-into-runc-and-oci-specifications).
* [systemd-nspawn](https://www.freedesktop.org/software/systemd/man/systemd-nspawn.html#--oci-bundle=) supports [OCI](https://github.com/opencontainers) runtime bundles
* [LXC](https://github.com/lxc/lxc) supports [OCI images](https://github.com/lxc/lxc/issues/1813) (lxc-create -t oci)
* Use [runc](https://github.com/opencontainers/runc) directly ([source](https://iximiuz.com/en/posts/you-dont-need-an-image-to-run-a-container/))
* Run the “container” with raw linux kernel features ([source](https://platform.sh/blog/2020/the-container-is-a-lie/))
* Transform the Docker container to a disk image and run it on “bare-metal” (e.g. [docker-to-linux](https://iximiuz.com/en/posts/from-docker-container-to-bootable-linux-disk-image/))
* Run the container directly on “bare-metal” (e.g. [Kerla](https://github.com/nuta/kerla#running-a-docker-image-experimental))
* [Nsjail](https://github.com/google/nsjail) focuses on the security isolation with namespaces (same as Docker)
* [Firecracker](https://firecracker-microvm.github.io/) uses minimal virtual machines (KVM)
* [Solaris Containers](https://www.oracle.com/solaris/technologies/solaris-containers.html) built-in feature of Solaris
* [FreeBSD Jails](https://docs.freebsd.org/en/books/handbook/jails/) built-in feature of FreeBSD
* [Bocker](https://github.com/p8952/bocker) an alternative implementation which shows how simple it can get
* …


For the sake of security, just keep in mind:

> “Security engineers working on Virtualization Security should push for as much attack surface reduction as possible” ([source](https://googleprojectzero.blogspot.com/2021/06/an-epyc-escape-case-study-of-kvm.html#h.jz5frebdego5))

Additional links:
* [doger.io](http://doger.io/)
* [Anatomy of CVE-2019-5736: A runc container escape!](https://aws.amazon.com/blogs/compute/anatomy-of-cve-2019-5736-a-runc-container-escape/)