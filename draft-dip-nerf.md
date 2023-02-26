Neural Radiance Fields

A few notes on fourier embeddings

[notes from some guy online](https://hugocisneros.com/notes/implicit_neural_representations/)

Here's two ways of looking at fourier embeddings. The first starts from classical function approximation.

Fourier embeddings with MLPs are an interesting hybrid of using the fourier domain to represent signals, and deep learning. The simple version of image compression essentially converts an image to the fourier domain, truncates the coefficients, and inverts back to original domain. Put differently, we take a sparse linear combination of the fourier basis

Deep Image Prior argues that the architecture of CNNs provide some kind of prior. What is the nature of this prior?

We first investigate what are the key 