## ✅ Record 习惯打卡
### 📍Route
```dataviewjs
const calendarData = { 
	year: 2025,
	colors: {
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"],
	  green:       ["#196127","#49af5d","#7bc96f","#c6e48b","#2e8840"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: []
}

for(let page of dv.pages('"🌊 001 RIVER/011 Daily"').where(p=>p.route).sort(p=>p.file.name)){ 

    const olddate = page.file.name
    const date = olddate.substring(0,10);

	calendarData.entries.push({
		date: date,
		intensity: page.route,
		color: "green"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
### 💼 Apply job 
```dataviewjs
const calendarData = { 
	year: 2025,
	colors: {
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"],
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: []
}

for(let page of dv.pages('"🌊 001 RIVER/011 Daily"').where(p=>p.apply_job).sort(p=>p.file.name)){ 

    const olddate = page.file.name
    const date = olddate.substring(0,10);

	calendarData.entries.push({
		date: date,
		intensity: page.apply_job,
		color: "orange"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
### 🔖 Reading
```dataviewjs
const calendarData = { 
	year: 2025,
	colors: {
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"],
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: []
}

for(let page of dv.pages('"🌊 001 RIVER/011 Daily"').where(p=>p.reading).sort(p=>p.file.name)){ 

    const olddate = page.file.name
    const date = olddate.substring(0,10);

	calendarData.entries.push({
		date: date,
		intensity: page.reading,
		color: "orangeToRed"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
### 🎓 Learning
```dataviewjs
const calendarData = { 
	year: 2025,
	colors: {
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"],
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: []
}

for(let page of dv.pages('"🌊 001 RIVER/011 Daily"').where(p=>p.learning).sort(p=>p.file.name)){ 

    const olddate = page.file.name
    const date = olddate.substring(0,10);

	calendarData.entries.push({
		date: date,
		intensity: page.learning,
		color: "blue"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
### 🏃‍♂️ Exercise
```dataviewjs
const calendarData = { 
	year: 2025,
	colors: {
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"],
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: []
}

for(let page of dv.pages('"🌊 001 RIVER/011 Daily"').where(p=>p.exercise).sort(p=>p.file.name)){ 

    const olddate = page.file.name
    const date = olddate.substring(0,10);

	calendarData.entries.push({
		date: date,
		intensity: page.exercise,
		color: "pink"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
## 📥 Habits 习惯收集
- 所有健康相关习惯可查看 [[Old/🔨 004 TOOLS/041 Health/👨‍⚕ Health Summary]]

>[! QUESTION]- 使用说明
>使用每日笔记，为自己制定的习惯打卡并在此查看记录。具体方式：
>1. 在 [[c#💪 Habits 习惯|💪 Habits 习惯]] 中手动输入要添加的习惯，注意
>	- 习惯后面需要加上双冒号 `::` 以便系统读取
>	- 每天在日记里记录习惯完成情况，后面的数值可使用 1/0 的二进制或具体数字
>> ![[Pasted image 20230314143920.png|400]]
>2. 复制下方任意图表所展开的代码块，将 `where(p=>p.xx)` 和 `page.xx` 中的 xx 替换为自己在每日笔记中添加的习惯名
>> ![[Pasted image 20230321161906.png]]
>3. 纵向是一个星期里的每一天，横向是一年的每一个星期
>> ![[Pasted image 20230314144042.png|400]]

