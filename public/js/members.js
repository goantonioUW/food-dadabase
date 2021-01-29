$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

const addToShopList = $(".saveToShopList");
addToShopList.on("click", function (event) {
  event.preventDefault();
  const clickedAddIcon = $(this);
  const AddIconClicked = $(clickedAddIcon)
    .siblings("input")
    .data("item");
  const itemInput = $(clickedAddIcon)
    .prev("input")
    .val();
  localStorage.setItem("added-item-" + AddIconClicked, itemInput);
  console.log(AddIconClicked);
  console.log(clickedAddIcon);
  console.log("Taylor Swift");
  console.log(itemInput);
});

const deleteShopItem = $(".deleteFromShopList");
deleteShopItem.on("click", function(event) {
  event.preventDefault();
  const clickedDelIcon = $(this);
  const delIconClicked = $(clickedDelIcon)
    .siblings("input")
    .data("item");
  const itemInput = $(clickedDelIcon)
    .siblings("input")
    .val();
  localStorage.removeItem("added-item-" + delIconClicked, itemInput);
  window.location.reload();
});

function getSavedGroceryItem() {
  if (getSavedGroceryItem != []) {
    for (let i = 1; i < 14; i++) {
      const savedItem = localStorage.getItem("added-item-" + i);
      document.getElementById("saved-item-" + i).innerHTML = savedItem;
      $("#saved-item-" + i).val(savedItem);
      console.log(savedItem);
      console.log("shawn mendez");
    }
  }
}

getSavedGroceryItem();

// function init() {
//   if (getSavedGroceryItem != []) {
//     $("#location").val(savedCriteria.location);
//     $("#length").val(savedCriteria.length);
//     $("#radius").val(savedCriteria.radius);
//     $("#ratingInput").val(savedCriteria.ratingInput);
//   }
// }
