// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "Winner:";



$("#shoot").click(function() {
    var input = $("#input").val();
    $("#userChoice").text(input);
    var userChoice = input;
    var randomNumber = Math.random();
    
    if(randomNumber > .75) {
        $("#computerChoice").text("rock");
        var computerChoice = "rock";
    }else if(randomNumber <.75 && randomNumber >.50) {
        $("#computerChoice").text("paper");
        var computerChoice = "paper";
    }else{
        $("#computerChoice").text("scissors");
        var computerChoice = "scissors";
    }
    
 if (userChoice ==="rock" && computerChoice === "paper"||userChoice ==="paper" && computerChoice==="scissors"|| userChoice ==="scissors" && computerChoice ==="rock") {
     $("#result").text(winner+" computer");
 }else if(computerChoice ==="rock" && userChoice === "paper"||computerChoice ==="paper" && userChoice==="scissors"|| computerChoice ==="scissors" && userChoice ==="rock") {
    
     $("#result").text(winner+" user!");
 }else {
     $("#result").text("not valid input");
 }
 
});





// DOCUMENT READY FUNCTION BELOW

