console.log("start");
//creates a cbT callback function in WEBAPI and gets pushed to callback queue once finished execution
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

//creates a cbF callback function in WEBAPI and gets pushed to Microtask queue once finished execution
fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("end");

/**
 *
 *
 *          Order of execution of the queues
 *
 * Event Loop checks the callstack and when its empty, checks if Microtask queue
 * has functions and if doesnt then it checks in callback Queue.
 *
 * If data is present in both the queues then order is :
 *                 Microtask Queue  (then)       Callback Queue
 *
 *
 */
