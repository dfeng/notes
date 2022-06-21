# Generalisation Literature Review


[Stability and Generalization](https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf)

> We explore here a different approach which is based on *sensitivity analysis*. Sensitivity analysis aims at determining how much the variation of the input can influence the output of a system. It has been applied to many areas such as statistics and mathematical programming. In the latter domain, it is often referred to as perturbation analysis (see Bonnans and Shapiro, 1996, for a survey). The motivation for such an analysis is to design robust systems that will not be affected by noise corrupting the inputs.
> 
> In this paper, the objects of interest are learning algorithms. They take as input a learning set made of instance-label pairs and output a function that maps instances to the corresponding labels. The sensitivity in that case is thus related to changes of the outcome of the algorithm when the learning set is changed. There are two sources of randomness such algorithms have to cope with: the first one comes from the sampling mechanism used to generate the learning set and the second one is due to noise in the measurements (on the instance and/or label).

They focus on sampling randomness, which is similar. And in general, the notion of stability sounds similar. Though it sounds like usually stability refers to robustness to signal noise. The randomness has to come from somewhere

Leave-one-out error is the classic estimator, though they're all *approximations* of the same thing: the risk/generalisation error.

Additionally, there's always a distribution, and we are drawing iid from that distribution.

[Understanding Deep Learning (Still) Requires Rethinking Generalization](https://dl.acm.org/doi/pdf/10.1145/3446776)

> As we point out in this work, uniform stability of a learning algorithm is independent of the labeling of the training data. Hence, the concept is not strong enough to distinguish between the models trained on the true labels (small generalization error) and models trained on the random labels (large generalization error).

