--- 
During **backpropagation**, gradients are multiplied layer after layer.
> Suppose your network is:
$$y = f_3(f_2(f_1(x)))$$
> During backprop:
$$\frac{\partial y}{\partial x}=\frac{\partial y}{\partial f_3} \cdot \frac{\partial f_3}{\partial f_2} \cdot \frac{\partial f_2}{\partial f_1} \cdot \frac{\partial f_1}{\partial x}​​$$
- If the activation function’s derivative is **very small** (like 0.01), multiplying repeatedly makes the gradient **shrink toward 0**.
- When gradients vanish, earlier layers stop learning

## Cause:
[[Sigmoid]]

## Solution:
[[ReLU]]
