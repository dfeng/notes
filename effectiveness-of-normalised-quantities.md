---
tags:
 - matrix_completion
---

# Effectiveness of Normalised Quantities

In the context of matrix completion, it is known that the *nuclear norm*, being a convex relaxation of the rank,^[You can think of these as the matrix version of the $l_1$ to $l_0$ duality.] has very nice low-rank recovery properties. However, in sparser regimes (not enough observed entries), the nuclear norm starts to falter. This is because there is sufficient ambiguity (equivalently, not enough constraints on the convex program).^[Recall that the convex program is something like $\min \|W\|_{\star} \text{ s.t. } P_{\Omega}(W^\star) = P_{\Omega}(W)$, where the $P_{\Omega}$ is the convenient operator to extract the observed entries.]
Thus, minimising the nuclear norm doesn't actually recover the true matrix.

However, it turns out that simply normalising it works wonder.^[It's non-convex, though, so we're on longer talking about using a convex solver. Here I am talking about running a gradient method to optimise this (and for some reason ADAM is far superior).] Consider the penalty, $L_{\star/F}$, which is given by
$$
\frac{L_1}{L_2} = \frac{ \sum \sigma_i }{ \sqrt{ \sum \sigma_i^2 } },
$$
where $\sigma_i$ are the singular values. The idea here is that we're interested in the relative size of our singular values, not the absolute sizes. For instance, one way to decrease the nuclear norm penalty is to apply a dampening constant uniformly over the matrix entries. This doesn't change the rank (or effective rank, which usually care about relative sizes), and so such a direction shouldn't be promoted. This normalised penalty is obviously invariant to this.

<Note>It's probably instructive to compare this to sparse linear regression. </Note>

Compare this to the gradient accelerator ADAM, which, in a nutshell considers a normalised gradient sequence. That is, the update step is given by^[Granted, I am hiding some details, like how the summation is actually weighted to prioritise the most recent gradient, the division is element-wise, plus some computation tricks to ensure no division by zero.]

$$
\frac{ \sum g_t }{\sqrt{\sum g_t^2}},
$$

where $g_t$ is the gradients of the loss. The reason I bring up these two quantities is that it turns out that only by using these two methods do we get something interesting coming out. It could very well be coincidence that they have a similar form, but I suspect that perhaps normalised quantities are somehow superior in the deep learning regime (and batch norm, see [[exponential-learning-rates]]).

## Parallels?

Originally I thought this felt a lot like our scores in statistics, but upon further inspection I realised that this would only hold if you have assume zero mean, since the entries aren't actually centered (and no $\sqrt{n}$). The problem there is that all the singular values are positive, so it seems sort of weird to say that this is essentially a $Z$-score of the null hypothesis that these were drawn from a zero-mean normal distribution.