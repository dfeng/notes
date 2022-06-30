# Text Recognition

## Differentiation

How we differentiate ourselves from existing services?

Currently, we are relying on the fact that we are dealing with GUIs, so we essentially have pixel-perfect font renderings. You can think of things as a spectrum: on the left we have our setting; in the middle we have things like scanned documents, where text is fairly uniform, though there are artefacts and noise introduced by the scanning procedure and others; finally you have the general problem of recognising text in the "wild" (e.g. street signage from photographs).

One might be tempted to create something that handles all possible situations.^[One might assume that solving the problem of text in the "wild" would suffice for the rest, as they are simpler problems, but just like in the case of line detection, SOTA text recognition models don't always perform that well on our simple GUI data.] However, it is unclear from our use-case if or when we will ever need to extend our OCR capabilities to the more general setting (and if or when that time comes, we can always run two models in parallel or something).

So I think for the purposes of our current implementation, we can safely assume that we will be reading rendered text on screenshots, the kind that is usually found in applications.

## Model Specifics

### To Column or not to Column

One of the nice things about rendered text on a screen is that you get some structure for free:
 - you can essentially assume that your text is exactly horizontal (there's no incline, or other weird orientations to have to worry about).
 - if you ignore things like italics, you can assume that characters occupy some contiguous set of columns, enabling you to make column-level predictions.^[Actually, this makes me think that somewhere the model should definitely be able to use the fact that characters are of a certain consistent range of relative width (though capital letters might throw things off).]
At the same time, you can probably break down more sophisticated models into a "pre-processing" step that turns weirdly oriented sequences of characters into some baseline horizontal orientation, maybe even normalized by size. Once you've done that, then we're basically on starting from the same position.

I think it would also be useful to think more broadly in terms of languages, 

## (Implicit) Language Model

Currently, we're doing character level predictions, and our receptive field is roughly enough to probably see one character each side usually (depending on the font size!). On the other hand, most SOTA models now use some kind of decoder/sequence model (e.g. LSTM), allowing for longer-range dependence and hence (character-level) "language models".

It's an interesting question, whether or not having a language model would be better for us. At the end of the day, it boils down to evaluating the kinds of errors our models are making and would be better solved with a language model, and counterbalancing that against the kinds of biases that might be introduced, especially when dealing with serial numbers that have more arbitrary character sequences.

The way I would interpret our dataset distribution is as follows:

1. In terms of actual GUIs, most of it is reasonable, English,^[Though actually we should probably start thinking about other languages.] text.
2. The trickier stuff are the free-form input textboxes, as well as other random sequences of characters that represent things like IDs.

Most of the text will be the application text (which would most likely be used for either navigating, via buttons or menus, or used indirectly as anchors). We should be getting those right, but one could argue that getting those things wrong might matter a little less, because we're not "reading" from them, and so it's much more difficult to have **silent failures**. On the other hand, the more random string of characters (or let's stay string of numbers, where a language model would be slightly undesirable) might not be as common in terms of what text is seen on the actual screen, but it is definitely more likely to be chosen and interacted with.

<Note>
Key point: there's an important distinction between what text will be seen on a screen, and what text will need to be interacted with; even if most text on a screen are application text (like field labels), many if not most of those texts won't actually be read.
</Note>Easy to forget this.



As an interesting aside, when we trained