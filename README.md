function-stack
==============

a simple stack for executing js functions.

on initialization, the stack takes in a list of functions,
appends them to the stack, and executes them.

when a function is pushed into the stack, it is immediately popped off
and executed.

the application use for something like this is a remote script that contains a
library function needed. create a list of function calls, then when the lib is 
loaded, run through them


ex:
local script
------------

```javascript
var fns = [];
fns.push(function() {
  notImplemented();
});
```
remote script
-------------

```javascript
function notImplemented() {
  alert('implemented\!')
}

fns = FunctionStack(fns);
```

and example html test:
----------------------
```html
<!DOCTYPE html>
<html>
  <head>
  <title>A friendly example</title>
</head>
  <body>
    <script>
      // first push fn to stack 
      var fns = [];
      fns.push(function() {
        notImplemented();
      });
    </script>

    <script>
      // now load lib
      setTimeout(function() {
        var notImplemented = function() {
          alert('implemented!');
        }
        // then turn array to FunctionStack
        fns = FunctionStack(fns);
      }, 500);
    </script>
  </body>
</html>
```