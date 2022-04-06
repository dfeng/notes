---
tags:
 - machine_learning
---

# Self-supervised Learning

In the AI podcast with LeCun, he points out that self-supervision is much easier in language tasks (think BERT and the masking problem there, whereby you hide 15% of words, which the model must the guess), since there it's just a classification problem, and quantifying your uncertainty is straightforward. On the other hand, doing self-supervised learning with vision tasks, images, is much trickier, for the simple reason that you don't really have uncertainty anymore. This gets us to [[classification-vs-regression]], sort of!