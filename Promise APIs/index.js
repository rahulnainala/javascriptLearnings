const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
    //reject("P1 Reject");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("P2 Success");
    reject("P2 Error");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
    //reject("P3 Failed");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
