$(document).ready(function () {
    $('.clients_carousel').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow_gray.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow_gray.png"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1                     
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1           
          }
        }
        
        
          ]

    });
  });

  $(document).ready(function () {
    $('.reviews_carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow_gray.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow_gray.png"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
                    
          }
        },
       
        
        
          ]

    });
  });