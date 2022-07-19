# Sequence Learning

As a mathematician/statistician, we default to thinking about neural networks as function approximators. However, an implicit assumption in that statement is that the input and output spaces are static and well defined. As a result of this constraint, we don't really think about things like sequence-to-sequence learning, where the input and output space is variable. I'm sure there's a way to make it "theoretical", but it would most likely be a hack of some sort.

However, I get the feeling that it is the flexible, adaptive nature of neural networks – their ability to solve such "atypical" input/output schemes – that make them so powerful. This lends credence to the whole Software 2.0 view of deep learning, that we should think of them as adaptive computer programs. Basically, it feels much more like Engineering than Mathematics.

Enough preamble. Onto actual sequence learning.

## Background

Let's first talk about sequences (or time series if you're from econometrics). An obvious problem is to model sequences, and be able to predict their next states. That's where RNNs come in: they use a "memory" state that enables them to better predict the next state (and are no longer Markovian).

But what happens when your problem is not to predict the next state of a sequence, but take one sequence and output another sequence? If we think about the above problem, it's kind of saying, let's ingest the first sequence (the training step in modelling a single sequence), and then port things over to this new sequence, and try to predict this new sequence, seeding it with the first sequence, instead of with the previous states of the second sequence. In some crude (or is it brilliant) sense, it's a single sequence problem, except this sequence has a very special structure: it's a concatenation of two sequences.

### Bottleneck



Note that sequence learning, when there's a one-to-one with input and output, isn't particularly difficult. You can almost think of it is as predicting a time series. The main difficulty there is getting in past information (instead of just treating it as independent draws). That's where you can use things like RNNs. The fact that they're similar to time series means you can probably just appropriate the theory from that field.

Where things get more difficult is when you have variable inputs and outputs. The trick is to have something like an encoder-decoder architecture (with the middle being the bottleneck). This allows us to collapse the variable inputs into one fixed-dimensional embedding. Then, in order to produce variable outputs, we simply let one of the possible outputs be an end-of-string token (which admittedly seems kind of crude, but works).^[Notice that this kind of only makes sense when you're dealing with categorical sequences, though I'm sure you can fenangle it to work with continuous values. Our particular use case is also categorical data.]

The main problem with this approach is precisely the *bottleneck* architecture, and the way that outputs unfold over the sequence (i.e. the context is passed through instance by instance). The Transformer architecture is a way of sidestepping this problem, by letting context happen simultaneously in some window via self-attention. However, it ultimately adopts the same encoder-decoder style architecture.

It feels like actually, there's really only one solution to variable-length input/outputs (unless you have more structure, which we do).

### Random Size

Inspired by those probability puzzles where the sample size $n$ is random, one might be tempted to have one of the outputs be the length. I'm not sure how different it is compared to just having an EOS token.

### Pointer Networks

Pointer networks are an interesting architecture that utilises attention to reference the input sequence, and works well for combinatorial problems like determining the convex hull of a point cloud.

## Our Problem: Contiguous Subsets

Our problem is, given an image (which you can think of as a *sequence* of columns), output a sequence of characters.

This problem feels similar to something like determining the genes in a DNA sequence