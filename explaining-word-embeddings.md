---
tags:
 - from_article
 - nlp
---

# Explaining Word Embeddings

src: [blog](https://p.migdal.pl/2017/01/06/king-man-woman-queen-why.html)

Define $P(w|a)$ to be the conditional probability that given word $a$, the word $w$ is nearby to it (precise: 2 hops). Then, two words are *similar* if $P(w \mid a) = P(w \mid b)$ for every word $w$. That is, their neighbourhood is similar.

$$
PMI(a, b) = \log \left[ \frac{P(a,b)}{P(a)P(b)} \right] = \log \left[ \frac{P(a|b)}{P(a)} \right].
$$

Words close in the embedding space are often either synonyms (e.g. *happy* and *delighted*), antonyms (e.g. *good* and *evil*) or other easily interchangeable words (e.g. *yellow* and *blue*) (see [[signed-word-embeddings]]). An important distinction is that closeness here is about getting "interchangeability" not closeness in meaning, though they are often proxies.

 To get to analogies, let's define them through ratios, as below:

 - *a is to b is as A is to B* gives $\frac{P(w|a)}{P(w|b)} = \frac{P(w|A)}{P(w|B)}$
 - *dog is to puppy as cat is to kitten* gives $\frac{P(w|dog)}{P(w|puppy)} = \frac{f(w\vert age=adult)}{f(w\vert age=cub)} = \frac{P(w|cat)}{P(w|kitten)}$

This suggests to the following *decomposition*:
$$
\begin{aligned}
P(w\vert dog) &= f(w\vert species=dog) \times f(w\vert age=adult) \times P(w\vert is\_a\_pet) \\
P(w\vert puppy) &= f(w\vert species=dog) \times f(w\vert age=cub) \times P(w\vert is\_a\_pet) \\
P(w\vert cat) &= f(w\vert species=cat) \times f(w\vert age=adult) \times P(w\vert is\_a\_pet) \\
P(w\vert kitten) &= f(w\vert species=cat) \times f(w\vert age=cub) \times P(w\vert is\_a\_pet)
\end{aligned}
$$
That's how the ratios end up being the same, because you're basically cancelling the shared "hidden variables".

 - [ ] recent paper exploring this further: [blog](https://carl-allen.github.io/nlp/2019/07/01/explaining-analogies-explained.html)