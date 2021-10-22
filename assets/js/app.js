$(function () {
  'use strict';
  $(".home-slider").slick({
    Infinity: true,
    fade: true,
    speed: 700,
    CssEase: 'linear',
    arrow: true,
    prevArrow: '<i class="fas fa-chevron-left slider_arrow slider_left_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slider_arrow slider_right_arrow"></i>',
  });

  $('.lazy_img_container').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".testimonial_item_container").slick({
    arrows: false,
    dots: true,
    dotsClass: "slider_dots",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
      }
    }, ]
  });
  $('.venoBox').venobox();

  $('.counter').counterUp({
    delay: 10,
    time: 500
  });
})