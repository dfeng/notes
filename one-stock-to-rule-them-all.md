---
tags:
 - finance
 - idea
---

# One Stock to Rule Them All

A small, stupid, simple idea (that's been bouncing around my head): the price of a stock is a function of all the information about that particular stock (which should dictate its movement). If you believe the efficient market hypothesis (EMH) (which, granted, most people do not), then by extension this suggests that a stock's price must also *capture* all the information in the world. Of course, most other information takes up an infinitely small part of that stock's price (the less relevant, the smaller the part), but in some sense, the whole world is captured in every single stock.

Now, even if you don't believe in the EMH, such a view might be instructive when considering the real world: essentially each stock is like a *view* of the infinite dimensional representation of the world. Under the EMH, a view (a projection) does not reduce the dimensions (i.e. no zero'd coordinates), whereas in real life, you're most likely getting a projection into a pretty compact finite space.

What's the end result of all this? It sort of feels like the word embedding stuff, but not really.^[The key difference there is that you assume words/stocks have some latent representation in some shared space, whereas here we assume all stocks derive from the same latent representation, but simply take on different views.] The conjecture that comes out of this is that, essentially, there's a very high dimensional vector that corresponds to the world, and each stock is simply one view into that world. The goal is then to learn this vector, as well as the projections associated with each stock. The question is then: is this a solvable problem?

More formally, let $Z_t$ be this latent representation of the world (at time $t$). For simplicity, let's assume that $Z_t$ is finite-dimensional, $\in \mathbb{R}^{n}$. Then, each stock $X^{i}_{t}$ corresponds to a view of $Z_{t}$, namely $X^{i}_{t} = P^{i}(Z_{t})$, where $P^{i}$ is some projection matrix (possibly varies with $t$, but if it does, we probably need to assume that it is slowly-varying). We are given the $\left\{ X^{i}_{t} \right\}_{i, t}$, and our goal is to estimate $\left\{ Z_t \right\}_{t}$ and $\left\{ P^{i} \right\}_{i}$.

The above formulation still subscribes to the linear world, whereas nowadays we want to express things as non-linear functions, allowing us to take full advantage of deep learning. However, it's unclear to me whether or not it's even possible to frame this in a way that's conducive for deep learning. Of course, every time there's talk of a latent representation, it feels like you should be able to solve it with neural networks.