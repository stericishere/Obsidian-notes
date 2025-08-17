---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-15 19:20
aliases: Neural Networks
tag: 🧠
type: l4
---
# Neural Networks:
## L4 – Principles:
> - <u>Goal</u>: Learn complex, nonlinear mappings from inputs to outputs by composing multiple layers of transformations.
> - <u>Structure</u>: A sequence of layers, each applying a linear transformation followed by a nonlinear activation.
> - <u>Universal Approximation Theorem</u>: With enough neurons, a neural network can approximate any continuous function.
> - <u>Loss function</u>: Depends on task — cross-entropy for classification, MSE for regression.
---
## L3 – Models:
> - <u>Fully Connected Layer</u>:
>   $$h^{(l)} = \sigma(W^{(l)} h^{(l-1)} + b^{(l)})$$
> - <u>Common Activations</u>:
>   - Sigmoid: $$\sigma(z) = \frac{1}{1 + e^{-z}}$$
>   - Tanh: $$\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$$
>   - ReLU: $$\text{ReLU}(z) = \max(0, z)$$
> - <u>Output Layers</u>:
>   - Regression: Linear activation.
>   - Classification: Sigmoid (binary) or softmax (multi-class).
---
## L2 – Operations:
> 1. <u>Forward pass</u>: Compute layer outputs sequentially from input to output.
> 2. <u>Loss computation</u>: Compare predictions to targets.
> 3. <u>Backward pass</u>:
>    - Apply the chain rule to compute gradients layer by layer (backpropagation).
> 4. <u>Parameter update</u>:
>    - Use GD, SGD, or variants (Adam, RMSProp) to update weights.
> 5. <u>Regularization</u>:
>    - Dropout, L2 weight decay, early stopping.
---
## L1 – Experience:
> From tutorials:
> - <u>Example</u>: Classify MNIST digits with a 2-layer fully connected network.
>   - Use ReLU activation in hidden layers.
>   - Train with cross-entropy loss and SGD.
>   - Evaluate with accuracy and confusion matrix.
> - <u>Observation</u>:
>   - Deeper networks can learn more complex patterns but are harder to train.
>   - Overfitting can be reduced with dropout and early stopping.
---
