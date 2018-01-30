(function($) {
  $.fn.showAltHover = function() {
    $('img').mouseover(
      function() {
        var image = $(this)
      $(this).each(function() {
        $(this).replaceWith('<figure>' + '<img  src=' + $(this).attr('src') + ' class=hover' + '>' + '<figcaption class=letter text-center>' + $(this).attr('alt') + '</figcaption>' + '</figure>');
      });

      $('figure').mouseout(
        function() {
          console.log("hola")
          $(this).each(function() {
        $(this).replaceWith('<img src=' + image.attr('src') +' alt='+ image.attr('alt') +'>')
});
      });
    });

  };
}(jQuery));

// Usage example:
$('div').showAltHover();
