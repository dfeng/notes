---
tags:
 - from_paper
 - nlp
 - lit_review
 - neuroscience
---

# Learning as the Unsupervised Alignment of Conceptual Systems

src: [@Roads:2020ty]

The surprising thing about \* embeddings is that it relies solely on *co-occurrence*, which you can define however you want. This makes it a powerful generalized tool.^[And more generally, a key insight in statistical NLP is to not worry (too much) about the words themselves (except maybe during the preprocessing step, with things like stemming), but simply treat them as arbitrary tokens.] For example, as in this paper, we can consider objects (or captions) of an image, and co-occurrence for objects that appear together in an image. From this dataset (Open Images V4: [github](https://github.com/openimages/dataset)), we can construct a set of embedding vectors (using `GloVe`) for the objects/captions (call this `GloVe-img`).

What is this set of embeddings? You can think of this as a crude learning mechanism of the world, using just visual data.^[Potential caveat (?): part of the data reflects what people want to take photos of, and be situated together. Though for the most part the objects in the images aren't being orchestrated, it's more just what you find naturally together.] In other words, if a child were to learn through proximity-based associations alone, then perhaps this would be the extent of their understanding of the world.

A natural followup is, then, how does this embedding compare to the standard `GloVe` learned from a large text corpus?

At this point, I need to digress and talk about what this paper does:

 - take the similarity matrix of the original GloVe vectors and the GloVe-img vectors. calculate the correlation of the matched entries. turns out that correlation can get as high as 0.3. perhaps that's surprising?
   + seems like a waste to project things down to a similarity matrix. on the other hand, the arbitrariness of embeddings might make it difficult to compare embeddings directly.

