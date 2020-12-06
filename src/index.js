$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >150)
})

$(document).ready(function(){
    $('#animate').hide().fadeIn(function(){ 
        $('#animate').animate({
            left: "80px"
        }, 500); 
    },1500).css('left' ,'0');
})