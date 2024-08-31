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

// Função que cria o slidder automático
function moveSlidder() {
    const slidderContainer = document.querySelector(".recomendation-of-books");
    let currentIndex = 0;
    let arraySlidders = [...document.querySelectorAll(".myPreference")];
    let totalSlidders = arraySlidders.length

    setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalSlidders) {
            currentIndex = 0;
        }
        slidderContainer.style.transform = `translateX(-${currentIndex * 20}%)`;
    }, 5000);
}
moveSlidder();