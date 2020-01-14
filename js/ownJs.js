$(document).ready(function(){
    $("#animateButton").click(function(){
      var div = $("#animationBlock");  
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
    });
  });