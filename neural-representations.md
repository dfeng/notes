---
tags:
 - neural_networks
 - from_paper
---

# Neural Representations

src: [@sitzmann2020implicit]

Consider the following (seemingly contrived) problem: learn the function $f:\mathbb{R}^2\mapsto \mathbb{R}^3$ that takes $(x,y)$ coordinates and outputs the $(r,g,b)$ values of a (fixed) image. In other words, the idea here is to learn a *neural representation* of an image.^[It almost feels like we're talking about compression, but also not quite?]

To begin with, let's use an MLP to learn the function. All we're doing is learning a function from $[0,1]^2$ (first squeeze the image into the unit square) to $[0,1]^3$. Of course, the problem here is that this function is very much not smooth. However, it's also not the extreme case of learning an image of random noise, as there are patterns in the data (and possibly stretches of similar color in the background, for instance). Unsurprisingly, it is difficult for the MLP to learn this "function" – it simply learns a smooth function, which is basically a blurry version of the image.^[One might argue that MLPs are non-linear and so very much not smooth, in a proper functional analysis sense, and they would be right. Here I am using smoothness loosely to mean how bendy the function is (how able it is to interpolate random noise, say).]

Here is where thinking in terms of compression might be helpful. The fact that we can compress most natural images (via representations in different bases) suggests that there should be a way to functionally represent an image in an *efficient* manner. The question is, how can we transform the space so that the function $f$ we're learning is **smooth(er)**? Perhaps unsurprisingly, it turns out that thinking in terms of fourier bases gets you pretty far.

Recall that the idea behind image compression with FFT (great youtube video [here](https://www.youtube.com/watch?v=gGEBUdM0PVc)) is that you can represent an image as a sum of a sparse set of 2D-fourier bases (think 2D periodic waves). That is, most coefficients are negligible, and so you only need a sparse set of coefficients to reproduce the image. One way you can think about this is that you can start with the (deterministic) function $g: \mathbb{R}^2 \mapsto \mathbb{R}^{2k}$ that essentially stacks $k$ 2D-fourier bases, followed by a function $h: \mathbb{R}^{2k} \mapsto \mathbb{R}^3$. that takes a weighted sum of these bases. Putting this together, we have $f = g \circ h$, which is a way of expressing an image through its fourier representation.

Now, suppose we wanted to learn $f$ in a data-driven manner using a MLP. It's somewhat unsurprising from the above analysis that we might want to take $g$ as given, and just learn $h$. 