$(document).ready(function(){


  var i = 1;

  var images = new Array
  images[0] = "title.jpg"
  images[1] = "tuckers.jpg";
  images[2] = "yorkiealone.jpg";
  images[3] = "Kellyandyorkiemeet.jpg";
  images[4]= "dance.jpg"


  $("#rightarrow").click(function(){
    $("#img").attr("src", images[i]);
    i++;
  });

  $("#leftarrow").click(function(){
    $("#img").attr("src", images[i]);
    i--;
  });


});
