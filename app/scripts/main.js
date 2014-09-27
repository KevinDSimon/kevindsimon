$(document).ready(function() {
    //Toggle hamburger icon
    $('.lines').click(function(){
        $('.lines').toggleClass('close');
        $('.overlay').toggleClass('open')
    });
    //Waypoints
    $('#about').waypoint(function(direction) {
        // do this on the way down
        if (direction === 'down') {
            $('.lines').addClass('black');
        }
        // do this on the way back up through the waypoint
        else {
            $('.lines').removeClass('black');
        }       
    });
});