$(document).ready(function () {
  $(".c-mainvisual__slider").slick({
    fade: true,
    speed: 1100,
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
    ".c-about, .c-works__header, .c-works__intro, .c-works__photo, .c-career__header, .c-career__banner, .c-career__plan, .c-career__service, .c-intaview__header, .c-intaview__cards, .c-intaview__represent, .c-recruit__header, .c-recruit__tabwrapper, .c-company__heading, .c-company__about, .c-footer, .c-footer__nav, .c-footer__copyright"
  );
})

$(document).ready(function () {
  $(window).scroll(function () {
    const scrollDistance = $(window).scrollTop();

    $(".page-section").each(function (i) {

      if ($(this).position().top <= scrollDistance + 250 || scrollDistance == 0) {
        $(".c-header__gnavlink.is-active").removeClass("is-active");
        $(".c-header__gnavlink").eq(i).addClass("is-active")
      }
    })
  }).scroll();
})

$(".c-about__scroll").click(function () {
  $("html, body").animate({
    scrollTop: $(".c-about").offset().top
  }, 100)
})












/*-------------------------------------------------------------------------*/
$(document).ready(function () {
  $(".c-works__img").click(function (e) {
    $(".c-works__modal").show();

    $(".c-works__img").each((index, item) => {
      if ($(e.target).is(item)) {
        $(".c-works__modalcontainer").eq(index).show();
        $("body").css("overflow", "hidden");
      } else {
        $(".c-works__modalcontainer").eq(index).hide();
      }
    });
  });

  $(".c-works__modalclose").click(function () {
    $(".c-works__modal").hide();
    $("body").css("overflow", "unset");
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.c-works__modal')) {
      $(".c-works__modal").hide();
      $("body").css("overflow", "unset");
    }
  });
});

/*-------------------------------------------------------------------------*/
$(document).ready(function () {
  $('.c-intaview__cardimage').click(function (e) {
    $('.c-intaview__modal').show();

    $(".c-intaview__cardimage").each((index, item) => {
      if ($(e.target).is(item)) {
        $(".c-intaview__modalmain").eq(index).show();
        $("body").css("overflow", "hidden");
      } else {
        $(".c-intaview__modalmain").eq(index).hide();
      }
    });
  });


  $('.c-intaview__modalclose').click(function () {
    $('.c-intaview__modal').hide();
    $("body").css("overflow", "unset");
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.c-intaview__modal')) {
      $('.c-intaview__modal').hide();
      $("body").css("overflow", "unset");
    }
  });

});

/*-------------------------------------------------------------------------*/
$(function () {
  $(".c-recruit__boxcontent:eq(0)").show();
  $(".c-recruit__tab").click(function () {
    $('.c-recruit__tab').removeClass('is-active');
    $(this).addClass("is-active");
    const n = $(".c-recruit__tab").index(this);
    $(".c-recruit__boxcontent").hide();
    $(".c-recruit__boxcontent:eq(" + n + ")").fadeIn(100);
  })
})
