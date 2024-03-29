!function ($) {
    'use strict';

    // write code here

    $(".mobMenu .menu").click(function(e){
     if($(this).hasClass('active')){
      $(this).text("Menu");
      $(this).removeClass("active");
     }else {
      $(this).text("Close");
      $(this).addClass("active");
     }
    });

    $(".mobMenu .menu").click(function(e){
      $(".navBttns").toggleClass('mobOpen');
     });

    $(".navFlex1 .navFlex").click(function(e){
      e.preventDefault();
      $(this).toggleClass("activeSubmenu")
      $(".navFlex2 .navFlex").removeClass("activeSubmenu");
    });

    $(".navFlex2 .navFlex").click(function(e){
      e.preventDefault();
      $(this).toggleClass("activeSubmenu")
      $(".navFlex1 .navFlex").removeClass("activeSubmenu");
    });


    $(".about-slider .slickSlider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
      if (currentSlide === 0) {
        $('.about-slider .prevArrow').css('opacity', '0.5');
      }
      if (currentSlide === 1) {
        $('.about-slider .prevArrow').css('opacity', '1');
      }
    });

    $(".about-slider .slickSlider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
      if (currentSlide === 1) {
        $('.about-slider .nextArrow').css('opacity', '1');
      }
      if (currentSlide === 2) {
        $('.about-slider .nextArrow').css('opacity', '0.5');
      }
    });

    $('.about-slick .slickSlider').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      cssEase: 'linear',
      prevArrow: $('.prevArrow'),
      nextArrow: $('.nextArrow'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    
    $(".slickSlider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
      if (currentSlide === 0) {
        $('.testimonial .slick-prev').css('opacity', '0.3');
      }
      if (currentSlide === 1) {
        $('.testimonial .slick-prev').css('opacity', '1');
      }
    });

    $(".slickSlider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
      if (currentSlide === 2) {
        $('.testimonial .slick-next').css('opacity', '1');
      }
      if (currentSlide === 3) {
        $('.testimonial .slick-next').css('opacity', '0.3');
      }
    });

    $('.testimonial .slickSlider').slick({
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.accreditation .flexImg').slick({
      dots: false,
      infinite: true,
      speed: 4000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      cssEase: 'linear',

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: true,
            cssEase: 'linear',
            autoplaySpeed: 0,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: 'linear',
            autoplaySpeed: 0,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            cssEase: 'linear',
            autoplaySpeed: 0,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    const $body = $('body');

    let oldScroll = 0;

    $('html').removeClass('no-js');

    // $body.on('click', '.menu', function (e) {
    //     $body.toggleClass('.menuActive');
    // });

    // $body.on('click', '.menu', function (e) {
    //     $body.removeClass('menu-open');
    // });

    

    $(".accordionFlex").click(function () {
      if ($('.accordionPara').is(':visible')) {
          $(".accordionPara").slideUp(500);
          $(".dropdown").css("transform", "rotate(0deg)");
      }
      if ($(this).next(".accordionPara").is(':visible')) {
          $(this).next(".accordionPara").slideUp(500);
          $(this).children(".dropdown").css("transform", "rotate(0deg)");
      } else {
          $(this).next(".accordionPara").slideDown(500);
          $(this).children(".dropdown").css("transform", "rotate(180deg)");
      }
  });



  mobileOnlySlider(".slickSlider", true, false, 767);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: false,
    arrows: false,
    speed:6000,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider

document.addEventListener('scroll', e => {
  var wTop = document.documentElement.scrollTop || document.body.scrollTop;

  //up
  if (wTop <= 0 || wTop < oldScroll) {
      $body.removeClass('hideHeader');
  } else {
      $body.addClass('hideHeader');
  }

  oldScroll = wTop;
}, { passive: true });


}.call(window, window.jQuery);