$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >150)
})

$(document).ready(function(){
    $("#animate").hide().show("slide", { direction: "left" }, 1500);
})