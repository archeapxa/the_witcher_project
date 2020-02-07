var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },
    slidesPerView:1,
    freeMode:true,
    freeModeMomentum:true,
    freeModeSticky:true,


    breakpoints: {
      540: {
        slidesPerView: 2,
        freeMode:true,
        freeModeMomentum:true,
        freeModeSticky:true,

      }
    }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})