$(function(){

  //Flag for managing open/close for sidebar nav
  var openNavFlag = false;

  //on clicking hamburger
  $('.hamburger--slider').click(function(){
    //check if already open
    if (openNavFlag) {
      //revert back to false
      openNavFlag = false;
      //trigger animation for hamburger and retract sidenav
      $('.hamburger--slider').removeClass("is-active");
      $('.overlay-nav-sidebar').css({"padding": "0", "width": "0"});
      return;
    }
    //if not open - open sidenav and trigger animation for hamburger
    $('.hamburger--slider').addClass("is-active");

    if ($(window).width() > 768) {
        $('.overlay-nav-sidebar').css({"padding": "1rem", "width": "40%"});
    } else {
      $('.overlay-nav-sidebar').css({"padding": "1rem", "width": "100%"});
    }

    //set open state to true
    openNavFlag = true;
  });


})
