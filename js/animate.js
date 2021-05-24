$(function() {
//Defining variables for the top of the main image and top of the transforming text
var topPage = $('.img-container').offset().top, didScroll = false;
var topDist = $('.title-container').offset().top, didScroll = false;
// bool value for managing transformationsd
var titleTransform = false;

//window scroll event set didscroll to true
$(window).scroll(function() {
    didScroll = true;
});

//using jquery setinternal to avoid excessive calls
setInterval(function() {
    if ( didScroll ) {
        didScroll = false;
        //check if top of window is set distance for transformation to occur
        if ($(window).scrollTop() >= topDist - 280 && titleTransform == false) {
          $(".title-style-before").animate({right: '100px', opacity : 0}, 280);
          $(".title-style-after").animate({left: '100px', opacity : 0}, 280);
          $(".title-style-layer").animate({bottom: '100px', opacity : 0}, 280);
          //
          titleTransform = true;
        }
        //Check if the top of screen is less than the main image and then transform items back
        else if (titleTransform && $(window).scrollTop() < topDist) {
          titleTransform = false;
          $(".title-style-before").animate({right: '0px', opacity : 1}, 280);
          $(".title-style-after").animate({left: '0px', opacity : 1}, 280);
          $(".title-style-layer").animate({bottom: '0px', opacity : 1}, 280);
        }
    }
}, 600);


// check for user hovering over call to action button
$('.btn-action').hover(function(){
  //if true display arrow
  $('.btn-icon').addClass("btn-icon-show", 100, "linear");
  //chain function
}, function(){
  //remove arrow when leaving
  $('.btn-icon').removeClass("btn-icon-show", 100, "linear");
  $('.btn-icon').css("display", "none");
});



});
