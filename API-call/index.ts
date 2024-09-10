import { axios } from "axios";
// AQUI VIRÁ OS SCRIPTS PARA CONSUMO DAS APIS DO GOOGLE E DO OPEN LIBRARY

//  function nome():void{
//     window.alert("Wesley");
//  }
//  nome();
// LINK QUE PESQUISA PELO NOME DO AUTOR;
// const endingPointAuthorSearch = "https://openlibrary.org/search/authors.json?q=robert kiyosaki";

// function searchForAuthor(){
//     axios.get(endingPointAuthorSearch)
//   .then(function (response) {
//     console.log(response);
//     console.log(response.data.docs[0].top_work);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     console.log("Requisição finalizada")
//   });
// }
// console.log(searchForAuthor());

// // PEGAR A UMA EDIÇÃO DE UM LIVRO (edition_key)
// const endingPointForEdition = "https://openlibrary.org/books/works/OL2010879W";

// function getEdition() {
//     axios.get(endingPointForEdition)
//     .then(function (response){
//         console.log(response);
//     })
//     .catch(function (error){
//         console.error("Erro na requisição " + error);
//     })
//     .finally(function (){
//         console.log("Requisição finalizada");
//     })
// }
// console.log(getEdition());
// function getCover(coverId) {
//     const endingPointForBookCover = `https://covers.openlibrary.org/a/olid/${coverId}-M.jpg`;
//     let img = document.createElement("img");
//     img.src = endingPointForBookCover;
//     document.body.appendChild(img);
// }


// ABAIXO O LINK QUE PESQUISA LIVRO PELO TÍTULO
// const buttonCall = document.querySelector(".search");
// const divToString = document.getElementById("toString");

// const splitString = (string) => {
//     let splitText = string.split(" ");
//     let joinText = splitText.join("+");
//     return joinText;
// }

// function getBookByTitle() {
//     const inputUrl = document.querySelector("input[type=url]").value.trim().toUpperCase();
//     if (!inputUrl) {
//         window.alert("Insira o nome do livro");
//         document.querySelector("input[type=url]").focus();
//         return;
//     }
    
//     const endingPointBookTitle = `https://openlibrary.org/search.json?title=${splitString(inputUrl)}`;
//     axios.get(endingPointBookTitle)
//     .then(function (response) {
//         console.log(response.data.docs[0]);
        
//         if (response.data.docs.length > 0) {
//             let ArrayHeader = {
//                 titulo: response.data.docs[0].title || "Título não disponível",
//                 subtitulo: response.data.docs[0].subtitle || "Subtítulo não disponível",
//                 autor: response.data.docs[0].author_name ? response.data.docs[0].author_name.join(", ") : "Autor não disponível",
//                 data_publicacao: response.data.docs[0].first_publish_year || "Data de publicação não disponível",
//                 numero_de_paginas: response.data.docs[0].number_of_pages_median || "Número de páginas não disponível",
//                 temas_do_livro: response.data.docs[0].subject ? response.data.docs[0].subject.join(", ") : "Temas não disponíveis"
//             };
            
//             divToString.innerText = "";

//             for (let key in ArrayHeader) {
//                 divToString.innerText += `${key}: ${ArrayHeader[key]}\n`;
//             }
//         } else {
//             divToString.innerText = "Nenhum livro encontrado.";
//         }
//     })
//     .catch(function (error) {
//         console.error(error);
//     })
//     .finally(function () {
//         console.log("Requisição finalizada");
//     });
// }

// buttonCall.addEventListener("click", getBookByTitle);
