function a() {
  var b = 10;
  c();
  function c() {
    //checks for the value and since it cant find will check in its Lexical Env
    //which is a()
    console.log(b);
  }
}
//scope of b is in the function a() so we cant access it.
//console.log(b);
a();
