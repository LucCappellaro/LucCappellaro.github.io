---
layout: post
title: "ZopfliOutputStream"
date: 2015-01-20
tags: JAVA
---

I have implemented a simple drop-in replacement for the [java.util.zip.ZipOutputStream](https://docs.oracle.com/javase/8/docs/api/java/util/zip/ZipOutputStream.html) which uses the [Zopfli](https://code.google.com/p/zopfli/) algorithm: [JZopfli-Stream](https://github.com/LucCappellaro/jzopfli-stream).

```java
try(ZopfliOutputStream zos=new ZopfliOutputStream(new FileOutputStream("file.zip"))){
    zos.putNextEntry(new ZipEntry("file.txt"));
    zos.write("content".getBytes());
}
```

Using this dependency:
```xml
<dependency>
    <groupId>com.github.luccappellaro</groupId>
    <artifactId>jzopfli-stream</artifactId>
    <version>0.0.2</version>
</dependency>
```
