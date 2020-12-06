$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >150)
})

$(document).ready(function(){
    $('#animate').hide().fadeIn()
})