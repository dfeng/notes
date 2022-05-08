---
tags:
---

# Generalisation

In statistics, what you have is some mythical "population", from which you are taking samples, usually in an i.i.d. fashion (think classic linear regression where $y = X\beta + \epsilon$). In such settings, there's really not much to worry about in terms of "generalisability" – the thing you have to worry about most is the noise, and ensuring that you don't overfit to it. Granted, there's the whole robust statistics field that tries to be robust to model mis-specification (usually in the distribution of the error), which is sort of like "generalisability".

On the other extreme you have the topic of domain shift, and being able to "generalise" from that. However, that feels like an intractible problem in its generality (though you can probably come up with nice heuristics that somehow try to infer the shift from the data?).

What I'm interested in is the more manageable version. I don't really want to put it into theory based on data distributions and samples, as I think that might restrict things. In a handwavy way