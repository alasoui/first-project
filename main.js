$(document).ready(function(){
  $(".make").hide()
  $("#learncous").click(function(){
  	$(".food").hide();
  	$("#makecous").show("slow");
  });
  $("#learnojja").click(function(){
  	$(".food").hide();
  	$("#makeojja").show("slow");
  });
  	$("#learnlab").click(function(){
  	$(".food").hide();
  	$("#makelab").show("slow");
  });
  	$("#learnbrik").click(function(){
  	$(".food").hide();
  	$("#makebrik").show("slow");
  });

    $("#home1").click(function(){
  	$(".food").show("slow");
  	$(".make").hide();
  });
    $("#home2").click(function(){
  	$(".food").show("slow");
  	$(".make").hide();
  });
    $("#home3").click(function(){
  	$(".food").show("slow");
  	$(".make").hide();
  });
    $("#home4").click(function(){
  	$(".food").show("slow");
  	$(".make").hide();
  });


    $("#submit").click(function(){
      var text = $("#recipe").val();
      var pic = $("#picture").val()
      var desc = $("#describe").val();
      var newdiv = $(`<div class="food"></div>`)
      
     $(newdiv).append($(`<h2></h2>`).text(text))
     $(newdiv).append($(`<img src="${$("#picture").val()}">`))
     $(newdiv).append($(`<p></p>`).text(desc))
     $(newdiv).append($(`<img src="${$("#picture").val()}">`))
      $("body").append(newdiv)
    })

});