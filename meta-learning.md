---
tags:
 - machine_learning
 - meta_learning
---

# Meta Learning

src: [thesis](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2018/EECS-2018-105.pdf)

- relates to [[transfer-learning]], except you're trying to do an even better kind of pre-training, that generalises across all tasks
- intuition:
    - you want to train a NN so that it does well on a whole class of tasks, and not specific to one dataset
    - you want to "pre-train" a NN such that, regardless of the task you eventually train it on, it'll be very quick to "train"
        - speed of training is a proxy for "close-ness" of the solution
        - if you're learning a useful representation, then this pre-trained model should speed up training
        - <mark>it seems to me that this doesn't necessarily hold: if you think of training a NN as "learning", then this is like starting with knowledge of "fundamentals". but I don't think the analogy works very well, since it's really just the "initialisation", and it quickly gets "replaced".</mark>
            - I guess what I'd like is some kind of **augmentation**
            - a little more like how LSTMs have a memory slot
- then they're going to use gradient updates, somehow
- my initial guess:
    - suppose you have a set of datasets. in some sense, what you want is to find the mid-point of all the trained models. you could just take one step per dataset (or sampled)
    - but will this *converge*?
        - it might be the case that the steps you take are in the opposite direction?
            - though, if that's the case then that just means you've reached an "impasse" (or that there's nothing shared between them)
- *The process of training a model’s parameters such that a few gradient steps, or even a single gradient step, can produce good results on a new task can be viewed from a feature learning standpoint as building an internal representation that is broadly suitable for many tasks.*
- *From a dynamical systems standpoint, our learning process can be viewed as maximising the sensitivity of the loss functions of new tasks with respect to the parameters*
- they have some theory that shows that a single gradient-step can get you to any function (??) – this seems impossible