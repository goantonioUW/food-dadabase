// const jokes = {
//   method: "GET",
//   hostname: "https://icanhazdadjoke.com"
// };

// const displayJoke = jokes => {
//   $("#joke").empty();

//   for (let i = 0; i < jokes; i++) {
//     $("#joke").append(jokes);
//   }
// };

// console.log(jokes);

// displayJoke();

// const router = require("express").Router();

// const { getdadjoke } = require("get-dadjoke");

// router.on("message", async msg => {
//   if (msg.content === "joke") {
//     const joke = await getdadjoke();
//     const displayJoke = joke => {
//       $("#joke").empty();

//       for (let i = 0; i < joke; i++) {
//         $("#joke").append(joke);
//       }
//     };
//   }
// });

// displayJoke();

// console.log(joke);

// function findJoke() {
//   const queryURL = "https://icanhazdadjoke.com";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(response => {
//     //checking to see if search fails. If so, it kicks you out that ".then" function failed and notifies you.
//     if (response.Response == "False") {
//       return;
//     }

//     console.log(response);
//   });
// }

// findJoke();

$.ajax({
  type: "GET",
  url: "https://icanhazdadjoke.com",
  success: function(data) {
    console.log(data);
    //do something when request is successfull
  },
  dataType: "json"
});
const displayJoke = data => {
  $("#joke").empty();

  for (let i = 0; i < data; i++) {
    $("#joke").append(`<p>"${data[i].joke}"</p>`);
  }
};

displayJoke();
