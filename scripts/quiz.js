function question1 (){
$("#question2,#question3,#question4, #question5").hide();}

function question2 (){
$("#question1,#question3,#question4, #question5").hide();
$("#question2").show();}

function question3 (){
$("#question1,#question2,#question4, #question5").hide();
$("#question3").show();}

function question4 (){
$("#question1,#question3,#question2, #question5").hide();
$("#question4").show();}

function question5 (){
$("#question1,#question2,#question3, #question4").hide();
$("#question5").show();}

$("#next1").hide();
$("#next2").hide();
$("#next3").hide();
$("#next4").hide();

question1();

$('#money').click (function(){
$('#next1').show();
})
$('#next1').click ( function(){

  question2();
});

$('#dollar').click (function(){
$('#next2').show();
})
$('#next2').click ( function(){

  question3();
});

$('#coin').click (function(){
$('#next3').show();
})
$('#next3').click ( function(){

  question4();
});

$('#rich').click (function(){
$('#next4').show();
})
$('#next4').click ( function(){

  question5();
});

$('#next5').click (function(){
$('#question5').show();
});

//question1
var sugar = "<p>Your diet is severely lacking nutrients. Let's make some changes. Sugar is very hard on your body, especially when you're lacking a decent fiber intake to help absorb the sugar floating around in your body. Learn more <a href='http://www.onegreenplanet.org/natural-health/why-a-high-sugar-diet-is-so-hard-on-your-body/'>here</a>.</p>";

var vegetables = "<p>You're doing great. Natural foods like vegetables, fruits, and whole grains should be the main stables of your diet for a healthy lifestyle. Learn more about the benefits of a <a href='http://www.nutritionfacts.org/topics/plant-based-diets/'>plant-based</a> diet.</p>";

var meat = "<p>While many people believe that eating meat is the only way to get enough protein in your diet to fuel your body, this is entirely untrue. In fact, most meat eaters get more than 1.5 times the optimal amount of protein according to forksoverknives.com. On a plant-based diet you'll get all the nutrients you need, along with some healthy weight-loss, reduced inflammation in your body, reduced risk of diabetes, and improve the health of our planet. Check out <a href='http://www.forksoverknives.com/7-things-that-happen-when-you-stop-eating-meat/#gs.SuaacLQ'>this article</a> to see more.</p>";

var starch = "<p>You don't necessarily need to cut these things out of your diet, but consider cutting down, switching to whole-grain options, and balancing your intake with an ample amount of fruits and vegetables.  While carbs are good for you and provide you with the energy you need, they don't have all of the vitamins you need to be healthy, and processed sugar and flour can easily be replaced with nutrient rich natural options like whole-grains, spelt flour, and coconut sugar. Read <a href='http://www.livestrong.com/article/443557-do-mushrooms-have-carbs/'>this</a> article to learn more about a starch dominated diet.</p>";

//question3

var health = "<p>Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rapidly than ever (<a href='https://psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495'>source</a>), water shortages are predicted as early as 2050 (<a href='https://www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/#gs.CTJCd_w'>learn more</a>), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (<a href='https://freefromharm.org/dairyfacts/'>learn more</a>). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earth habitable.</p>";


var gases = "<p>Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rapidly than ever (<a href='https://psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495'>source</a>), water shortages are predicted as early as 2050 (<a href='https://www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/#gs.CTJCd_w'>learn more</a>), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (<a href='https://freefromharm.org/dairyfacts/'>learn more</a>). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earth habitable.</p>";

var water = "<p>Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rapidly than ever (<a href='https://psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495'>source</a>), water shortages are predicted as early as 2050 (<a href='https://www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/#gs.CTJCd_w'>learn more</a>), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (<a href='https://freefromharm.org/dairyfacts/'>learn more</a>). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earth habitable.</p>";

var animal = "<p>Surpisingly enough, all four of these options are affected by your dietary choices. Your physical health will take a big hit with excessive meat and starch intake, greenhouse gases are increasing more rapidly than ever (<a href='https://psmag.com/environment/gluttony-global-warming-eating-warmer-planet-96495'>source</a>), water shortages are predicted as early as 2050 (<a href='https://www.forksoverknives.com/freshwater-abuse-and-loss-where-is-it-all-going/#gs.CTJCd_w'>learn more</a>), and your compassion for animals is sacrificed at the price of a burger. Animals are tortured, abused, and then murdered. There is no such thing as humane dairy or meat production (<a href='https://freefromharm.org/dairyfacts/'>learn more</a>). It's time to stop ignoring the fact that the food we eat is contributing to global warming, mass murder, and illness. These are choices we make, and by making such a simple decision to change what we put in our bodies, we can save the lives of animals and our future generations. Let's keep the earth habitable.</p>";

//question4

var hard = "<p>Many people are under the impression that it is too hard and time consuming to go vegan. What they don't know is that it's actually very simple (and cheap). This article explains <a href='http://www.nomeatathlete.com/being-vegan-is-easy'>why</a>.</p>";

var nutrients = "<p>On the contrary. A plant-based diet is one of the best things you could do for your body. Getting enough protein is easy with nurtient rich foods like brown rice, beans, oats and nuts. Not to mention all the fiber-rich vegetables you'll be adding to your diet, which is often what most diets are deficient of. Learn <a href= 'http://www.onegreenplanet.org/natural-health/nutritional-concerns-about-a-plant-based-diet-the-myths-and-realities/'>here</a>.</p>";

var food = "<p>Just like anything, vegan food can be done poorly and (more commonly) wonderfully. There are vegan alternatives to almost every kind of food you can imagine. Ice cream, bacon, eggs, cheese, sour cream, creamers, you name it. Companys are accomadting vegans now more than ever! You can even find Almond Nog and dairy-free Bailey's for the holidays! Learn more <a href='http://www.veganoutreach.org/subs/'>here</a></p>";

var difference = "<p>Although it may seem like the decision of one person is miniscule in contrast to all of the poeple on this earth, small changes really do make a difference. If you saved every quarter you ever got in your life, you'd be rich. Same goes for animals. According to Veganuary.com, the average person eats 7,000 animals in their lifetime. Not only will it help the wellbeing of animals by sparing these lives, but it will decrease the demand for meat in dairy products, which will help our planet by using less land, grain, and water. Check out this article to see where I got my <a href='http://www.veganuary.com/us/myths/but-surely-one-person-going-vegan-wont-make-a-difference/'>information</a></p>";


document.getElementById("question1").onsubmit=function() {
       variable1 = document.querySelector("input[name = 'variable1']:checked").value;

    var result = variable1;

	document.getElementById("score").innerHTML = result;

  scoring = [
  	   {score:"Sugar:",feedback: sugar, image: "images/sugar.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File%3ASugar_2xmacro.jpg'>Wikicommons</a>"},

  	   {score:"Vegetables:",feedback: vegetables, image: "images/veg.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:2014_Prowincja_Szirak,_Giumri,_Owoce_i_warzywa.jpg'>Wikicommons</a>"},

  	   {score:"Meat:",feedback: meat, image: "images/beef.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:Beef_Burger_In_Kota_Kinabalu,_Malaysia.jpg'>Wikicommons</a>"},

  	   {score:"Starch:",feedback: starch, image: "images/starch.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:Various_grains_edit2.jpg'>Wikicommons</a>"},
  	   ];

for(i=0; i<scoring.length; i++) {
  if(result == scoring[i].score) {
  result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "'  /> <p>" + scoring[i].caption + " (" + scoring[i].imgsource + ")</p>";
 }
 }

     document.getElementById("score2").innerHTML = result2;

     return false;
     }



  document.getElementById("question2").onsubmit=function() {
              variable2 = document.querySelector("input[name = 'variable2']:checked").value;


           var result = variable2;

  document.getElementById("score").innerHTML = result;

         scoring = [
         	   {score:"Yes:",feedback:"<p>That's great. Once you switch to a plant-based diet, you'll read to look at the ingredient list for everything you buy. Sometimes the strangest products have animal by-products in them. If you're already checking, you're off to a great start.</p>", image: "images/labels.jpg", caption: "via", imgsource: "<a href='https://www.flickr.com/photos/yeknom02/4297352054/in/photolist-7xK43N-ygxFoL-9gPPVB-cMEkr5-JaRNwk-a738jJ-7yLaeW-bB9RMj-J8yW6A-6hr1K4-4QZrJo-DFXZTE-X5Q41f-rrLpY7-8nRWDc-dzFD6h-5QaiWj-5a41jp-qdnqd6-6frGjM-hSJzRZ-JLarQR-j5dkkX-4PRxYM-7e4G3v-2jS1Z-8aLyuV-RyfSbj-7igUg5-2y9Vu-7DSEoC-71xGpy-Cy6Dcf-ajSQW6-dzFDeW-7FN5cr-gtMFf7-rzGyHw-9op9vp-at7Vy-67Y9tx-6jyjp7-dpLhDY-87SSXe-683kRd-bBDxun-opXrUZ-5Ckc6a-7AgVWM-cYsYxC'>Flickr</a>"},

         	   {score:"No:",feedback:"<p>It may be time to make some changes. When you switch to a plant-based diet, you'll need to read the ingredient lists for all of the items you buy. Many foods will have unnecessary ingredients of milk, milk fat, casein (milk protein), and essentially every other dairy product that exists. While it's easier than ever now to find vegan foods at virtually all grocery stores, there are plenty of things that will make you wonder why anyone would want to buy those products knowing what's in them. Many products will make it easy to check for meat or dairy products by having those ingredients in bold. However, it's always better to all of the ingredients so that you know what you're putting in your body.</p>", image: "images/labels.jpg", caption: "via", imgsource: "<a href='https://www.flickr.com/photos/yeknom02/4297352054/in/photolist-7xK43N-ygxFoL-9gPPVB-cMEkr5-JaRNwk-a738jJ-7yLaeW-bB9RMj-J8yW6A-6hr1K4-4QZrJo-DFXZTE-X5Q41f-rrLpY7-8nRWDc-dzFD6h-5QaiWj-5a41jp-qdnqd6-6frGjM-hSJzRZ-JLarQR-j5dkkX-4PRxYM-7e4G3v-2jS1Z-8aLyuV-RyfSbj-7igUg5-2y9Vu-7DSEoC-71xGpy-Cy6Dcf-ajSQW6-dzFDeW-7FN5cr-gtMFf7-rzGyHw-9op9vp-at7Vy-67Y9tx-6jyjp7-dpLhDY-87SSXe-683kRd-bBDxun-opXrUZ-5Ckc6a-7AgVWM-cYsYxC'>Flickr</a>"},
         	   ];

             for(i=0; i<scoring.length; i++) {
               if(result == scoring[i].score) {
               result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "'  /> <p>" + scoring[i].caption + " (" + scoring[i].imgsource + ")</p>";
              }
              }

           document.getElementById("score2").innerHTML = result2;

           return false;
           }




  document.getElementById("question3").onsubmit=function() {
                    variable3 = document.querySelector("input[name = 'variable3']:checked").value;

                 var result = variable3;

  document.getElementById("score").innerHTML = result;

  scoring = [
             {score:"Physical health:",feedback:health, image: "images/health.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:Social_Determinants_of_Health_Infoviz.jpg'>Wikicommons</a>"},

             {score:"Greenhouse gases:",feedback: gases, image: "images/gases.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:Instrumental_Temperature_Record.png'>Wikicommons</a>"},

             {score:"Water supply:",feedback: water, image: "images/cowwater.jpg", caption: "via", imgsource: "<a href='https://commons.wikimedia.org/wiki/File:Trough_time_-_by_Dan_Taylor.jpg'>Wikicommons</a>"},

             {score:"Animals:",feedback: animals, image: "images/sheep.jpg", caption: "via", imgsource: "<a href='https://www.flickr.com/photos/82667478@N07/34396258060/'>Wikicommons</a>"},
             ];

for(i=0; i<scoring.length; i++) {
                       if(result == scoring[i].score) {
                       result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "'  /> <p>" + scoring[i].caption + " (" + scoring[i].imgsource + ")</p>";
                   	  }
                   	  }

document.getElementById("score2").innerHTML = result2;

return false;
            }


  document.getElementById("question4").onsubmit=function() {
                          variable4 = document.querySelector("input[name = 'variable4']:checked").value;

                       var result = variable4;

  document.getElementById("score").innerHTML = result;

  scoring = [

      {score:"Too hard:",feedback: hard},

      {score:"Lack of nutrients:",feedback: nutrients},

      {score:"Don't like the food:",feedback: food},

      {score:"Won't make a difference:",feedback: difference},
      ];


  for(i=0; i<scoring.length; i++) {
      if(result == scoring[i].score) {
      result2 = scoring[i].feedback + "<br /><img src='" + scoring[i].image + "'  />";
  	  }
  	  }

document.getElementById("score2").innerHTML = result2;

return false;
}
