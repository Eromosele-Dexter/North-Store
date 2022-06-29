$(document).ready(function () {

    $("#search-bar, .fa-magnifying-glass").mouseenter(function () {
        $(".shop").hide();
    });


    $("#search-bar, .fa-magnifying-glass").mouseleave(function () {
        $(".shop").show();
    });

    $(".fa-bars").click(function () {
        $('.navbar').toggle();
        $(this).toggleClass('fa-duotone fa-xmark');
    })

    $('.navbar, .navbar a').click(function () {
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

});