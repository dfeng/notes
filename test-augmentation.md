# Test Augmentation

via [@zhou2019objects]

> **Training**: [...] We use random flip, random scaling (between 0.6 to 1.3), cropping, and color jittering as data augmentation, and use Adam to optimize the overall objective.
> [...]
> **Inference**: We use three levels of test augmentations: no augmentation, flip augmentation, and flip and multi-scale (0.5, 0.75, 1, 1.25, 1.5). For flip, we average the network outputs before decoding bounding boxes. For multi-scale, we use NMS to merge results. These augmentations yield different speed-accuracy trade-off, as is shown in the next section.

As is typical when training [[computer-vision-tasks]], this paper applies [[data-augmentations]] like flipping and scaling. The intuition here is just a straightforward way to expand the dataset distribution, as well as make the model *invariant* under such transformations.

However, what is less typical is considering "test-time" augmentations. It's feels kind of like [[ensemble-methods]], since you're combining and averaging values from two "models", except it's a training-free direct function of the original model (in fact literally just the same model applied to different "views" of the same data point). Of course one can't help but also compare this to [[self-supervised-learning]].

Recall that the general idea of ensemble methods is that by taking averages of things that are hopefully decorrelated you keep a similar level of bias but decrease the variance, thereby reducing MSE. Usually what that means is you train these models separately on different views of the same dataset, and then combine the results.

Here, instead, we take advantage of the augmentations and create slightly different "models" via these augmentations – this approach doesn't work if you don't train with them. At the same time, if these augmentations worked *perfectly*, then this test-time amalgamation would be moot (?).