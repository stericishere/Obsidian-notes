---

---
---
If a Neuron's push its inputs below 0 for all data
- Then **it always output 0**
- Gradient = 0 since f'(x) = 0
- Then **No update ever happens**

<u><span style="background:#d2cbff">Why does it happens?</span></u>
- With a learning rate that’s too high, weights can “overshoot” and kill many neurons.
- **Large negative weight** can push the input far into the negative side.
- Once dead, gradients = 0 → they stop learning.