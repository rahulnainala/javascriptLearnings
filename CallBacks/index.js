//what is a callback function in javascript

setTimeout(function () //this function is a callback function
{
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
}); //the function y is the callback function

//Javascript is a synchronus and single-threaded language
// which implies the Js can do one thing at a time and in an specific order

//Blocking the main thread
//we must never block the main thread hence we use async which will prevent JS to be blocked

//power of callbacks?

//Deep about Event Listeners
//below is an example of callback function which on click of button is called
//once the button is clicked in the callstack the function xyz is executed
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked");
});

//Closures Demo with event Listeners
function attachEventListners() {
  let count = 0;
  document
    .getElementById("increaseCount")
    .addEventListener("click", function xyz() {
      //the function xyz is creating a closure with count and remebers where count is present
      console.log("Button Clicked to Increase", ++count);
    });
}

attachEventListners();

//Garbage Collection & removeEventListners
//whenever we initate a eventlistener it forms a closure which takes up memory
//the reason is EventListeners are heavy hence we must remove them when required
