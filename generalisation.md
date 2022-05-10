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
So this is saying, we want to learn an algorithm that minimises leave-one-out error. Actually, that is not what we want, for the following handwavy reason (which hopefully I can convert into something concrete): the leave-one-out problem is a little too easy, since probably the best you can do is just find the closest example in the rest of the dataset (or something like $k$-nn). When you move to larger subsets for the test set, you run into the more difficult problem whereby you can't really just go with the local solution; or rather, you sort of have to learn something that works well with less data.

There is a sort of nice correspondence between mini-batch SGD and this empirical cross-validatation risk, the latter which looks something like
$$
\arg\min_\theta \mathbb{E} \left( L(h_{\theta, X_{C}}(X_{C'}), Y_{C'}) \right),
$$
which you can approximate by sampling from the random variable each time, meaning we should minimise $L(h_{\theta, X_{c}}(X_{c'}), Y_{c'})$ for some randomly drawn $c \in C$. Meanwhile, at each step of SGD, we also draw a batch $c \in C$ and then optimise $L(h_{\theta}(X_{c'}), Y_{c'})$. Here, it's sort of like, before this step, our hypothesis was constructed from $X_{c}$ , and so it sort of works similarly.

Okay, I guess I'm getting confused on which level we're doing the analysis. What I'm trying to get at is that our goal should be to construct a standardised procedure for creating hypotheses (that only depend on the training data) that minimise the risk. So really, what we have is actually instead
$$
\arg\min_\mathcal{A} \mathbb{E} \left( L(\mathcal{A}(X_{C})(X_{C'}), Y_{C'}) \right),
$$
since the goal is to learn a procedure, not parameters. And my argument is that, the (close-to) optimal procedure $\mathcal{A}$ is probably one that mirrors the loss. That is, taking the following $\mathcal{A}$: choose parameters via
$$
\arg\min_\theta \mathbb{E} \left( L(h_{\theta, X_{C}}(X_{C'}), Y_{C'}) \right),
$$
where the $C$ are subsets of the original training data $\mathcal{X}_C$ (and now the subscript doesn't have to be exactly $X_c$, since we technically get access to the whole thing). I can probably prove that this procedure is optimal, right? Actually, I guess the tricky part is whether or not making the $X_c$ more relaxed can give you better results. So really, I'm doing the same procedure, just on a smaller set. Clearly if we were doing LOO, then the results would be basically exactly the same, which makes it not interesting. But if the size of the test set is small in relation, it's still very close to optimal...