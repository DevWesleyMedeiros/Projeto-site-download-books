import { creatElementsHtml } from "./login-screen.js";
import { displayFeedBackBox } from "./feedback-screen.js";

// MENU DOWN CRIADO NO BARRA DE NAV
$(document).ready(()=>{
    $('#icon-down').click((evt)=>{
        $('#icon-down').hide(10);
        $('.container-discover-genres').fadeIn(10, function(){
            $(this).css('display', 'grid');
        })
        $('#icon-up').show(10);
    });

    $('#icon-up').click((evt)=>{
        $('#icon-up').hide(10);
        $('.container-discover-genres').fadeOut(10, function(){
            $(this).css('display', 'none');
        })
        $('#icon-down').show(10);
    });
    $('#button-register').click(function () {
        $('.load').css('display', 'block');
        setTimeout(() => {
            creatElementsHtml();
            $('.load').css('display', 'none');
        }, 1500);
    })

    $('.feedback-box').click(function () {
        displayFeedBackBox();
    });
})
// FINAL DO SCRIPT QUE CRIA MENU DOWN

// SCRIPT PARA CONTAINER LIVROS EM DESTAQUE
function createBooksCoverContainers(valor) {
    let arrayElements = [];
    for (let d = 0; d < valor; d++) {
        arrayElements.push(creatElementsDiv());
    }
    return arrayElements;
}

function creatElementsDiv() {
    function createDivsElement(valor){
        for (let index = 0; index < valor; index++) {
            let divDomElement = document.createElement("div");
            return divDomElement;
        }
    }
    let divBookSingle = document.createElement("div");
    let divBookCover = document.createElement("div");
    let divBookInformation = document.createElement("div");

    divBookSingle.classList.add("container-book-single");
    divBookCover.classList.add("book-cover");
    divBookInformation.classList.add("book-information");

    let h3 = document.createElement("h3");
    h3.classList.add("book-title");
    h3.innerText = `Nome do livro`;

    let pAuthor = document.createElement("p");
    pAuthor.classList.add("author-book-name");
    pAuthor.innerText = `Nome do autor`;

    let pPrice = document.createElement("p");
    pPrice.classList.add("book-price");
    pPrice.innerHTML = `R$00,00`;

    let arrayChild = [h3, pAuthor, pPrice];
    arrayChild.forEach(function (child) {
        divBookInformation.appendChild(child);
    });
    let arrayDiv = [divBookCover, divBookInformation];
    arrayDiv.forEach(function (child) {
        divBookSingle.appendChild(child);
    });
    return divBookSingle;
}

$(document).ready(function () {
    let booksQuantity = 10

    let gridRepeat = `repeat(${booksQuantity}, 1fr)`
    let BooksFeaturedQuantity = createBooksCoverContainers(booksQuantity);
    $('.books-box').css('grid-template-columns', gridRepeat)

    function showMore() {
        $('#show-more-books').click(function (e) {
            e.preventDefault();
            $(this).css('display', 'none');
            $('#show-less-books').css('display', 'block');
            $('.books-box').css('width', '100%');
        });
    }
    showMore();

    function showLess() {
        $('#show-less-books').click(function (e) {
            e.preventDefault();
            $(this).css('display', 'none');
            $('#show-more-books').css('display', 'block');
            $('.books-box').css('width', '55%');
        });
    }
    showLess();
    $('.books-box').append(BooksFeaturedQuantity);

    let isDrag = false;
    function StartMoveContainers() {
        $('.container-book-single').mousedown(function () {
            isDrag = true;
        });
        $(document).mousemove(function (event) {
            if (isDrag) {
                moveElements(event);
            }
        });
    }
    StartMoveContainers();

    function stopMoveContainers() {
        $(document).mouseup(function () {
            isDrag = false;
        });
    }
    function moveElements(event) {
        let fatherContainer = $('.books-box');
        let containerScrollLeft = fatherContainer.scrollLeft() - event.originalEvent.movementX;
        fatherContainer.scrollLeft(containerScrollLeft);
    }
    stopMoveContainers();
});
// FINAL DO SCRIPT DA SEÇÃO LIVROS EM DESTAQUE

// FUNÇÕES PARA CONTROLAR OS SLIDDERS AUTOMÁTICOS
function moveSlidderLeft() {
    const slidderContainerLeft = document.querySelector(".recomendation-of-books");
    let currentIndexLeft = 0;
    let arraySliddersLeft = [...document.querySelectorAll(".myPreference")];
    let totalSliddersLeft = arraySliddersLeft.length

    setInterval(() => {
        currentIndexLeft++;
        if (currentIndexLeft >= totalSliddersLeft) {
            currentIndexLeft = 0;
        }
        slidderContainerLeft.style.transform = `translateX(-${currentIndexLeft * 20}%)`;
    }, 10000);
}
moveSlidderLeft();

function moveSlidderRight() {
    const slidderContainerRight = document.querySelector(".most-read-recomendation");
    let currentIndexRight = 0;
    let arraySliddersRight = [...document.querySelectorAll(".most-read-book")];
    let totalSliddersRight = arraySliddersRight.length

    setInterval(() => {
        currentIndexRight++;
        if (currentIndexRightRight >= totalSliddersRight) {
            currentIndexRight = 0;
        }
        slidderContainerRight.style.transform = `translateX(${currentIndexRight * 20}%)`;
    }, 10000);
}
moveSlidderRight();
// FUNÇÕES PARA CONTROLAR OS SLIDDERS AUTOMÁTICOS

// SCRIPT QUE CONTROLA O BANNER DE SLIDDERS AUTOMÁTICO
$(function () {
    var maximunIndex = $('.header-background-images > img').length;
    var delay = 10000;
    var currentIndex = 0;

    clickSlider();
    function initialSlider() {
        var spansContainer = $('.header-background-images > .spans-container');
        for (let s = 0; s < maximunIndex; s++) {
            var span = $('<span></span>');
            if (s === 0) {
                span.css('background-color', '#78818f');
            }
            spansContainer.append(span);
        }
        $('.header-background-images > img').eq(0).fadeIn(1000);
        setInterval(function () {
            toggleSlider();
        }, delay);
    }

    initialSlider();
    function toggleSlider() {
        $('.header-background-images > img').eq(currentIndex).stop().fadeOut(1000);
        currentIndex++;
        if (currentIndex === maximunIndex) {
            currentIndex = 0;
        }
        $('.spans-container > span').css('background-color', '#ffff');
        $('.spans-container > span').eq(currentIndex).css('background-color', '#78818f');
        $('.header-background-images > img').eq(currentIndex).stop().fadeIn(1000);
        toggleText(currentIndex);
    }
    function clickSlider() {
        $('.spans-container > span').click(function () {
            $('.header-background-images > img').eq(currentIndex).stop().fadeOut(1000);
            currentIndex = $(this).index();
            toggleText(currentIndex);
            $('.header-background-images > img').eq(currentIndex).stop().fadeIn(1000);
            $('.spans-container > span').css('background-color', '#ffff');
            $(this).css('background-color', '#78818f');
        });
    }
    function toggleText(index) {
        var title = $('#title');
        var text = $('#text');
        $(title).html("");
        $(text).html("");
        if (index === 1) {
            $(title).html("BestSellers livres e com descontos");
            $(text).html("Junte-se à comunidade de mais de 150.000 leitores com BestSellers gratuítos e com descontos diretamente na sua caixa de E-mail.");
        } else if (index === 2){
            $(title).html("O Guia completo para livros grátis");
            $(text).html("Não sabe o que ler? Explore nossos catálogos de livros de domínio público. Alguns deles estão escondidos nas nossas biblioteca.");
        }else{
            $(title).html("Muitos Livros para downloads 100% de graça");
            $(text).html("Bem-vindo à biblioteca de livros. Possuímos mais de 150.000 livros que agurdam ser descobertos por você.");
        }
    }
});
// FINAL DO SCRIPT QUE CONTROLA O BANNER DE SLIDDERS AUTOMÁTICO

// SCRIPT QUE CONTROLA TODA SEÇÃO "RECOMENDADOS DA SEMANA"
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
// FINAL DO SCRITP DA SEÇÃO SLIDER DA SEMANA