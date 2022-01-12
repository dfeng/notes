---
tags:
 - optimisation
---

# On Optimisation in Matrix Completion

Statisticians get their first taste of optimisation when they learn about penalised linear regression:
$$
\begin{align*}
  \min_{\beta} \|Y - X \beta\|_2^2 + \lambda\|\beta\|_p.
\end{align*}
$$
It turns out that there's an equivalent formulation (as a constrained minimisation) that provides a little more intuition:
$$
\begin{align*}
  \min \|Y - X \beta\|_2^2 \text{ s.t. } \|\beta\|_p \leq s,
\end{align*}
$$

![The OG image.](https://online.stat.psu.edu/onlinecourses/sites/stat508/files/lesson05/image_09.gif)

where there is a one-to-one relation between $\lambda$ and $s$. This different view provides a geometric interpretation: depending on the geometry induced by the $l_p$ ball that is the constraint set, you're going to get different kinds of solutions.

Note that the above equivalence is exact only when the loss and the penalty are both convex. In the [[matrix-completion]] setting, with our penalty, this is no longer the case.

The (classical) convex program [@Candes:2009kj] is given by:
$$
\begin{align*}
  \min \|W\|_\star \text{ s.t. } \|\mathcal{A}(W) - y \|_2^2 \leq \epsilon,
\end{align*}
$$
where setting $\epsilon = 0$ reduces to the noise-less setting. The more recent development using a penalised linear model is given by:
$$
\begin{align*}
  \min_{W} \| \mathcal{A}(W) - y \|_2^2 + \lambda \|W\|_{\star}
\end{align*}
$$
Since they're both convex, you have equivalence just like for the Lasso.^[I'm pretty sure that people have profitably used this equivalence in this context.]

## Non-Convex

What happens when we move to non-convex penalties though? Then, I think what you have is a *duality gap* (I could be wrong). If we use our penalty $\frac{\|{W}_{\star}}{\|{W}_{F}}$, then these two *views* are no longer equivalent. And here I think actually going back to the penalised loss function gives better results. For one thing, it's no longer a convex program, amenable to simple solvers.

In our experiments we find that running Adam on this penalised loss function gives great results. My speculation is that this might be the way to solve non-convex programs (I'm sure people have thought about this).