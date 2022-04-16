---
tags:
  - machine_learning
  - from_paper
---

# Dataset Bias

src: [@Tommasi:2015tn]

Machine learning fundamentally operates by finding patterns in datasets.^[I always knew that datasets were biased (especially given the whole fairness problem), and this leads to various problems, but I didn't realise this was a whole field of study. Fascinating.] As such, the particulars of the dataset that you train on will affect what possible models can be learned.

Focusing on visual data for the moment, it is clear that, even while we are in the era of big data, most datasets cannot possibly capture every possible facet of visual information,^[which ties into the problem of self-driving cars whereby your dataset can't possibly have every single possible circumstance, and thus it is these way off in the tail situations that cause the most headache, much like what people like Taleb always talk about.] and so someone has to contend with the ways in which there are blind spots or biases as a result of the particular curation of data.

**Causes**:

 - **capture bias**: things like POV, lighting condition, actual device used;
 - **label bias**: this is mainly a problem with supervised learning, as you often have explicit labels (maybe with a bounding box), and there is no notion of ambiguity or subtlety in the labels;
 - **negative bias**: which again is about supervised learning and simply noting all other possible categories not in the dataset.

So now we know that we have all these problems with the coverage of the dataset. Ultimately though, the actual thing we care about is *generalisation* performance, or basically how well this does out-of-sample. After all, even if your model has all these issues, if it is *intelligent* enough to do well on out-of-sample things, then its sort of a moot point.

**Key terms**:

 - **domain shift**: general term to describe the fact that the training data probability model $(X,Y)$ changes from train to test. In particular, it encompasses changes in $P(Y \mid X)$, $P(X)$ or even $P(Y,X)$.
 - **covariate shift**: when the distribution of the covariates change
   + theory: source ($S$) and target ($T$) operate in the same space ($X$ input, $Y$ output). *conditional* distributions are the same: $P_S(Y \mid X) = P_T(Y \mid X)$ (which essentially says that the model is intact); but *marginal* distribution has changed: $P_S(X) = P_T(X)$.
 - **sample selection bias**: same thing as covariate shift?? in my mind sample selection bias is more specific case of covariate shift, that happens as a result of improper selection, whereas covariate shift can be something natural.
 - **class imbalance**: specific to classification, when you have poorly represented classes (so here we're talking about the $Y$'s)

## A Statistician's View

I think ML people take a very practical view of this problem. Yes, there is talk of conditional/marginal, but I think those are ultimately just convenient words. Statisticians rarely worry about all these problems, mainly because oftentimes the data is *observational*, as opposed to being *curated* for the purposes of training a model. This here is another difference between [[statistics-vs-ml]].