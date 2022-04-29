---
tags:
---

# Towards a Unified Understanding of Neural Embeddings

 - Tancik showed, using NTK theory, that MLPs have a hard time learning high frequency signals
 - it was shown in Barron that the approximation error of a 1-layer MLP (with sigmoidal activation functions) is governed by the power of the spectrum of the fourier transform of the signal – higher frequency signals are more difficult to approximate
 - Spectral Bias paper showed that MLPs learn the lower-frequencies first, then followed by the higher frequency signals (over the duration of training)
	 - This feels like it's a little counter to 
 - MLPs