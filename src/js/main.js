// add class for header
$(window).scroll(function() {
  if(window.innerWidth >= 768){
    var scroll = $(window).scrollTop();

    if (scroll >= 2) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  }
});
