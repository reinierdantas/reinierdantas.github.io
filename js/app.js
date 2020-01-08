//Scroll suave
$('.arrowDown a[href^="#"], .menu-nav a[href^="#"]').click(function(e){
    e.preventDefault();
    let targId = $(this).attr('href'),
        menuHeight = $('.menu-nav').innerHeight(),
        offsetTop = $(targId).offset().top;
  $('html,body').animate({
      scrollTop: offsetTop + menuHeight
  },1000);      
});

//voltar ao topo ao clicar no botão back to top
$('.home, .backBtn, .lang').click(function(e){
    e.preventDefault();
$('html,body').animate({
        scrollTop:0
    }, 1000);
});

//Aparecer o botão back to top ao descer

$(window).scroll(function(){
    if($(this).scrollTop() > 1000){
        $('.backBtn').addClass('activated');
    } else {
        $('.backBtn').removeClass('activated');
    }
});

//Menu mobile responsivo
$('.mobile-btn').click(function(){
    $(this).toggleClass('actived');
    $('.menu-mobile').toggleClass('actived');
});


//Animação ao descer o scroll
var $target = $('[data-anime="scroll"]'),
    animationClass = 'animate',
    offset = $(window).height() * 3/4; 

function animeScroll() {
    var documentTop = $(window).scrollTop();
    $target.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop >  itemTop - offset) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    });
}
$(document).scroll(function() {
    animeScroll();
});

//Redirecionar página conforme idioma do browser
var browseLang = window.navigator.language;
if(browseLang == 'en-US'){
    window.location.href = 'https://reinierdantas.github.io/indexEn';
}else{
    window.location.href = 'https://reinierdantas.github.io';
}
