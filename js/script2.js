(function(){

    'use strict';


    var $projects = $('.projects2');

    $projects.isotope({
        itemSelector: '.item2',
        layoutMode: 'fitRows'
    });

    // $('.filters .bt').on('click', function(e){

    //     e.preventDefault();

    //     var filter = $(this).attr('data-filter');

    //     $('.filters .bt').removeClass('active');
    //     $(this).addClass('active');

    //     $projects.isotope({filter: filter});

    // });
    $('.filters2 .bt2').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('.filters2 .bt2').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);