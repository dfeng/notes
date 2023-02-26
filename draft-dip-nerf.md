Neural Radiance Fields

A few notes on fourier embeddings

[notes from some guy online](https://hugocisneros.com/notes/implicit_neural_representations/)

Here's two ways of looking at fourier embeddings. The first starts from classical function approximation.

Fourier embeddings with MLPs are an interesting hybrid of using the fourier domain to represent signals, and deep learning. The simple version of image compression essentially converts an image to the fourier domain, truncates the coefficients, and inverts back to original domain. Put differently, we take a sparse linear combination of the fourier basis to represent our image. That is, we have a fixed set of basis functions, and then just do sparse regression.

A more data-driven approach would be kernel ridge regression, but the principle is the same: you project your data via a kernel into high (infinite) dimensions, after which you apply a "sparse", or regularized linear model. It's also interesting to note that infinitely-wide neural networks correspond to doing KRR with a particular kernel (the NTK).



Deep Image Prior argues that the architecture of CNNs provide some kind of prior. What is the nature of this prior?

We first investigate what are the key 