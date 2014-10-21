/**
 * FunctionStack
 * @param fns
 * @param lifo
 * @returns {FunctionStack}
 * @constructor
 *
 * a special kind of stack where length is meant to be 0
 * initializes with list of functions to execute, then
 * runs through them.
 *
 * the lifo parameter tells whether to shift or pop functions
 */
function FunctionStack(fns, lifo) {

  // handle lack of new
  if (!(this instanceof FunctionStack)) return new FunctionStack(fns, lifo);

  // initialize our stack
  this.stack = [];

  // if fns to handle
  if (fns) {
    var fn;
    // check for inverse
    if (lifo) {
      // push elements to stack last to first
      for (var i=fns.length-1;i>=0;i--) {
        fn = fns[i];
        this.push(fn);
      }
    } else {
      // push elements to stack first to last
      for (var j=0;j<fns.length;j++) {
        fn = fns[j];
        this.push(fn);
      }
    }
  }
}

/**
 * add a function to the stack
 * @param fn
 * @returns the element pushed to the stack
 */
FunctionStack.prototype.push = function(fn) {
  var ret = this.stack.push(fn);
  this.pushHandler();
  return ret;
};

/**
 * pushHandler
 *
 * function that is invoked when something is pushed
 * to the stack pops and calls the function
 * from the stack
 */
FunctionStack.prototype.pushHandler = function() {
  return this.pop()();
};

/**
 * pop
 *
 * @returns {function}
 *
 * return
 */
FunctionStack.prototype.pop = function() {
  return this.stack.pop();
};