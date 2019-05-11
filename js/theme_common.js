/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//   js index
/* =================== */
/*  1. Preloader Activation
 *  2. Add Active class On Portfolio Menu
 *  3. custome scrollTop Activation
 *  4. scrollup Activation
 *  5. Ajax Contact Form Activation
 *  6. Contact Form Focus - Addclass/Removeclass
 *  7. Magnific Popup Activation
 
 
 
 
 */
// -----------------------------

(function ($) {
    "use strict";

    
    /*------------------------
     1. Preloader Activation
     ------------------------- */
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    
    /*------------------------
     2. headroom js Activation
     ------------------------- */
        // grab an element
        var myElement = document.querySelector("header");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init();

        // 2. mean menu Activation
        $('.mobile-menu nav').meanmenu({  //mean-menu div name
            meanScreenWidth: "750",
            meanMenuContainer: ".mobile-menu-area",    //main div name of mean-menu
        });

    /*-------------------------------
     3. custome scrollTop Activation
     --------------------------------*/
    $('.scrollup').on('click', function (e) {
        var linkHref = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);

        e.preventDefault();
    });

    /*--------------------------------
     4. scrollup Activation
    --------------------------------- */
    $(window).on("scroll", function () {
        var wScroll = $(this).scrollTop();

        if (wScroll > 150) {
            $('.scrollup-sec').fadeIn().css('display', 'block');
        } else {
            $('.scrollup-sec').fadeOut().css('display', 'none');
        }
    });
    
    /*--------------------------------
     5. Ajax Contact Form Activation
     --------------------------------- */
    $('.cf-msg').on('hide', );
    $('form#cf button#submit').on('click', function () {
        var fname = $('#fname').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        subject = $.trim(subject);
        email = $.trim(email);
        msg = $.trim(msg);
        if (fname !== '' && email !== '' && msg !== '') {
            var values = "name=" + name + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function () {
                    $('#name').val('');
                    $('#email').val('');
                    $('#msg').val('');
                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function () {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>');
        }
        return false;
    });

    /*---------------------------------------------
     6. Contact Form Focus - Addclass/Removeclass
     ---------------------------------------------- */
    $(".focus").on('focus', function () {
        $(this).parent().removeClass("unactive");
        $(this).parent().addClass("active");

    }).on('blur', function () {
        $(this).parent().removeClass("active");
        $(this).parent().addClass("unactive");
    })
    
    /*---------------------------------------------
     7. Magnific Popup Activation
     ---------------------------------------------- */
    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            }
        }
    });

    
}(jQuery));