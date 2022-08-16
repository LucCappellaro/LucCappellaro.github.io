---
layout: post
title: "Alternative to distorted stock charts"
date: 2022-08-16
tags: CHARTS
---

Data is difficult to understand in a textual representation such as tables.
It is much easier to get the picture with a graphical visualization such as a chart.
That's why charts are ubiquitous in the data-driven financial industry.
Yet, those charts have a peculiar time axis which violates several best practices. 
This results in a contracted, dilated or distorted time perception.
Also, many charts allow drawing straight lines, which is absurd without a linear x-axis.

### Peculiarities

1. Stock charts have often a non-continuous time-axis  
Violated best practice: axes should be continuous.  
Excuses: Hide gaps to save space on the chart due to market opening hours.  
![Yahoo](/assets/img/Distorted-Yahoo.png)

2. Stock charts have often a non-linear time-axis  
Violated best practice: intervals on axes should be identical.  
Excuses: The bins of the OHLC-candles dictate the time axis.  
![TradingView](/assets/img/Distorted-TradingView.png)

3. Stock charts sometimes have uneven grid lines  
Violated best practice: intervals on axes should be identical.  
Excuses: Label placement optimization?  
![Investing](/assets/img/Distorted-Investing.png)

4. Stock charts sometimes have missing labels  
Violated best practice: label every tick.  
Excuses: Avoid overlapping labels.  
![FinancialTimes](/assets/img/Distorted-FinancialTimes.png)

### The alternative

What if we respect the best practices?  
How would the chart look like?  
What are the benefits?

I could not find a simple charting tool which respects these rules, so I built one myself: [IsoChart](https://www.isochart.com).  
It works with any time series including stock prices.  
Its continuous and linear time-axis has several advantages:

* allows to compare any time series side by side
* allows to see the length of the gaps
* helps to identify missing data
* helps to perceive the temporal evolution of the values
* line drawings on the chart are temporally meaningful
    
![IsoChart](/assets/img/Distorted-IsoChart.png)

One may remark that such a chart seems to overemphasize gaps.
But, the gaps are shown with the same width and weight as the rest.
Stock charts are the one who exaggerate the data and diminish the gaps.
The world does not stop when the markets close, especially in globalization.
Prices are not frozen overnight and pose a well known risk.
Other assets such as cryptocurrencies trade 24/7, there are no pauses anymore.
At least Seeking Alpha seems to agree with my opinion:

![Seeking Alpha](/assets/img/Distorted-SeekingAlpha.png)

### Links
* [IsoChart](https://www.isochart.com)
* [Temporal Consistency]({% post_url 2021-12-15-TemporalConsistency %})
* [The Worst Covid-19 Misleading Graphs](https://www.datasciencecentral.com/the-worst-covid-19-misleading-graphs)
* [What's Wrong with this Graph?](https://www.forbes.com/sites/naomirobbins/2011/11/17/whats-wrong-with-this-graph)
* [Dot plot with line for time series](https://style.ons.gov.uk/data-visualisation/dot-plot-with-line-for-time-series/)