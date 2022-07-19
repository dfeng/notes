# Sequence Learning

As a mathematician/statistician, we default to thinking about neural networks as function approximators. However, an implicit assumption in that statement is that the input and output spaces are static and well defined. As a result of this constraint, we don't really think about things like sequence-to-sequence learning, where the input and output space is variable. I'm sure there's a way to make it "theoretical", but it would most likely be a hack of some sort.

However, I get the feeling that it is the flexible, adaptive nature of neural networks – their ability to solve such "atypical" input/output schemes – that make them so powerful. This lends credence to the whole Software 2.0 view of deep learning, that we should think of them as adaptive computer programs. Basically, it feels much more like Engineering than Mathematics.

Enough preamble. Onto actual sequence learning.

## Background

Let's first talk about sequences (or time series if you're from econometrics). An obvious problem is to model sequences, and be able to predict their next states. That's where RNNs come in: they use a "memory" state that enables them to better predict the next state (and are no longer Markovian).

But what happens when your problem is not to predict the next state of a sequence, but take one sequence and output another sequence? If we think about the above problem, it's kind of saying, let's ingest the first sequence (the training step in modelling a single sequence), and then port things over to this new sequence, and try to predict this new sequence, seeding it with the first sequence, instead of with the previous states of the second sequence. In some crude (or brilliant) sense, it's a single sequence problem, except this sequence has a very special structure: it's a concatenation of two sequences.

### Bottleneck

The more classical interpretation is the encoder-decoder framework: the first part is encoding the input sequence into a fixed-dimensional embedding, and then the decoder outputs a sequence. To make it variable length (instead of infinite), we simply let one of the possible outputs be an end-of-string token (which admittedly seems kind of crude, but works).^[Notice that this kind of only makes sense when you're dealing with categorical sequences, though I'm sure you can fenangle it to work with continuous values. Our particular use case is also categorical data.]

The main problem with this approach is precisely the *bottleneck* architecture, and the way that outputs unfold over the sequence (i.e. the context is passed through instance by instance). Theoretically, there's nothing wrong (RNNs are Turing Complete), but in practice your long-range dependence falters pretty quickly. Then there's the computational hindrance where data has to be injested one by one, which is really slow. The Transformer architecture is a way of solving this problem (swapping out the RNN), by letting context happen simultaneously in some window via self-attention. However, it ultimately adopts the same encoder-decoder style architecture. It feels like actually, there's really only one solution to variable-length input/outputs (unless you have more structure, which we do).

### RNNs/HMMs

This reminds me of HMMs: you can think of the input sequence as the hidden states (which we usually don't have access to), and the output sequence as emitting from the hidden states. Of course, we already know from my ML class that there's a nice link between HMMs and RNNs (besides the names looking suspiciously similar). Of course, we don't actually want to use HMMs – the output would only be a function of the input at the respective time – but I suspect there's a way you could use the input both as part of the "initialization", as well as part of the context when decoding. The main problem with that is that then you're stuck with predicting the exact same size output.

### Pointer Networks

Pointer networks are an interesting architecture that utilises attention to reference the input sequence, and works well for combinatorial problems like determining the convex hull of a point cloud. The thing I described above feels kind of like that, except the things you point to are deterministic. Actually, that might be a way to sidestep the same size problem: you point back to the most relevant input, but it doesn't have to be exactly sequential.

### Random Size

Inspired by those probability puzzles where the sample size $n$ is random, one might be tempted to have one of the outputs be the length. I'm not sure how different it is compared to just having an EOS token though.

## Our Problem: Contiguous Subsets

Our problem is, given an image (which you can think of as a *sequence* of columns), output a sequence of characters.

This problem feels similar to something like determining the genes in a DNA sequence

### Character Detection

A common approach is to apply object detection algorithms to individual characters themselves (region + class). However, that feels like overkill for us. Firstly, the region detection algorithms are all bounding boxes. We actually don't need 2D detection, but simply 1D detection (i.e. detecting one-dimensional ranges – a question whether or not we want to enforce non-overlapping).

The fact that we are operating in 1 dimension also seems to help with the second stage in typical OCR, which is to convert this collection of classes into a sequence. For us, the sequence is naturally defined if we assume non-overlapping (or just barely overlapping).