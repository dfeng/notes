# OCR

## Tesseract

[An Overview of the Tesseract OCR Engine](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/33418.pdf)

> Blobs are organized into text lines, and the lines and regions are analyzed for fixed pitch or proportional text. Text lines are broken into words differently according to the kind of character spacing. Fixed pitch text is chopped immediately by character cells. Proportional text is broken into words using definite spaces and fuzzy spaces.
> 
> Recognition then proceeds as a two-pass process. In the first pass, an attempt is made to recognize each word in turn. Each word that is satisfactory is passed to an adaptive classifier as training data. The adaptive classifier then gets a chance to more accurately recognize text lower down the page.
> 
> Since the adaptive classifier may have learned something useful too late to make a contribution near the top of the page, a second pass is run over the page, in which words that were not recognized well enough are recognized again.
> 
> A final phase resolves fuzzy spaces, and checks alternative hypotheses for the x-height to locate small-cap text.