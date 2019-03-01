$(function () {
    var sldr = $('.sldr'),
        sldrContent = sldr.html(),
        slideWidth = $('.sl_ctr').outerWidth(),
        slideCount = $('.sldr .testimonials-one').length,
        prv_b = $('.prv_b'),
        nxt_b = $('.nxt_b'),
        sldrInterval = 3300,
        animateTime = 2000,
        course = 1,
        margin = -slideWidth;
    $('.sldr .testimonials-one').clone().prependTo('.sldr');
    $('.sldr .testimonials-one').eq(1).clone().appendTo('.sldr');
    $('.sldr').css('margin-left', -slideWidth);

    function nxt_bSlide() {
        interval = window.setInterval(animate, sldrInterval)
    }

    function animate() {
        if (margin == -slideCount * slideWidth - slideWidth) {
            sldr.css({
                'marginLeft': -slideWidth
            });
            margin = -slideWidth * 2
        } else if (margin == 0 && course == -1) {
            sldr.css({
                'marginLeft': -slideWidth * slideCount
            });
            margin = -slideWidth * slideCount + slideWidth
        } else {
            margin = margin - slideWidth * (course)
        }
        sldr.animate({
            'marginLeft': margin
        }, animateTime)
    }

    function sldrStop() {
        window.clearInterval(interval)
    }
    prv_b.click(function () {
        if (sldr.is(':animated')) {
            return false
        }
        var course2 = course;
        course = -1;
        animate();
        course = course2
    });
    nxt_b.click(function () {
        if (sldr.is(':animated')) {
            return false
        }
        var course2 = course;
        course = 1;
        animate();
        course = course2
    });
    sldr.add(nxt_b).add(prv_b).hover(function () {
        sldrStop()
    }, nxt_bSlide);
    nxt_bSlide()
});

// Menu adaptive

$(function() {
    var pull 		= $('#pull');
        menu 		= $('nav ul');
        menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

// Slider 

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});


// scroll down
$(document).ready(function() {
    $(".scroll_class").click(function() {
         $('html, body').animate({
             scrollTop: $(".block-footer").offset().top
         }, 1500);
     });
    });