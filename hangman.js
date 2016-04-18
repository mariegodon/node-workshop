 var prompt = require("prompt");
 prompt.start();

 var guessLetter = "Guess a letter";

 function randomWord() {

     var words = [
         "sunflowers",
         "dog",
         "tea",
         "brother",
         "chairs",
         "computer"
     ];

     var randomNumber = Math.floor(Math.random() * (words.length));

     return words[randomNumber];
 }

 var drawing = [
     "",
     " _________     \n",
     " _________     \n|         |    \n",
     " _________     \n|         |    \n|         0    \n",
     " _________     \n|         |    \n|         0    \n|        /|\\  \n",
     " _________     \n|         |    \n|         0    \n|        /|\\  \n|        / \\  \n",
     " _________     \n|         |    \n|         0    \n|        /|\\  \n|        / \\  \n|              \n",
     " _________     \n|         |    \n|         0    \n|        /|\\  \n|        / \\  \n|              \n|              \n"
 ]

 function playGame() {
     var word = randomWord();
     var guessArray = new Array(word.length);
     console.log(word);
     console.log(guessArray);
     var drawingCounter = 0;
     var correctLetterCounter = 0;
     var indexOfLetter = -1;

     function guessLetter() {
         prompt.get([guessLetter], function(err, guess) {
             if (drawingCounter < 8) {
                 if (word.split("").indexOf(guess.guessLetter) === -1) {
                     console.log("Wrong!");
                     drawingCounter++;
                     console.log(drawing[drawingCounter]);
                     console.log(guessArray);
                 }
                 else {
                     for (var i = 0; i < word.length; i++) {
                         indexOfLetter = word.split("").indexOf(guess.guessLetter, i);
                         if (indexOfLetter === -1) {
                             i = word.length;
                         }
                         else {
                             if (typeof guessArray[indexOfLetter] !== "string") {
                                 correctLetterCounter++;
                             }
                             guessArray[indexOfLetter] = guess.guessLetter;

                             i = indexOfLetter;
                         }
                     }
                     console.log(drawing[drawingCounter]);
                     console.log(guessArray);

                     if (correctLetterCounter === word.length) {
                         console.log("You guessed the word!");
                         return;
                     }
                 }
                 guessLetter();
             }
             else {
                 console.log("You hanged the little man!");
                 return;
             }
         });
     }


     guessLetter();
 }

 playGame()