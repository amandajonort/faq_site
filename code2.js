document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      appendDataToFAQ(data);

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
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function appendDataToFAQ(data) {
    var accordion = document.querySelector(".accordion");

    data.forEach(function (item, index) {
      var sectionDiv = document.createElement("div");
      sectionDiv.classList.add("title");
      sectionDiv.setAttribute("id", "section" + (index + 1));
      sectionDiv.textContent = item.title;

      var descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      descriptionDiv.textContent = item.body;

      accordion.appendChild(sectionDiv);
      accordion.appendChild(descriptionDiv);
    });
  }
});
