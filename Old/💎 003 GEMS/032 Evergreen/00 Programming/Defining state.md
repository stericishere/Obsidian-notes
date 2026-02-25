---
banner: "[[Notes-2.jpg]]"
creation date: 2025-08-01 22:23
aliases:
  - Defining state
tags:
  - 🤖
type: state
---
# Defining state
### Typed Dicitionary
```python
from typing import TyedDict

class Movie(TyedDict):
	name : str
	year : int

movie = Movie(name="hi", year=2019)
```
#### Advantage:
> - Type Safety 
> 	- we defined explicitly what the data structures are
> - Readable:
> 	- make debugging easier and make 

## Union:
```python
from typing import Union

class square(x: Union[int, float]) -> float:
	return x * x

x = 5 # good
x = 1.1 # good
x = "im a string" # fail
```
#### Advantage:
> -  Flexible and easy to code
> - Type safety:
> 	- provide hint to catch incorrect usage

## Optional:
```python
from typing import Optional

class square(x: Optional[str]) -> float:
	if name is None:
		print("Hey random person!")
	else:
		print(f"Hi there, {name}!")
# x can only be string
```

## Any:
```python
from typing import Optional

def print_value(x: Any):
	print(f"x = {x}")
# x can only be string
```

## Lambda Function:
```python
square = lambda x: x * x
square(10) # 100

nums = [1, 2, 3, 4]
squares = list(map(lambda x: x*x, nums))
# map(function, iteratable) 
# takes(lambda x: x*x) as a function
# nums as a iteratable
```

## Extended explanation:
> - l


