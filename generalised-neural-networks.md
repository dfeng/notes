---
tags:
 - neural_networks
 - machine_learning
---

# Generalized Neural Networks

Recently, there has been a flurry of work that seeks to build architectures that are domain-agnostic. Perhaps unsurprisingly, most of the work in this direction uses [[transformers]] at its core, given its (apparent) flexibility. The thesis is that domain-specific architectures work great in their particular niche, but the moment something changes, even slightly, then you're back to square one in terms of training, and square three in terms of architecture.^[A simple example is going from single images to stereo pairs, akin to how our own visual system works.] Wouldn't it be great, then, to have some generic architecture that just works across all these domains?^[In the words of LeCun, let the data speak for itself.]

At first blush, this seems like a no-brainer: you no longer have to build specialized architectures depending on the problem at hand, and there doesn't seem to be much downside. However, I think it's actually worthwhile to spend some time questioning this assumption.

## The Bad

### Visual Tasks

Let's consider the domain of visual tasks, and in particular, the use of convolutions. While convolutions are clearly a form of inductive bias, I don't see any problem with using them as just one of several fundamental building blocks (something that cares mostly about local 2D statistics). I think stereo-pairs is a good working example here: with the current architectures, it is indeed the case that moving from single to stereo is a non-trivial architectural task that requires a choice (about how to fuse the two inputs).

I also can't help but compare to how our visual system works, noting that despite our ability to handle generic visual tasks, part of the system utilizes convolutions. Granted, the fruits of evolution are not a justification in itself, but at the very least it's an existence proof that we needn't throw the baby out with the bath water on our pursuit of generalisability. And if we're going with biologically inspiration, I think stereo inputs should just be the de-facto, as that gives us the depth perception that we need to better understand the world. In terms of inputs, why not just subscribe to the inputs that we as humans have: stereo visual inputs, stereo audial inputs, and some complex input that is our nervous system.

Having said all this, I realise the problem is that I'm coming at this from the perspective of [[artificial-generalised-intelligence]] (hence taking inspiration from how we do things). The space of inputs that machine learning covers is much wider than what we (as humans) get as inputs. That doesn't negate my argument that it makes more sense to work with a few fundamental units (instead of just one), but at least I can see why it might not be as straightforward as just following evolution.

### Efficiency

Convolutions are a biologically inspired, incredibly efficient means of processing image data. My guess is that the upper bound on what these kinds of generalised neural networks can achieve is to essentially reinvent the wheel and reproduce convolutions. And perhaps future models are flexible enough to do that. For now, though, the best we can hope for is to achieve some sort of parity in performance, though at the (terrible) expense of efficiency and compute. Granted, I do think visual tasks are an easy target, since there already is a simple, obvious architecture which gets you very far. I'm less familiar with the audio world.^[Though in my brief stint, I remember that convolutions (just 1D) also played a role.]

### Great Power, Great Responsibility

Letting the data speak for itself comes with its own problems (and we're not even talking about the [[fairness-project]]). At a high level, this is similar to the problem of [[reinforcement-learning]] (paperclip): given a sufficiently powerful generic algorithm, it will find ways to achieve the goal assigned to it that are possibly counter to what we would like it to learn. That is, it will pick up on correlations and use those, operating under the assumption that correlation implies causation ([[causal-inference]]). A simple example is, when classifying a boat, a generic algorithm will use the whole image (e.g. presence of the sea) to help it to classify, maybe to the point where it doesn't even care about the specifics of the target object (see also [[computer-vision-tasks]]).

In some sense, with these kinds of generalised architectures, the inductive bias step is now hidden in the regularisation techniques. Now, it's probable that regularisation is actually where you want to inject these kinds of biases (as opposed to in the architecture). Again with relating it to humans, our generalised intelligence doesn't have the same kinds of problem, a simple reason being that our learnings are not the result of some simple loss function. That is, it's the fact that we're doing a "simple" non-convex optimization that leads to these kinds of quirky solutions.^[And if you think about it, no amount of injecting common-sense could really sidestep this fundamental flaw.]

## The Good?

When such generic architectures actually succeed, it provides fairly strong evidence that this particular architecture is a powerful fundamental building block, and perhaps should be used in the later layers of a generalised neural network. On the other hand, it's *almost* akin to saying that `NOT` gates are a powerful building block for computers – how much do we learn from such a statement in terms of understanding how computers work?

Being domain-agnostic seems like it would be 
Meanwhile, being input/output format agnostic lets you experiment with combining different input sources 

It also speaks in part to the [[bitter-lesson]]. However, I think the regime here is a little different: there are 

## Literature

### Perceiver

src: [@jaegle2021perceiver]

