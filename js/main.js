// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//       items:4,
//       loop:true,
//       margin:3
//     });
//   });
  
  var typed= new Typed('#element', {
    strings: ['Hello ', 'Welcome to our world .'],
    typeSpeed: 200,
    backSpeed: 200,
    loop:true
  });


  // Top Icon smoth and
let advOffsetTop=$("#About-us").offset().top
$(window).scroll(function(){
  let currentScroll= $(window).scrollTop()
  if(currentScroll>advOffsetTop){
    $("#topBtn").fadeIn(2000)
  }
  else
  {
    $("#topBtn").fadeOut(2000)
  }
})

$("#topBtn").click(function(){
  $("body,html").animate({scrollTop: 0},1000)
})

// 

// plugins
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:3,
    center:true,
  });
});

new WOW().init();