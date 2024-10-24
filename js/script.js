jQuery(document).ready(function () {
  if ($(window).width() > 769) {
    jQuery(".catalog-thumbs__image img").on("mouseenter", function () {
      var largeImageSrc = jQuery(this).attr("src");
      console.log(largeImageSrc);
      var closestMainImage = jQuery(this)
      .closest(".catalog__column")
      .find(".catalog__image img");
      jQuery(closestMainImage).attr("src", largeImageSrc);
    });
  } else {
  }
});
