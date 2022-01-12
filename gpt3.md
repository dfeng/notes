---
tags:
 - nlp
 - deep_learning
---

# GPT-3

paper: [arXiv](https://arxiv.org/abs/2005.14165)

This is a 175b-parameter language model (117x larger than GPT-2).
It doesn't use SOTA architecture (the architecture is from 2018: 96 transformer layers with 96 attention heads (see [[transformers]])^[The self-attention somehow encodes the relative position of the words (using some trigonometric functions?).]), is trained on a few different text corpora, including CommonCrawl (i.e. random internet html text dump), wikipedia, and books,^[The way they determine the pertinence/weight of a source is by upvotes on Reddit. Not sure how I feel about that.] and follows the principle of language modelling (unidirectional prediction of next text token).^[So, not bi-directional as is the case for the likes of BERT. A nice way to think of BERT is a denoising auto-encoder: you feed it sentences but hide some fraction of the words, and BERT has to guess those words.]
And yet, it's able to be surprisingly general purpose and is able to perform surprisingly well on a wide range of tasks (examples curated below).

It turns out that GPT-2 required things to be fine-tuned in order to be able to be applied to various tasks. In the spirit of [[transfer-learning]], the GPT-2 can be thought of the base model, and then for a given task (with training data), you then train on that specific dataset.

GPT-3 no longer requires this fine-tuning step, which is a **big** deal. The way it works now is that you give it some samples/examples, and then start *interacting* with it. In fact, that's it. The idea is that you're basically populating the *context window* (which is 2048 tokens), and then letting the model do its thing. That's basically the extent of the *fine-tuning*.

They use this window to differentiate between different levels of $n$-shot learning. So, zero-shot learning is when you don't provide any examples of question/answer pairs, one-shot is one example, and few-shot is ~10 examples (that enable you to fill up the context window). They show improved performance as you go from zero to one to few.

So what's going on here?

Language models are an incredibly simple paradigm: guess the next word in a sequence. Its simplicity, however, belies the level of complexity required to achieve such a task.
It's also a little different from our typical supervised paradigm, as there is no truth (i.e. there is no such thing as a prefect predictor of text/speech).
What you want is to create a language model that is indistinguishable from humans (i.e. the Turing test).

What's sort of curious is that you can frame many problems as text (and many people do so online), and so in order for the language model to be able to predict the next word in a wide array of contexts, it sort of has to learn all these various contexts, so indirectly having sub-specialties. Case in point: GPT-3 is able to do pretty simple arithmetics, even without being explicitly told to do so.

I think what is **key** is this notion of *emergent properties* that might be happening with large enough networks. It's like it's self-organising, almost.
One might be tempted to think that you're going to get *diminishing returns* as you increase the size of your model, as is typical of most models in statistics/ML (you get to saturation). ^[That being said, there are supposedly a non-trivial collection of papers that investigate this *scaling* question: [link](https://www.gwern.net/newsletter/2020/05#fn8).]
And yet, it seems like the opposite is true. With a general enough architecture (self-attention or convolutions), these things are able efficiently distribute their *knowledge* to better predict the output.

 - Disentanglement supposedly emerges in [StyleGAN](https://arxiv.org/abs/1812.04948) with sufficiently deep $w$ embeddings.
 - there is something about [[fast-weights]] that I don't really understand

## Examples

All of these examples basically start by giving example of question/answer pairs.

 - English to Command Line arguments ([video](https://cdn.openai.com/API/English_Bash_Python.mp4))
   + what I find most interesting about this example, and others, is the way in which it is able to adapt to the requests that you make of it. there's nothing particularly difficult about regurgitating what the command line code for print working directory is. what's surprising is that it understands what you mean when you try to correct it, or update it
 - Dialogues ([gwern](https://www.gwern.net/GPT-3#miscellaneous-dialogues))
   + this is more in the realms of the Turing Test, but it's pretty shocking how it is able to maintain a pretty high-level/meta conversation about the nature of intelligence.
 - Gary Marcus Issues ([gwern](https://www.gwern.net/GPT-3#marcus-2020)):
   + ML dissident Marcus has an [article](https://thegradient.pub/gpt2-and-the-nature-of-intelligence/) arguing that GPT-2, and language models in general, are not capable of any form of intelligence. and he proposes some questions to ask the language model, which gwern finds GPT-3 is able to answer in a satisfactory manner.

## Fairness

This is a research direction on their waitlist:

> Fairness and Representation: How should performance criteria be established for fairness and representation? How can responsive systems be established to effectively support the goals of fairness and representation in specific, deployed contexts?

So far we've seen people explore the biases inherent in word embeddings and language models; GPT-3 will inevitably fall into the purview of such scrutiny. Is there something manifestly different now, with GPT-3, that makes it a much more interesting question, since it feels as if GPT-3 is able to perform some low-level kinds of reasoning.

In the more basic models, you could easily attribute all the inherent biases to a reflection of the state of the world learnable through text.

My feeling is that this is slowly encroaching into the problem of how to equip artificial intelligence with notions of morality (I wonder if anyone has asked ethical questions---probably), though more importantly, might require you to actively force it to take a stand on certain kinds of topics.

## Ideas

 - it seems to me that the missing link is the #reinforcement_learning type self-learning aspect. like, right now, the weights of GPT-3 are basically set. but it would be 1000x more worrying if it was talking to itself, or learning from all the interactions we are doing with it. that feedback mechanism feels like it would be the missing picture.

## Resources

 - https://www.gwern.net/GPT-3
 - https://www.gwern.net/newsletter/2020/05#gpt-3
 - https://www.lesswrong.com/posts/6Hee7w2paEzHsD6mn/collection-of-gpt-3-results
 - https://www.lesswrong.com/posts/L5JSMZQvkBAx9MD5A/to-what-extent-is-gpt-3-capable-of-reasoning