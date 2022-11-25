

Let's start with the **intuition**. How come SGD outperforms GD? There's most likely not a single conclusive answer to that question, but here we take a stab at an intuitive answer that, we believe, provides something more direct than all the previous suggestions. It's worth revisiting those suggestions at some point, but let's push forward for now.

So what is this piece of intuition? Well, what's the difference between GD and SGD? One way to frame the difference is via ERM, which is to focus on empirical risk minimisation as a proxy for actual risk minimisation. And then gradient descent is just directly minimising the empirical risk, while stochastic gradient descent is an approximation of gradient descent. Most papers in this field think of SGD as GD + noise. That is, ER is still the key thing to focus on, but in the spirit of regularisation, having some noise might actually be a good thing. But the target is still ER. And yes, that is how SGD came about, a happy sort of accident.

