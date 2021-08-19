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


  $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  AOS.init({
    offset: 120,
    duration: 1000
  });


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('.navbar').addClass('sticky-nav');
      
    } else {
      $('.navbar').removeClass('sticky-nav');
    }


  }

  

  // STICKY NAVBAR 


  
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });


  AOS.init({
  });

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



