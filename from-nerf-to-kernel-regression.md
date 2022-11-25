---
tags:
 - neural_tangent_kernel 
 - machine_learning
---

# From NERF to Kernel Regression

We can think of [[neural-representations]] as the composition of a set of some random fourier features/basis and an MLP (non-linear function). On the other hand, we have kernel methods, the gist of which is that you project your input space via a kernel into some more complicated, non-linear space, in the hopes that the resulting function to learn is linear. Meanwhile, there's theoretical work that shows that training infinitely wide neural networks corresponds to kernel regression with a particular kernel (NTK), I don't know where this fits in with everything just yet, but it's another piece of the puzzle.

What we have is some sort of progression. Starting from MLPs (or generic neural networks), we have the most general architecture that doesn't use any sort of basis functions (or you can think of it as adaptive basis functions). Methods like NERF are the next step, starting with some random and small basis functions, not fully expressive enough to result in a linear function, but good enough for a small-sized MLP to resolve. At the other extreme, you have kernel methods, that basically do all the hard (non-linear) work up front with the kernels, leaving the last bit a trivial linear exercise. NTKs are interesting, as they demonstrate a correspondance between (infinitely-wide) MLPs and the kernel method equipped with the Neural Tangent Kernel.

