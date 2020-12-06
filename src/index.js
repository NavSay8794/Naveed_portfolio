$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >150)
})

$(window).load(function(){
    $('#animate').addClass("anime")
})