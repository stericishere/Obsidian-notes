---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-07 03:19
aliases:
  - Conditional_Agent - LangGraph
tags:
  - 🤖
type:
---
# Conditional_Agent - LangGraph

```python
from typing import TypedDict
from langgraph.graph import StateGraph, START, END

class AgentState(TypedDict):
	number1: int
	operationL str
	number2: int
	finalNumber: int

def adder(state:AgentState) -> AgentState:
	"""This node adds the 2 numbers"""
	state["finalNumber"] = state["number1"] + state["number2"]
	return state

def subtractor(state:AgentState) -> AgentState:
	"""This node adds the 2 numbers"""
	state["finalNumber"] = state["number1"] - state["number2"]
	return state

def decide_next_node(state:AgentState) -> AgentState:
	"""This node adds the 2 numbers"""
	if state["operation"] == "+"
		return "addition_operation"
	elif state["operation"] == "-"
		return "subtraction_operation"
		
------------------------------------------
graph = StateGraph()

graph.add_note("add_node", adder)
graph.add_note("subtract_node", subtractor)
graph.add_note("router", lambda state:state)

graph.add_edge(START, "router")

graph.add_conditional_edges(
	"router", 
	decide_next_node,
	{
		# Edge name: Node
		"addition_operation": "add_node",
		"subtraction_operation": "subtract_node"
	}
)

graph.add_edge("add_node", END)
graph.add_edge("subtract_node", END)

from IPython.display import Image, display
display(Image(app.get_graph().draw_mermaid_png())

```



