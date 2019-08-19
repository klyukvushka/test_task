var accordion = (function() {
  var $accordion = $(".accordion");

  return {
    handlers: function() {
      $accordion.on("click", function() {
        var $this = $(this);
        var $icon = $(".accordion__icon");
        $this.find(".accordion__content").slideToggle(150, function() {
          window.scrollTo(window.scrollX, window.scrollY + 1);
        });
        $this.toggleClass("accordion_active");
      });
    },
    init: function() {
      this.handlers();
    }
  };
})();

accordion.init();

// footer menu
(function footerAccordion() {
  var windowSize = $(window).width();
  if (windowSize <= 640) {
    $(".footer__info").click(function() {
      $(".footer__info")
        .not(this)
        .removeClass("active");
      $(this).toggleClass("active");
    });
  }
})();

// slider
$(window).on("load resize orientationchange", function() {
  $(".news__slider").each(function() {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 640) {
      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }
    } else {
      if (!$carousel.hasClass("slick-initialized")) {
        $carousel.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          dots: true,
          arrows: false
        });
      }
    }
  });
});

$(document).ready(function($) {
  $(".mobile-menu").hide();
  $(".mobile-menu__btn").on("click", function() {
    $(".mobile-menu").slideToggle();
    $(this).toggleClass("mobile-menu__btn_active");
  });
});
