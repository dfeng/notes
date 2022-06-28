# Text Recognition

How we differentiate ourselves from existing services?

Currently, we are relying on the fact that we are dealing with GUIs, so we essentially have pixel-perfect font renderings. You can think of things as a spectrum: on the left we have our setting; in the middle we have things like scanned documents, where text is fairly uniform, though there are artefacts and noise introduced by the scanning procedure and others; finally you have the general problem of recognising text in the "wild" (e.g. street signage from photographs).

One might be tempted to create something that handles all possible situations.^[One might assume that solving the problem of text in the "wild" would suffice for the rest, as they are simpler problems, but just like in the case of line detection, SOTA text recognition models don't always perform that well on our simple GUI data.] However, it is unclear from our use-case if or when we will ever need to extend our OCR capabilities to the more general setting (and if or when that time comes, we can always run two models in parallel or something).

So I think for the purposes of our current implementation, we can safely assume that we will be reading rendered text on screenshots, the kind that is usually found in applications.

## Language Model

It's an interesting question (and one that has a huge impact on model design), whether or not we want to have a language model