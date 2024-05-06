function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        //console.log(i); will throw an error because it will return value of
        //i as 6 and then it will start working.
        console.log(x);
      }, i * 1000);
    }

    closure(i);
  }
  console.log("Hello World");
}

x();
