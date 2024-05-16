console.log("Hola");

const GITHUB_API = "https://api.github.com/users/rahulnainala";

const user = fetch(GITHUB_API);

//we can see the promise details in the console
console.log(user);

user.then(function (data) {
  console.log(data);
});

