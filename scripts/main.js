"use strict";

import { creatElementsHtml } from '@scripts/login-screen.js'; 
import { displayFeedBackBox } from '@scripts/feedback-screen.js';
import { 
  AllApiEndingPoints, 
  ApiForAutors, 
  ApiForBookTitle, 
  ApiForBookCover, 
  ApiForGeneralInformationAutor 
} from '@apiCall/index.ts';
import $ from 'jquery';

console.log("JavaScript carregado");

// Função para documentos prontos - agrupa todas as inicializações
$(document).ready(function() {
  initializeNavMenu();
  initializeRegisterButton();
  initializeFeedbackBox();
  initializeSmoothScrolling();
  initializeSearchBar();
  initializeBooksFeature();
  initializeAutoSliders();
  initializeHeaderSlider();
  initializeWeeklyRecommendations();
});

// MENU DISCOVER GENRES NA BARRA DE NAV
function initializeNavMenu() {
  const $iconDown = $('#icon-down');
  const $iconUp = $('#icon-up');
  const $containerGenres = $('.container-discover-genres');
  
  $iconDown.on('click', function() {
    $(this).hide(100);
    $containerGenres.fadeIn(200, function() {
      $(this).css('display', 'grid');
    });
    $iconUp.show(100);
  });

  $iconUp.on('click', function() {
    $(this).hide(100);
    $containerGenres.fadeOut(200);
    $iconDown.show(100);
  });
}

// BOTÃO DE REGISTRO
function initializeRegisterButton() {
  $('#button-register').on('click', function() {
    const $signInButton = $('.sign-in-button > button');
    const $load = $('.load');
    
    $signInButton.hide();
    $load.show();
    
    setTimeout(() => {
      creatElementsHtml();
      $load.hide();
    }, 1500);
  });
}

// CAIXA DE FEEDBACK
function initializeFeedbackBox() {
  $('.feedback-box').on('click', function() {
    displayFeedBackBox();
  });
}

// ROLAGEM SUAVE
function initializeSmoothScrolling() {
  // Botões com rolagem para âncoras
  $('a[role=button]').on('click', function(e) {
    e.preventDefault();
    const $loader = $('.loader');
    const href = $(this).attr('href');
    
    if (!href) return;
    
    $loader.css("visibility", "visible");
    
    setTimeout(() => {
      const offsetTop = $(href).offset()?.top || 0;
      $('html, body').animate({
        'scrollTop': offsetTop
      }, 1000); // Reduzido de 2000 para 1000ms para melhor experiência do usuário
      $loader.css("visibility", "hidden");
    }, 1000); // Reduzido de 5000 para 1000ms
  });

  // Botão para rolar para o topo
  $('.scrollUp').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });
}

// BARRA DE PESQUISA
function initializeSearchBar() {
  const $searchInput = $('input[type=search]');
  const $loader = $('.loader');
  const $backgroundMsg = $('.backgroud-msg');
  
  function handleSearchAction(e) {
    e.preventDefault();
    
    if (!$searchInput.val().trim()) {
      $backgroundMsg.css("visibility", "visible");
      return;
    }
    
    $loader.css("visibility", "visible");
    $searchInput.prop("disabled", true).css("cursor", "not-allowed");
    
    // Simulação de busca
    setTimeout(() => {
      $('html, body').animate({ scrollTop: 500 }, 1000);
      $loader.css("visibility", "hidden");
      $searchInput.prop("disabled", false)
                 .css("cursor", "text")
                 .val("")
                 .focus();
    }, 2000); // Reduzido de 5000 para 2000ms
  }
  
  // Fechar mensagem de erro
  $('.brutalist-card__actions').on('click', function(e) {
    e.preventDefault();
    $backgroundMsg.css("visibility", "hidden");
  });
  
  // Eventos de busca
  $('.search-icon').on('click', handleSearchAction);
  $searchInput.on('keypress', function(e) {
    if (e.which === 13) {
      handleSearchAction(e);
    }
  });
}

// CONTAINER LIVROS EM DESTAQUE
function initializeBooksFeature() {
  const booksQuantity = 10;
  const $booksBox = $('.books-box');
  
  // Criar elementos de livros
  function createBookElement() {
    const $bookSingle = $('<div>').addClass('container-book-single');
    const $bookCover = $('<div>').addClass('book-cover').text('IMAGEM DO LIVRO');
    const $bookInfo = $('<div>').addClass('book-information');
    
    const $title = $('<h3>').addClass('book-title').text('Nome do livro');
    const $author = $('<p>').addClass('author-book-name').text('Nome do autor');
    const $category = $('<p>').addClass('book-category').text('Tema do livro');
    
    $bookInfo.append($title, $author, $category);
    $bookSingle.append($bookCover, $bookInfo);
    
    return $bookSingle;
  }
  
  // Adicionar livros ao container
  for (let i = 0; i < booksQuantity; i++) {
    $booksBox.append(createBookElement());
  }
  
  // Configurar grid
  $booksBox.css('grid-template-columns', `repeat(${booksQuantity}, 1fr)`);
  
  // Botões mostrar mais/menos
  $('#show-more-books').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    $('#show-less-books').show();
    $booksBox.css('width', '100%');
  });
  
  $('#show-less-books').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    $('#show-more-books').show();
    $booksBox.css('width', '55%');
  });
  
  // Funcionalidade de arrastar
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  
  $booksBox.on('mousedown', function(e) {
    isDragging = true;
    startX = e.pageX - $booksBox.offset().left;
    scrollLeft = $booksBox.scrollLeft();
    $booksBox.css('cursor', 'grabbing');
  });
  
  $(document).on('mousemove', function(e) {
    if (!isDragging) return;
    
    const x = e.pageX - $booksBox.offset().left;
    const walk = (x - startX) * 2; // Velocidade de scroll
    $booksBox.scrollLeft(scrollLeft - walk);
  });
  
  $(document).on('mouseup mouseleave', function() {
    isDragging = false;
    $booksBox.css('cursor', '');
  });
}

// SLIDDERS AUTOMÁTICOS
function initializeAutoSliders() {
// mover slider para a esquerda
  function moveSlidderLeft() {
    const $slidderContainer = $(".recomendation-of-books");
    const $sliders = $(".myPreference");
    const totalSliders = $sliders.length;
    let currentIndex = 0;
    
    if (totalSliders <= 1) return;
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSliders;
      $slidderContainer.css('transform', `translateX(-${currentIndex * -20}%)`);
    }, 10000);
  }
  
  function moveSlidderRight() {
    const $slidderContainer = $(".most-read-recomendation");
    const $sliders = $(".most-read-book");
    const totalSliders = $sliders.length;
    let currentIndex = 0;
    
    if (totalSliders <= 1) return;
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSliders;
      $slidderContainer.css('transform', `translateX(${currentIndex * 20}%)`);
    }, 10000);
  }
  
  moveSlidderLeft();
  moveSlidderRight();
}

// BANNER DE SLIDDERS AUTOMÁTICO
function initializeHeaderSlider() {
  const $images = $('.header-background-images > img');
  const maximumIndex = $images.length;
  const delay = 10000;
  let currentIndex = 0;
  
  // Criar indicadores
  function initializeSlider() {
    const $spansContainer = $('.header-background-images > .spans-container');
    $spansContainer.empty();
    
    for (let i = 0; i < maximumIndex; i++) {
      const $span = $('<span>');
      if (i === 0) {
        $span.css('background-color', '#78818f');
      }
      $spansContainer.append($span);
    }
    
    $images.hide().eq(0).fadeIn(1000);
    
    // Atualizar texto para o slide inicial
    updateSlideText(0);
    
    // Iniciar slideshow
    if (maximumIndex > 1) {
      setInterval(toggleSlider, delay);
    }
  }
  
  // Trocar slide
  function toggleSlider() {
    $images.eq(currentIndex).fadeOut(1000);
    currentIndex = (currentIndex + 1) % maximumIndex;
    
    $('.spans-container > span').css('background-color', '#ffff')
                               .eq(currentIndex).css('background-color', '#78818f');
    
    $images.eq(currentIndex).fadeIn(1000);
    updateSlideText(currentIndex);
  }
  
  // Atualizar texto do slide
  function updateSlideText(index) {
    const $title = $('#title');
    const $text = $('#text');
    const slideContent = [
      {
        title: "Muitos Livros para downloads 100% de graça",
        text: "Bem-vindo à biblioteca de livros. Possuímos muitos livros que aguardam ser descobertos por você."
      },
      {
        title: "Diversos BestSellers gratuítos",
        text: "Junte-se à comunidade de leitores e descubra vários BestSellers gratuítos e licença pública."
      },
      {
        title: "O Guia completo para livros grátis",
        text: "Não sabe o que ler? Explore nossos catálogos de livros de domínio público"
      }
    ];
    
    $title.text(slideContent[index]?.title || "");
    $text.text(slideContent[index]?.text || "");
  }
  
  // Clicar nos indicadores
  function initializeSliderControls() {
    $('.spans-container > span').on('click', function() {
      $images.eq(currentIndex).fadeOut(1000);
      currentIndex = $(this).index();
      
      $('.spans-container > span').css('background-color', '#ffff');
      $(this).css('background-color', '#78818f');
      
      $images.eq(currentIndex).fadeIn(1000);
      updateSlideText(currentIndex);
    });
  }
  
  initializeSlider();
  initializeSliderControls();
}

// RECOMENDADOS DA SEMANA
function initializeWeeklyRecommendations() {
  const $container = $('.container-recomendation-books');
  const booksCount = 11;
  let currentIndex = 0;
  
  // Criar elementos se ainda não existirem
  if ($container.children().length === 0) {
    // Definir grid
    $container.css('grid-template-columns', `repeat(${booksCount}, 1fr)`);
    
    // Criar livros
    for (let i = 1; i <= booksCount; i++) {
      const $bookDiv = $('<div>').addClass('book-single');
      const $bookText = $('<p>').text(`Book ${i}`).css({
        'text-align': 'center',
        'font-size': '24px'
      });
      
      $bookDiv.append($bookText);
      $container.append($bookDiv);
    }
  }
  
  // Configurar controles de navegação
  function setupNavigation() {
    const $leftIcon = $('.icon#left');
    const $rightIcon = $('.icon#right');
    const $books = $('.book-single');
    const visibleBooks = 5;
    const maxIndex = Math.max(0, $books.length - visibleBooks);
    
    // Mostrar/ocultar setas de navegação
    function updateArrows() {
      $leftIcon.toggle(currentIndex > 0);
      $rightIcon.toggle(currentIndex < maxIndex);
    }
    
    // Inicialização
    updateArrows();
    
    // Navegação
    $leftIcon.on('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToBook();
        updateArrows();
      }
    });
    
    $rightIcon.on('click', function() {
      if (currentIndex < maxIndex) {
        currentIndex++;
        scrollToBook();
        updateArrows();
      }
    });
    
    // Rolagem suave
    function scrollToBook() {
      const $targetBook = $books.eq(currentIndex);
      $container.animate({
        scrollLeft: $targetBook.position().left
      }, 300);
    }
  }
  
  setupNavigation();
}