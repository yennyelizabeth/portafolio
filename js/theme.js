// -----------------------------

//   js index
/* =================== */
/*  1. isotope , masonary , image loaded activation
 *  2. Add Active class On Portfolio Menu
 *  3. Custome Scroll Section Activation
 *  4. Add Class on Active Sticky menu
 *  5. Skill Counter Activation
 *  6. owl carousel Activation
 *  7. DatePicker Activation
 
 
 
 
 */
// -----------------------------


(function ($) {
    "use strict";


    /*-----------------------------------------------
     1. isotope , masonary , image loaded activation
     ------------------------------------------------*/
    $('#container').imagesLoaded(function () {  //image loaded

        // filter items on button click
        $('.portfolio-menu').on('click', 'nav ul li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });

        // masonary activation
        var $grid = $('.portfolio').isotope({
            itemSelector: '.prt-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.prt-item'
            }
        })
    });

    /*-------------------------------------
     2. Add Active class On Portfolio Menu
     --------------------------------------*/
    $(".p-act").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*------------------------------------
     3. Custome Scroll Section Activation
     -------------------------------------*/
    $('.scroll-me').on('click', function (e) {
        var linkHref = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*----------------------------------
     4. Add Class on Active Sticky menu
     -----------------------------------*/
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();
        var sec2offsetTop = $('#about').offset().top;
        var sec3offsetTop = $('#my-servive').offset().top;
        var sec4offsetTop = $('#portfolio').offset().top;
        var sec5offsetTop = $('#skill').offset().top;
        var sec6offsetTop = $('#testimonial').offset().top;
        var sec7offsetTop = $('#blog').offset().top;
        var sec8offsetTop = $('#contact').offset().top;
        var activeLi;
        if (wScroll < sec2offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(1)');
        } else if (wScroll < sec3offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(2)');
        } else if (wScroll < sec4offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(3)');
        } else if (wScroll < sec5offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(4)');
        } else if (wScroll < sec6offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(5)');
        } else if (wScroll < sec7offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(6)');
        } else if (wScroll < sec8offsetTop) {
            activeLi = $('.main-menu nav > ul > li:nth-child(7)');
        } else {
            activeLi = $('.main-menu nav > ul > li:nth-child(8)');
        }
        activeLi.addClass('active');
        $('.main-menu nav ul li').not(activeLi).removeClass('active');
    });

    /*---------------------------
     5. Skill Counter Activation
     ---------------------------- */
    $(window).on('scroll', function () {

        var wScroll = $(this).scrollTop();

        // Landing Elements
        if (wScroll > $('.counter').offset().top - ($(window).height() / 1.1)) {

            $('.counter').each(function () {
                var $this = $(this),
                        countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                    countNum: countTo
                },
                        {
                            duration: 3000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
            });
        }
    });

    /*--------------------------
     6. owl carousel Activation
     --------------------------- */
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        smartSpeed: 800,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*---------------------------------------------
     7. DatePicker Activation
     ---------------------------------------------- */
    $('.date-picker').datepicker({
        startDate: '-3d'
    });


}(jQuery));
