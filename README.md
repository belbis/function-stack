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
<head lang="en">
  <meta charset="UTF-8">
  <title>A friendly example</title>

  <!-- need to load FunctionStack -->
  <script src="../dist/fs.min.js"></script>
</head>
  <body>
    <script>

      window['_namespace'] = window['_namespace'] || {};

      // first push fn to stack
      window['_namespace'].fns = [];
      window['_namespace'].fns.push(function() {
        window['_namespace'].notImplemented();
      });
    </script>

    <script>
      // now load lib
      setTimeout(function() {

        window['_namespace'] = window['_namespace'] || {};

        window['_namespace'].notImplemented = function() {
          alert('implemented!');
        };
        // then turn array to FunctionStack
        window['_namespace'].fns = FunctionStack(window['_namespace'].fns);
      }, 500);
    </script>
  </body>
</html>
```

inspiration
-----------

this was inspired by google's command array found in the GPT library
and as such is released under the apache license. For more information
see their [documentation](https://developers.google.com/doubleclick-gpt/reference#googletag.CommandArray) on it.



errata
------

an important thing to note is that the functions that are coming
in from the remote script must be available in the global window
usually recommended to set a namespace for the functions so that
they don't interfere

this was designed to be used in an ad serving environment