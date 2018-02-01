// con la funcion primera se encapsula de forma global
(function($) {
  $.fn.cardify = function() {
    $('img').hover(
      function() {
        let image = $(this);
        // console.log(image);
        $(this).each(() => {
          if (image.parent().is('figure')) {
            $('figcaption').remove();
            image.unwrap();
            image.removeClass('hover');
          } else {
            image.wrap('<figure class=inline></figure>');
            $('figure').append('<figcaption class=letter>' + $(this).attr('alt') + '</figcaption>');
            image.addClass('hover');
          }
        });
      });
  };
}(jQuery));
// el signo de dolar sirve para encapsular
