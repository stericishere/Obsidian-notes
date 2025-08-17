---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 01:44
aliases: CNN
tag: 🧠
type: dp
---
# CNN
A CNN is a deep learning model for processing grid-like data, especially images.
![[Pasted image 20250722014609.png]]
## <u>Main points:</u>
<u>For what data?</u>
 > - Specialized for image and spatial data (unstructured data)
<u>What's special about it?</u>
>- Uses convolutional layers for feature learning 
    - Employ filters for pattern detection
    - Goodat handling transltion-invariant features
<u>What task it suitable for?</u>
 - Powers tasks like image classification, object detection, facial recognition

## <u>Layer-details:  </u>
<u>Input Layers: </u>
> - Pixel of a image
<u>Convolution Layers: </u>
> - Slides filters over input to extract local patterns (detect edges, shapes, textures)
> - Parameter sharing:
>	> - Used the same parameters as a filter and reused across the input image
>	> - Reduces overfitting 
<u>Pooling Layers: </u>
> - Reduces dimensionality, keeps important info  
<u>Fully Connected Layer: </u>
> - Predict class

## Advantage:
> - Excellent for image classification task
> - Capture hierarchical features
> - Reduces the need for manual feature engineering
## Disadvantage
> - Require substantial data for training
> - May overfit on small dataset
> - Limited understanding of complex context

## Extended explanation:
> - A Convolutional Neural Network (CNN) is a type of neural network designed to process data with a grid-like topology, such as images. 
> - Unlike traditional neural networks, CNNs use convolutional layers to scan input with smaller filters, automatically learning spatial hierarchies of features.
> - This makes them exceptionally good at recognizing patterns in visual data.
