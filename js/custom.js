
$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({
        'overflow': 'visible'
    });
})


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

    // Typing


    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fabbbb}";
        document.body.appendChild(css);
    };	

    // scroll
   $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

});