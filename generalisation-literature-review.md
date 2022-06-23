
# Generalisation Literature Review

[@bousquet2002stability] : this seminal paper introduces the notion of *uniform stability*.

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
where $S^{i}$ means replacing the $i$-th term with a new sample $z_i'$. The difference ends up just being deletion vs replacement. The first line is mostly just a reparameterisation trick. You can also show (using triangle-inequality) that stability wrt deletion is a stronger condition than replacement, since it implies it).

>  As seen in previous sections, our approach allowed to derive bounds on the generalization error from the empirical and leave-one-out errors which depend on the stability of the algorithm. However, we noticed that the bounds we obtain for the two estimators are very similar. This readily implies that the method is suited to the study of algorithms for which the empirical error is close to the leave-one-out error. There is thus no hope to get good bounds for algorithms which simply minimize the empirical error since their empirical error will be very much optimistically biased compared to their leave-one-out error.
> 
> This means that, in order to be stable in the sense defined above, a learning algorithm has to significantly depart from an empirical risk minimizer. It thus has to accept a significant number of training errors (which should however not be larger that the noise level). In order to generalize, these extra training errors will thus be compensated by a decrease of the complexity of the learned function.

They note that algorithms that satisfy stability end up having similar empirical and leave-one-out errors (which can be seen from the above lemma, and they show it formally with proper bounds). However, this runs counter to the intuition that algorithms minizing empirical error have a bias, whereas leave-one-out doesn't. Thus, the conclusion is that in order to have stability, you have to use regularized algorithms.

[@Zhang:2016ve] 

> As we point out in this work, uniform stability of a learning algorithm is independent of the labeling of the training data. Hence, the concept is not strong enough to distinguish between the models trained on the true labels (small generalization error) and models trained on the random labels (large generalization error).

A key point is that, all the above work on stability is clearly not the right concept, since it doesn't apply to the nice random label experiment here.

[@pmlr-v48-hardt16] : Unfortunately, this work here, which shows that SGD is algorithmically stable, also uses the same concept, so also can't explain generalisability.

[@kawaguchi2017generalization] :