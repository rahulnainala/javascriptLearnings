const users = [
  { firstName: "Formless", lastName: "Drac", age: 26 },
  { firstName: "Donald", lastName: "trump", age: 76 },
  { firstName: "elon", lastName: "musk", age: 46 },
  { firstName: "deep", lastName: "fake", age: 26 },
];

//list of full name
const outputFullname = users.map((x) => x.firstName + " " + x.lastName);
console.log(outputFullname);

//how many users have particular age {26:2, 75:1, 50:1}
const outputReduce = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(outputReduce);

//filter out first name whose age is less than 30
//chaining map to filter
const outputFilter = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(outputFilter);

//Above code using reduce function
const outputReduce2 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(outputReduce2);
