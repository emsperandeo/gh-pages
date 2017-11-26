document.getElementById("q1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);

    var result = variable;

	document.getElementById("score").innerHTML = result;

  scoring = [
  	   {score:0,feedback:"Your diet is severely lacking nutrients. Let's make some changes.", image: "images/vfood.jpeg"},
  	   {score:10,feedback:"Eat less sugar.", image: "images/vfood.jpeg"},
  	   {score:20,feedback:"Drink more WATER.", image: "images/vfood.jpeg"},
  	   {score:30,feedback:"You're getting there. With a few diet adjusts you'll be golden.", image: "images/vfood.jpeg"},
  	   {score:40,feedback:"Try to spread your exceptionally healthy habits to friends and family!", image: "images/vfood.jpeg"}
  	   ];

  for(i=0; i<scoring.length; i++) {
      if(result == scoring[i].score) {
      result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "' width='300'  />";
  	  }
  	  }

document.getElementById("score2").innerHTML = result2;

return false;

}
