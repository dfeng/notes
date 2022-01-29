---
tags:
 - from_paper
 - machine_learning
 - computer_vision
 - attention
---

# Vision Transformers

Thanks to their computational efficiency (and hence scalability), self-attention based ([[transformers]]) architectures have become the model of choice in NLP. Their success has led people to wonder if such architectures are universal^[For instance, it's been speculated that the self-attention mechanism is comparable to the way attention manifests in our brains – such a thesis would imply the universality of this module.], or, at the very least, if they can be applied to computer vision tasks.

Self-attention gives a good tradeoff between local context awareness and computational efficiency: rnn/lstm's allow for long-range dependencies, but the sequential nature of training really hampers model size.

Compare this convolution layers (which are highly specialized for [[computer-vision-tasks]])

[[stand-alone-self-attention-in-vision-models]]


## An Image Is Worth 16x16 Words

src: [@dosovitskiy2021image]

### Summary


