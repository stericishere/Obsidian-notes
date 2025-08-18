---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-17 21:06
aliases: 01 Feed-forward neural net for input prediction
tag: 🧠
type:
---
# Topic: Autoencoders – Feed-Forward Neural Networks for Input Prediction

## 🧠 L4: Principles

An **autoencoder** is a type of feed-forward neural network whose primary function is to **take an input and predict that same input**. The core idea behind autoencoders is to learn a compressed representation, often referred to as a "code," by forcing the input information through a **bottleneck layer**. This bottleneck layer has a significantly smaller dimension than the input layer, making the reconstruction of the original input a non-trivial task.

The main purposes of autoencoders include:
*   **Dimensionality reduction**: They can map high-dimensional data to a lower-dimensional space. This is useful for saving computation and memory, reducing overfitting, and achieving better generalization.
*   **Visualization**: By mapping data to two dimensions, autoencoders enable visual exploration of complex datasets.
*   **Unsupervised feature learning**: Autoencoders learn abstract features from unlabeled data. This is particularly valuable because unlabeled data is often much more abundant than labeled data, and these learned features can then be applied to supervised tasks.

## 🧩 L3: Models

Autoencoders are generally structured as neural networks that learn to encode an input into a lower-dimensional representation and then decode that representation back into an approximation of the original input.

### Linear Autoencoders

The simplest form of an autoencoder features:
*   **One hidden layer**.
*   **Linear activation functions**.
*   **Squared error loss** as its objective function, aiming to minimize the difference between the input `x` and its reconstruction `x̃`.

A linear autoencoder computes the reconstruction `x̃` as a linear function of the input `x`, specifically `x̃ = W2W1x`. Here, `W1` acts as the **encoder**, mapping the high-dimensional input `x` to a lower-dimensional code `z` (where `z = W1x`). `W2` acts as the **decoder**, mapping the code `z` back to the reconstructed input `x̃` (where `x̃ = W2z`). If the bottleneck layer's dimension `K` is less than the input dimension `D` (`K < D`), the autoencoder performs dimensionality reduction.

```mermaid
graph TD
    X[Input x #D-dim] --> W1[Encoder #W1]
    W1 --> Z[Laten Code z #K-dim]
    Z --> W2[Decoder #W2]
    W2 --> X_tilde[Reconstruction x̃ #D-dim]

    style W1 fill:#f9f,stroke:#333,stroke-width:2px;
    style W2 fill:#f9f,stroke:#333,stroke-width:2px;
    style X_tilde fill:#ccf,stroke:#333,stroke-width:2px;
    linkStyle 0 stroke:#666,stroke-width:1px;
    linkStyle 1 stroke:#666,stroke-width:1px;
    linkStyle 2 stroke:#666,stroke-width:1px;
    linkStyle 3 stroke:#666,stroke-width:1px;
````

**Connection to PCA**: Notably, the optimal weights for a linear autoencoder are directly related to **Principal Component Analysis (PCA)**. If the data is centred, the autoencoder can achieve the best possible K-dimensional linear subspace (in terms of minimum reconstruction error) by setting `W1 = U⊤` and `W2 = U`, where `U` is the matrix whose columns are the principal components (eigenvectors of the empirical covariance matrix). This means **linear autoencoders effectively learn the principal components** of the data.

### Nonlinear Autoencoders

Unlike linear autoencoders which project data onto a linear subspace, **deep nonlinear autoencoders learn to project data onto a nonlinear manifold**. This manifold represents the "image" of the decoder, allowing for a more complex and flexible dimensionality reduction. Nonlinear autoencoders can learn more powerful codes for a given dimensionality compared to their linear counterparts.

## ⚙️ L2: Operations

The operation of an autoencoder involves a forward pass for encoding and decoding, and a backward pass for learning the weights.

1. **Forward Pass**:
    - Given an input vector `x` (D-dimensional), the encoder `W1` transforms it into a K-dimensional **code (or representation) `z`**: [[z = W1x]].
    - The decoder `W2` then transforms this `z` back into a D-dimensional **reconstruction `x̃`**: [[x̃ = W2z]].
    - For a linear autoencoder, the overall computation is [[x̃ = W2W1x]].
2. **Loss Calculation**: The discrepancy between the original input `x` and its reconstruction `x̃` is quantified using a **loss function**, typically the **squared error loss**: [[L(x, x̃) = ∥x − x̃∥2]].
3. **Learning (Optimization)**: The goal is to minimize this loss function. For linear autoencoders, if `K < D` (where `K` is the dimension of the bottleneck layer and `D` is the input dimension), the network effectively learns the principal components of the data. This means the optimal weights for the encoder `W1` are the transpose of the principal components matrix `U` ([[W1 = U⊤]]), and for the decoder `W2`, they are the principal components matrix itself ([[W2 = U]]). For nonlinear autoencoders, gradient-based optimization methods like **stochastic gradient descent** are used to update the weights.

## 🌍 L1: Experience

Autoencoders offer practical benefits for understanding and processing data:

- **Data Visualization**: By training an autoencoder with a 2-dimensional bottleneck (K=2), high-dimensional data can be effectively mapped and visualized. For example, a 2-dimensional autoencoder can learn representations of newsgroup articles, visually clustering them by topic even without explicit topic labels being provided to the algorithm.
    
- **Unsupervised Feature Learning**: Autoencoders can learn meaningful, abstract features from large amounts of unlabeled data. These learned features can then serve as inputs for subsequent supervised learning tasks. This is powerful because unlabeled data is often far more abundant and easier to acquire than labeled data.
    

> [!question] How do autoencoders, particularly linear ones, achieve dimensionality reduction and how is this related to PCA?

> [!TIP] Consider using **Canvas** to visually explore the mapping from high-dimensional input to low-dimensional code and back to reconstruction.

## 🔢 Table View: Autoencoder Types

|Type|Activation Functions|Goal of Dimensionality Reduction|Relationship to PCA|
|---|---|---|---|
|**Linear**|Linear|Project data onto a linear subspace|Learns Principal Components|
|**Nonlinear**|Non-linear|Project data onto a nonlinear manifold|More powerful than PCA for complex data|

> [!TIP] Use **Table View plugin** to categorize and compare different autoencoder architectures.

## 🧠 Plugin Suggestions

- **Mermaid**: Create diagrams (e.g., flowcharts for the autoencoder architecture).
- **Table View**: Organize structured information, like the comparison of autoencoder types.
- **Canvas**: Visually map multi-layered relationships and explore data projections.
- **Spaced Repetition**: Turn > [!question] callouts into flashcards for active recall and memory reinforcement.
