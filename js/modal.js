
  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".modal-search-form");
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
      popup.classList.toggle("modal-close");
  });
