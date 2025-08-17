---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-22 03:29
aliases: TF-IDF
tag: 🧠
type: em
---
# TF-IDF (Term Frequency–Inverse Document Frequency)
- TF-IDF is a text analysis metric.
## <u>Main points:</u>
<u>Term Frequency (TF):</u>
> - How often a word appears in a single document.
> 	Example: If "cat" appears 3 times in a 100-word document, TF = 3/100 = 0.03.
<u>Inverse Document Frequency (IDF):</u>
> - How rare a word is across all documents.
> 	Example: If "cat" appears in 10 out of 1000 documents, IDF = log(1000/10) = 2.
<u>TF-IDF score:</u>
> - TF × IDF. High when a term is frequent in a document but rare overall.
## Advantage:
> - It helps filter out common words ("the", "is") and highlights unique terms that distinguish one document from another. 
> - This makes it valuable for document classification, summarization, and clustering tasks.
## Disadvantage:
> - [[Data Sparsity]]
## Extended explanation:


