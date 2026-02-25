- **The Stack:** This is where **local variables** live (like `int i` or `float rain_today`). They only exist while the function they belong to is running. Once the function returns, the memory is wiped.
    
- **The Heap:** This is where **dynamically allocated memory** lives (anything created with `malloc`). It stays there until you explicitly `free` it.
    
- **The Data Segment (Global):** This is for variables declared outside `mainc`. These variables are created when the program starts and only disappear when the entire program terminates. This is why they are accessible to every function in your code.
