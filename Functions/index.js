//Function Statement aka Function Declaration
function a() {
  console.log("function a is called");
}
a();

//Function Expression
//Hoisting/MemoryCreation is not possible in this since its variable and later gets assigned as a function
//so dont write the b(); before the code
var b = function () {
  console.log("function b is called");
};
b();

//Anonymous Function
//A function without a name is called as Anonymous Function
//we cant create it like the below
/**
 * function() {}
 * The above will throw an error
 */
var c = function () {
  console.log("function c is called");
};
c();

//Named Function Expression
var d = function namehere() {
  console.log("function d is called");
  console.log(namehere);
};
d();
/**
 * if we try to get the value of namehere(); we will get an error
 * the namehere is not created in the Global Scope and hence we cant access it outside
 */

//Difference between Parameters and Arguments
var e = function (param1, param2) {
  //parameters
  //param1 and param2 are the local variables for the function
  console.log("function e is called", param1, param2);
};
e(1, 3); //Arguments

//FirstClass Functions
//The ability to use functions as values
var f = function () {
  return function () {};
};
console.log(f());

//Arrow Functions
//this is a part of ES6
