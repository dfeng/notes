---
tags:
 - neural_networks
 - machine_learning
---

# Generalized Neural Networks

Recently, there has been a flurry of work that seeks to build architectures that are domain-agnostic. Perhaps unsurprisingly, most of the work in this direction uses [[transformers]] at its core, given its (apparent) flexibility. The thesis is that, these domain-specific architectures work great in their particular niche, but the moment something changes, even slightly, then you're back to square one in terms of training, and square three in terms of architecture.^[A simple example is going from single images to stereo pairs, akin to how our own visual system works.] Wouldn't it be great, then, to have some generic architecture that just works across all these domains?^[In the words of LeCun, let the data speak for itself.]

At first blush, this seems like a no-brainer: you no longer have to build specialized architectures depending on the problem at hand, and there doesn't seem to be much downside. However, I think it's actually worthwhile to spend some time questioning this assumption.

## Visual Tasks

Let's consider the domain of visual tasks, and in particular, the use of convolutions. While convolutions are clearly a form of [[inductive bias]], I don't see any problem with using them as just one of the fundamental building blocks (something that cares mostly about local 2D statistics).

I also can't help but compare to how our visual system works, noting that despite our ability to handle generic visual tasks, part of the system utilizes convolutions. Granted, the fruits of evolution are not a justification in itself, but at the very least it's an existence proof that we needn't throw the baby out with the bath water on our pursuit of generalisability.

## Great Power, Great Responsibility

Letting the data speak for itself comes with its own problems, and we're not even talking about the [[fairness-project]]. At a high level, this is similar to the problem of [[reinforcement-learning]]: given a sufficiently powerful generic algorithm, it will oftentimes find the simplest way to achieve the goal assigned to it. And even if it's not necessarily the simplest, it will pick up on correlations and use those, assuming correlation implies causation. The classic exampe here is, when classifying a boat, a generic algorithm will use the whole image (e.g. presence of the sea) to help it to classify, maybe to the point where it doesn't even care about the specifics of the main object to be classified.

Bias comes in from the regularization

## Perceiver

src: [@jaegle2021perceiver]

