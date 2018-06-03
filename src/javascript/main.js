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
var windowsize = $(window).width();
$(window).resize(function() {
  windowsize = $(window).width();
  if (windowsize <= 640) {
    var $block = $(".division__items");
    $(".division__title").click(function() {
      $block.toggle();
    });
  }
});

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

// mobile and tablet menu
// var resizeTimer;
// $(window).on('resize', function (e) {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function () {
//         if ($(window).width() > 768) {
//             $('.mobile-menu').show();
//         } else {
//             $('.mobile-menu').hide();
//         }
//     }, 250);
// });
// //Event handler to toggle the menu on mobile devices
// $('.mobile-menu__link').on('click', function () {
//     $('.mobile-menu').slideToggle();
// });

$(document).ready(function($) {
  $(".mobile-menu").hide();
  $(".mobile-menu__link").on("click", function() {
    $(".mobile-menu").slideToggle();
  });
});
