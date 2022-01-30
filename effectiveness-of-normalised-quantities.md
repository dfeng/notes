---
tags:
 - matrix_completion
---

# Effectiveness of Normalised Quantities

In the context of matrix completion, it is known that the *nuclear norm*, being a convex relaxation of the rank,^[You can think of these as the matrix version of the $l_1$ to $l_0$ duality.] has very nice low-rank recovery properties. However, in sparser regimes (not enough observed entries), the nuclear norm starts to falter. This is because there is sufficient ambiguity (equivalently, not enough constraints on the convex program).^[Recall that the convex program is something like $\min \|W\|_{\star} \text{ s.t. } P_{\Omega}(W^\star) = P_{\Omega}(W)$, where the $P_{\Omega}$ is the convenient operator to extract the observed entries.]
Thus, minimising the nuclear norm doesn't actually recover the true matrix.

However, it turns out that simply normalising it works wonders. Consider the penalty, $L_{\star/F}$, which is given by

$$
\frac{L_1}{L_2} = \frac{ \sum \sigma_i }{ \sqrt{ \sum \sigma_i^2 } },
$$

where $\sigma_i$ are the singular values. The idea here is that we're interested in the relative size of our singular values, not the absolute sizes. Using the nuclear norm as a penalty means that you can simply push down all the entries of your matrix to decrease your penalty, without changing the "rank".

<Note>Something that I haven't really wrapped my head around is why this is not a problem for things like sparse linear regression. My intuition tells me that it's probably because of the under-determined nature of matrix completion that makes it a different problem. After all, this behaviour only surfaces in the low-data regime.</Note>

Compare this to the gradient accelerator ADAM, which, in a nutshell considers a normalised gradient sequence. That is, the update step is given by^[Granted, I am hiding some details, like how the summation is actually weighted to prioritise the most recent gradient, the division is element-wise, plus some computation tricks to ensure no division by zero.]

$$
\frac{ \sum g_t }{\sqrt{\sum g_t^2}},
$$

where $g_t$ is the gradients of the loss. The reason I bring up these two quantities is that it turns out that only by using these two methods do we get something interesting coming out. It could very well be coincidence that they have a similar form, but I suspect that perhaps normalized quantities are somehow superior in the deep learning regime.

<Note>
Experiments show that it is the denominator that is more important than the numerator. So, really, what seems to be important is that you're normalising each gradient parameter by the *magnitude* of the gradient. I feel like there's something statistical about all this that we might be able to learn.

I tried to do something about the Hadamard product, but my feeling is that this cannot be captured through matrix operations alone.
</Note>

## Parallels

Originally I thought this felt a lot like our scores in statistics, but upon further inspection I realised that this would only hold if you have assume zero mean, since the entries aren't actually centred (and no $\sqrt{n}$). The problem there is that all the singular values are positive, so it seems sort of weird to say that this is essentially a $Z$-score of the null hypothesis that these were drawn from a zero-mean normal distribution.