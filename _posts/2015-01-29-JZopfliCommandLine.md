---
layout: post
title: "JZopfli command line"
date: 2015-01-29
tags: JAVA
---

[JZopfli](https://github.com/LucCappellaro/jzopfli) has exactly the same command line as the [Zopfli](https://code.google.com/p/zopfli/) original.
You can simply [download](https://mvnrepository.com/artifact/com.github.luccappellaro/jzopfli) it from the maven central repository and execute it.

Download:
```console
$ wget http://central.maven.org/maven2/com/github/luccappellaro/jzopfli/0.0.1/jzopfli-0.0.1.jar
--2015-01-29 00:17:24--  http://central.maven.org/maven2/com/github/luccappellaro/jzopfli/0.0.1/jzopfli-0.0.1.jar
Resolving central.maven.org (central.maven.org)... 23.235.43.209
Connecting to central.maven.org (central.maven.org)|23.235.43.209|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 58811 (57K) [application/java-archive]
Saving to: `jzopfli-0.0.1.jar'
 
100%[===========================================================================>] 58,811      --.-K/s   in 0.04s
 
2015-01-29 00:17:24 (1.33 MB/s) - `jzopfli-0.0.1.jar' saved [58811/58811]
```

Execute:
```console
$ java -jar jzopfli-0.0.1.jar -h
Usage: zopfli [OPTION]... FILE
  -h    gives this help
  -c    write the result on standard output, instead of disk filename + '.gz'
  -v    verbose mode
  --i#  perform # iterations (default 15). More gives more compression but is slower. Examples: --i10, --i50, --i1000
  --gzip        output to gzip format (default)
  --zlib        output to zlib format instead of gzip
  --deflate     output to deflate format instead of gzip
  --splitlast   do block splitting last instead of first
```
