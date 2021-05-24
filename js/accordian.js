$(function() {

// Accordian Sliders
$('.focus-accordian-toggle').click(function(){
  //get element clicked
  let dropdown = $(this);
  let dropdownId = $(this).attr('id');

  //Check if current element is open
  if (dropdown.hasClass('acc-toggled')) {
    //if true remove class and hide text
    dropdown.toggleClass('acc-toggled')
    dropdown.next().slideToggle(500);
  //if current element not open
  } else {
    //iterate through outside elements and close open elements
    $('.focus-accordian-toggle').each(function(index){
      if ($(this).hasClass('acc-toggled')) {
        $(this).toggleClass('acc-toggled');
        $(this).next().slideToggle(500);
      }
    });
    //open clicked element
    dropdown.toggleClass('acc-toggled')
    dropdown.next().slideToggle(500);

    //chanhe the image dependant on the button clicked
    switch(dropdownId) {
      case "acc-performance":
      //fade out old imagge
        $('#img-acc').fadeOut(function(){
          //change to new image and fade in
            $('#img-acc').attr("src", "img/e-gold-drive.jpg").fadeIn();
        });
        break;
      case "acc-design":
        $('#img-acc').fadeOut(function(){
          $('#img-acc').attr("src", "img/e-golf-design.jpg").fadeIn();
        });
        break;
      case "acc-driving-xp":
        $('#img-acc').fadeOut(function(){
          $('#img-acc').attr("src", "img/e-golf-interior.jpg").fadeIn();
        });
        break;
    }

  }

});

});
