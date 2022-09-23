# Generative Models

I recently gave a talk about [[diffusion-models]] (in particular score-based models, mostly based off this blog [post](https://yang-song.net/blog/2021/score/)).

At its core, generative models produce samples from a (data) distribution. The first distinction to be made is the principle by which you tackle the problem. Treating it as an adversarial problem gives you [[generative-adversarial-networks]]; treating it more probabilistically or likelihood-based gives you basically the rest. However, there's an additional distinction here that I think is underappreciated, which is how you go about producing the samples, which you can do either like a statistician or like a machine-learning person.

A statistician (or maybe more accurately a Bayesian statistician) thinks of the classical approaches to this problem, namely using MCMC to sample from a distribution. That is, the goal is to set up a Markov Chain such that in the limit you have a random process that is effectively generating samples from the distribution.

On the other hand, ML tries to learn a model that takes random noise as input, and then outputs an image. Here, the randomness comes from the input noise.^[A computer scientist would think of this more like a `seed`.] You can effectively think of these models as doing something like what happens when you sample from a probability distribution (using [Inverse transform sampling](https://en.wikipedia.org/wiki/Inverse_transform_sampling)).