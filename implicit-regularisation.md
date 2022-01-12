---
tags:
 - implicit_regularisation
---

In the spirit of [[envisioning-the-future]], let's think about the key questions in the area of implicit regularisation.

The whole impetus for implicit regularisation is an attempt to explain the phenomenon of how neural networks rarely (if ever) overfit, even without explicit penalties. Or at least that's my interpretation of the goal. Having understood the exact mechanisms, one would hope that the insights should lead to more efficient algorithms.

In fact, that's exactly the hope that [[penalty-project]] provides: in a very simple example, we see that we can replace implicit by explicit, to great effect.

In some sense, it's all about trying to understand why deep learning is so effective, but there's this *implicit* idea that somehow there are these biases, particularly in the choice of the gradient algorithm as well as the loss function itself, that are leading to choosing better generalising minima.
In other words, this is basically one approach to explaining the generalisation conundrum.

Looking at the literature, people have been focused on trying to show that gradient descent is favouring solutions with smaller norms (and thankfully, solutions with smaller norms have better generalisation performance).^[In fact, this was the impetus for looking at some other form of low-rank-ness, as I felt that it just so happens in many cases that good generalisation equates to low norm/minimum rank, say.]

 - One conclusion might be that the effects of implicit regularisation are a *black-box* that cannot be replicated by explicit regularisers. But I think that would be a sad conclusion, as it would essentially say that there is basically no use to all this research.
 - I hold the more hopeful view that this analysis should lead to better training and understanding generalisation, by replacing such black boxes with explicit renditions.
 - Another possibility is that a lot of the things that we've concluded about implicit regularisation are only applicable in the narrow problem of matrix completion. Though I think you see similar things in linear regression right? So I guess that shouldn't be true.
 - An important question is how things translate to more general settings, when you're dealing with non-linear.

 - I really think that one of the lessons of deep learning is the [[unreasonable-effectiveness-of-adam]] (or [[effectiveness-of-normalised-quantities]]). That is, you should always pick normalised terms over convex terms, because convexity is overrated.

## Story So Far

By focusing on linear neural networks, we can disentangle the over-parameterisation effect from the expressivity of the model. Thus, what can we say about over-parameterisation? It appears that, for any sort of problem where the weights form a full-product matrix (so matrix completion, matrix sensing), then running GD will favour low-rank matrices.

It is very tempting to say that there is some penalty being penalised.
[@Arora:2019ug] show that the nuclear norm is not what's going on, since they cleverly find a situation where the nuclear norm minimiser does not agree with the minimum rank minimiser.
We show that actually the normalised nuclear norm does the trick.

The key thing here is that, we don't believe that over-parameterisation is equivalent to this explicit regulariser. In fact, there seems to be some accelerative effect going on, or some kind of smart normalising thing, so clearly that too cannot be captured by a simple norm alone.
What we want to show is that this is the most *reasonable* proxy (and it has nice gradient properties).

Recent paper [@Razin:2020up] suggests that the implicit regularisation is actually the *rank* itself. This doesn't really make much sense: the rank is discrete, and as such is not particularly useful. If on the other hand you decide to look at its continuous version (like effective rank), then it's just a question of which proxy do you pick, and at that point you might as well just pick ours, since you can actually take gradients.

## Next Steps

The whole purpose of this, as we recall, is to say something about generalisation for deep learning, which is complicated by various architectural features and non-linear components. In such cases, it is no longer possible (I don't think?) to disentangle the over-parameterisation from the expressivity. But my feeling is that this is just a technical nuisance. The spirit should still remain.

In our very special setting, we can show exactly what effect over-parameterisation is doing, and that such a method perfectly solves the problem (so there's basically no tuning/initialisation worries).
However, once you move into more complicated models, my feeling is that this *surprise* that deep learning does so well in terms of generalisation is no longer such an exact/perfect situation. What I mean is that there's a lot of tuning going on in the background to make these things generalise, but the surprise is still there: it's still surprising that with just a little bit of tweaking, you're able to find the solution that does generalise.

The point of this is that as you get into more complicated models, this generalisation performance is more of an *art*, and, as such, we should expect that the resolution to the conundrum should also be more *artful* than the precise, simple, explicit way that was laid out in the cited papers.

```{remark}
What would be great would be some kind of *information* or *sparsity* measure that holds for general models, but when specialised down to linear neural networks, collapses to the singular values of the product matrix.
```

One of the worries that I have is that all of this just doesn't really generalise past linear neural networks, for the simple reason that a lot of the success of deep learning comes from these carefully constructed architectures for a specific data type, which suggests that there is something inherent in the data itself (some inductive bias in the distribution of pixels, for instance), and which this kind of theory has no way of capturing. ^[This was inspired by the last paragraph of this blog [article](http://www.offconvex.org/2018/02/17/generalisation2/): "I don’t see how to use the above ideas to demonstrate that the effective number of parameters in VGG19 is as low as 50k, as seems to be the case. I suspect doing so will force us to understand the structure of the data (in this case, real-life images) which the above analysis mostly ignores."]

Or, another way to put this is that, these previous results suggest that any old over-parameterised neural network should have all these nice sparsity-inducing, acceleration-type properties. Though, maybe the key ingredient is: some sort of alignment with the kinds of sparsity that the data possesses.^[This must somehow relate to the whole sparsity of image data in the Fourier domain.] In other words, this notion of convolution (which I imagine was biologically inspired) might already have been optimised such that gradient methods^[hmmm, but biology doesn't work via gradients, so not sure if this makes sense] produce sparsity of the right kind.

