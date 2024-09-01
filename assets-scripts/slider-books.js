// Script que controla as recomendações da semana

const containerRecomendations = document.querySelector(".container-recomendations");
const containerRecomendationBooks = document.querySelector(".container-recomendation-books");

let divsBookSingle = 20;
let sliderIndex = 0;

for (let d = 1; d < divsBookSingle + 1; d++) {
  createDiv(d);
}

let GridTemplateColumns = `repeat(${divsBookSingle}, 1fr)`;
containerRecomendationBooks.style.gridTemplateColumns = GridTemplateColumns;

function createDiv(valorOrdem) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerHTML = `Book ${valorOrdem}`;
  
  const pCssProperties = {
    textAlign: "center",
    fontSize: "24px"
  };
  
  for (let property in pCssProperties) {
    p.style[property] = pCssProperties[property];
  }
  
  div.setAttribute("class", "book-single");
  div.appendChild(p);
  containerRecomendationBooks.appendChild(div);
  return containerRecomendations;
}

// Slider recomendados da semana
const icons = [...document.querySelectorAll(".icon")];

function moveSlider() {
  icons.forEach((icon) => {
    if (icon.id === "right") {
      icon.style.display = "block";
    } else if (icon.id === "left") {
      icon.style.display = divsBookSingle > 5 ? "block" : "none";
    }
    
    icon.addEventListener("click", function () {
      const sliders = [...document.querySelectorAll(".book-single")];
      const numSliders = sliders.length;

      if (icon.id === "left") {
        sliderIndex = Math.max(0, sliderIndex - (numSliders % 5 === 0 ? 1 : 1));
        containerRecomendationBooks.scrollTo({
          left: sliders[sliderIndex].offsetLeft * 1,
          behavior: "smooth"
        });
      } else if (icon.id === "right") {
        sliderIndex = Math.min(numSliders - 5, sliderIndex + (numSliders % 5 === 0 ? 1 : 1));
        containerRecomendationBooks.scrollTo({
          left: sliders[sliderIndex].offsetLeft * 1,
          behavior: "smooth"
        });
      }
    });
  });
}
moveSlider();