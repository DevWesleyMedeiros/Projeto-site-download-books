const containerRecomendations = document.querySelector(".container-recomendations")
const containerRecomendationBooks = document.querySelector(".container-recomendation-books");
const icons = [...document.querySelectorAll(".icon")];

let sliderIndex = 0;

let divsBookSingle = 10;
for (let d = 0; d < divsBookSingle; d++) {
    createDiv();
}

function createDiv() {
  let div = document.createElement("div");
  div.setAttribute("class", "book-single");
  containerRecomendationBooks.appendChild(div);
  containerRecomendations.lastElementChild.before(containerRecomendationBooks);
  return containerRecomendations;
}
moveSlider();

function moveSlider() {
  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const sliders = [...document.querySelectorAll(".book-single")];
      const numSliders = sliders.length;

      if (icon.id === "left") {
        sliderIndex = Math.max(0, sliderIndex - (numSliders % 5 === 0 ? 5 : 1));
      } else if (icon.id === "right") {
        sliderIndex = Math.min(numSliders - 5, sliderIndex + (numSliders % 5 === 0 ? 3 : 1));
      }

      containerRecomendationBooks.scrollTo({
        left: sliders[sliderIndex].offsetLeft,
        behavior: "smooth",
      });
    });
  });
}
