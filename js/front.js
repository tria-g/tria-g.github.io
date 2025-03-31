$(function () {
    var $grid = $('.masonry-wrapper').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        transitionDuration: 300,
        horizontalOrder: true // ✅ Forces left-to-right order
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout'); // ✅ Ensures layout updates correctly
    });

    // Fix weird reordering after Masonry runs
    setTimeout(() => {
        $grid.masonry('layout');
    }, 500);

    $('.navbar-toggler').on('click dblclick', function () {
        $('.sidebar, .page-holder').toggleClass('active');
    });

    lightbox.option({
        "disableScrolling": true
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});