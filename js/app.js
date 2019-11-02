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

//voltar ao topo
$('.home, .backBtn, .lang').click(function(e){
    e.preventDefault();
$('html,body').animate({
        scrollTop:0
    }, 1000);
});

//Aparecer o botão ao descer

$(window).scroll(function(){
    if($(this).scrollTop() > 1000){
        $('.backBtn').addClass('activated');
    } else {
        $('.backBtn').removeClass('activated');
    }
});

//Menu mobile
$('.mobile-btn').click(function(){
    $(this).toggleClass('actived');
    $('.menu-mobile').toggleClass('actived');
});
