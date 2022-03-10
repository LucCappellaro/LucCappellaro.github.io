---
layout: post
title: "Real numbers"
date: 2022-03-10
tags: JAVA
---

Here we go again. This topic never gets old.
It even seems that it gets worse due to software stacks with automatic type conversion.

Here is my attempt to help. 
I will let the image speak as this topic has been discussed too many times already.

![Bitemporal relativity](/assets/img/RealNumbers.svg)

Here are some links to back my statements and dive deeper:

General:
* [Intel® 64 and IA-32 Architectures Developer's Manual: Volume 1](https://www.intel.com/content/www/us/en/architecture-and-technology/64-ia-32-architectures-software-developer-vol-1-manual.html)
* [IEEE 754-2019 addendum](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/background/addendum.html)
* [IEEE 754 binary64](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)
* [IEEE 754 binary32](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)
* [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
* [Why don’t my numbers add up](https://floating-point-gui.de/)
* [Floating-Point Numbers](https://en.algorithmica.org/hpc/arithmetic/float/)
* [All desktop calculators are wrong](https://chachatelier.fr/chalk/article/chalk.html)
* [FFmpeg's AVRational workaround](https://www.ffmpeg.org/doxygen/3.4/group__lavu__math__rational.html#details)
* [JavaScript Number](https://262.ecma-international.org/12.0/#sec-terms-and-definitions-number-value)
* [Java's BigDecimal](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/math/BigDecimal.html)

MS Excel related:
* [Numeric precision in Microsoft Excel](https://en.wikipedia.org/wiki/Numeric_precision_in_Microsoft_Excel)
* [Excel just stores 15 decimals](https://www.microsoft.com/en-us/microsoft-365/blog/2008/04/10/understanding-floating-point-precision-aka-why-does-excel-give-me-seemingly-wrong-answers/)
* [Aspose.Cells has different numbers](https://forum.aspose.com/t/different-numbers/222791)
* [Apache POI's Excel bug replication](https://poi.apache.org/apidocs/4.1/org/apache/poi/ss/util/NumberToTextConverter.html)

NVIDIA related:
* [Floating Point and IEEE 754 Compliance for NVIDIA GPUs](https://docs.nvidia.com/cuda/floating-point/index.html#operations-and-accuracy)
* [NVIDIA optimizations](https://blog.cyclemap.link/2011-07-24-glsl-part4-nvidia/)
* [luma.gl' LUMA_FP64_CODE_ELIMINATION_WORKAROUND](https://github.com/visgl/luma.gl/blob/4d3c3a86bc6b2ed8d61168c8ff44730adab5ac17/modules/shadertools/src/lib/shader-assembler/platform-defines.ts#L12)