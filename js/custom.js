
$(document).ready(function () {
    "use strict";

   var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });


    //carousel
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 2000,
  });
    });

    //animatedModal
    $("#demo01").animatedModal({
    modalTarget: 'animatedModal',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });


    $("#demo02").animatedModal({
    modalTarget: 'animatedModal2',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo03").animatedModal({
    modalTarget: 'animatedModal3',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo04").animatedModal({
    modalTarget: 'animatedModal4',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo05").animatedModal({
    modalTarget: 'animatedModal5',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo06").animatedModal({
    modalTarget: 'animatedModal6',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo07").animatedModal({
    modalTarget: 'animatedModal7',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo08").animatedModal({
    modalTarget: 'animatedModal8',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo09").animatedModal({
    modalTarget: 'animatedModal9',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo010").animatedModal({
    modalTarget: 'animatedModal10',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo011").animatedModal({
    modalTarget: 'animatedModal11',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo012").animatedModal({
    modalTarget: 'animatedModal12',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo013").animatedModal({
    modalTarget: 'animatedModal13',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo014").animatedModal({
    modalTarget: 'animatedModal14',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo015").animatedModal({
    modalTarget: 'animatedModal15',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo016").animatedModal({
    modalTarget: 'animatedModal16',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo017").animatedModal({
    modalTarget: 'animatedModal17',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo018").animatedModal({
    modalTarget: 'animatedModal18',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo019").animatedModal({
    modalTarget: 'animatedModal19',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    $("#demo020").animatedModal({
    modalTarget: 'animatedModal20',
    animatedOut: 'fadeOutDown',
    animatedIn: 'fadeInUp'
    });

    // scroll
   $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

   
$(window).on("load", function(e) {
    var tlOnLoad = gsap.timeline({delay: 1});
    var onLoadTextCount = $(".anim-text-banner>.anim-text").length;
    console.log(onLoadTextCount);
    
    for( var i= 1 ; i <= onLoadTextCount ; i++ ){
        var onLoadTextWidth = ".anim-text-banner>.anim-text:nth-of-type("+i+")";
        tlOnLoad.to(onLoadTextWidth, {clip: "rect(0px, "+$(onLoadTextWidth).width()+"px, 300px, 0px)", ease: "expo.out", duration: 1}, "-=0.2");
    }
    tlOnLoad.to(".anim-text-parent>.v-bar", {width: 100, ease: "expo.out", duration: 1}, "-=0.2");
    
    // ------------
    
    var tlMainAnim = gsap.timeline({repeat: -1});
    var animTextCount = $(".anim-text-parent>.anim-text").length;

    for( var i= 1 ; i <= animTextCount ; i++ ){
        var animTextWidth = ".anim-text-parent>.anim-text:nth-of-type("+i+")";
        tlMainAnim.to(animTextWidth, {opacity: 1, duration: 0.1});
        tlMainAnim.to(animTextWidth, {clip: "rect(0px, "+$(animTextWidth).width()+"px, 300px, 0px)", ease: "expo.out", duration: 1});
        tlMainAnim.to(animTextWidth, {clip: "rect(0px, 0px, 300px, 0px)", ease: "expo.out", duration: 1}, "+=0.75");
        tlMainAnim.to(animTextWidth, {opacity: 0, duration: 0.1});
    }
    
    tlOnLoad.add(tlMainAnim, "-=0.5");
});


});