$(document).ready(function () {

    toggleHamburgerMenu();

    var mediaQuery = window.matchMedia('(min-width: 1480px)')
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
            console.log("if")
        });


    } else {
        togggleLogoView();
        console.log("else")

    }
}