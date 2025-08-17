---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-12 00:05
aliases: ACID Properties of Transactions
tag: 👨‍💻
type: l4
---
# ACID Properties of Transactions
## <u>ACID Properties of Transactions:</u>
> Transactions provide a set of traditional guarantees: 

**Atomicity**:
> Ensures a group of writes either all commit successfully or all are rolled back, protecting against partial failures 

**Consistency**:
> Means transactions maintain data invariants, ensuring the database stays in a "good state"

**Isolation**:
> Guarantees that concurrently running transactions do not interfere with each other, preventing race conditions like dirty reads, dirty writes, and read/write skew

**Durability**:
> Ensures committed data persists even through faults like power loss

> However, weaker isolation levels are often used in practice, leading to specific race conditions like **lost updates** and **write skew**



