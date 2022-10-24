# To E2E or Not

That is the question.

I've been working on a text recognition model at work, and the way it's currently set up, the model outputs something, which then is fed into a separate piece of logic/algorithm that then resolves the output to the text sequence itself. It's kind of like having a [[conditional-random-field]] at the end, but our post-processing sequence inference is much more involved.

On the other extreme you have e2e models (LSTMs, Transformers)