$(document).ready(function(){
    $('.blockcard--slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1.5
              }
            },
          ]
      });


      $('.bgnone-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1.5
              }
            },
          ]
      });
          
  });