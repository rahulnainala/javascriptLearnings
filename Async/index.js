//what is async ?
const objP = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 10000);
});

const objP2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World 2");
  }, 20000);
});
async function getData() {
  return "Hello";
  //if i write return p; then 2 promises wont be created instead only p will be invoked
}

//Async always returns a promise

const dataPromise = getData();
console.log(dataPromise);
dataPromise.then((res) => console.log(res));

async function handlePromise() {
  const val = await objP;
  //JS engine appears to be waiting for promise to be resolved because of await
  //debug here and see the callstack
  console.log("Waited for 10secs to display o/p");
  console.log(val);
  //the above is used instead of using objP.then()

  const val2 = await objP2;
  //debug here and see the callstack it would be empty for 10secs
  console.log("Waited for 5secs to display o/p 2");
  console.log(val2);
}

handlePromise();
