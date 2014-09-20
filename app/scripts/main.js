$(document).ready(function() {
    //Toggle off-canvas navigation
    $('.lines').click(function(){
        $('#main-nav').toggleClass('nav-active');
        $('.lines').toggleClass('close');
    });
    //Execute Full Height of Intro Div
    $('#hero') .css({'height': (($(window).height()))+'px'});
        $(window).resize(function(){
    });
    //Parallax
    $objWindow = $(window);
        $('div[data-type="background"]').each(function(){
        if (!$('html').hasClass('touch')) {
            var $bgObj = $(this);
            $(window).scroll(function() {
                var yPos = -($(window).scrollTop() / $bgObj.data('speed'));
                var coords = '100% '+ yPos + 'px';
                // Change the position of background
                $bgObj.css({ backgroundPosition: coords });
            });     
        }
    });
    //Waypoints
    $('#about').waypoint(function(direction) {
        // do not show on windows under 1200
        if ($(window).width() <= 1200){ 
            $('.logo').hide();
        }
        // do this on the way down
        else if (direction === 'down') {
            $('.logo').fadeIn('slow');
            $('.lines').addClass('black');
        }
        // do this on the way back up through the waypoint
        else {
            $('.logo').fadeOut('slow');
            $('.lines').removeClass('black');
        }       
    });
});