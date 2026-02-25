---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-07 02:45
aliases:
  - AgentState - LangGraph
tags:
  - 🤖
type: state
---
# Simple AgentState - LangGraph

```python
from typing import TypedDict, List
from langgraph.graph import StateGraph

class AgentState(TypedDict):
	values: List[int]
	name: str
	result: str
	
----------------------------
def processs_values(state: AgentState) -> AgentState:
	"""This function handles multiple different inputs"""
	state["result"] = f"Hi there {state["name"]} Your sum = {sum(state["values"])}"
	return state
	
----------------------------
graph = StateGraph(AgentState)

graph.add_note("processor", process_values)
graph.set_entry_point("processor")
graph.set_finish_point("processor")

app = graph.compile() #important

----------------------------
from IPython.display import Image, display
display(Image(app.get_graph().fraw_mermaid_png))

----------------------------
answes = app.invoke({"values": [1,2,3,4], "name": "Steve"})
print(answer["result"])

	
```
