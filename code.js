$(document).ready(function (){
  $("#tech-link").click(function (){
    $('html, body').animate({
      scrollTop: $("#technologies").offset().top
      }, 500);
           });
});

$(document).ready(function (){
  $("#contact-link").click(function (){
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
        }, 1000);
    });
});
