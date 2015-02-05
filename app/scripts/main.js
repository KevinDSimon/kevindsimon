$(window).load(function(){
  setTimeout(function(){
    $('#loading').fadeOut(300);
    $('body').removeClass('active');
  }, 1500);
});
$(document).ready(function() {
    //Smooth Scroll
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 650);
            return false;
          }
        }
      });
    });
    //Toggle hamburger icon
    $('.lines').click(function(){
        $('.lines').toggleClass('close white');
        $('.overlay').toggleClass('open');  
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
        /* hide logo 1224 and under
        if ($(window).width() <= 1224){ 
            $('.logo').hide();
        }*/
        // do this on the way down
        if (direction === 'down') {
            $('.lines').addClass('black');
            $('.logo').fadeIn('slow');
        }
        // do this on the way back up through the waypoint
        else {
            $('.lines').removeClass('black');
            $('.logo').fadeOut('slow');
        }       
    });
    // Unveil
    $('#skills img').unveil(-100,function() {
        $(this).addClass('animated fadeInDown');
    });
});