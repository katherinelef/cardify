(function($) {
  $.fn.showAltHover = function() {

    $("img").hover(function() {
      console.log($(this).attr('alt'))
      $(this).each(function() {
        $(this).replaceWith("<figure>" + "<img src=" + $(this).attr("src")+ ">" + "<figcaption>"+ $(this).attr('alt') + "</figcaption>" + "</figure>");
      });
      });
  };
}(jQuery));

// Usage example:
$('div').showAltHover();
