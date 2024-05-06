function x() {
  //we use let instead of var so that it will not throw an error of o/p.
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello World");
}

x();
