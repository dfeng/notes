---
tags:
 - paper
 - overparameterization
---

# Overparameterized Regression

src: [@Arora:2018vn], section 3 on $l_p$ regression

They show that in the simple scalar linear regression problem, i.e. loss function

$$
  \E[(x,y)\sim S]{\frac{1}{p}(y - \mathbf{x}^\top \mathbf{w})^p}
$$

if you overparameterize ever so slightly to

$$
  \E[(x,y)\sim S]{\frac{1}{p}(y - \mathbf{x}^\top \mathbf{w}_1 w_2)^p},
$$

then gradient descent turns into an accelerated version.

- I remember Arora presenting on this particular result a few years back (or something like this), and finding it very intriguing.
- I think this goes nicely with the theme of [[statistics-vs-ml]], though it's a slightly different angle.
  + essentially: we statisticians are **afraid** of overparameterization, because it removes specificity/leads to ambiguity
  + but actually, when it comes to these gradient methods, it actually helps to *overparameterize*