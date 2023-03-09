$(document).ready(function () {
    $(".c-mainvisual__slider").slick({
      fade: true,
      speed: 2000,
      infinite: true,
      autoplay: true,
      arrows: false,
    });

    ScrollReveal({
      reset: false,
      distance: "25px",
      duration: 1100,
      origin: "bottom",
    });

    ScrollReveal().reveal(
      ".c-about__content, .c-works__header, .c-works__introcontent, .c-work__photosheading,.c-work__subheading2, .c-work__content"
    );
});

$(document).ready(function () {
  var modal = $('.c-works__modal');
  var btn = $('.c-works__img');
  var span = $('.c-works__modalclose');

  btn.click(function () {
    modal.show();
  });

  span.click(function () {
    modal.hide();
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.c-works__modal')) {
      modal.hide();
    }
  });
});
