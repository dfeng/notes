# Text Recognition Literature Review

## Text Recognition in the Wild: A Survey

![Various stages of text recognition](img/textrec.png)

 - Text Localisation (aka text detection)
	 - Early methods used low-level features such as color, gradient, stroke width transform, [maximally stable extremal regions (MSER)](https://en.wikipedia.org/wiki/Maximally_stable_extremal_regions), canny detector, conected component analysis.
 - Text Verification: checking whether or not candidate "boxes" actually contain text
	 - Again, this feels a little like Fast RCNN, where you're given a bunch of "Regions of Interest"(RoI), and the CNN then tries to classify the object; nowadays we don't really need a separate step for this.
	 - Early methods used SVMs, CRFs.
 - Text Segmentation: considered one of the most challenging parts
	 - line segmentation (multi-line into separate lines)
	 - character segmentation (breaking down into characters, which as pointed out by Alex is essentially what the bounds model does): early text recognition approaches opted for this technique.
 - Text Recognition:
	 - Early methods include histogram of oriented gradients descriptors, connected components, stroke width transform.
 - End-to-end systems:


## AE TextSpotter

![Architecture of AE TextSpotter](img/textspotter.png)