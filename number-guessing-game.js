 var prompt = require("prompt");
 prompt.start();
 var randomNumber = Math.floor(Math.random() * 100) + 1;
 var userGuess = "Guess a number between 1 and 100";
 console.log(randomNumber);

 function playGame() {
     
     var userGuesses = [];

     function promptNumber() {
         prompt.get([userGuess], function(err, guess) {
             userGuesses.push(guess[userGuess]);
             if (parseInt(guess[userGuess]) === randomNumber) {
                 console.log("Congrats, you guessed the number! Your guesses were: " + userGuesses);
                 return;
             }
             else if (userGuesses.length < 4) {
                 if (guess[userGuess] < randomNumber) {
                     console.log("Nope. Guess HIGHER")
                 }
                 if (guess[userGuess] > randomNumber) {
                     console.log("Nope. Guess LOWER")
                 }
                 promptNumber();
             }
             else {
                 console.log("You lose! The number was " + randomNumber + ". Your guesses were:" + userGuesses);
             }
         });
     }


     promptNumber();
 }


 //playGame();