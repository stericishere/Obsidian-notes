---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-07 03:05
aliases:
  - Sequential_Agent.ipynb
tags:
  - 🤖
type: state
---
# Sequential Agent -LangGraph

```python
----------------------------
class AgentState(TypedDict):
	name: str
	age: str
	final: str
	
----------------------------
def first_node(state:AgentState) -> AgentState:
	"""This is the first node of our sequence"""
	state["final"] = f"Hi {state["name"]}"
	return state

def second_node(state:AgentState) -> AgentState:
	"""This is the second node of our sequence"""
	state["final"] = state["final"] + f"You are {state["age"]} year old!"
	return state

----------------------------
# Adding them by edge
graph = StateGraph(AgentState)

graph.add_node("first_node", first_node)
graph.add_note("second_node", second_node)

graph.set_entry_point("first_node")
graph.add_edge("first_node", "second_node")
graph.set_finish_point("second_node")
app = graph.compile

```