# Generalisation Paper

Almost all theory on generalisation has assumptions, except cross-validation
Let's be non-parametric, and realise that generalisastion == self-generalisation
Use self-generalisation as the measure of generalisation (i.e. cross-validation)

Cross-validation is best, but we don't use it anymore in DL. Not computationally tractible.
Might we be inadvertently using a crude form of cross-validation?
A weaker form of cross-validation, one that relaxes the hold-out set condition, that does something iteratively, might be a good approximation?
But that's just mini-batch SGD

The key thing is that we've been thinking about SGD and generalisation all wrong. We start with the assumption that SGD is GD + noise, for instance (SGD's noise doing some implicit regularisation might make sense). But really we should realize that GD wasn't even the thing we wanted to optimize for in the first place, as one would naturally overfit without any regularisation.

## What is Generalisation even?

When we talk about generalisation, we use it in a very vague way. I guess that's why it's nice to talk about generalisation in terms of these nice populations and expectations; otherwise, there's nothing really concrete going on.

I think at some level, generalisation relates to how our brain works. We think there are certain ablations or changes to the distribution that we hope the model would be invariant to, and we somehow hope that the model is able to infer that somehow...

But it can't really be the case that what we're talking about (SGD vs GD) is what drives this ability to infer what should or shouldn't be invariant to. Though, insofar as having the crutch of cross-validation might align with that purpose, but that's not a deliberate or guaranteed solution.

Maybe one way to think about it is the following: is it true that, every time we're kind of surprised by the generalisability of a model (i.e. we didn't explicitly tell it to be invariant to something), it's one of two things: either by some regularisation it ended up with a more succinct model that happened to match the invariance; alternatively, because it was handicapping itself when training, it kind of had to rely on the fundamentals...

## Experiments

The empirical claim is that SGD is doing something like CV, or more accurately, that SGD should have lower CV error than GD.

It would also be good to show that, you can come up with examples where CV and generalisation error don't necessarily go hand in hand. Then, what we would expect is that SGD doesn't actually improve generalisation in such settings?