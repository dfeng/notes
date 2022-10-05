# Generalisation Paper

Almost all theory on generalisation has assumptions, except cross-validation
Let's be non-parametric, and realise that generalisastion == self-generalisation
Use self-generalisation as the measure of generalisation (i.e. cross-validation)

Cross-validation is best, but we don't use it anymore in DL. Not computationally tractible.
Might we be inadvertently using a crude form of cross-validation?
A weaker form of cross-validation, one that relaxes the hold-out set condition, that does something iteratively, might be a good approximation?
But that's just mini-batch SGD

The key thing is that we've been thinking about SGD and generalisation all wrong. We start with the assumption that SGD is GD + noise, for instance (SGD's noise doing some implicit regularisation might make sense). But really we should realize that GD wasn't even the thing we wanted to optimize for in the first place, as one would naturally overfit without any regularisation.