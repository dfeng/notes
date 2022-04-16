---
tags:
 - networks
 - research
 - statistics
---

# Dynamic Graph Models

The traditional way of thinking about networks is to treat them as essentially fixed, and samples from some generative model. Of course, we all know that networks don't just spontaneously appear. That being said, a) collecting the entire history of a network's evolution to its current state is often impossible, and b) dynamic models introduce too many more degrees of modelling freedom, so the purists generally shy away from it.

A useful dynamic model is one where the dynamics is fairly simple, and yet interesting global features still manifest themselves (in the spirit of [[complexity-theory]]). The classic example of this is the Preferential Attachment (PA) model, which, by a very simple *rich-get-richer* adjustment to the Uniform Attachment (UA) model creates a power-law degree distribution. A simple description of these models is, at each time step $t$, we introduce a new vertex $v_t$, and we add $m$ new edges from this new one.^[i.e. each vertex has out-degree $m$.] The probability that an existing vertex has an edge to this vertex is either uniform (UA), or weighted by its current degree (PA),^[Something that I only just realised after reading the wiki entry on the BA model is that they frame it thusly: you need both PA and growth for there to be scale-free structure, where growth simply means that the size of the network is growing.]

$$
P(A_{v_t, v_i}) = \frac{d_i}{\sum d_i}, \quad \forall i \in E.
$$
Thanks to [Bubeck](https://blogs.princeton.edu/imabandit/2014/03/30/on-the-influence-of-the-seed-graph-in-the-preferential-attachment-model/), a completely different view of PA models is to focus on the temporal/growth aspect of it -- by their very dynamics, we unlock a slew of different questions to ask. At a high level, the questions revolve around how much temporal information is recoverable from the final state?

For instance, we might be interested in determining the "seed" of a network^[You can adjust the model by starting with a fixed seed network (instead of a single node).], e.g. to figure out the early core of the *internet*. In the case of a pandemic, reverse-engineering the infection/contact network might give insight into the early actors. Of course, no real-life network follows a PA model exactly, which leads to the more practical question of, how much temporal information is recoverable even under a corrupted model?

A simple corruption is to simply inject random edges (sort of like having an ER graph embedded in the graph) -- the opposite being having missing data (or both!). There's probably an asymmetry here: adding edges makes retrieval more difficult than deleting edges. A simple extreme example: in the PA model with $m=1$, the resulting graph is always a tree, which remains true when deleting but not when adding at random. Thus, any algorithm that relies on the tree breaks down.

## Existing Work

The first problem (via this [blog-post](https://blogs.princeton.edu/imabandit/2017/01/01/guest-post-by-miklos-racz-confidence-sets-for-the-root-in-uniform-and-preferential-attachment-trees/)) involves asking questions about the seed graph (or the root). In a nutshell, the *centroid* of a tree, which is defined as the vertex whose removal results in the minimum largest component, is actually a good estimate of the root. Proving such a statement utilises the probabilist's favourite home appliance, the Polya Urn.

![The Centroid (1)](https://blogs.princeton.edu/imabandit/wp-content/uploads/sites/122/2017/01/polya_blog-768x459.png)

A similar problem (older [blog-post](https://blogs.princeton.edu/imabandit/2014/03/30/on-the-influence-of-the-seed-graph-in-the-preferential-attachment-model/)) looks at the question of whether or not the *seed* graph has any influence (in the limit). Formally, we consider if the total variation distance between the two limiting distributions of two different seeds is bounded away from zero. This is a weaker requirement, since being able to recover the seed implies it has influence.

This line of inquiry can also be framed as follows: if we think about social networks, then what you might be interested in is this notion of the early-bird advantage – just by being there early, you get outsized returns (degree). Suppose people enter a network with the object of maximising that return. Then it almost becomes something like a multilevel marketing (pyramid) scheme.

## Open Problems

1. Our intuition tells us that the *network effect* is definitely something that advantages people who are earlier to a platform. In a very similar vein to the *rich-get-richer* scheme, being early is essentially synonymous with being rich. However, it needn't be that way. I think it might be useful to try to come up with a model that is essentially arrival-time agnostic, i.e. you have exchangeability at the node-level, which is something you generally get for free when you're doing generative static network models, but is explicitly unavailable for dynamic models. Having such a model might help us elucidate the structural differences between two scale-free, dynamic models that differ on that one point.
