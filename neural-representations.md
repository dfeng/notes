---
tags:
 - neural_networks
 - from_paper
---

# Neural Representations

Consider the following (seemingly contrived) problem: learn the function $f:\mathbb{R}^2\mapsto \mathbb{R}^3$ that takes $(x,y)$ coordinates and outputs the $(r,g,b)$ values of a (fixed) image. In other words, the idea here is to le arn a *neural representation* of an image. It has some flavour of compression, but in a very weird way.

To begin with, let's use an MLP to learn the function. All we're doing is learning a function from $[0,1]^2$ (squeeze the image into the unit square) to $[0,256]^3$. Of course, the problem here is that this function is very much not smooth. It's not quite the extreme case of learning an image of random noise, as there are patterns in the data (and possibly stretches of similar color in the background, for instance). Unsurprisingly, it is difficult for the MLP to learn this "function" – it simply learns a smooth function, which is basically a blurry version of the image.

Here is where thinking in terms of compression might be helpful. In some sense, we want to take advantage of the compressability of natural images – the question is how to "transform" this inductive bias into smoothness in function space.


## References

[@sitzmann2020implicit]