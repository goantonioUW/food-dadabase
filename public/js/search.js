$(document).ready(() => {
  const search = $("input#nav-item");

  // When search button is clicked
  search.on("submit", e => {
    e.preventDefault();

    const searchInput = {
      email: req.user.email,
      searchName: $("#search-input")
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
