(function($) {
  $.fn.showAltHover = function() {
    $('img').hover(
       function() {
         var image = $(this)
       $(this).each(function() {
         if ( image.parent().is("figure")) {
           $( "figcaption" ).remove()
           image.unwrap();
           image.removeClass('hover')

         } else {
           image.wrap( "<figure class=inline></figure>" );
           $("figure").append('<figcaption class=letter>' + $(this).attr('alt') + '</figcaption>')
           image.addClass('hover')

         }
         //$(this).replaceWith('<figure>' + '<img  src=' + $(this).attr('src') + ' class=hover' + '>' + '<figcaption class=letter text-center>' + $(this).attr('alt') + '</figcaption>' + '</figure>');//
       })
     });

  };
}(jQuery));

// Usage example:
$('div').showAltHover();
