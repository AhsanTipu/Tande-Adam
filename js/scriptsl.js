$(document).ready(function(){
    $('.product-slider').slick({
      arrows: false,
      dots: true
    });
    $('.product-color').on('click', function(){
      if(!$(this).hasClass('product-color_active')){
        $(this).siblings().removeClass('product-color_active');
        $(this).addClass('product-color_active');
      };
      var slideIndex = $(this).data('slide-index');
      $('.product-slider').slick('slickGoTo', slideIndex - 1);
    });
  });