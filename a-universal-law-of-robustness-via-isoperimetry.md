---
tags:
 - from_paper
---

# A Universal Law of Robustness via Isoperimetry

src: [@Bubeck:2021vv]

Here's another attempt to explain the overparameterisation enigma found in deep learning ($p >> n$).

 - to fit (interpolate) $n$ data points of $d$ dimensions, one requires $nd$ parameters if one wants a *smooth* function (without the smoothness, $n$ should suffice)
 - thus, the overparameterisation is necessary to ensure smoothness (which implies *robustness*)

Their theorem/proof works in the contrapositive: for any function class smoothly parameterised by $p$ parameters (each of size at most $\text{poly}(n,d)$), and any $d$-dimensional data distribution satisfying mild regularity conditions, then any function in this class that fits the data *below the noise level* must have Lipschitz constant larger than $\sqrt{\dfrac{nd}{p}}$.

 - note that this result doesn't say that you'll fit a smooth function if you're overparameterising -- just that if you don't have enough parameters, then there's no way you're fitting a smooth one.
   + thus, in the context of scale (à la [[gpt3]]), this result says that scale is *necessary* to achieve robustness (though not sufficient).

 - the noise level here is defined as the expected conditional variance $\sigma^2 := \mathbb{E}_{\mu}\left[\text{Var}(y \mid x)\right] > 0$. noise is necessary from a theoretical perspective, as it prevents fitting a smooth classifier with perfect accuracy.