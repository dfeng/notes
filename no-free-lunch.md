---
tags:
 - machine_learning
---

# No Free Lunch

Let's start by thinking about *search* algorithms 

Notation:

 - $X$ is countable search space (e.g. set of parameters)
 - objective function $f: X \mapsto Y$ that evaluates a particular choice
 - dataset $d^m = \{ d_X^m, d_Y^m \}$  is a set of $m$ pairs of $(x, f(x))$ (i.e. what you've tried so far)
 - search algorithm $\mathcal{A}$ simply appends to this dataset (i.e. continues the search, ideally finding $x$'s that lead to smaller $f(x)$)
 - arbitrary performance measure $\Phi: d_Y^m \to \mathbb{R}$ (i.e. evaluate how good a search algorithm is)

Suppose we want to find the minimum of $f$. Then, the search algorithm is exactly gradient descent, as in a proposal for the next step in the search.

Key Points:

 - 