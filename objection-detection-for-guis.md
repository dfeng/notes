---
tags:
  - gui
  - machine learning
---

# Object Detection for GUI

## Problems

Large in-class variance and similarity between classes: basically, a very difficult problem!

 - Large in-class variance:
   - style is at the whim of the designer/application.
   - in general (interestingly), each data point has the same style, but across samples you have nothing
 - High cross-class similarity:
   - key here is that sometimes the difference between two GUIs is something very small. that being said, this is more about classifying different types of GUIs, which we don't really do right now.
 - Packed scenes:
   - close quarters, dense – in stark contrast to natural object detection problems

I think it's also important to highlight the difference between GUIs and natural images, because that's exactly where we can improve (or even cross-pollinate).

1. sharp, pixel based (plus some shadows, but all computer generated)
2. close quarter, dense
3. no common style per class

![examples](https://i.imgur.com/dPDbZRP.png)



![table](https://i.imgur.com/N1pFCLT.png)

