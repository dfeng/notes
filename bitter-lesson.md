---
tags:
 - from_article
---

# Bitter Lesson

src: [blog](http://incompleteideas.net/IncIdeas/BitterLesson.html)

## Summary

In AI research, leveraging computation > incorporating domain knowledge. Given finite resources, it always pays to improve computation than to incorporate domain knowledge.

> the only thing that matters in the long run is the leveraging of computation

This *bitter* lesson arises in part because of our anthropocentric view (that's not how we as humans solve *insert_difficult_task*!), biasing us towards more elaborate systems.

> And the human-knowledge approach tends to complicate methods in ways that make them less suited to taking advantage of general methods leveraging computation.

Also, there's a trade-off, especially as the injection of human knowledge gets more elaborate, then there's usually a computation cost.

### History

 - Chess: search-based approaches beat out leveraging human understanding of structure of chess
 - Go: key insight was *learning by self-play*, which enabled massive computation to be brought to bear
 - Speech Recognition: linguistics, we have the Unreasonable Effectiveness paper of Norvig
   + More recently, the massive scale language models (like GPT-3) show that larger models/datasets outperform fancier architectures (and history repeats itself)

> We want AI agents that can discover like we can, not which contain what we have discovered. Building in our discoveries only makes it harder to see how the discovering process can be done.

Even though a lot of our knowledge is *guided*, for most of our general-purpose intelligence, it just happens naturally, so it should be similarly for building AI.

## Thoughts

I'm not as familiar with the AI game literature, but at least in the context of NLP/image classification and DL, there seems to be an ideal sweet-spot in terms of finding the right kind of architecture that's powerful enough to learn, but is simple enough that you can run it on an extreme scale. I think that's partly why we still continue to innovate on the model side. If we hadn't done so, then we wouldn't have gotten [[transformers]], which has been a boon for NLP.

What is pretty clear is that domain-knowledge injection is not *scalable* (think expert systems back in the day). What's better are general-purpose methodologies, and the more general-purpose, the better (update: no longer think this relationship is linear: [[generalised-neural-networks]]). However, this would suggest that something like CNNs are actually *suboptimal*, since convolutions are definitely highly specific to image classification. But I think that's part of the allure of [[graph-neural-networks]].

Given the successes of CNN in image recognition, I suspect that for specific domain tasks, a little bit of domain knowledge can go a very long way (it's not like it's hard-coding edge detection, so it's still pretty general purpose).

Finally, it feels like we just need to be better at *learning-to-learn* (
[[meta-learning]]). I don't think it's necessarily a bad thing to take inspiration from human intelligence (since we're the only successful example). So, ultimately, I think the *bitter lesson* is really just a stop-gap until we can sufficiently narrow the emulation gap.