---
tags:
 - mathematics
 - gradient_descent
---

# Pseudo-inverses and SGD

- The Moore-Penrose pseudo inverse (which is often just called the pseudoinverse) is just a choice of multiple solutions that leads to a minimum norm solution
  + $\hat{\beta} = X^+ Y$
  + An obvious consequence, is that ridge regression is not the same as the pseudoinverse solution, even though they're obviously very similar
  + my feeling is that, for a particular choice of penalty, the solution should be same (since you should be able to reframe the optimization into
    *  $\min ||\beta||_2 \text{ s.t. } ||Y - X \beta ||_2 \leq t$
  + part of me is a little confused: if you can just define this pseudoinverse, then how come we don't use this estimator more often? clearly it must not have good properties?

- thanks to this [tweet](https://twitter.com/beenwrekt/status/1041724607911227392), realize there's a section in [@Zhang:2016ve] that relates to [@Bartlett:2020ck] [[benign-overfitting-in-linear-regression]], in that they show that the SGD solution is the same as the minimum-norm (pseudo-inverse)
  + the curvature of the minimum (LS) solutions don't actually tell you anything (they're the same)
  + "Unfortunately, this notion of minimum norm is not predictive of generalization performance. For example, returning to the MNIST example, the $l_2$-norm of the minimum norm solution with no preprocessing is approximately 220. With wavelet preprocessing, the norm jumps to 390. Yet the test error drops by a factor of 2. So while this minimum-norm intuition may provide some guidance to new algorithm design, it is only a very small piece of the generalization story."
    * but this is changing the data, so I don't think this comparison really matters – it's not saying across all kinds of models, we should be minimizing the norm. it's just saying that we prefer models with minimum norm
    * interesting that this works well for MNIST/CIFAR10
  + there must be something in all of this: on page 29 of [slides](https://www.stat.berkeley.edu/~bartlett/talks/201908Microsoft.pdf), they show that SGD converges to min-norm interpolating solution with respect to a certain kernel (so the norm is on the coefficients for each kernel)
    * as pointed out, this is very different to the benign paper, as this result is data-independent (it's just a feature of SGD)