function question1 (){
$('#question2,#question3,#question4').hide();}

function question2 (){
$('#question1,#question3,#question4').hide();
$('#question2').show();}

function question3 (){
$('#question1,#question2,#question4').hide();
$('#question3').show();}

function question4 (){
$('#question1,#question3,#question2').hide();
$('#question4').show();}

question1();

$('#money').click (function(){
question2();
})
$('#dollar').click (function(){
question3();
})

$('#coin').click (function(){
question4();
})

$('#rich').click (function(){
question1();
})

document.getElementById("question1").onsubmit=function() {
       variable1 = document.querySelector('input[name = "variable1"]:checked').value;

    var result = variable1;

	document.getElementById("score").innerHTML = result;

  scoring = [
  	   {score:"Sugar:",feedback:"Your diet is severely lacking nutrients. Let's make some changes. Sugar is very hard on your body, especially when you're lacking a decent fiber intake to help absorb the sugar floating around in your body. Learn more here: www.onegreenplanet.org/natural-health/why-a-high-sugar-diet-is-so-hard-on-your-body/", image: "images/sugar.jpg"},

  	   {score:"Vegetables:",feedback:"You're doing great. Natural foods like vegetables, fruits, and whole grains should be the main stables of your diet for a healthy lifestyle. Learn more about the benefits of a plant-based diet here: www.nutritionfacts.org/topics/plant-based-diets/", image: "images/veg.jpg"},

  	   {score:"Meat:",feedback:"While many people believe that eating meat is the only way to get enough protein in your diet to fuel your body, this is entirely untrue. In fact, most meat eaters get more than 1.5 times the optimal amount of protein according to forksoverknives.com. On a plant-based diet you'll get all the nutrients you need, along with some healthy weight-loss, reduced inflammation in your body, reduced risk of diabetes, and improve the health of our planet. Check out www.forksoverknives.com/7-things-that-happen-when-you-stop-eating-meat/#gs.SuaacLQ to see more.", image: "images/beef.jpg"},

  	   {score:"Starch:",feedback:"You don't necessarily need to cut these things out of your diet, but consider cutting down, switching to whole-grain options, and balancing your intake with an ample amount of fruits and vegetables.  While carbs are good for you and provide you with the energy you need, they don't have all of the vitamins you need to be healthy, and processed sugar and flour can easily be replaced with nutrient rich natural options like whole-grains, spelt flour, and coconut sugar. Read this article to learn more about a starch dominated diet: www.livestrong.com/article/443557-do-mushrooms-have-carbs/", image: "images/starch.jpg"},
  	   ];

for(i=0; i<scoring.length; i++) {
           if(result == scoring[i].score) {
           result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "' width='300'  />";
       	  }
       	  }

     document.getElementById("score2").innerHTML = result2;

     return false;
     }



  document.getElementById("question2").onsubmit=function() {
              variable2 = document.querySelector('input[name = "variable2"]:checked').value;

           var result = variable2;

  document.getElementById("score").innerHTML = result;

         scoring = [
         	   {score:"Yes:",feedback:"That's great. Once you switch to a plant-based diet, you'll read to look at the ingredient list for everything you buy. Sometimes the strangest products have animal by-products in them. If you're already checking, you're off to a great start.", image: "images/labels.jpg"},

         	   {score:"No:",feedback:"It may be time to make some changes. When you switch to a plant-based diet, you'll need to read the ingredient lists for all of the items you buy. Many foods will have unnecessary ingredients of milk, milk fat, casein (milk protein), and essentially every other dairy product that exists. While it's easier than ever now to find vegan foods at virtually all grocery stores, there are plenty of things that will make you wonder why anyone would want to buy those products knowing what's in them. Many products will make it easy to check for meat or dairy products by having those ingredients in bold. However, it's always better to all of the ingredients so that you know what you're putting in your body.", image: "images/labels.jpg"},
         	   ];

             for(i=0; i<scoring.length; i++) {
                 if(result == scoring[i].score) {
                 result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "' width='300'  />";
             	  }
             	  }

           document.getElementById("score2").innerHTML = result2;

           return false;
           }




  document.getElementById("question3").onsubmit=function() {
                    variable3 = document.querySelector('input[name = "variable3"]:checked').value;

                 var result = variable3;

  document.getElementById("score").innerHTML = result;

  scoring = [
             {score:"Physical health:",feedback:"Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rabidly than ever (www.psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495), water shortages are predicted as early as 2050 (www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (www.freefromharm.org/dairyfacts/). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earch habitable.", image: "images/health.jpg"},

             {score:"Greenhouse gases:",feedback:"Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rabidly than ever (www.psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495), water shortages are predicted as early as 2050 (www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (www.freefromharm.org/dairyfacts/). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earch habitable.", image: "images/gases.jpg"},

             {score:"Water supply:",feedback:"Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rabidly than ever (www.psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495), water shortages are predicted as early as 2050 (www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (www.freefromharm.org/dairyfacts/). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earch habitable.", image: "images/cowwater.jpg"},

             {score:"Animals:",feedback:"Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rabidly than ever (www.psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495), water shortages are predicted as early as 2050 (www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (www.freefromharm.org/dairyfacts/). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earch habitable.", image: "images/pigs.jpg"},
             ];

for(i=0; i<scoring.length; i++) {
                       if(result == scoring[i].score) {
                       result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "' width='300'  />";
                   	  }
                   	  }

document.getElementById("score2").innerHTML = result2;

return false;
            }



  document.getElementById("question4").onsubmit=function() {
                          variable4 = document.querySelector('input[name = "variable4"]:checked').value;

                       var result = variable4;

  document.getElementById("score").innerHTML = result;

  scoring = [

      {score:"Too hard:",feedback:"Many people are under the impression that it is too hard and time consuming to go vegan. What they don't know is that it's actually very simple (and cheap). This article explains why. www.nomeatathlete.com/being-vegan-is-easy", image: "images/vfood.jpeg"},

      {score:"Lack of nutrients:",feedback:"On the contrary. A plant-based diet is one of the best things you could do for your body. Getting enough protein is easy with nurtient rich foods like brown rice, beans, oats and nuts. Not to mention all the fiber-rich vegetables you'll be adding to your diet, which is often what most diets are deficient of. Learn more at www.onegreenplanet.org/natural-health/nutritional-concerns-about-a-plant-based-diet-the-myths-and-realities/"},

      {score:"Don't like the food:",feedback:"Just like anything, vegan food can be done poorly and (more commonly) wonderfully. There are vegan alternatives to almost every kind of food you can imagine. Ice cream, bacon, eggs, cheese, sour cream, creamers, you name it. Companys are accomadting vegans now more than ever! You can even find Almond Nog and dairy-free Bailey's for the holidays! Learn more: www.veganoutreach.org/subs/"},

      {score:"Won't make a difference:",feedback:"Although it may seem like the decision of one person is miniscule in contrast to all of the poeple on this earth, small changes really do make a difference. If you saved every quarter you ever got in your life, you'd be rich. Same goes for animals. According to Veganuary.com, the average person eats 7,000 animals in their lifetime. Not only will it help the wellbeing of animals by sparing these lives, but it will decrease the demand for meat in dairy products, which will help our planet by using less land, grain, and water. Check out this article to see where I got my information: www.veganuary.com/us/myths/but-surely-one-person-going-vegan-wont-make-a-difference/"},
      ];


  for(i=0; i<scoring.length; i++) {
      if(result == scoring[i].score) {
      result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "' width='300'  />";
  	  }
  	  }

document.getElementById("score2").innerHTML = result2;

return false;
}
