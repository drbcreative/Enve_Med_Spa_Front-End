$(document).ready(function() {
  $(".slider-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: !0,
    dots: !1,
    centerMode: true;
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: !0,
          dots: !1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          dots: !1
        }
      }
    ],
    nextArrow: $(".slide-right"),
    prevArrow: $(".slide-left"),
    autoplay: true
  });
});
