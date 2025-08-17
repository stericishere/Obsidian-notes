---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-12 00:03
aliases: No Single Source of Truth in Distributed Systems
tag: 👨‍💻
type: l4
---
# No Single Source of Truth in Distributed Systems
## <u>Main points:</u>
> A single node cannot be entirely trusted in a distributed environment because it might fail or hold an outdated view of the system. Decisions often require agreement among multiple nodes, frequently achieved through a **quorum** (a minimum number of votes). **Fencing tokens** are a critical mechanism to prevent "delusional" old leaders from causing data corruption
