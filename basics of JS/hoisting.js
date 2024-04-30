getName2();
console.log(x);
console.log(getName);
//Memory Allocation is Null for Phase1
var x = 7;

function getName2() {
  //Memory Allocation is whole-code
  //declares a function
  console.log("Hello Javascript");
}

var getName3 = function () {
  //another way of declaring a function
  //Memory allocation is Un-Defined
};
var getName = () => {
  //Memory allocation is Un-Defined
  console.log("Hello World");
};
