$(document).ready(function() {
    //Toggle hamburger icon
    $('.lines').click(function(){
        $('.lines').toggleClass('close');
        $('.overlay').toggleClass('open')
    });
    //Parallax
    $objWindow = $(window);
        $('header[data-type="background"]').each(function(){
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
        // hide logo 1200 and under
        if ($(window).width() <= 1220){ 
            $('.logo').hide();
        }
        // do this on the way down
        else if (direction === 'down') {
            $('.lines').addClass('black');
            $('.logo').fadeIn('slow');
        }
        // do this on the way back up through the waypoint
        else {
            $('.lines').removeClass('black');
            $('.logo').fadeOut('slow');
        }       
    });
    // Unveil Images
    $("#skills img").unveil(-100,function() {
        $(this).addClass('loaded');
    });
});