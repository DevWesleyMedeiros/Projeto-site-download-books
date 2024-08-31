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
