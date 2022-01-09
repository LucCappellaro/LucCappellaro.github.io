---
layout: post
title: "Cloudless smart devices"
date: 2022-01-10
tags: IOT
---

More and more devices are getting smart, which means not much more than they are connected.
The connection is often mandatory to one specific cloud.
This might not shock everybody as we are used to the cloud as big brother.
But I see many drawbacks, especially complexity, dependency, security and privacy.
What if the connection to the cloud is disturbed, will your smart devices become dumb?
What if an automatic update removes features, fails or even turns into malware?

Lets take for example a simple use case:
* I want to toggle my Christmas lights automatically.  
  A simple mechanical outlet timer could do the job.

* I want different times for the weekend.  
  A simple digital outlet timer could do the job.

* I want to toggle it at will from my smartphone at home.  
  A smart plug could do the job.

* I want to toggle multiple plugs at the same time.  
  Multiple connected smart plugs could do the job.

* I want to toggle it from the internet?  
  A correctly configured router could do the job.

I see no need for a cloud connection. I see no need for a central server. 
This is doable with simple smart plugs without cloud connection.
But it's not easy to find them.
Few device manufactures provide such devices out of the box.
For example, the [DeLock 11827 Smart Plug](https://www.delock.com/produkte/G_11827/merkmale.html)
 comes with the [Tasmota](https://github.com/arendst/Tasmota) firmware preinstalled.

The second option is to buy a hackable smart plug and convert it.
Such as the [Shelly Plug S](https://shelly.cloud/products/shelly-plug-s-smart-home-automation-device/).
It can be [easily converted](https://github.com/yaourdt/mgos-to-tasmota) to Tasmota without physical tinkering.
But beware, many devices have protections in place to [prevent such conversions](https://github.com/ct-Open-Source/tuya-convert#procedure).
   
What is the [Tasmota](https://github.com/arendst/Tasmota) firmware?
It's an open-source firmware without cloud enforcement.
It's compatible with many different devices which is interesting if you have many of them.
You connect to its integrated web-sever to configure it.
For example, configure it's [geolocation](https://tasmota.github.io/docs/Commands/#timers) and toggle on [sunrise and sunset](https://tasmota.github.io/docs/Timers/#json-payload-anatomy).
Another interesting part is that it exposes a HTTP API.
So they can communicate between each other without a central server or cloud.
For example, toggle another plug at the same time:

	Rule1 ON POWER1#state DO WebSend [192.168.1.123] POWER1 %value% ENDON
	Rule1 1

![Tasmota Timer](/assets/img/Tasmota.png)


The beauty of all this is that everything is optional and possible.  
You can connect to your desired cloud if you want to.  
You can setup your desired central server if you want to. ([openHAB](https://www.openhab.org), [Home Assistant](https://www.home-assistant.io), ...)  
You can choose your preferred protocol. ([MQTT](https://tasmota.github.io/docs/MQTT), [HTTP](https://tasmota.github.io/docs/Commands/#with-web-requests), ...)  
You can choose your firmware. ([Tasmota](https://github.com/arendst/Tasmota), [ESPHome](https://esphome.io), ...)  
You can compile your own firmware. ([Compiling](https://tasmota.github.io/docs/Compile-your-build))  
There is no must, you have the choice.

Is cloudless the next big thing after serverless? 😉


Links:
* [Tasmota Supported Devices Repository](https://templates.blakadder.com/index.html)
* [Tasmota Commands](https://tasmota.github.io/docs/Commands)
* [Tasmota Rules](https://tasmota.github.io/docs/Rules/#rule-trigger)
* [Connecting to Alexa](https://tasmota.github.io/docs/Alexa/#connecting-to-alexa)
* [Smart home - Smart hack](https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack)

