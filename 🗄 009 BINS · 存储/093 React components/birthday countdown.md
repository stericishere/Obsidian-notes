---
defines-react-components: true
---

```jsx:component:Show

const files = app.vault.getMarkdownFiles();
let count = 0;
let final = ""

for (var ita=0;ita<files.length;ita++){
	let today = new Date();
	let year = today.getFullYear();
	let yearString = year.toString();
	const basename = files[ita].basename;
	
	const meta = app.metadataCache.getFileCache(files[ita]).frontmatter;
	if (typeof(meta) != "undefined"){
		const birthday = app.metadataCache.getFileCache(files[ita]).frontmatter.birthday;
		if (birthday){
			let birthdaySlice = birthday.slice(4);
			let nextBirthdayString = yearString+birthdaySlice;
			let birthdayMonth = birthday.slice(5,7);
			let birthdayDay = birthday.slice(8,10);
			if (birthdayMonth.slice(0,1)==0){
				birthdayMonth = birthdayMonth.slice(1);
			} 
			if (birthdayDay.slice(0,1)==0){
				birthdayDay = birthdayDay.slice(1);
			} 
			let hanBirthday = birthdayMonth + "月" + birthdayDay + "日";
			let nextBirthdayNumber = new Date(nextBirthdayString);
			let diffBetween = Math.floor((nextBirthdayNumber-today)/3600000/24);
			let N = 0;
			diffBetween>=-1? N = diffBetween:N = diffBetween+365;
			if (N < 31){
				count = count+1;
			}
			if (N < 31 && N>-1){
				final += `${basename}生日在${hanBirthday}，还有${N+1}天 \n`
			}
			if (N < 0){
				final += `🎉今天是${basename}的生日🎉 \n`
			}
		}
	}
}

const element = <p><b>未来一个月有{count}个生日:</b></p>;

const div1 =  (
		<div style={{flex: 1, textAlign: 'center', whiteSpace: 'pre-wrap'}}>
			<p>{element}{final} </p>
		</div>
)

let render = div1

return (
	<div>
		{render}
	</div>
)
```

```jsx:
<Show></Show>
```
