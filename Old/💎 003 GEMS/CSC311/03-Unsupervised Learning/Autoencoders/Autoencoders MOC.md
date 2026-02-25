## 🔢 Table View: Autoencoder Components
**Unsupervised Learning**
**Autoencoder Training:** 
	Encode → bottleneck → decode → minimize reconstruction error.
	

| Component       | Role                              | Example                               |
| --------------- | --------------------------------- | ------------------------------------- |
| Encoder         | Compress input to [[Latent code]] | 784 → 32 neurons (MNIST digit images) |
| [[Latent code]] | Bottleneck representation         | 32-dimensional feature vector         |
| Decoder         | Reconstructs input                | 32 → 784 neurons                      |
| Loss Function   | Measures reconstruction error     | MSE or Cross-Entropy                  |
| Training Data   | Inputs = Outputs                  | Image → Image, Signal → Signal        |
|                 |                                   |                                       |
> [!TIP]  
> Think of autoencoders as **unsupervised feature learners**: instead of labels, the network learns structure directly from the input.

- [[01 Feed-forward neural net for input prediction]]
- [[02 Bottleneck layer]]
- [[Linear Autoencoders and PCA relationship]]
- [[04 Nonlinear Autoencoders]]
