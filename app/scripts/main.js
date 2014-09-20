$(document).ready(function() {
    //Toggle hamburger icon
    $('.lines').click(function(){
        $('.lines').toggleClass('close');
        $('.overlay').toggleClass('open')
    });
});