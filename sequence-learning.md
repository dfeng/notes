# Sequence Learning

As a mathematician/statistician, we default to thinking about neural networks as function approximators. However, an implicit assumption in that statement is that the input and output spaces are static and well defined. As a result of this constraint, we don't really think about things like sequence-to-sequence learning, where the input and output space is variable. I'm sure there's a way to make it "theoretical", but it would most likely be a hack of some sort.

However, I get the feeling that it is the flexible, adaptive nature of neural networks – their ability to solve such "atypical" input/output schemes – that make them so powerful. This lends credence to the whole Software 2.0 view of deep learning, that we should think of them as adaptive computer programs. Basically, it feels much more like Engineering than Mathematics.

Enough preamble. Onto actual sequence learning.

## Approaches

### Bottleneck

Note that sequence learning, when there's a one-to-one with input and output, isn't particularly difficult. You can almost think of it is as predicting a time series. The main difficulty there is getting in past information (instead of just treating it as independent draws). That's where you can use things like RNNs. The fact that they're similar to time series means you can probably just appropriate the theory from that field.

Where things get more difficult is when you have variable inputs and outputs. The trick is to have something like an encoder-decoder architecture (with the middle being the bottleneck). This allows us to collapse the variable inputs into one fixed-dimensional embedding. Then, in order to produce variable outputs, we simply let one of the possible outputs be an end-of-string token (which admittedly seems kind of crude, but works).^[Notice that this kind of only makes sense when you're dealing with categorical sequences, though I'm sure you can fenangle it to work with continuous values. Our particular use case is also categorical data.]

The main problem with this approach is precisely the *bottleneck* architecture, and the way that outputs unfold over the sequence.

### Transformers

The transformer architecture tries to solve this problem of 