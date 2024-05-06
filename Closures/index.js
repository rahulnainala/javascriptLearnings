function z() {
  let b = 300;
  function x() {
    var a = 9;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}

z();
