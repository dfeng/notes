# Should you buy the DIP?

(A critical view of Deep Image Priors)

What exactly is going on with Deep Image Priors?

You're

What would a "prior" regarding natural images constitute?

We know from image compression that the fourier basis lends itself to a sparser representation for natural images. Wavelets also do well – though you usually have to carefully choose the mother wavelet. My intuition tells me that fourier works better for things like backgrounds, while wavelets are better for foregrounds.

 - DIP can be replicated by a decoder-only architecture, showing that it is the decoder that is the key

 
 - [ ] Look into transpose convolutions for the upsample step
 - [ ] MLP-Mixer? What if you replace the Conv layers with MLP-Mixer style FC layers?