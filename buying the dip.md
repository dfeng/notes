# Should you buy the DIP?

(A critical view of Deep Image Priors)

What?

Let's learn a function from a single point in some random space, to a single point in image space.

What exactly is going on with Deep Image Priors?

Here's what I think is going on:

What's important is going from small to large (plus the upsampling)? The fact that a straight convolution layer ends up performing poorly suggests that it's not the convolution layers themselves, but the fact that you go from small to large means that you sort of have to be "sparse".

It's kind of like the intuition for autoencoders and bottleneck architectures: you only have so much to work with once you've reduced the dimensions down, and so things naturally have to be somewhat smooth.

The other thing is that, I think it's very (inverse) problem dependent. We already know that given that in the paper they tweaked the architecture for each type of problem. In general though I think this class of problems does nicely tease out what we want, but we just have to be careful about what exactly is going on.

Firstly, both inpainting and super-resolution can be thought of as two examples of masked learning.^[It's probably interesting to think about how that relates to all the self-supervised stuff on masked learning. It seems like you can get pretty far, if the masks aren't that ridiculous without any training.] That itself reminds me of [[matrix-completion]].

A few weird things:

They do *noise-based regularization* (see Section 4), which means at each iteration they perturb the input $z$ by some additive gaussian noise. The fact that they perturb the input (even ever so slightly) essentially means, what they're learning is agnostic to the input, but kind of takes aggregated noise to create a signal. This is probably why something like a BN layer is important, to get that kind of effect.



What would a "prior" regarding natural images constitute?

We know from image compression that the fourier basis lends itself to a sparser representation for natural images. Wavelets also do well – though you usually have to carefully choose the mother wavelet. My intuition tells me that fourier works better for things like backgrounds, while wavelets are better for foregrounds.

 - DIP can be replicated by a decoder-only architecture, showing that it is the decoder that is the key

 
 - [x] Look into transpose convolutions for the upsample step: performs slightly worse
 - [ ] MLP-Mixer? What if you replace the Conv layers with MLP-Mixer style FC layers?
 - [ ] Add loss function that's only on the *test* data. There might be a trade-off between accuracy on the train vs test.
 - [ ] What if you use two/multiple images when "training"?
 - [ ] Check if it matters that outputs are in the 0-255 range instead of 0-1 range!