const cart = ["shoes", "pants", "kurta", "shorts"];

const obj1 = createOrder(cart);

// Log the initial promise to see its state
console.log(obj1);

obj1
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
    // we must use return statements so that the below functions can use the values
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentStatus) {
    console.log(paymentStatus);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "123456"; // we can get it from our database
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000); // Simulating 5 seconds delay
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  // change the below value from T-> F to see error handling
  return true;
}
