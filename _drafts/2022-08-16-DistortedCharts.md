---
layout: post
title: "Why do stock charts have a distorted time axis?"
date: 2022-08-16
tags: JAVA, CHARTS
---

Data is difficult to understand in a textual representation such as tables.
It is much easier to get picture with a graphical visualization such as a chart.
That's why charts are ubiquitous in the data-driven financial industry.
Yet, those charts have a peculiar time axis which violates several best practices. This results in a contracted, dilated and distorted time perception.
Also, many charts allow drawing straight lines, which is absurd without a linear x-axis.

###### Peculiarities

1. Stock charts have often a non-continuous time-axis
Violated best practice: axes should be continuous.  
Excuses: Hide gaps to save space on the chart due to market opening hours.

![Yahoo](/assets/img/Distorted-Yahoo.png)

2. Stock charts have often a non-linear time-axis
Violated best practice: intervals on axes should be identical.  
Excuses: Market opening hours do not match the bins of the OHLC-candles.

![TradingView](/assets/img/Distorted-TradingView.png)

3. Stock charts sometimes have uneven grid lines
Violated best practice: intervals on axes should be identical.  
Excuses: Label placement optimization?

![Investing](/assets/img/Distorted-Investing.png)

4. Stock charts sometimes have missing labels 
Violated best practice: label every tick.  
Excuses: Avoid overlapping labels.

![FinancialTimes](/assets/img/Distorted-FinancialTimes.png)

###### The alternative

What if we respect the best practices?  
How would the chart look like?  
What are the benefits?

I could not find a simple charting tool which respects these rules,  
so I built one myself: [IsoChart](https://www.isochart.com). 
It works with any time series including stock prices. 
Its continuous and linear time-axis has several advantages:

    * allows to compare any time series side by side
    * allows to see the length of the gaps
    * helps to identify missing data
    * helps to perceive the temporal evolution of the values
    * line drawings on the chart are temporally meaningful
    
![IsoChart](/assets/img/Distorted-IsoChart.png)
    

Links:
* [Temporal Consistency]({% post_url 2021-12-15-TemporalConsistency %})
* [The Worst Covid-19 Misleading Graphs](https://www.datasciencecentral.com/the-worst-covid-19-misleading-graphs)
* [](https://www.statisticshowto.com/probability-and-statistics/descriptive-statistics/misleading-graphs/)



https://www.forbes.com/sites/naomirobbins/2011/11/17/whats-wrong-with-this-graph/