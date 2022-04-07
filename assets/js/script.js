




// title cards
var  topLeftCard = $("#c2"); 
var topMiddleCard = $("#text0");
var topRightCard = $("#text1");
var bottomLeftCard = $("#text4");
var bottomMiddleCard = $("#text3");
var bottomRightCard = $("#text5");


// a function that listens for what the user clicks on 
var titleCardListener = function () {
    topLeftCard.on("click", function () {
        console.log("Top Left Card Clicked");
    });
};




// then takes its value and gives it to the next js file