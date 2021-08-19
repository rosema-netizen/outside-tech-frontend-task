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
  

  // BLOCK CARD SLIDER INTIALIZATION


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

  // BG NONE SLIDE INITIALIZATION


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('.navbar').addClass('sticky-nav');
      // document.getElementById("navbar").style.top = "0";
      // document.getElementById("navbar").style.background = "#ffd7b4";
      // document.getElementById("navbar").style.transition = "ease-in-out 0.2s";
      // document.getElementById("navbar").style.padding = "30px 0";
      
    } else {
      $('.navbar').removeClass('sticky-nav');
      // document.getElementById("navbar").style.top = "49px";
      // document.getElementById("navbar").style.background = "transparent";
      // document.getElementById("navbar").style.padding = "20px 0";

    }


  }

  

  // STICKY NAVBAR 


  
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });


  AOS.init();

});




document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      })
    });
  }
  // end if innerWidth
  }); 



