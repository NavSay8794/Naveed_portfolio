$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >50)
})


$(document).ready(function(){
    $('#animate').hide().fadeIn(1500)
})

$(document).ready(function(){
    $('#hello').hide().delay(500).fadeIn(1500)
})

$(document).ready(function(){
    $('#intro').hide().delay(1500).fadeIn(1500)
})

$(document).ready(function(){
    $('#fsd').hide().delay(2500).fadeIn(1500)
})

$(document).ready(function(){
    $('#workType').hide().delay(3000).fadeIn(1500)
})

$(document).ready(function(){
    $('#resumeButton').hide().delay(4000).fadeIn(1500)
})
$(document).ready(function(){
    $('#aboutButton').hide().delay(4500).fadeIn(1500)
})