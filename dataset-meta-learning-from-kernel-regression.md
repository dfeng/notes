---
tags:
  - from_paper
  - machine_learning
  - neural_tangent_kernel
---

# Dataset Distillation

 - src: [@nguyen_dataset_2021]
	 - [slides](https://rosanneliu.com/dlctfs/dlct_210730.pdf)

You have [[knowledge-distillation]], the goal of which is to compress models down while retaining the same performance. A similar but orthogonal problem is to compress data down while retaining the same "performance" (an algorithm trained on this compressed dataset would reach the same performance as if it were trained on the original dataset).

One (classic) approach is [[coresets]], which seek to find a subset of the full dataset such that queries have approximately the same answer on both datasets. These kinds of summarisation techniques can also be framed in terms of optimising a submodular function (submodularity being the *discrete* analog of convexity), and there is a whole field of applying this topic to machine learning. Finally, one can use (very classic) unsupervised methods like $k$-means clustering to form cluster centers that can be used as representative samples. A problem with the first two methods is that the distilled dataset must be a subset, which might be restrictive (though sometimes being restrictive is a good thing?). The general problem with these aforementioned methods is that they are usually heuristic-based; as such, there are no guarantees on downstream tasks (validation loss) (again, however, this might actually be a good thing, in that we aren't too focused on a particular task).

Dataset distillation solves these problems by turning this into a learning problem, where we actually learn a new dataset so that it does well in the downstream task (i.e. these are the "parameters" that we're going to optimise over). This new dataset is not a subset of the original dataset (in theory it could be, but as we'll see they end up being very different).

I feel like there's something interesting here for the psychologists. They're always looking to find the *archetypal* image for a class.