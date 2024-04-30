/**
 *inside global execution context the value of x
 *will become 1 after the 1st phase of execution
 *(Memory Execution Phase)
 */
var x = 1;
a();
b();
console.log(x);
//The invocation will make a new execution context 
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/**
 * Hence output comes out as
 * 10
 * 100
 * 1
 */
