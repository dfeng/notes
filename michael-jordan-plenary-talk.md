---
tags:
 - from_talk
 - statistics
 - data_science
---

# Michael Jordan Plenary Talk

Our MJ gave a plenary talk at the SIAM conference on the mathematics of DS ([link](https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=69238)).
I've seen bits and pieces of this talk already.

## Key Takeaways

 - He thinks the next set of questions to ask of ML will be decision-based
   + Example: recommendation systems. What if you recommend everyone the same restaurant? [article](https://hdsr.mitpress.mit.edu/pub/2imtstfu/release/6)
   + Clearly this isn't going to work out, so you need to do some type of *load-balancing*. Or, better, just create a market.
   + Hence he thinks we'll be merging with microeconomics.
   + The essential issue here is scarcity, which therefore requires a market.
   + The question is then how do algorithms fit into this.
   + Example: you have the matching algorithm (i.e. Match day for medical students). But what if you don't know preferences, so you have to infer them in the way that you would do with bandit problems
   + Of course, questions of [[causal-inference]] are also related.
   + This take is somewhat similar to what I'm going for with my [[fairness-project]], except that I don't think of markets as the solution. We're both thinking that these algorithms are affecting scarcity, but I'm tackling this slightly differently. It's all about the feedback mechanisms, which is also something that he hinted at.
 - [[discretization-of-gradient-flow]]