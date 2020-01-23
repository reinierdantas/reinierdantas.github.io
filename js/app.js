//Scroll suave -- smooth scroll 
$('.arrowDown a[href^="#"]').click(function(e){
    e.preventDefault();
    let targId = $(this).attr('href'),
        menuHeight = $('.chamada').innerHeight(),
        offsetTop = $(targId).offset().top;
  $('html,body').animate({
      scrollTop: offsetTop
  },1000);      
});

//voltar ao topo -- back to top button
$('.home, .backBtn, .lang').click(function(e){
    e.preventDefault();
$('html,body').animate({
        scrollTop:0
    }, 1000);
});

//Aparecer o botão voltar ao top -- show back to top button

$(window).scroll(function(){
    if($(this).scrollTop() > 1000){
        $('.backBtn').addClass('activated');
    } else {
        $('.backBtn').removeClass('activated');
    }
});


//Animação ao descer o scroll -- show element when scroll
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

$('.projeto').click(function(){
    $(this).find('.projeto-card').toggleClass('active');
});
