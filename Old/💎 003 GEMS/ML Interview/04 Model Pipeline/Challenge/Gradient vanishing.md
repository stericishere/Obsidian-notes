---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 03:13
aliases:
  - Gradient vanishing
tags:
  - 🧠
type: ch
banner_x: 0.5
---
When the gradient became extremely small
-> it will be really hard to make any significant update
-> Weights stop adapting
	-> the weight is not useful anymore
## 4 main solution:
- <u>Choice of Activation Functions</u>
- <u>Improper Weight Initialization</u>
- <u>Batch Normalization / Layer Normalization</u>
- <u>Residual Connections (ResNets) / Highway Networks</u>
#### <u>Choice of Activation Functions</u>
![[Relu function#Relu function]]

----------
#### <u>Improper Weight Initialization</u>
![[Relu function#Weight initialization]]

----
#### <u>Batch Normalization / Layer Normalization</u>
![[Batch Normalization]]

---
#### <u>Residual Connections (ResNets) / Highway Networks</u>
- Allow gradients to "skip" layers, preventing them from vanishing in deep networks.
