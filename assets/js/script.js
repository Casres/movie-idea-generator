




// title cards
var topLeftCard = $("#text2"); 
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

    topMiddleCard.on("click", function () {
        console.log("Top Middle Card Clicked");
    });

    topRightCard.on("click", function () {
        console.log("Top right Card Clicked");
    });

    bottomLeftCard.on("click", function () {
        console.log("bottom Left Card Clicked");
    });

    bottomMiddleCard.on("click", function () {
        console.log("Bottom Middle Card");
    })

    bottomRightCard.on("click", function () {
        console.log("bottom right Card Clicked");
    });

};

titleCardListener();

// then takes its value and gives it to the next js file