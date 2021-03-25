$(document).ready(function () {
    $('.expert_carousel').slick({         
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow.png"></button>',     
    });
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
                  
        }
      },               
        ]
  });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu_mobile'),
      closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});