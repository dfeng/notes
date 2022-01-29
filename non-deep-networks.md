---
tags:
  - from_paper
---

# Non-deep Networks

 - [arXiv](http://arxiv.org/abs/2110.07641)
 - [OR](https://openreview.net/forum?id=Xg47v73CDaj)

One common wisdom in the era of deep learning is that "depth trumps width". After all, we are not in the era of wide learning. Deeper networks seem to allow for more *expressivity* given the compositional nature of layers, holding the number of parameters fixed. From a theoretical perspective, we know that depth-2 networks are universal approximators, but the size of the network is exponential in the input dimension. I'm pretty sure that there has been work showing that dependence for deeper networks is no longer exponential in $n$, but who knows under what stringent conditions does this hold.

More recently, we've entered the era of **deep** learning, whereby the number of layers are in the hundreds, if not thousands. This feels like an altogether different regime, which I would call really-deep learning. This also gets closer to the question of scaling.

Also, note that a lot of the theoretical work talks about ReLU networks that are just MLPs. This is so far removed from what the models are like now – existing architectures are much more like compositions of *blocks* of computation, with only a handful of block types. It's very much like a circuit, except instead of electricity you have a flow of data/information, and the components are these blocks.

Continuing with the circuit analogy, you can differentiate between parallel and series. However, I think this is where the usefulness of the analogy ends. It's more helpful to think about computer programs, where we have sequential and parallel computation. It's clear that almost all programming is done sequentially, as that's how you get composition and the power of compounding. Parallelisation is something that can help speed things up, but for the most part it's something that you do to take advantage of distributed resources (once you hit the limitations of the single core).

Where does this paper fit in? It takes aim at this very-deep learning regime, and asks the question: is it really necessary to have hundreds of layers? Can we achieve the same sort of performance with only a handful of layers instead?

![](https://i.imgur.com/1ybpnql.png)

To be honest, I'm not *that* familiar with the ImageNet benchmark. I think what they're trying to argue is that they're replacing depth with width. But to me, seeing the performance of the single-stream already shows that you can already do quite a lot with 12 layers.

Actually, as one reviewer notes:

> My major concern is that the authors argues contribution of parallel subnetworks, while I think the traditional RepVGG-wise blocks adopted in ParNet contributes significantly more to prediction accuracy. Even if ParNet adopts 1 branch only, ParNet's accuracy can still achieve 75% more, as "ParNet-M-OneStream" shown in Table 8. Comparison of Table 7 and Table 10 shows that the RepVGG blocks is significantly more important than adopted number of branches on improving accuracy.


## Paper Specifics

 - A key architectural choice is that the *parallel* streams use different resolutions (I guess this is also why you get diminishing returns with more streams).
 - They argue that moving calculations to width will take advantage of multiple cores. Unconvinced by this.

### Parallel Performance

![](https://i.imgur.com/yhfImSa.png)

Table 10: comparing \# of branches against performance. What they find is that for a fixed number of parameters, the optimal number of branches is 3. This shows that all this "embarrassingly parallel" talk is only *embarrassing*. For one thing, the performance improvements are, in my eyes, incredibly marginal. 

Something that they keep doing is to fix the number of parameters and then vary across various configuration parameters (depth, width, channels, streams). This is clearly the simplest way to keep the *capacity* of the model constant, but in this era of complicated architectures, it's unclear how fair this metric really is.

### Ensembles

![](https://i.imgur.com/UpRHFxS.png)

Table 9: comparing ensembles against the same number of streams. Their conclusion for this ablation study is that their *parallel* configuration outperforms a simple ensemble. From my perspective, this makes me think that ensembles, which are the actual "embarrassingly parallel" operation, aren't all that bad. Granted, it's not a particularly efficient usage of parameters (and my intuition says that part of why networks do so well is that in some sense they are performing some kind of bagging or boosting).

It's not clear to me how they train the ensemble (multiple networks). I assume it's not the classic statistical way, which is to do *bagging*. Perhaps there's a canonical choice of ensemble method, but it's really annoying that this isn't specified.

## Final Thoughts / Open Questions

 - My feeling is that moving to width is the new *feature engineering*. Yes it's probably possible to *architect* a complex neural network with only a few layers. But that's not really that interesting, because you've essentially *feature engineered* that architecture for that particular problem.
   - What would make a compelling case would be if the application of extending width was some very simple, extensible procedure, i.e. actually "embarrassingly parallel".
 - Anyone thought of adding closed loops to a network? In some sense, this explosion of layers (and scaling), the point of it is to be able to let the neural network go do its thing. I guess the problem is that backprop no longer works. This feels a little like [[can-you-learn-an-algorithm]], where the idea is to the give a RNN more *runway* to be able to do more processing.
   - My feeling is that loops might be possible as some sort of extension. In other words, you have the normal training with a huge dump of data, which requires backprop, and there are no loops there. But then you move into this later stage where it's much more single-data-at-a-time, and here it's no longer about backprop (what is the replacement then?), and you can now add some loops. This is encroaching on Hofstadter's "I am a Strange Loop" territory.
   - Maybe (reflecting how we learn), what you want is something like unsupervised learning in the beginning (huge unstructured data), which allows you to train these generic processing units, to capture very high level things. And then, at the same time, you have the more systemic learning engine that contains loops and whatnot, and these use these generic units, and that is "trained" in a much more deliberate manner, without backprop, to allow for things like loops to work.