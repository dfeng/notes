---
tags:
 - lit_review
 - networks
---

# Noisy Networks

src: [@Chang:2018uw], [@Li:2020uy]

A common task in network analysis is to calculate a network statistic, from which some conclusion can be gleaned. Oftentimes you'll have a table of typical summary statistics for your graphs, and they can be either (average) node-level statistics (like centrality), or global statistics (like edge density). There is usually not much import to those tables -- mainly used just so people can get a feel for the graph/dataset.

Sometimes though you're interested in some particular real-valued functional of the network. For instance, in my previous work, we were interested in unbalanced triangles. Another statistic, very relevant to #coronavirus, is the branching factor, or $R_0$, of a contact network (see [@Li:2020uy] for more details).

Whenever you have a statistic, you might want to know two things: how confident are you of this value, or what is the "variability" of this statistic; and whether or not this statistic is *significant*. Let's take this latter approach first. The idea here is that we have some hypothesis that we want to test, and so we need to first construct a null hypothesis, and the statistic is the mechanism (or measure) through which which we can judge the significance of our test. In the former case, all that we really want is just a set of confidence intervals for our statistic. It's almost the same thing, except there is no hypothesis -- all that is required is a random model that lets you define the form of the noise, and therefore construct confidence intervals.

So in fact, there is a subtle difference between these two things. For the most part, I have been thinking about the latter (hypothesis testing), but attaching confidence bands to point estimates in networks is also an interesting research question.

## Noise Model

The noise model analysed in these papers is very straightforward. It essentially follows the paradigmatic signal + noise model in statistics.
Fix a graph $G$ (defined by its adjacency matrix $A$), which we think of as the ground truth. Then the noisy observation (adjacency matrix $\widetilde{A}$) are produced by random bit-flips (0 to 1 or 1 to 0). For simplicity, the random bit-flips are modelled with only two parameters: $\alpha$, the Type-1 error, and $\beta$, the Type-2 error. That is,

$$
  P(\widetilde{A}_{ij} = 1 \given A_{ij} = 0) = \alpha, \quad
  P(\widetilde{A}_{ij} = 0 \given A_{ij} = 1) = \beta,
$$

Thus, you've reduced the whole problem to estimating two parameters.^[Which feels a little extreme.] Unsurprisingly, you use #method_of_moments to estimate them.
However, because you have two parameters, you're going to need more than one sample (i.e. two).

Actually, I think it's a little more complicated than that (it's not really a degree-of-freedom thing).
One might think that with a large enough graph, you can probably split in two, and estimate the parameters on each half (and they'd be independent). However, I suspect the problem is that the model is a little too general, so if your $\alpha, \beta$ are too large, then you can't really guess anything.^[i.e. you have no control of what's signal and what's noise.]
My guess is that if you have two samples, then you have access to the intersection/set-difference, which makes it more feasible to estimate things.
But the thing is that this then relies on the intersection.

This makes me think that a) if you restrict the $\alpha, \beta$ to be suitably small, then you can probably be okay with one sample; and b) this model is actually pretty restrictive.^[I mean, in terms of the space of possible samples it is fine, but I guess like any model, you really don't want your results to depend so much on the assumptions.]

This is similar to the stochastic blockmodel, in that these parameters are really just nuisance parameters. In that model, you can actually estimate many things without actually knowing these nuisance parameters.

<Note>
It might seem weird to fix a graph. Clearly I cannot be too against this notion, since the test I propose also assumes a fixed *graph*. However, in that particular setting, I felt that was the best option. Not something that I thought was particularly realistic (but the alternatives, considering parametric models seemed even more riddled with problems).

In my opinion, this particular model must be considered together with the particular application. A concrete example would be protein networks. I don't know how these datasets are generated, and so it is unclear to me if such a noise model would be an accurate representation. The key thing here is that this is how we're modelling the multiple draws/samples.
</Note>

## A Better Model?

Two things come to mind. First is model-fitting and checking, though not necessarily singularly focused on this particular noise model. As I've said before, almost all network models are a terrible *model* for real-life data, especially the parametric ones. This particular model is technically parametric, but very different. So what we want are diagnostic checks to see how conformal our data is to the models. Since this procedure utilises the fact that you have multiple samples, then that also means that you probably should be able to use that for diagnostics.

Along a similar line, it seems that what we would want is a more *robust* version of this noise model. Or, another way to think about this is that, what you want are estimators that are more robust to the model assumptions.^[like median for measure of centrality not assuming normality in the errors.] I'm not really sure what the form of this would be: something a little more non-parametric?

If we are interested in the application of contact networks, then it might be fruitful to consider in isolation, and come up with a particular noise model that we think suits this dataset.^[and potentially the paper could be a general type of paper that we can then demonstrate specialising to different data types.]

