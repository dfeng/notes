---
tags:
 - interpolation
 - statistics
 - machine_learning
---

# Classification vs Regression

## Alex's Take

One of the nice things about classification is that, really, the output space is $(-\infty, \infty)$ per class, and so this gives neural networks a lot of room to work with. In particular, if you want to be more confident about a particular class, all you do is just push up the output. It's all very *crude* (which is a good thing)! At the same time, you have ReLU based MLPs that only operate in the positive domain. This part I'm not too sure about...

Meanwhile, regression is incredibly precise. You have to get the output to 0.75, say. That's it. Depending on the loss, you can be penalised more for being further away, but somehow it feels more restrictive.