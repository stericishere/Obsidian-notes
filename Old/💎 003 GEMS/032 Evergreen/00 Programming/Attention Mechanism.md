---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 03:45
aliases:
  - Attention Mechanism
tags:
  - 🧠
type: dp
---
# Attention Mechanism


## <u>Main points:</u>
<u>For what data?</u>
> - any data
<u>What's special about it?</u>
> - it has 3 core variables
> 	- Query (Q)
> 	- Key (K)
> 	- Value (V)
>
<u>What task it suitable for?</u>
> - LLM

## <u>The idea:</u>
<u>Query (Q)</u>
> - The current word or state to process (like a specific token)
> - The Query of one token is compared against the Keys of all other tokens in the input.
> - `Query Vector(Q) = (E + Positional Encoding) × Wq`
> - where `E` and `W_q` are fixed
<u>Key (K): </u>
> - <u>Key Matrix (Wk)</u>: 
> 	- A fixed "recipe" learned during training to create Key vectors.
> - `Key Vector(K) = (E + Positional Encoding) × W_k`
<u>Dot Product: </u>
> - `raw_score = Query("focus_word") ⋅ Key("other_word")`
> - high attention --> high alignment of the Qi and Kj
> - low attention --> low alignment of the Qi and Kj
> - We can say Kj attend to Qi
> - giving us a score of how relevant is each other word is to update Ei
<u>Scaling:</u>
> - `scaled_score = raw_score / √dk`
> - where dk is the dimensions of Key values
<u>Masking & Softmax:</u>
> - <u>Masking</u>
> - Before softmax, we set previous words' entries of scaled_score into -inf![[Screenshot 2025-07-22 at 19.00.43.png|500]]
> - <u>Softmax</u>
> - It converts all scores into positive numbers between 0 and 1.
> - Showing a fraction/percentage of the importance of a token
> - return `attention weight (W_a)`
<u>Value (V): </u>
> - <u>Value Matrix (Wv):</u>
> - `Value Vector(V) = (E + Positional Encoding) × W_v`
<u>Updating embedding (E):</u>
> - `ΔE_i = Wa_i ⋅ V_i`
> - `E_i' = E_i + ΔE_i`
> - Example:<u> Single-head attention:</u>![[Screenshot 2025-07-22 at 19.13.11.png]]
> - Example:<u> Multi-head attention:</u>
> - GPT-3 have 96 distinct attention head
> - meaning `ΔE_i(1) = Wa_i ⋅ V_i, ... ΔE_i(96) = Wa_i ⋅ V_i,`
> - and all the parameters is different in this 96 head
> - E_i is update as `E_i' = E_i + ΔE_i(1) + ... + ΔE_i(96)`
## Extended explanation:

## Advantage:
> - 

## Disadvantage:
> - 




