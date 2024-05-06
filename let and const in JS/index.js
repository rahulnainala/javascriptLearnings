//in the debugger the a,b are kept seperately than the global variables
let a = 10;
console.log(a);

const b = 100;
console.log(b);

//Block Scope =>

{
  var x = 10;
  let y = 20;
  const z = 2000;
  console.log(x);
  console.log(y);
  console.log(z);
}

console.log(x);
//the y and z will throw error since we cant access y and z due to block scope.
console.log(y);
console.log(z);
