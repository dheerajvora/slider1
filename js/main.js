$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })



    setTimeout(function () {
        $(".slider .swiper-slide img").addClass("animatet")
    }, 5000);



    setTimeout(function () {
        $(".circleText2").addClass("hides")
    }, 7000);




    setTimeout(function () {
        $(".circleText1").fadeIn("slow", function () {
            $(this).addClass("hides");
        })
    }, 7000);



    function textsilder() {
        var nthChildActive = $(".swiper-wrapper").find(".swiper-slide-active").index();
        var vlu = $(".swiper-wrapper .swiper-slide:nth-child(" + nthChildActive + ")").hasClass("swiper-slide-active");
        $(".slider-text .text").removeClass("active");
        $(".slider-text .text:nth-child(" + nthChildActive + ")").addClass("active");
    }
    setInterval(textsilder, 100);
});







