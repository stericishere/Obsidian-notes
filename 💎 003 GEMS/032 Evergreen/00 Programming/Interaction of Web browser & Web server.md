---
banner: "[[Notes-2.jpg]]"
creation date: 2025-07-26 19:13
aliases:
  - Interaction of Web browser & Web server
tags:
  - 👨‍💻
type: web
---
# Interaction of Web browser & Web server
<u>Web browser --> Web server</u>
> When we want to visit a website
1. Browser send HTTP request
2. Server receive request --> generate a HTML document
3. Server response with a payload including HTML body
4. browser receive response and take the HTML body to display

<u>How Web server handle request?</u>
> When web server received request
1. Web server listens on a port, usually 80
2. Brower send request to port 80
3. Server use URL mapping and response a payload including HTML body
```
	https://www.facebook.com/profile.php?id=XXXX
```

<u>Ways of rendering using URL mapping:</u>
1. The dynamic will use placeholder separating front and database
```
	<h1>Hello, user: {user.username} </h1>
```
- <u>Client-Side Rendering (CSR):</u>
    >- Rendering happens in the Browser
	> - PRO
	 >	- Fast for users after the initial load, 
	> - CONS
	> 	- slower to first paint.
	> - Common in frameworks like React or Vue.
- <u>Server-Side Rendering (SSR):</u>
    >- HTML is Rendered on the server and sent fully formed to the browser.
    >- PRO
	  >  - Faster initial load, better for SEO.
    >- Used in Next.js or traditional frameworks like Django.
## Advantage:
> - 

## Disadvantage:
> - 

## Extended explanation:
> - l


