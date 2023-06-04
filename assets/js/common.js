!function ($) {
    'use strict';

    // write code here

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
      speed: 300,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
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

    // $('.testimonial .slickSlider').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: false,
    //   infinite: false,
    //   autoplaySpeed: 20000,
    //   speed: 1000,
    //   prevArrow: $('.slick-prev'),
    //   nextArrow: $('.slick-next'),
    //   resposive:[
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         centerMode: false
    //       }
    //     }
    //   ]
    // });

    const $body = $('body');

    let oldScroll = 0;

    $('html').removeClass('no-js');

    $body.on('click', '.menu', function (e) {
        $body.toggleClass('.menuActive');
    });

    $body.on('click', '.menu', function (e) {
        $body.removeClass('menu-open');
    });

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