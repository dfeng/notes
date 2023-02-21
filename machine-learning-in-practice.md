# Machine Learning in Practice;

or what they don't teach you in school;
or, more precisely, what I didn't teach my machine learning class students.

 - non-convex optimisation
	 - initialization anyone?
	 - surprisingly easy to get to some nice "minima" of sorts
	 - we are, after all, talking about 1.8 million parameters...
 - regularisation
 - lego pieces
 - lots of little tricks to get things to "converge". surprising power of these tricks.
 - tesseract: synthetic -> domain (generalization)
	 - disconnect between training/validation loss and generalization
 - same as in statistics: data is king
 - it feels like finding the perfect balance of inductive bias, helpful priors, good data, but not overfitting to the target distribution (data transforms + regularisation)
 - 

As a theoretician (or maybe statistician), we can't help but look at neural networks as simply a non-linear extension of linear models (regression). And with non-linearity comes non-convexity of the optimisation problem, which means that one must resort to greedy methods like gradient descent to tackle the problem.

As a theoretician versed in optimization theory,

The first (obvious) thing is that, it really does feel like piecing together lego blocks/fundamental units of computation.

Something that's special about the text recognition work