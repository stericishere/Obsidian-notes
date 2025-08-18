---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 03:03
aliases:
  - RNNs
tags:
  - 🧠
type: dp
---
# RNNs
![[Pasted image 20250722030339.png]]
![[Pasted image 20250722030350.png]]

## <u>Main points:</u>
<u>For what data?</u>
> - time-serial data
<u>What's special about it?</u>
> - RNNs maintain context via recurrent connections
> - Each step’s output depends on previous steps (“context signal”).
<u>What task it suitable for?</u>
> - Common in NLP, translation, and forecasting.
---
## <u>Layer-details:  </u>
<u>Input, hidden, and output cells:</u>
> - Input cell: <span style="background:#fff88f">Receives data at each time step.</span>
> - Hidden cell: <span style="background:#fff88f">Maintains state across steps</span>
> - Output cell: <span style="background:#fff88f">Produces final prediction for each step.</span>
<u>Recurrent cell:</u>
> - Passes information forward in time (enabling memory).
<u>Context signal: </u>
> - Hidden state carries information from prior steps to influence future outputs.
---
## Advantage:
> - Handles variable length inputs
> - Capture temporal dependency 
---
## Disadvantage:
> - Struggle with long sequence
> - [[Gradient vanishing & exploding]]
> -  Limited memory in practice 
---
## Extended explanation:
> - l
---


