//Always write in try catch to see the errors and log the errors

const API_URL = "https://api.github.com/users/rahulnainala";

async function handleAPI() {
  try {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();

    console.log(jsonValue);

    return jsonValue;
  } catch (err) {
    console.log(err);
  }
}

//to get userId based on async function
async function getUserId() {
  const userData = await handleAPI();
  if (userData) {
    console.log(userData.id);
  }
}

getUserId();
