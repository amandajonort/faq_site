document.addEventListener("DOMContentLoaded", function () {
  var titles = document.querySelectorAll(".title");

  titles.forEach(function (title) {
    title.addEventListener("click", function () {
      this.classList.toggle("active");

      var descriptions = document.querySelectorAll(".description");
      descriptions.forEach(function (description) {
        description.style.display = "none";
      });

      var activeDescription = this.nextElementSibling;
      activeDescription.style.display = this.classList.contains("active")
        ? "block"
        : "none";
    });
  });
});
