$(window).scroll(function(){
    $('nav').toggleClass('scrolled' , $(this).scrollTop() >20)
})

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
            $(".c1").addClass("order-sm-1");
            $(".c4").addClass("order-sm-2");
            $(".c3").addClass("order-sm-6");
            $(".c2").addClass("order-sm-7");
            $(".c5").addClass("order-sm-12");
    }
});

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
    $('#resumeButton').hide().delay(3500).fadeIn(1500)
})

$(document).ready(function(){
    $('#aboutButton').hide().delay(4000).fadeIn(1500)
})

// causing delay of the rest of the sections
$(document).ready(function(){
    $('#about').hide().delay(5000).fadeIn(1500)
})

$(document).ready(function(){
    $('#skills').hide().delay(5500).fadeIn(1500)
})

$(document).ready(function(){
    $('#hobbies').hide().delay(5500).fadeIn(1500)
})

$(document).ready(function(){
    $('#portfolio').hide().delay(5500).fadeIn(1500)
})

$(document).ready(function(){
    $('#contact').hide().delay(5500).fadeIn(1500)
})

$(document).ready(function(){
    $('#social').hide().delay(5500).fadeIn(1500)
})