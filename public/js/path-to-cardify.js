'use strict';

(function($) {
  $.fn.cardify = function(options) {
    $('img').hover(function() {
      var _this = this;

      var image = $(this);
      // console.log(image);
      $(this).each(function() {
        if (image.parent().is('figure')) {
          $('figcaption').remove();
          image.unwrap();
          image.removeClass('hover');
        } else {
          image.wrap('<figure class=inline></figure>');
          $('figure').append('<figcaption class=letter>' + $(_this).attr('alt') + '</figcaption>');
          image.addClass('hover');
        }
      });
    });
    var settings = $.extend({
      color: 'black',
      fontFamily: 'fantasy'

    }, options);

    return this.css({
      color: settings.color,
      fontFamily: settings.fontFamily
    });
  };
})(jQuery);