/**
 * unit tests for FunctionStack
 */

function testEmptyInit(assert) {
  var fnStack = FunctionStack();
  assert.equal(fnStack instanceof FunctionStack, true)
}

function testInitWithElements(assert) {
  var els = [
    function(){a=1},
    function(){b=2}
  ];
  var fnStack = FunctionStack(els);
  assert.equal(a, 1);
  assert.equal(b, 2);
}

function testInOrder(assert) {
var els = [
    function(){a=1},
    function(){a=2}
  ];

  var fnStack = FunctionStack(els);

  assert.equal(a, 2);
}

function testInverse(assert) {
var els = [
    function(){a=1},
    function(){a=2}
  ];

  var fnStack = FunctionStack(els, true);

  assert.equal(a, 1);
}

function testPush(assert) {
  var fnStack = FunctionStack();
  var a=0;
  var fn = function() {
    a=1
  };
  var ret = fnStack.push(fn);
  assert.equal(a ,1);
  assert.ok(true, ret);
}

var tests = [
  {
    name: "testEmptyInit",
    fn: testEmptyInit
  },
  {
    name: "testInitWithElements",
    fn: testInitWithElements
  },
  {
    name: "testPush",
    fn: testPush
  },{
    name: "testInOrder",
    fn: testInOrder
  },
  {
    name: "testInverse",
    fn: testInverse
  }
];
