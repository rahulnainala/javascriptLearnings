console.log("start");

setTimeout(function db() {
  console.log("callback");
}, 5000);

console.log("End");

//millions of line of code

//simulating Block-Main Thread for 10secs so that we can see the workflow

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate <= startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Loop Expires here");
