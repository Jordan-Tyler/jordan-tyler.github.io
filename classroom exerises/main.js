$(document).ready(function(){
  var allPs = $("p");
  console.log(allPs);

  var classp = $(".paragraph1");
  console.log(classp);

  var idp = $("#ptag");
  console.log(idp);


  allPs.html ("hi this is my new text");
  idp.html ("this is another text that was dynamically generated");

  idp.click(function(){
    $("img").attr("src", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg");
  });

  $(".paragraph1").click(function (){
    $("img").css("opacity", "0.5")
  });
  
});
