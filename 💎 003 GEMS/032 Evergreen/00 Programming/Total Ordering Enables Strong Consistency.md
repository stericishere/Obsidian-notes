---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-12 00:04
aliases: Total Ordering Enables Strong Consistency
tag: 👨‍💻
type: l4
---
# Consistency models
## <u>Main points:</u>
> For some strong consistency guarantees

**Linearizability**:
> Define how data changes propagate and are observed across replicated systems, which is crucial for data correctness and user understanding

**Total order broadcast**:
> Ensures that all nodes process the same messages in the same fixed order, acting as a **fundamental building block for distributed systems** to achieve agreement and consistency [i, 348, 349, 410, 430, 522]. It is equivalent to consensus for ensuring uniqueness constraints [i, 419, 439, 592].

**Causality**:
> Defines a **partial order** of events where cause precedes effect, which is fundamental to understanding data dependencies and preventing anomalies like read skew and write skew

[[Consensus as a Fundamental Problem]]


