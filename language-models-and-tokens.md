# Language Models: Fancy Number Pattern Matching

## Proof

Recall that with language models (and all natural language processing of late), our language is tokenized. Thus, at a fundamental level, the data these models ingest are exchangeable tokens. Recall also that the way in which we train models is by predicting the next word/token. This fact has been used as "proof" as to why language models cannot possibly be learning anything meaningful. However, it might be the case that, in order to correctly predict the next word in a sentence, one must first understand the whole world.

However, herein lies the problem with our current paradigm using tokenization. 

## Introduction

Is this a valid proof of the infeasibility, or perhaps undecidedibility of language models? As everyone likes to explain as if it's a fatal flaw, all language models are doing are predicting the next word. My simple argument is that, the learned "world model" doesn't have to be anything related to our world.

Update: someone just posted this paper to [arXiv](https://arxiv.org/abs/2212.03551).

Suppose I gave you a really, really long list of numbers (or symbols, or anything). Like, a really, really long list. And it's effectively random, from what you can tell. You're told there's a method to this madness/randomness. You see glimpses of repeated structures, kind of. But it's mostly just appears random.

It might help to think of it as numbers in base $|V|$, which is usually a pretty large number, but there's no ordering of the numbers. Perhaps that number of unique shades of a color.

How would you go about the problem of trying to make sense of the sequence, and perhaps start predicting the next element of the sequence?

One place to start might be to see if you can find some "meaning" for each of the symbols. Another way to put it might be: what is the relationship between these numbers? Unlike what we're used to in statistics, we have no numbers, no notions of size here. The symbols themselves are effectively devoid of meaning (like nodes on a graph), and all that matters are the relationships that we think there might exist.

I guess another way to think about it is nodes on a graph (which inherently don't have any ordering), and so what you see is just some "random walk" on this graph. There are no edges, just this list of visited nodes. And now your job is to make sense of these nodes, and be able to predict where this walk will go to next.

But I think what I want to emphasize here is that, it's so easy for us to just work at the word level, to ascribe some meaning to each of these symbols. But really, we should be thinking of it as a random list of symbols.

The reason why I think this might be useful is because, we see things like GPT-3 working so well, and we assume okay it must be able to do some kind of reasoning, or doing something similar to what we do. But it's a priori not guaranteed that the scaffolding we use to write sentences and paragraphs would be the same one that is learned by these models. Granted, it is the only way I can think of actually being able to predict things well, so it is probably doing something approximately similar. But there might be some way of interpreting and predicting the symbols that don't match our interpretation.

I guess another way to put this is that, neural networks are generally "lazy". Why would they build a model of the world to predict the next word in a sentence. They'll pick up on shortcuts and patterns, and it will feel similar to what we do, but really, deep down, it's just doing complicated symbol prediction!

## Path

Speaking of graphs, perhaps we can think of a sequence of text as a path from left to right, and the colors of the nodes correspond to the words. This might relate to the section below...

## Word Embeddings?

Not sure how good my above analogy is, as in general we are just not good about extracting patterns from things like a mass of symbols. So perhaps we should start with a simpler problem, and see how far we can go. Word embeddings seem like a more tractable thing – the simple idea there is to extract meaning through colocation.

The way we think about them is more, hey, look how surprisingly close they correspond to our understand!

Actually, we can make the situation even more believable. Suppose someone who's only versed in English was given a hundred chinese texts. Could they start to piece together meaning? Is this meaningful?

## PI?

As an aside, I wonder if there's something interesting about using NLP to try to predict/learn the digits of pi ([someone's thought of this before on reddit](https://www.reddit.com/r/MachineLearning/comments/f8x5if/predict_the_next_digit_of_pi_d/))?
