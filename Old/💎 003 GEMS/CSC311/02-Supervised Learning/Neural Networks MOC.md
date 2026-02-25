## Assumption:

<span style="background:#d2cbff"><u>Function Approximation Assumption:</u></span>
	1. Neural networks assume that the mapping from input → output can be approximated by **a composition of simple nonlinear functions**
	2. **Universal Approximation Theorem**: with enough neurons, an NN can approximate _any_ continuous function.

<span style="background:#d2cbff"><u>What is a Neuron?</u></span>
	A Neuron is a composition of Wx + b → activation function.
	- x: input vector
	- W: weight matrix (every input → every hidden unit)
		  each Neuron has the size of input vector of weights 
    - b: bias vector
    - σ: activation function
	![[Screenshot 2025-08-20 at 02.13.15.png|446x243]]

<span style="background:#d2cbff"><u>DAG of feed forward NN:</u></span>
	![[Screenshot 2025-08-20 at 02.14.29.png|492x271]]

<span style="background:#d2cbff"><u>What does Fully Connected Means?</u></span>
	Basically In each layer, **every neuron** connects to **every neuron** in the next layer.
	- <u>Trade-offs</u>
		Very **parameter-heavy**
		Doesn’t exploit structure in data
## Activation Functions:
- [[ReLU]]
- [[Soft ReLU]]
- [[Hard Threshold]]
- [[Sigmod]]
- [[Tanh]]
- [[Composition of Functions]]

- [[Feature Learning]]
- [[12 Expressivity - Hypothesis Space]]
- [[13 Deep Linear Networks vs Non-linear Networks]]
- [[14 Universal Function Approximators]]
- [[15 Classifying XOR with NNs]]
- [[16 Overfitting and Regularization in NNs]]
- [[17 Early Stopping]]
- [[18 Backpropagation]]
- [[19 Computation Graph]]
- [[20 Error Signal]]
- [[21 Gradient Checking with Finite Differences]]