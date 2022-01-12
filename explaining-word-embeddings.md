---
tags:
 - from_article
 - nlp
---

# Explaining Word Embeddings

- [blog](https://p.migdal.pl/2017/01/06/king-man-woman-queen-why.html):
  - gives an "intuitive" explanation for why Word Embeddings should satisfy analogies
    - which is pretty straightforward
  - <mark>Words close in this space are often synonyms (e.g. *happy* and *delighted*), antonyms (e.g. *good* and *evil*) or other easily interchangeable words (e.g. *yellow* and *blue*).</mark>
    - this relates to a project that has been at the back of my mind, [[signed-word-embeddings]]
  - this is an important concept: that you should be getting "interchangeability" not closeness in meaning, though they are proxies
    - this feels like an open question, right?
  - *a is to b is as A is to B* gives $\frac{P(w|a)}{P(w|b)} = \frac{P(w|A)}{P(w|B)}$
  - dog is to puppy as cat is to kitten
    - $\frac{P(w|dog)}{P(w|puppy)} = \frac{f(w\vert age=adult)}{f(w\vert age=cub)} = \frac{P(w|cat)}{P(w|kitten)}$
      - you're sort of *decomposing* as follows:
        - $$\displaylines{P(w\vert dog) = f(w\vert species=dog) \times f(w\vert age=adult) \times P(w\vert is\_a\_pet) \\
P(w\vert puppy) = f(w\vert species=dog) \times f(w\vert age=cub) \times P(w\vert is\_a\_pet) \\
P(w\vert cat) = f(w\vert species=cat) \times f(w\vert age=adult) \times P(w\vert is\_a\_pet) \\
P(w\vert kitten) = f(w\vert species=cat) \times f(w\vert age=cub) \times P(w\vert is\_a\_pet)}$$
      - that's how the ratios end up being the same, because you're basically cancelling the shared "hidden variables"
      - this makes it feel like a hidden variable type thing?

## Todo

 - recent paper exploring this further: [blog](https://carl-allen.github.io/nlp/2019/07/01/explaining-analogies-explained.html)