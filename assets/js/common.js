!function ($) {
    'use strict';

    // write code here
    const $body = $('body');

    let oldScroll = 0;

    $('html').removeClass('no-js');

    $body.on('click', '.btn-menu', function (e) {
        $body.toggleClass('menu-open');
    });

    $body.on('click', '.close-nav', function (e) {
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