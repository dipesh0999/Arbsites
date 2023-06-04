!function ($) {
    'use strict';

    // write code here
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

$('.slickSlider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });