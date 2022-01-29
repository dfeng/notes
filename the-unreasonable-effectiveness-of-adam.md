---
tags:
 - optimisation
 - gradient_descent
---

# The Unreasonable Effectiveness of Adam

## Intuition about Adam / History

We talk about gradient descent (GD), which is a first-order approximation (via Taylor expansion) of minimising some loss, and Newton's method (NM) is the second-order version. The key difference is in the *step-size*, which, in the second-order case, is actually the inverse Hessian (think curvature).

Nesterov comes along, wonders if the GD is *optimal*. Turns out that if you make use of past gradients via momentum, then you can get better convergence (for convex problems). This is basically like *memory*. See also [[discretization-of-gradient-flow]].

What remains is still the *step-size*, which needs to pre-determined. Wouldn't it be nice to have an adaptive *step-size*? That's where AdaGrad enters the picture, and basically uses the inverse of the mean of the square of the past gradients as a proxy for step-size. The problem is that it treats the first gradient equally to the most recent one, which seems unfair. RMSProp makes the adjustment by having it be exponentially weighted, so that the more recent gradients are preferentially weighted.

Adam [@Kingma:2015us] is basically a combination of these two ideas: *momentum* and *adaptive step-size*, plus a bias correction term.^[I didn't think much of the bias correction, but supposedly it's a pretty big deal in practice.] One of its key properties is that it is scale-invariant (see [[effectiveness-of-normalised-quantities]]), meaning that if you multiply all the gradients by some constant, it won't change the gradient/movement. ^[Note here that the invariance of Adam is *over time*, while our penalty's invariance is over the parameters themselves.]

One interpretation proffered in the paper is that it's like a **signal-to-noise** ratio: you have the first moment against the raw (uncentered) second moment. Essentially, the direction of movement is a normalised average of past gradients, in such a way that the more variability in your gradient estimates, the more uncertain the *algorithm* is, and so the smaller the step size.

In any case, this damn thing works amazingly well in practice. The thing is that we just don't really understand too much about why it does so well. You have a convergence result in the original paper, but I'm no longer that interested in convergence results. I want to know about implicit regularisation.

## Adam + Ratio

Let's consider a simple test-bed to hopefully elicit some insight. In the context of the [[penalty-project]]: we want to understand why Adam + our penalty is able to recover the matrix. In our paper, we analyse the gradient of the ratio penalty, and give some heuristics for why it might be better than just the nuclear norm. However, all this analysis breaks down when you move to Adam, because the squared gradient term is applied element-wise.

This is why [@Arora:2019ug] work with gradient descent: things behave nicely and you are able to deal with the singular values directly, and everything becomes a matrix operation. It is only natural to try to extend this to Adam, except my feeling is that you can't really do that. Since we're now perturbing things element-wise, this basically breaks all the nice linear structure. That doesn't mean everything breaks down, but simply we can't resort to a concatenation of simple linear operations.^[Though, as we'll see below, breaking the linear structure might be why it's good.]

<!-- Thus, what you actually have the derivative of the $l_2$ loss that is going to keep observed entries the same, and then the derivative penalty loss is pushing the singular values around. -->
It's almost like there are two invariances going on: one keeps the observed entries invariant, while the other keeps the singular vectors invariant.

One **conjecture** as to why Adam might be better is: due to the adaptive learning rate, what it's actually doing is also relaxing the column space invariance. But this is really just to explain why GD and even momentum are unable to succeed.

A more concrete **conjecture**: what we're mimicking is some form of alternating minimisation procedure. It would be great if we could show that we're basically moving around, reducing the rank of the matrix slowly, while staying in the vicinity of the constraint set.

## Intuition

Let's start with some intuition before diving into some theoretical justifications. If we take the extreme case of the solution path having to be exactly in our constraint set, then we'd be doomed. But at the same time, there's really not much point in your venturing too far away from this set. So perhaps what's going on is that you've relaxed your set (a little like the noisy case), and you can now travel within this expanded set of matrices. Or, it's more like you're travelling in and out of this set. I think either way is a close enough approximation of what's going on, and so it really depends on which provides a good theoretical testbed.

Now, in both our penalty and the standard nuclear norm penalty, the gradients lie in the span of $W$, which highly restricts the movement direction. One might be able to show that if one were to be constrained as above, and only be able to move within the span, then this does not give enough flexibility. Part of the point is that span of the initial $W$ with the zero entries is clearly far from the ground truth, so you really want to get away from that span.

## Generalisability

One of the problems here is that matrix completion is a simple but also fairly artificial setting. One might ask how generalisable the things we learn in this context are to the wider setting. For one thing, it's very unusual that you can essentially initialise by essentially fitting the training data exactly, though it turns out that this is okay here. This probably breaks down once you move to *noisy* matrix completion, but it's unclear if there's just a simple fix for that.

Secondly, matrix completion is a *linear* problem, and a lot of the reasons why the standard things might be failing is because they don't break the linearity. But once you move to a *non-linear* setting, then we might be equal footing to everything else. For instance, even when we start overparameterising (DLNN) the linearity also breaks down, freeing gradient descent from the span of $W$.

<!-- Theoretically, that essentially means that the main $l_2$ loss is actually just zero:^[Empirically we find that it doesn't really deviate from zero that much either.] $P_{\Sigma}(W^\star) - P_{\Sigma}(W) = 0$, leaving the penalty to do all the work in the gradient. This also suggests that the actual form of the loss, $l_2$, is inconsequential.

$$
\begin{align*}
  \nabla L(W) = \nabla R(W) = U D' V^\top
\end{align*}
$$

-->

<!-- Given that GD and Adam resolve to different solutions (with different generalization paths), it suggests that the non-convexity is not degenerate in this constrained set, and there are multiple optima. The question is then, how does Adam find the right one so often? -->

<!-- What's happening is the unobserved entries (originally set to 0) are being pushed around by the gradient of the penalty, in such a way as to reduce the size of the penalty (while keeping the observed entries essentially untouched), except that it is adaptive. The thing I need to wrap my head around is that there isn't really any *noise* in this case, so <mark>what exactly is the point of the adaptivity then?</mark> -->

<!-- Could it be that what's actually going on is that we just haven't tuned the learning rate for gradient descent correctly, which is why we see such good results for Adam and not for GD?^[Okay, I tried it for a range of learning rates, and it's basically the same thing. Phew!] -->

<!-- Thus, a simple reason why our penalty requires Adam is because GD keeps it in the same linear space (this was mentioned in passing in [@Gunasekar:2017vv]), whereas the adaptive learning rate is what allows Adam to get off the path. -->

<!-- But that still doesn't explain why our penalty is better than the nuclear norm, together with Adam. Here is where I hope the analysis in the [[202006171059]] paper might be useful. Somehow this whole combination is able to figure out how to push the singular values around. -->