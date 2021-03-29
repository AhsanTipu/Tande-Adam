
(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.filters .bt').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('.filters .bt').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });
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
const p1Change=()=>{
    document.getElementById('pro1').style.display='block';
    document.getElementById('pro2').style.display='none';
    document.getElementById('pro3').style.display='none';
    document.getElementById('pro4').style.display='none';
}
const p2Change=()=>{
    document.getElementById('pro1').style.display='none';
    document.getElementById('pro2').style.display='block';
    document.getElementById('pro3').style.display='none';
    document.getElementById('pro4').style.display='none';
}
const p3Change=()=>{
    document.getElementById('pro1').style.display='none';
    document.getElementById('pro2').style.display='none';
    document.getElementById('pro3').style.display='block';
    document.getElementById('pro4').style.display='none';
}
const p4Change=()=>{
    document.getElementById('pro1').style.display='none';
    document.getElementById('pro2').style.display='none';
    document.getElementById('pro3').style.display='none';
    document.getElementById('pro4').style.display='block';
}