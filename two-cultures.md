---
tags:
 - from_paper
 - statistics
 - research
 - classic_papers
---

# Two Cultures

src: [@Breiman:2001wl]

Written in 2001, I would say that many of the issues raised in this seminal paper have not changed much in the intervening years.

## Chapter by Chapter

### Introduction

We start with data $(x,y)$, and assume there is a black box that relates inputs to outputs, $y = f(x)$. He then differentiates between two cultures: data modelling, and algorithmic modelling.

Data modelling defines a strict stochastic model form of $f$, equipped with noise, parameters (i.e. classical statistics). We learn parameters from the data, and do robustness checks.

Algorithmic modelling, on the other hand, makes no assumptions on the form of $f$ -- it simply learns some $\hat{f}$ that is close in prediction space to $f$. There are parameters, and structure, but they are on $\hat{f}$. Thus, the black box of nature is left intact and untouched.

### Use of Data Models

> This enterprise has at its heart the belief that a statistician, by imagination and by looking at the data, can invent a reasonably good parametric class of models for a complex mechanism devised by nature

He worries that there is an over-reliance on data models, and that people forget that "if the model is a poor emulation of nature, the conclusions may be wrong".^[In my years of consulting experience, I can definitely attest to the over-reliance on data models, but I think this specific point is more a pedagogical issue than a research-focus one.]

We begin with linear models, the bread-and-butter of a statistician's arsenal. We can probably all recite the model assumptions of this model, which with probability 1 do not hold in practice. That never stopped anyone from claiming significance and writing a paper. More sophisticated practitioners would look at *goodness-of-fit* tests, or even *robustness* checks.

> In a discussion after a presentation of residual analysis in a seminar at Berkeley in 1993, William Cleveland, one of the fathers of residual analysis, admitted that it could not uncover lack of fit in more than four to five dimensions.

What you essentially have is the *curse of dimensionality*, which makes it difficult (unless you have exponential sample size) to be able to test for anything in high dimensions.^[Intuitively, you don't get linear increase with dimension, but exponential, since it's more about linear combinations of variables.] Thus, all the classical things we teach in robust statistics just really aren't that applicable once you deal with non-trivial data sizes.

Then there is the separate issue of guided regression (or, the garden of forking paths, as poetically put by Gelman), which, in the past decade, has come under scrutiny as a result of the *replication crisis*. He attributes the laissez-faire attitude that statisticians had to this, back in the day, to the preoccupation with the data model.^[I think this is a little bit of a stretch. I think the takeaway here is that statisticians need to be very careful about the models they create, since goodness-of-fit tests (and the like) make it very easy to hoodwink oneself into thinking that a procedure is valid, when in fact subtle issues of selection bias may be creeping in. On the other hand, the test data never lies (well, rarely).]

## Two Decades On

