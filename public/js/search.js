// Getting our api route to call from the edemam-recipe.js
const getSearch = search => {
  const url = "/api/recipe/" + search;

  $.ajax({
    url: url,
    method: "GET"
  }).then(results => {
    console.log(results);
    displaySearch(results.hits);
  });
};




// Passing in the results from our api search onto the searchResults.handlebars
const displaySearch = searches => {
  $("#recipe-name").empty();

  for (let i = 0; i < searches.length; i++) {
    $("#recipe-name").append(`
    <a href = "${searches[i].recipe.shareAs}" target="_blank">
    <img src="${searches[i].recipe.image}"  class="img-thumbnail" alt="${searches[i].recipe.label}"></a>
     `);
  }
};

// Search input entry on button click
$(".searchBtn").on("click", () => {
  const searchInput = $(".searchBar").val();

  getSearch(searchInput);
});
