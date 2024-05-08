const arr = [5, 1, 3, 2, 6];

//Filter odd values
function isOdd(x) {
  return x % 2;
}

//Filter even values
function isEven(x) {
  return x % 2 === 0;
}

const output = arr.filter(isOdd);
console.log(output);

const output2 = arr.filter(isEven);
console.log(output2);

const output3 = arr.filter((x) => x > 4);
console.log(output3);
