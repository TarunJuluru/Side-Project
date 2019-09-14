/*global document*/
/*global window*/
/*global $*/
/*$ = jQuery*/
$(document).ready(function () {
    "use strict";

    //    var $menuButton = $("#openNav");
    //    var $closeButton = $("#closeNav");
    var $scrollButton = $("#scrollButton");
    //    var $scrollReveal = $(".Scroll-Reveal");
    //    var $fullScreen = $("#fullScreen")
    var $backToTop = $(".Back-To-Top");

    $(".Menu").on("click", function (event) {
        event.preventDefault();
        $("nav").css({
            marginRight: 0
        });
        $("Header, Section").css({
            //            opacity: 0.4,
            //            transition: "all .4s ease"
        }, "slow");
    });

    //    $("nav").on("mouseleave", function (event) {
    //        event.preventDefault();
    //        $("nav").css({
    //            marginRight: "-32rem",
    //
    //        });
    //        $("Header, Section").css({
    //            //            opacity: 1,
    //            transition: "all .6s ease"
    //        }, "slow");
    //    });


    if (window.matchMedia("(max-width: 1024px)").matches) {
        $("Header, Section").on("click", function () {
            //        event.preventDefault();
            $("nav").css({
                marginRight: "-24rem",
            });
            $("Header, Section").css({
                opacity: 1
            });
        });
    }


    //    window.onload = function () {
    //        $("#1080p").on("load", function () {
    //            $("videoBackground").getElementById("720p");
    //        });
    //    };


    //     Hide-Show nav on scroll position
    //    var prevScrollpos = window.pageYOffset;
    //    window.onscroll = function () {
    //        var currentScrollPos = window.pageYOffset;
    //        if (prevScrollpos > currentScrollPos) {
    //            $(".Top-Bar").slideDown("slow");
    //        } else {
    //            $(".Top-Bar").slideUp("slow");
    //        }
    //        prevScrollpos = currentScrollPos;
    //    };


    //    ScrollReveal().reveal('.punchline', {
    //        delay: 2000
    //    });


    //onScroll Animation (AOS)
    //    AOS.init();

});
