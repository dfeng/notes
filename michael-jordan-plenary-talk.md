---
tags:
 - from_talk
 - statistics
 - economics
 - data_science
---

# Michael Jordan Plenary Talk

Our MJ gave a plenary talk at the SIAM conference on the mathematics of DS ([link](https://meetings.siam.org/sess/dsp_programsess.cfm?SESSIONCODE=69238)).

## Summary

The next set of (interesting) questions from machine learning will be "decision-based". Consider recommendation systems: what if you recommend everyone the same restaurant (relevant [article](https://hdsr.mitpress.mit.edu/pub/2imtstfu/release/6))?^[Similar problem to route suggestions in Maps.] This is untenable, and so maybe we should take a leaf from Engineering and do some type of *load-balancing*?

Or, even better, why not just create a market. Here we have the intersection between machine learning and microeconomics. The essential issue here is *scarcity*, which therefore requires a market. The question is then how do algorithms fit into this? One could take inspiration from matching algorithms (e.g. Match day for medical students). However, these require known preferences – usually in big data settings preferences are inferred. One could imagine adopting a bandit framework to do so.

In the second half, something more theoretical and unrelated: [[discretization-of-gradient-flow]]

## Thoughts

This take is somewhat similar to what I'm going for with my [[fairness-project]], except that I don't think of markets as the solution. The general idea is that we usually think of algorithms as doing something on a single data point – in some sense the actions performed as a result of the machine learning model exist in parallel universes, independently. However, the reality is that we have scarcity, whether it be college placements in the fairness problem, or restaurant seats in the recommendation problem. And so we have to start incorporating this detail into our implementations.

In both cases we're also thinking about *feedback mechanisms* (a little like [[reflexivity]]).