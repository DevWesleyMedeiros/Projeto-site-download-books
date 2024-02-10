import { creatElementsHtml } from "./login-screen.js";
import { displayFeedBackBox } from "./feedback-screen.js"; 


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

    //Chamada para função que cria o menu feedback
    $('.feedback-box').click(function(){
        displayFeedBackBox();
    });
})


