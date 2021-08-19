$(document).ready(function () {
  $('.blockcard--slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
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
    dots: false,
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


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.background = "#ffd7b4";
      document.getElementById("navbar").style.transition = "ease-in-out 0.2s";
      document.getElementById("navbar").style.padding = "40px 0";

    } else {
      document.getElementById("navbar").style.top = "60px";
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").style.padding = "20px 0";

    }
  }
});