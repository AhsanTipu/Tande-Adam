var mainSlider = $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    controls: false,
    arrows: true,
    prevArrow: '<a class="slick-arrow slick-prev" href="javascript:void(0);"><i class="fas fa-chevron-left"></i></a>',
    nextArrow: '<a class="slick-arrow slick-next" href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a>',
  });
  
  $("[data-go-to-slide]").mouseover(function() {
    mainSlider.slick("slickGoTo", $(this).attr("data-go-to-slide"));
    $("[data-go-to-slide]").removeClass("active");
    $(this).addClass("active");
  });