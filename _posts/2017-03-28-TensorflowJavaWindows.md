---
layout: post
title: "TensorFlow with Java on Windows without CUDA"
date: 2017-03-28
tags: JAVA
---

Yes, its possible today. Google is still working on it, so it might change in the future. And especially the [Java API is not stable](https://www.tensorflow.org/programmers_guide/version_semantics), and not very beautiful. Here is an example [LabelImage.java](https://www.tensorflow.org/code/tensorflow/java/src/main/java/org/tensorflow/examples/LabelImage.java).

Simply add these dependencies to your pom.xml:

```xml
<dependency>
    <groupId>org.tensorflow</groupId>
    <artifactId>libtensorflow</artifactId>
    <version>1.1.0-rc0-windows-fix</version>
</dependency>
<dependency>
    <groupId>org.tensorflow</groupId>
    <artifactId>libtensorflow_jni</artifactId>
    <version>1.1.0-rc0-windows-fix</version>
</dependency>
```

Then you can start coding:

```java
public static void main(final String[] args) {
    System.out.println("Hello TensorFlow " + org.tensorflow.TensorFlow.version());
}
```
