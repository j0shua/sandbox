$(document).ready(function() {
    $(window).bind('scroll', function(){
        var threshold = 150;
        var fadingIn = false;

        if ($(window).scrollTop() > threshold && !fadingIn){
            // fade it in
            fadingIn = true;
            $('.wrap').stop().fadeTo(200, 1);
        } else {
            $('.wrap').stop().fadeTo(200, 0);
        }
    });

    $('.top').click(function(e){
    	// native
        //window.scrollTo(0);

        // or use jQuery then we can do it slow low low low, and enjoy the ride :)
         $('html, body').animate({scrollTop:0}, 'slow');

        // stop prop and prevent default
        return false;
    });
});
