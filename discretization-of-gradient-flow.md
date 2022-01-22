---
tags:
 - neural_networks
 - optimisation
---

# Discretization of Gradient Flow

Via [[michael-jordan-plenary-talk]], to this paper on [arXiv](https://arxiv.org/pdf/1905.07436.pdf).

You have gradient descent, which you can show under convex problems to have a convergence rate of $\frac{1}{t}$, whereas if you use Nesterov's accelerated gradient method gets $\frac{1}{t^2}$.^[And this rate is entirely independent of the ambient dimension of the space.]

If you take the limit of the step sizes to zero, then you're going to get some kind of differential equation. This is *gradient flow*. It turns out you can basically construct a class of [Bregman Lagrangians](https://arxiv.org/abs/1603.04245), which essentially encapsulate all the gradient methods.

You can solve the Lagrangians for a particular rate, and then out pops an differential equation that obtains that rate in continuous time. What's curious is that the *path* is identical across all these ODEs. Essentially you're getting path-independence from the rate, which suggests that this method has found an *optimal* path, and you can essentially tweak how fast you want to go along that path.

This would suggest that you could then get arbritrary rates for your gradient method. But it turns out that the *discretization* step is where things break. In fact, Nesterov already has a lower bound on his rate of $\frac{1}{t^2}$,^[The class of gradient methods are those that have access to all past gradients, I think.] so we know it can't do arbitrarily well. And it turns out that it does match the lower bound. The intuition is that the discretization suffers with curvature. If you go too quickly, then you're not going to be able to read the curvature well enough.

In other words, discretization is non-trivially different to continuous time. Which sort of makes sense, since in continuous time you have basically all the information.

Finally, in relation to the [[penalty-project]], this doesn't actually work for things like Adam, which we know to be amazing in practice. So, it seems like there's still work left to understand why on earth the adaptive learning rates work so well.