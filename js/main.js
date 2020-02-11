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


// var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null,    // optional scroll container selector, otherwise use window,
//     resetAnimation: true,     // reset animation on end (default is true)
//   }
// );
// wow.init();