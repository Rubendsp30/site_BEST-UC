$( document ).ready(function() {
    $('#main_header').css('height', '100');
    $('#logo_best').css('height', '100');
});

$(window).scroll(function() {

   var offset_ = $(window).scrollTop();
    if (    offset_ < 25){
        $('#main_header').css('height', '100');
        $('#logo_best').css('height', '100');
    }
    else{
        $('#main_header').css('height', '70');
        $('#logo_best').css('height', '70');
    }

});