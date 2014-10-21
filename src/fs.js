/**
 * FunctionStack
 * @param fns
 * @param options
 * @returns {FunctionStack}
 * @constructor
 *
 * a special kind of stack where length is meant to be 0
 * initializes with list of functions to execute, then
 * runs through them.
 */
function FunctionStack(fns, options) {

  // handle lack of new
  if (!(this instanceof FunctionStack)) return new FunctionStack(fns, options);

  // options
  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      this[i] = options[i];
    }
  }

  // initialize our stack
  this.stack = [];

  // push first elements to array
  if (fns) {
    var fn;
    for (var j=0;j<fns.length;j++) {
      fn = fns[j];
      this.push(fn);
    }
  }
}

/**
 * add a function to the stack
 * @param fn
 * @returns the element pushed to the stack
 */
FunctionStack.prototype.push = function(fn) {
  this.stack.push(fn);
  this.pushHandler();
  return fn;
};

/**
 * pushHandler
 *
 * function that is invoked when something is pushed
 * to the stack pops and calls the function
 * from the stack
 */
FunctionStack.prototype.pushHandler = function() {
  return this.stack.pop()();
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

/**
 * shift
 * @returns {*}
 *
 * returns the first element of the stack
 * and resizes
 */
FunctionStack.prototype.shift = function() {
  return this.stack.shift();
};