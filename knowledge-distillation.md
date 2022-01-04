---
tags:
  - machine_learning
---


# Knowledge Distillation

As a constructive example, think of two similar classifications (two types of breeds of dogs). With one-hot encoding, these are orthogonal, and each class is essentially equivalent/exchangeable. However there's actually more structure to these classifications (you can imagine them being in some embedding space, and the dog classes should be closer together). I guess the phrase is *label similarity*.

The softmax probabilities is (hopefully) a proxy for this. So, in part, the student gets the shortcut of learning these class representations, but also conceivably it does not have the capacity to *learn* these subtleties, though it is able to mimic it.

Does Knowledge Distillation really work? [arXiv](https://arxiv.org/pdf/2106.05945.pdf)

 - 

KD as Semi-parametric Inference [Youtube](https://www.youtube.com/watch?v=dEE3-g_8dWo)

 - 

Many weird and curious results in this field:

1. It turns out that if you do self-distillation (i.e. the student is the teacher, there's a Buddhist joke here somewhere), then the student will oftentimes outperform the teacher. [arXiv](https://arxiv.org/abs/1805.04770).