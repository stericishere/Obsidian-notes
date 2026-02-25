## I/O redirection:
- 3 different standard stream
	- stdin
	- stdout
	- stderr
- for output
	- > or >>
		- This tells the computer: "Don't print this on the screen; put it in a file instead."
	- > for Overwriting
		- Creates a new file or wipes an existing one to start fresh.
	- >> for appending 
		- Adds the output to the end of an existing file.
- for input
	- < 
	- tell the computer to read from this file
- for error
	- 2>
	- ex. ./force_plate_app > force_data.txt 2> sensor_errors.log

### Pointer
```c
int value = 5;
int *p = &value
*p     // hold the value of the memory address
&value // the memory address of value

printf("%d", x);     // Prints: 5
printf("%d", *p);    // Prints: 5 (same thing!)
printf("%p", p);     // Prints: 0x7fff... (memory address)
```
### Point in array
```c
int arr[] = {10, 20, 30};
int *p = arr;


p + 1 // point to arr[1] (memory address
p + 2 // point to arr[2] (memory address

*(p + 1) // point to arr[1] = 20
p[2] == *(p + 2) // point to arr[2] = 30
```

```c
int *p = NULL;       // Special value meaning "no address"

if (p == NULL) {
    printf("Pointer is uninitialized\n");
}

```
