---
tags:
 - interview
 - computer_science
---

# Precision/Recall

Something that we statisticians don't really think about is the notion of precision/recall ([wiki](https://en.wikipedia.org/wiki/Precision_and_recall)) in classification. The definition actually comes from *information retrieval* (e.g. web searches). You have the *retrieved* documents (the pages returned by the search engine), as well as the *relevant* documents (those pages that are actually relevant to the query). Then *precision* is the fraction of those documents that were retrieved that are actually relevant. Similarly, *recall* is the fraction of relevant documents that were retrieved.

To translate this to something more relevant to classification, if you're trying to classify dogs, then precision is the fraction of those that you categorised as dogs (retrieved) that were actually dogs, while recall is the fraction of actual dogs (relevant) that were correctly categorised. So recall is more about coverage, whereas precision is more like accuracy, sort of.

Even though it's an incredibly straightforward concept, it actually lends itself to non-trivial queries.

A very similar in statistics is the notion of false/true positives/negatives. Though in that case what we're mostly interested in is hypothesis testing, though you can easily coerce it into the framework of classification.