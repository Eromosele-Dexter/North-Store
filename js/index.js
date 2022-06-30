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
    console.log("ham")
}

function mediaQuerying(mediaQuery) {
    if (mediaQuery.matches) {
        $("#search-bar, .fa-magnifying-glass").mouseenter(function () {
            $(".logo").off("mouseenter");
            console.log("if")
        });


    } else {
        togggleLogoView();
        console.log("else")

    }
}

function homeCarousel() {
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    })
}

function productCarousel() {
    $('.product-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        autoplay: false,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}
