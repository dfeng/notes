---
tags:
 - from_paper
 - causal_inference
---

# Learning DAGs

src: [blog](https://blog.ml.cmu.edu/2020/04/10/learning-dags-with-continuous-optimization/) version of paper.

Learning a DAG is essentially a causal_inference problem, with the key being that the graph has to be *acyclic*. But this type of problem is generally NP-hard. These people came up with a continuous version of the constraint, taking advantage of matrix exponentials.