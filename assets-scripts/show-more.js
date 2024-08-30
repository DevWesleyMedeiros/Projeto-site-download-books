function createBooksCoverContainers(valor) {
    let arrayElements = [];
    for (let d = 0; d < valor; d++) {
        arrayElements.push(creatElementsDiv());
    }
    return arrayElements;
}
// Cria e coloca os valores das divs em destaque
function creatElementsDiv() {
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
    // Final da criação dos livros em destaque
}

$(document).ready(function () {
    let booksQuantity = 10
    //booksQuantity será o valor que minha API irá retornar para a seção livros em destaque

    let gridRepeat = `repeat(${booksQuantity}, 1fr)`
    let BooksFeaturedQuantity = createBooksCoverContainers(booksQuantity);
    $('.books-box').css('grid-template-columns', gridRepeat)

    showLess();
    showMore();
    
    //Função que mostra mais ou menos na seção livros em destaques
    function showMore() {
        $('#show-more-books').click(function (e) {
            e.preventDefault();
            $(this).css('display', 'none');
            $('#show-less-books').css('display', 'block');
            $('.books-box').css('width', '100%');
        });
    }
    function showLess() {
        $('#show-less-books').click(function (e) {
            e.preventDefault();
            $(this).css('display', 'none');
            $('#show-more-books').css('display', 'block');
            $('.books-box').css('width', '55%');
        });
    }
    $('.books-box').append(BooksFeaturedQuantity);

    // Funções que vão manipular a criação do efeito de clicar e arrastar manipulando as posições do slidder
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

    // Função que cria o slidder automático
    function moveSlidder(params) {
        
    }
});
