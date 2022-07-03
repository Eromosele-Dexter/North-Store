$(document).ready(function () {

    toggleHamburgerMenu();
    homeCarousel();
    productCarousel();

    var mediaQuery = window.matchMedia('(min-width: 1024px)')
    document.addEventListener('DOMContentLoaded', mediaQuerying)
    mediaQuerying(mediaQuery)

});

/*------------- FUNCTIONS -------------*/

function togggleLogoView() {
    $("#search-bar, .fa-magnifying-glass").on("mouseenter", function () {
        $(".logo").hide();
    });


    $("#search-bar, .fa-magnifying-glass").on("mouseleave", function () {
        $(".logo").show();
    });
}

function toggleHamburgerMenu() {

    $(".fa-bars").click(function () {
        $('.navbar').toggle();
        $(this).toggleClass("fa-duotone fa-xmark");
    })

    $('.navbar, .navbar a').click(function () {
        $('.navbar').hide();
        $('.fa-bars').removeClass("fa-duotone fa-xmark");
    })

}

function mediaQuerying(mediaQuery) {
    if (mediaQuery.matches) {
        $("#search-bar, .fa-magnifying-glass").mouseenter(function () {
            $(".logo").off("mouseenter");
        });


    } else {
        togggleLogoView();

    }
}

function homeCarousel() {
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        items: 1
    })
}

function productCarousel() {
    $('.product-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 3,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2

            },
            1000: {
                items: 3,
                center: true
            }
        }
    });
}
