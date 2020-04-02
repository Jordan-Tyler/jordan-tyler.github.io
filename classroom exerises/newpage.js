var stars=0;
$(document).ready(function(){

  $(".scene").hide();
  $("#s1").show();

  $("#optionone").click(function(){
    $("#s1").hide();
    $("#s2").show();
    stars = stars + 1;
    $("#star").html(stars);
  });

  $("#optiontwo").click(function(){
    $("#s1").hide();
    $("#s3").show();
    $("#star").html(stars);
  });

});
