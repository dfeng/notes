---
tags:
---

# Generalisation

In statistics, what you have is some mythical "population", from which you are taking samples, usually in an i.i.d. fashion (think classic linear regression where $y = X\beta + \epsilon$). In such settings, there's really not much to worry about in terms of "generalisability" – the thing you have to worry about most is the noise, and ensuring that you don't overfit to it. Granted, there's the whole robust statistics field that tries to be robust to model mis-specification (usually in the distribution of the error), which is sort of like "generalisability".

On the other extreme you have the topic of domain shift, and being able to "generalise" from that. However, that feels like an intractible problem in its generality (though you can probably come up with nice heuristics that somehow try to infer the shift from the data?).

What I'm interested in is the more manageable version. I don't really want to put it into theory based on data distributions and samples, as I think that restricts things. In a handwavy way, I want to be able to "generalise" in the sense that I should be good with the current data distribution, and perhaps a little bit robust to slight changes to it. Or, I guess another way to put it is to just let the data speak for itself.

Suppose I have a large dataset $\mathcal{X}$, and let's just designate a partition of train and test set ($\mathcal{X}_{train},\mathcal{X}_{test}$). This is going to be more akin to sample-without-replacement kind of statistics (or, let's just forget about statistics for now). Actually, I don't want to designate a fixed partition, because then that means I need to model/explain what's the difference between train and test. Instead, all I say is that the "randomness" comes from the partition. I don't talk about data distributions – all I have is some fixed $\mathcal{X}$. Then, very much similar to cross-validation, the goal is to have a learning algorithm that takes as input the training data and produces a function $\mathcal{A}: \mathcal{X}_{train} \mapsto \mathcal{F}$. Then, the (only) goal is to minimise $\mathbb{E}\left[L(\mathcal{A}(\mathcal{X}_{train})(\mathcal{X}_{test}),\mathcal{Y}_{test})\right]$, where crucially, the randomness comes only from the partitioning function.

Is there anything you can do with this "theory"? The reason you sort of need a data distribution is because you need some kind of "smoothness" or "consistency" in $\mathcal{X}$. But perhaps the way I've set it up, it doesn't really matter – if there is no consistency, then no model is going to work anyway.

I guess you could go to the extreme, leave-one-out, and simply ask to minimise
$$
\sum_{i=1}^{n} L(\mathcal{A}(\mathcal{X}_{-i})(x_i), y_i).
$$
So this is saying, we want to learn an algorithm that minimises leave-one-out error.