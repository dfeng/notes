---
tags:
 - idea
 - nlp
---

# Signed Word Embeddings

The basis for word embeddings lies in the *distributional hypothesis*, which states that "a word is characterised by the company it keeps".

- I've thought about this before, but for some reason I can't quite find where I wrote about this. basically it follows from two pieces of intuition:
  - that word embeddings cannot distinguish between synonyms and antonyms, because all they care about is co-occurrence
    - as a result, oftentimes you'll see that antonyms will appear close to each other in the embedding space, which doesn't really make much sense if we're think of the embedding space as a proxy for "meaning"
  - that I've worked on signed graphs, and so have some intuition about dealing with positive/negative "ties"
- I think that an interesting place to start will be thinking in terms of the SVD decomposition of the PMI matrix (even though that's not exactly the same thing as SGNS/Word2Vec)
- How does this relate to Signed Graphs?
  - The one time I was thinking of embedding positive and negative edges, it was when considering the spectral decomposition (?) of the graph
  - I vaguely remember a paper that tried to spectral methods to do some sort of visualisation (though it was very unwieldy)
- the problem is that when you do things geometrically, then you're basically going to be conforming to transitivity indirectly. just like when you're trying to model signed graphs. thus, I think that even though it seems innocuous to have some sort of *geometric* interpretation, it has this unconscious bias.