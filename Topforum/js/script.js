$(document).ready(function () {
    $('.clients_carousel').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow_gray.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow_gray.png"></button>'

    });
  });