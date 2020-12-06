$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >150)
})

$(document).ready(function(){
    $("#animate").animate({left:0, opacity:1},2000)
})