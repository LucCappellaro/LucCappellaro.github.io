---
layout: post
title: "Zopfli Maven Plugin"
date: 2015-03-01
tags: JAVA
---

The [JZopfli Maven plugin](https://github.com/LucCappellaro/jzopfli-mvn) processes all artifacts and improves the compression using the [Zopfli](https://code.google.com/p/zopfli/) algorithm. In addition it removes useless metadata inside the zip archive to improve further the file size. See the details [here](/assets/html/jzopfli-mvn/plugin-info.html).

Simply add this to your pom.xml

```xml
<build>
    <plugins>
        <plugin>
            <groupId>com.github.luccappellaro</groupId>
            <artifactId>jzopfli-mvn</artifactId>
            <version>0.0.4</version>
            <executions>
                <execution>
                    <goals>
                        <goal>jzopfli</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```
