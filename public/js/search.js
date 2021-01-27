$(document).ready(() => {
  const search = $("input#search-input");

  // When search button is clicked
  search.on("submit", e => {
    e.preventDefault();

    const searchInput = {
      search: $("search-input")
        .val()
        .trim()
    };

    $.ajax("/api/search", {
      type: "POST",
      data: searchInput
    }).then(() => {
      console.log("Search success!", searchInput);
      location.reload();
    });
  });
});
