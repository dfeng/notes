---
tags:
 - from_article
 - neural_networks
 - graph_neural_networks
---

# Graph Network as Arbitrary Inductive Bias

[src](https://blog.paperspace.com/introduction-to-geometric-deep-learning/).

The architecture of a neural network imposes some kind of structure that lends itself to particular types of problem (CNN, RNN). Thus, you can think of this as some form of *inductive bias*. An interesting view of [[graph-neural-networks]] is that essentially these provide arbitrary inductive bias, since the goal is to learn the architecture?

| Component | Entities      | Relations  | Inductive Bias | Invariance      |
|:----------|:--------------|:-----------|:---------------|:----------------|
| FC        | Units         | All-to-all | Weak           | -               |
| Conv.     | Grid elements | Local      | Locality       | Spatial transl. |
| Recurrent | Time          | Sequential | Sequentially   | Time transl.    |
| Graph     | Nodes         | Edges      | *Arbitrary*    | V,E permute     |

From [@Battaglia:2018vi]

(Though, is that really what GNNs really do?)