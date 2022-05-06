# Generalisation from Batch

How can a neural network "generalise"? What does it even mean for something to generalise? Let's take a look back at classical machine learning, which was driven by things like bagging (and boosting): the idea behind bagging is that you can "expand" your training set by bootstrapping, thereby allowing you to effectively create the test set without actually holding a set out explicitly. More generally, there was a lot of emphasis on cross-validation; there's no point in looking at training set performance, all you cared about was test set performance (and you would use that to select your models).

In my mind, there seems to be (maybe only) two ways for models to learn to generalise:

 - One way for a model to be able to generalise well is to force it to do something along those lines: let it learn on one thing, and then check its performance on something else.
 - The alternative is to have something more like some inductive bias or implicit regularisation taking effect such that it makes the model learn to not just overfit on the training data, but learn something useful in the things it hasn't seen. I guess simlar to this would be if we hard-coded some inductive biases that led to the same effect.

Machine learning models are not magic – there needs to be a reason why they can generalise well (and usually it is implicit). On the first point, it seems to me that actually, the mini-batch nature of SGD gives you something akin to this kind of hold-out set. There has been research on what is known as the "generalisation gap", which is the empirical evidence that large batch sizes do worse in generalisation than small batch sizes, and they usually explain it in terms of the curvature of the loss landscape, which could be the correct explanation. However, I sort of like this more hand-wavy idea that I have.

Suppose you do straight up gradient descent: then you're effectively using the full dataset to move your gradient. This is "optimal" in the sense that for the given optimisation problem, you are moving in the right direction (that will be the best at minimising the loss for this whole dataset).

Now suppose you were doing something akin to classic cross-validation. You have a training and test set. Then, you'd calculate your gradient on the training set, update the parameters, and then see the performance change in the test set. But then you'd have to make a choice: try a few different gradients and see which one generalises the best. Instead, you could say, I don't actually care about the performance on this test set, all I know is that you should use this data to perform the gradient step (that's sort of proxy for using it as a hold-out set?). So then, it's something like alternating minimisation.

Perhaps this story is a little far-fetched, but I feel like there's something interesting here.