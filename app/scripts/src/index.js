$(document).ready(function(){
    $('.offer__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
});
    $('.comment__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
