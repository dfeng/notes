# Generalisation Literature Review


[Stability and Generalization](https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf)

> We explore here a different approach which is based on *sensitivity analysis*. Sensitivity analysis aims at determining how much the variation of the input can influence the output of a system. It has been applied to many areas such as statistics and mathematical programming. In the latter domain, it is often referred to as perturbation analysis (see Bonnans and Shapiro, 1996, for a survey). The motivation for such an analysis is to design robust systems that will not be affected by noise corrupting the inputs.
> 
> In this paper, the objects of interest are learning algorithms. They take as input a learning set made of instance-label pairs and output a function that maps instances to the corresponding labels. The sensitivity in that case is thus related to changes of the outcome of the algorithm when the learning set is changed. There are two sources of randomness such algorithms have to cope with: the first one comes from the sampling mechanism used to generate the learning set and the second one is due to noise in the measurements (on the instance and/or label).

They focus on sampling randomness, which is similar. And in general, the notion of stability sounds similar. Though it sounds like usually stability refers to robustness to signal noise. The randomness has to come from somewhere.

Leave-one-out error is the classic estimator, though they're all *approximations* of the same thing: the risk/generalisation error.
$$
R_{loo}(A,S) = \frac{1}{m} \sum_{i=1}^{m} l(A_{S^{\backslash i}}, z_i)
$$
The key idea is to define stability in terms of various kinds of bounds on the following:
$$
\mathbb{E}_z [ l(A_S, z)] - \mathbb{E}_z [ l(A_{S^{\backslash i}}, z)]
$$
In words, how does the error (with respect to a loss function, mind you, which may feel a little weird) change when you remove one datapoint in the training data. Then, one can prove that for algorithms that satisfy the stability bounds above, the empirical risk (or leave-one-out risk) is close to the true risk.

Additionally, there's always a distribution, and we are drawing iid from that distribution.

<Note>
My general feeling is that these results rely heavily on the iid aspect of the samples – meaning, for instance, that the leave-one-out risk is roughly the same thing as the empirical risk (calculated on the smaller dataset). However, this means all the analysis bypasses the actual interesting thing, which is the gap between the empirical risk and loo risk.
</Note>

A nice lemma on the bias of these terms compared to the true risk:
$$
\begin{aligned}
\mathbb{E}_S [ R(A,S) - R_{emp}(A,S)] &= \mathbb{E}_{S,z_i'}[l(A_S, z_i') - l(A_{S^i},z_i')] \\
\mathbb{E}_S [ R(A,S) - R_{loo}(A,S)] &= \mathbb{E}_{S,z}[l(A_S, z) - l(A_{S^{\backslash i}},z)] \\
\mathbb{E}_S[ R(A, S^{\backslash i}) - R_{loo}(A,S)] &= 0
\end{aligned},
$$
where $S^{i}$ means replacing the $i$-th term with a new sample $z_i'$. What's interesting is that the difference ends up just being deletion vs replacement. The first line is mostly just a reparameterisation trick.

You can also show (using triangle-inequality) that stability wrt deletion is a stronger condition than replacement, since it implies it).

[Understanding Deep Learning (Still) Requires Rethinking Generalization](https://dl.acm.org/doi/pdf/10.1145/3446776)

> As we point out in this work, uniform stability of a learning algorithm is independent of the labeling of the training data. Hence, the concept is not strong enough to distinguish between the models trained on the true labels (small generalization error) and models trained on the random labels (large generalization error).

