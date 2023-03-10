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
  const modalWork = $('.c-works__modal');
  const btnWork = $('.c-works__img');
  const spanWork = $('.c-works__modalclose');

  btnWork.click(function () {
    modalWork.show();
  });

  spanWork.click(function () {
    modalWork.hide();
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.c-works__modal')) {
      modalWork.hide();
    }
  });

  const modalIntaview = $('.c-intaview__modal');
  const btnIntaview = $('.c-intaview__cardimage');
  const spanIntaview = $('.c-intaview__modalclose');

  btnIntaview.click(function () {
    modalIntaview.show();
  });

  spanIntaview.click(function () {
    modalIntaview.hide();
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.c-intaview__modal')) {
      modalIntaview.hide();
    }
  });
});
