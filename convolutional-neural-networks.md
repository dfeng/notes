# CNNs

## Scale-Invariance

(This would make for a good interview question)

CNNs are translation invariant (due to the fact that the convolution kernels are applied equally across the space). One might want scale-invariance, but that will need to be injected as an "inductive bias" (via [SE](https://stats.stackexchange.com/a/471255)):

 - Data augmentation: let the NN learn by random/systematic zooming
 - Multi-scale input: input at different scales (0.5x, 1x, 2x), then pool
 - Multi-sized filters: use a combination of sizes (and dilated convolutions)