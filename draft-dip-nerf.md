 Neural Radiance Fields

A few notes on fourier embeddings

[notes from some guy online](https://hugocisneros.com/notes/implicit_neural_representations/)

Here's two ways of looking at fourier embeddings. The first starts from classical function approximation.

Fourier embeddings with MLPs are an interesting hybrid of using the fourier domain to represent signals, and deep learning. The simple version of image compression essentially converts an image to the fourier domain, truncates the coefficients, and inverts back to original domain. Put differently, we take a sparse linear combination of the fourier basis to represent our image. That is, we have a fixed set of basis functions, and then just do sparse regression.

A similar approach would be kernel ridge regression, but the principle is the same: you project your data via a kernel into high (infinite) dimensions, after which you apply a "sparse", or regularized linear model. It's also interesting to note that infinitely-wide neural networks correspond to doing KRR with a particular kernel (the NTK).

Meanwhile, a single-layer neural network can be thought of as creating adapting (data-driven) basis functions (though the analogy breaks down once you head into deeper territory). Or just think of them as general purpose functions, that go straight to the non-linear part.

Fourier embeddings MLPs are kind of this hybrid.

The other way of looking at fourier embedding MLPs is treating them not as functions from R2 to R3, but, like Deep Image Priors, maps from the whole input space to the whole output space (with a particular constraint on the map).

Deep Image Prior argues that the architecture of CNNs provide some kind of prior. What is the nature of this prior?

We first investigate what are the key 