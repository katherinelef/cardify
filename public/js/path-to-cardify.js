'use strict';

(function($) {
  $.fn.showAltHover = function() {
    $('img').hover(function() {
      $(this).css('display', 'none');
      $('div').append($(this).attr('alt'));
    });
  };
})(jQuery);

// Usage example:
$('div').showAltHover();