const arr = [5, 1, 3, 2, 6];

//Double - [10,2,6,4,12] :desired output
function double(x) {
  return x * 2;
}
//Triple - [15,3,9,6,18] :desired output
function triple(x) {
  return x * 3;
}
//Binary - ["101","1","11","10","110"] :desired output
function binary(x) {
  return x.toString(2);
}
const output = arr.map(double);
console.log(output);

const output2 = arr.map(triple);
console.log(output2);

const output3 = arr.map(binary);
console.log(output3);
