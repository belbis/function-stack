/* a simple test runner for qunit */
var runner = {};
runner.run = function() {
  for (var i= 0,test;i<tests.length;i++) {
    test = tests[i];
    QUnit.test(test.name, test.fn);
  }
};