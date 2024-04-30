getName();
getName2();
var x = 6;

function getName() {
  console.log("Hello duniya!!");
}

function getName2() {
  //check the scope for it being defined
}

var getName3 = () => {
  //we will get error since execution context will consider this as variable
  console.log("Arrow Function");
};

console.log(x);

