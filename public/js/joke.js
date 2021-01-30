const getJoke = search => {
  $.ajax({
    type: "GET",
    url: "https://icanhazdadjoke.com",
    success: function(data) {
      console.log(data);

      //do something when request is successfull

      displayJoke(data.joke);
    },
    dataType: "json"
  });
};

$(document).ready(getJoke);

const displayJoke = jokes => {
  $("#joke").empty();

  $("#joke").append(`<p>"${jokes}"</p>`);

  console.log(jokes);
};
