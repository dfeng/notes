---
tags:
---

# Fourier Features: A Curious Lens into Deep Learning

 - Tancik showed, using NTK theory, that MLPs have a hard time learning high frequency signals
 - it was shown in Barron that the approximation error of a 1-layer MLP (with sigmoidal activation functions) is governed by the power of the spectrum of the fourier transform of the signal – higher frequency signals are more difficult to approximate
 - Spectral Bias paper showed that MLPs learn the lower-frequencies first, then followed by the higher frequency signals (over the duration of training)

Actually, what I think this all boils down to *noise*. Usually noise is the high frequency part (well more like, it causes the representation to require high frequency components). So, when you give the model too much capacity to learn these parts, then you're effectively learning the noise. The problem is you can't really differentiate between noise and signal when the signal is also of high frequency.

 - Fourier features enable MLPs to fit to worst-case functions fairly easily.
 - Given their (periodic) structure, fourier features are considerably more brittle/susceptible to noise (of the independent, localised kind).

So, the story is something like:

 - MLPs good function approximators
 - the larger the power spectrum, the more difficult it is to learn
 - fourier features allow us to bypass/circumvent this worst-case
 - however, this comes at a cost. namely, that now we're very sensitive to noise
 - this is because we're directly estimating the noise.