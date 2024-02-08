// Мобильное меню //
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');

// Зафиксированная навигация //
menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open'); 
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
});

window.onscroll = function showHeader(){
    let header = document.querySelector('.header');

    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    }else{
        header.classList.remove('header_fixed');
    }
}

// var swiper = new Swiper('.swiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     },
//   });

