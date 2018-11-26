// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = Math.random();


$("#shoot").click(function() {
    var input = $("#input").val();
    $("#userChoice").text(input);
    var userChoice = input;
    
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
     var winner = "computer wins!"
     $("#result").text(winner);
 }else if(computerChoice ==="rock" && userChoice === "paper"||computerChoice ==="paper" && userChoice==="scissors"|| computerChoice ==="scissors" && userChoice ==="rock") {
    var winner = "user wins!";
     $("#result").text(winner);
 }else {
     $("#result").text("not valid input");
 }
 
});





// DOCUMENT READY FUNCTION BELOW

