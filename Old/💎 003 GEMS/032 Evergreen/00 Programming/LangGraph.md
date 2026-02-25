---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-01 22:45
aliases:
  - LangGraph
tags:
  - 🤖
type: fw
---
# LangGraph
## Defintion:
> <u>Nodes</u>
> 	- They are individual functions or operations that perform specific task within the graph
> 	- Each node recieves input (often the current state), processes it and produces an output or an updated state
> <u>Edges</u>
> 	- Edges are the connections between nodes that determine the flow of execution
> 	- The tell us which node should be executed next after the current one completes its task
> <u>Conditional Edges</u>
> 	- Basically Edges with if-else staement
> <u>End</u>
> 	- After reaching this node, the graph's execution stops, indication that all intended processes have been completed
> <u>Tool</u>
> 	- Tools are specialized functions or utilities that nodes can utilize to perform specific tasks such as fetching data from an API
> 	- Nodes are part of the graph structure, while tools are functionalities used within nodes
> <u>ToolNode</u>
> 	- A ToolNode basically a node that its main job is only to run a tool
> 	- It connects the tools output back into State, so other nodes can use that info
> <u>StateGraph</u>
> 	- it's a class in LangGraph used to build and compile the graph structure
> 	- it manages the nodes, edges and the overall state, ensuring the workflow operates in a unified wat and that data flows correctly between nodes
> <u>Runnable</u>
> 	- A node will be updating state, runnable doesnt

## Extended explanation:
[[Simple AgentState - LangGraph]]
[[Sequential Agent -LangGraph|Sequential_Agent.ipynb]]
[[Conditional_Agent - LangGraph]]





