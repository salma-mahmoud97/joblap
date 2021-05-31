// show nav
$(document).ready(function () {
  $("i.icona").click(function () {
    $(".nav-list").slideToggle();
  });
});

// sticky navbar
$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 100) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
// nav2 collor active on click li
$(".desc-nav").click(function () {
  $(this).addClass("active-btn").siblings().removeClass("active-btn");

  var allId = $(this).attr("id");
  if (allId === "all") {
    $(".desc-items > div").fadeIn();
  } 
});

// $('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })

//default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
        responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})