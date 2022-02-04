---
tags:
 - neural_networks
 - biologically_inspired
---

# Fast Weights

src: ?

Ordinary RNN/LSTM neural networks have two kinds of memory. The weights of the ordinary neural network can be thought of as the long-term memory,^[For some reason, I never thought of the weights as that. Actually, upon further inspection, it seems weird to me that we do this. When I think of a neural network and it's weights, I'm thinking usually about it as a compute engine, and these are just the current configuration that enables it to do things. Things are again getting a little philosophical/neuroscience, in that what exactly is being stored in our brains? Do we know how memory is stored?] while the *memory* hidden vector can be thought of as the short-term memory.

RNNs have a hidden vector^[which in class I relate to HMMs, basically as latent variables that can also be thought of as some form of short-term memory.] which gets updated at each recurrent step, so it's pretty *flaky*. LSTMs on the other hand try to make this memory more sticky by computing *increments* to the hidden vector, thereby allowing memory to persist for longer.

One would expect that something in between these two kinds of memory might be useful (more storage capacity than short-term, but also faster than long-term). 

Here it feels like there should be some kind of recursive argument that gives some optimal number of *layers*, since you can always push the short term stuff onto the one-higher-level slot. I wonder if human brains have already adapted to have the optimal number of intermediate memory steps. Anyway, some kind of adaptive type of memory slot would be ideal.

The argument is made based on a temporal-scaling issues: working memory/attention operate on the timescale of 100ms to minutes. The brain, meanwhile, implements these intermediate short-term plasticity mechanisms via some weird *biology*