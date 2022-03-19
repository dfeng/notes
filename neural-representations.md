---
tags:
 - neural_networks
 - from_paper
---

# Neural Representations

src: [@sitzmann2020implicit]

Consider the following (seemingly contrived) problem: learn the function $f:\mathbb{R}^2\mapsto \mathbb{R}^3$ that takes $(x,y)$ coordinates and outputs the $(r,g,b)$ values of a (fixed) image. In other words, the idea here is to learn a *neural representation* of an image.^[It almost feels like we're talking about compression, but also not quite?]

![Example of an image represented as a function](img/img_fun.png)

To begin with, let's use an MLP to learn the function. All we're doing is learning a function from $[0,1]^2$ (first squeeze the image into the unit square) to $[0,1]^3$. Of course, the problem here is that this function is very much not smooth. However, it's also not the extreme case of learning an image of random noise, as there are patterns in the data (and possibly stretches of similar color in the background, for instance). Unsurprisingly, it is difficult for the MLP to learn this "function" – it simply learns a smooth function, which is basically a blurry version of the image.^[One might argue that MLPs are non-linear and so very much not smooth, in a proper functional analysis sense, and they would be right. Here I am using smoothness loosely to mean how bendy the function is (how able it is to interpolate random noise, say).]

Here is where thinking in terms of compression might be helpful. The fact that we can compress most natural images (via representations in different bases) suggests that there should be a way to functionally represent an image in an *efficient* manner. The question is, how can we transform the space so that the function $f$ we're learning is **smooth(er)**? Perhaps unsurprisingly, it turns out that thinking in terms of fourier bases gets you pretty far.

Recall that the idea behind image compression with FFT (great youtube video [here](https://www.youtube.com/watch?v=gGEBUdM0PVc)) is that you can represent an image as a sum of a sparse set of 2D-fourier bases (think 2D periodic waves). That is, most coefficients are negligible, and so you only need a sparse set of coefficients to reproduce the image. One way you can think about this is that you can start with the (deterministic) function $g: \mathbb{R}^2 \mapsto \mathbb{R}^{2k}$ that essentially stacks $k$ 2D-fourier bases, followed by a function $h: \mathbb{R}^{2k} \mapsto \mathbb{R}^3$. that takes a weighted sum of these bases. Note that the size of $k$ depends on the *resolution* of the image – it should be the number of pixels. Putting this together, we have $f = g \circ h$, which is a way of expressing an image through its fourier representation. One interpretation is that we've projected the input into a high-dimensional space, and then simply run a (sparse) linear model.^[Of course, when you actually do the FFT/DCT, you don't actually solve the linear model.]

<Note>
Note that actually, with a complete fourier basis, we've taken things to the extreme, so that the final function to be "learned" is the smoothest function possible, a linear one. After all, that is the point of using a complete basis – everything else is just linear combinations. It's just that the fourier basis elicits a sparse representation, whereas other bases might not be.
</Note>

Now, suppose we wanted to learn $f$ in a data-driven manner. A natural approach to consider is to learn the sparse basis functions, via something like an additive model ( [[generalized-additive-model]]).^[which differ from boosting algorithms as there the "basis " functions are also learned (hence the use of "weak learner" terminology).] This is the more classic statistical approach to the problem: 
Clearly we want to take advantage of the structure here. The natural thing to do is to replace $h$ with an MLP, and counterbalance that with a less expressive $g$. This is essentially a trade-off in expressivity between the two functions that compose $f$. If we knew the sparse coordinates of $g$, then we could get the lower-expressivity for free.

## Ideas

  - [ ] Is the performance a function of the total power (sum of magnitude/weights) of the fourier spectrum?
  - [ ] Assuming random noise is dense in the fourier domain, we should expect the fourier basis to be similar in performance to other complete bases? The idea is that random noise is not smoother with any sort of projection.