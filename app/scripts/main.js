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
        $('.overlay').toggleClass('open');
        $('.lines').toggleClass('close white');
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
    var waypoint = new Waypoint({
      element: document.getElementById('about'),
      handler: function(direction) {
        $('.lines').toggleClass('black');
        $('.logo').fadeToggle('slow');
      }
    })
    // Unveil
    $('#skills img').unveil(-100,function() {
        $(this).addClass('animated fadeInDown');
    });
    //Twenty Twenty
    $("#twentytwenty").twentytwenty();
});
