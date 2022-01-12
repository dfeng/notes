---
tags:
 - from_article
---

#  Next Steps for Deep Learning

src: [Quora](https://www.quora.com/q/handsonnlpmodelreview/Deep-Learning-beyond-2019)

## Deep Learning 1.0

Limitations:

 - training time/labeled data: this is a common refrain about DL/RL, in that it takes an insurmountable amount of data. Contrast this with the [[bitter-lesson]], which claims that we *should* be utilising computational power.

![](https://qph.fs.quoracdn.net/main-qimg-5ff7808245cd0e86c45037f47f6244d2)

 - adversarial attacks/fragility/robustness: due to the nature of DL (functional estimation), there's always going to be fault-lines.
   + selection bias in training data
   + rare events/models are not able to *generalise*, out of distribution
 - i.i.d assumption on DGP
   + temporal changes/feedback mechanisms/causal structure?

## Deep Learning 2.0

### Self-supervised learning---learning by predicting input

 - Supervised learning : this is like when a kid points to a tree and says "dog!", and you're like, "no".
 - Unsupervised learning : when there isn't an answer, and you're just trying to understand the data better.
   + classically: clustering/pattern recognition.
   + auto-encoders: pass through a bottleneck to reconstruct the input (the main question is how to develop the architecture)
     * i.e. learning efficient *representations*
 - Semi-supervised learning : no longer just about reconstructing the input, but self-learning
   + e.g. shuffle-and-learn: shuffle video frames to figure out if it's in the correct temporal order
   + more about choosing clever objectives to optimise (to *learn* something intrinsic about the data)

> The brain has about 10^4 synapses and we only live for about 10^9 seconds. So we have a lot more parameters than data. This motivates the idea that we must do a lot of unsupervised learning since the perceptual input (including proprioception) is the only place we can get 10^5 dimensions of constraint per second.

Hinton via [/r/MachineLearning](https://www.reddit.com/r/MachineLearning/comments/2lmo0l/ama_geoffrey_hinton/clyjogf/). ^[I'm not sure I follow the logic here. My guess is that you have a dichotomy between straight up perceptual input and actually learning by interacting with the world. But that latter feedback mechanism also contains the perceptual input, so it should be at the right scale.]

 - much more data than *supervised* or #reinforcement_learning
 - if coded properly (like the shuffle-and-learn paradigm), then it can learn temporal/causal notions
 - utilisation of the agent/learner to direct things, via #attention, for instance.

![Newborns learn about gravity at 9m. Pre: experiment push car off and keep it suspended in air (with string) won't surprise. Post: surprise.](https://qph.fs.quoracdn.net/main-qimg-e8047005bf69845ff7b2285fcd71336c)

 - case study: BERT. self-supervised learning, predicting the next word, or missing word in sentence (reconstruction).
   + not multi-sensory/no explicit agents. this prevents it from picking up physical notions.
     * sure, we need multi-sensory for general-purpose intelligence, but it's still surprising how far you can go with just statistics
 - less successful in image/video (i.e. something special about words/language). ^[Could it be the fact that we deal with already highly *representative* objects that are already *classifications* of a sort, whereas everything else is at the bit/data level, and we know that's not really how we process such things. This suggests that we should find an equivalent type of *language*/*vocabulary* for images.]
   + we operate at the *pixel*-level, which is suboptimal
 - prediction/learning in (raw) input space vs representation space
   + high-level learning should beat out raw-inputs^[My feeling though is that you eventually have to go down to the raw-input space, because that is where the comparisons are made/the training is done. In other words, you can transform/encode everything into some better representation, but you'll need to decode it at some point.]

```{remark}
Pattern recognition $\iff$ self-supervised learning?
```

### Leverage power of compositionality in distributed representations

 - combinatorial explosion should be exploited
 - composition: basis for the intuition as to why *depth* in neural networks is better than *width*

```{remark}
Don't think this is a particularly interesting insight.
```

### Moving away from stationarity

 - stationarity: train/test distribution is the same distribution
   + they talk about IID, which is not quite the same thing (IID is on the individual sample level---the moment you have correlations then you lose IID)
   + not just following econometrics, in that the underlying distributions are time-varying though
 - feedback mechanisms (via agents/society) require dropping IID (and relate to [[fairness-project]])
 - example: classifying cows vs camels reduces to classifying desert vs grass (yellow vs green)
   + not sure how this example relates, probably need to read [[invariant-risk-minimisation]]

### Causality

 - causal distributed representations (causal graphs)
   + allows for causal reasoning
 - it's a little like reasoning in the representation space?

### Lifelong Learning

 - learning-to-learn
 - cumulative learning

### Inspiration from Nature

flies: [video](https://www.youtube.com/watch?v=_sOgIwyjrOA&feature=youtu.be); [paper](https://ccneuro.org/2019/proceedings/0000998.pdf)

See [[calculus-for-brain-computation]].