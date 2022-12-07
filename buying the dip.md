# Should you buy the DIP?

(A critical view of Deep Image Priors)





What exactly is going on with Deep Image Priors?

A few weird things:

They do *noise-based regularization* (see Section 4), which means at each iteration they perturb the input $z$ by some additive gaussian noise. The fact that they perturb the input (even ever so slightly) essentially means, what they're learning is agnostic to the input, but kind of takes aggregated noise to create a signal. This is probably why something like a BN layer is important, to get that kind of effect.



What would a "prior" regarding natural images constitute?

We know from image compression that the fourier basis lends itself to a sparser representation for natural images. Wavelets also do well – though you usually have to carefully choose the mother wavelet. My intuition tells me that fourier works better for things like backgrounds, while wavelets are better for foregrounds.

 - DIP can be replicated by a decoder-only architecture, showing that it is the decoder that is the key

 
 - [ ] Look into transpose convolutions for the upsample step
 - [ ] MLP-Mixer? What if you replace the Conv layers with MLP-Mixer style FC layers?