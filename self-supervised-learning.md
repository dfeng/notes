---
tags:
 - machine_learning
---

# Self-supervised Learning

### Text vs Images

In the AI podcast episode with LeCun ([link](https://lexfridman.com/yann-lecun/)), he points out that self-supervision is much easier in language tasks (think BERT and the masking problem there, whereby you hide 15% of words, which the model must the guess), since there it's just a classification problem, and quantifying your uncertainty is straightforward. On the other hand, doing self-supervised learning with vision tasks, images, is much trickier, for the simple reason that you can't really deal with uncertainty. For instance, you can mask out portions of an image, but now you're dealing with a regression problem (which brings us back to [[classification-vs-regression]]).

One problem


## Representation/Evaluation

What exactly is an effective representation? Alternatively, how do we evaluate these learned representations?

The straightforward answer is to just look at how useful these learned representations are on downstream tasks (i.e. how helpful it is for [[transfer-learning]]). A widely used evaluation protocol (see )

## Literature Review

Exploring Simple Siamese Representation Learning