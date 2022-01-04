---
tags:
 - machine_learning
 - neural_networks
---

# Transformers

- references:
  - [lil-log](https://lilianweng.github.io/lil-log/2018/06/24/attention-attention.html)
  - [distill](https://distill.pub/2016/augmented-rnns/)
  - [ebook-chapter](http://d2l.ai/chapter_attention-mechanisms/transformer.html) on transformers (actually this ebook isn't great, as it ends up being more about the implementation)
- it turns out that #attention is an earlier concept, which itself is motivated by the encoder-decoder sequence-to-sequence architecture
  - ![](https://karpathy.github.io/assets/rnn/diags.jpeg)
  - (oops) I didn't really understand this diagram:
    - sequence to sequence models are essentially the third diagram, where basically the input sequence and output sequence are asynchronous
    - versus the normal rnn, which takes the output as the input
    - I really like the example of 1-to-many, image-to-caption, so your input is not a sequence, but your output is
  - seq2seq example is the translation program, where importantly the input and output sequence don't have to be the same length (due to the way languages differ in their realisations of the same meaning)
  - the encoder is the rnn on the input sequence, and this culminates into the last hidden layer
    - this is essentially the *context* vector: the idea here is that this (fixed-length) vector captures all the information about the sentence
      - key: this acts like a sort of **informational bottleneck**, and actually is the impetus for the attention mechanic
  - key point (via this [tutorial](https://arxiv.org/pdf/1703.01619.pdf)):
    - instead of having everything represented as the last hidden layer (fixed-length), why not just look at all the hidden layers (vectors representing each word)
    - but, that would be *variable* length, so instead just look at a linear combination of those hidden layers. this linear combination is learned, and is basically *attention*
- Transformers #todo
  - "prior art"
    - CNN: easy to parallelise, but aren't recurrent (can't capture sequential dependency)
    - RNN: reverse
  - goal of transformers/attention is achieve **parallelization** and **recurrence**
    - by appealing to "attention" to get the recurrence (?)

## Transformers

 - key is *multi-head self-attention*
   + encoded representation of input: key-value pairs ($K,V \in \mathbb{R}^{n}$)
     * corresponding to hidden states
   + previous output is compressed into query $Q \in \mathbb{R}^{m}$.
   + output of the transformer is a weighted sum of the values ($V$).

## Todo

 - Visualising and Measuring the Geometry of BERT [arXiv](https://arxiv.org/pdf/1906.02715.pdf)
 - [random blog](http://www.peterbloem.nl/blog/transformers)
 - pretty intuitive description of transformers on [tumblr](https://nostalgebraist.tumblr.com/post/185326092369/the-transformer-explained), via the LessWrong community