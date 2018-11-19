// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "paper";
var winner = "";
var randomNumber = Math.random();


$("#shoot").click(function() {
    var input = $("#input").val();
    $(userChoice).text(input);
    
    if (userChoice == "rock" && computerChoice == "paper") {
        $(winner).text("computer wins");
    }else { 
        $(".results").text("user wins");
    }
});





// DOCUMENT READY FUNCTION BELOW

