// //prompt of which game to pick
// gameChoice = prompt("Would you like to play Guess Who or Memory?");
//   if (gameChoice === "Guess Who") {
//     location.assign(index.html);
//   } else if (gameChoice === "Memory") {
//     location.assign(memorygame)
//   }

//FINISHED --- alert with rules of how to play once content has loaded
document.addEventListener('DOMContentLoaded', function(){
  alert("Welcome to Guess Who: Artist Edition!")
       var howToPlay = document.getElementsByClassName("rules")[0];
      //  var guesses = 0;
       howToPlay.addEventListener('click', function(){
           alert("Thanks for playing Guess Who: Artist Edition!! \n\n Here are the rules for playing: \n As you may have noticed, you have already been dealt a mystery painting card. Your goal in this game is to guess who the artist of this painting is by eliminating all of the other artists. At the start of each round you will be prompted to guess an attribute. If your artist has this attribute, nothing will happen to the artists on the board but you will have an important piece of information! If your artist does not have this attribute, then all artists with such attribute will disappear. You will have 5 rounds in which to guess your artist, although if you know before 5 rounds are up feel free to click on your guess and see if you're right! Points are scored by how few turns it takes you to guess your artist plus an additional 10 pts if you guess correctly. After you've finished it is your opponents turn to play!")
         })

//MODEL --SET THE MYSTERY CARD -- PAINTINGS ARRAY
      var getMysteryCard = document.getElementsByClassName("button")[0];
      getMysteryCard.addEventListener('click', function(){
          var paintingsArray = ["images/paintings/avedon-boyd.png", "images/paintings/bacon-self-portrait.jpg",  "images/paintings/basquiat-trumpet.jpg", "images/paintings/bochner-syntax.jpg", "images/paintings/bonnard-decor.jpg",   "images/paintings/caravaggio-boy-lizard.jpg", "images/paintings/cassatt-bath.jpg", "images/paintings/chagall-paysage.jpg", "images/paintings/davinci-ermine.jpg", "images/paintings/dali-elephants.jpg", "images/paintings/defeo-rose.jpg", "images/paintings/degas-danceclass.png", "images/paintings/johns-racing.jpg", "images/paintings/kahlo-roots.jpg",  "images/paintings/klimt-kiss.jpg", "images/paintings/koons-doh.jpg", "images/paintings/kruger-battleground.jpg"]
//MODEL -- ARTISTS ARRAY
          var artists = [
              { name: "Richard Avedon",
                isAlive: false,
                gender: "male",
                artwork: paintingsArray[0],
                html: document.getElementsByClassName('avedon')
              },
              { name: "Francis Bacon",
                isAlive: false,
                gender: "male",
                artwork: paintingsArray[1],
                html: document.getElementsByClassName('bacon')
              },
              { name: "Jean-Michel Basquiat ",
                isAlive: false,
                gender: "male",
                artwork: paintingsArray[2],
                html: document.getElementsByClassName('basquiat')
              },
              { name: "Mel Bochner",
                isAlive: true,
                gender: "male",
                artwork: paintingsArray[3],
                html: document.getElementsByClassName('bochner')
              },
              { name: "Pierre Bonnard",
                isAlive: false,
                gender: "male",
                artwork: paintingsArray[4],
                html: document.getElementsByClassName('bonnard')
              }
            ]

//SHOWING A RANDOMLY SELECTED CARD & FINDING THE ACCURATE ARTIST ATTRIBUTES
          var mysteryCard = Math.trunc(Math.random()*paintingsArray.length);
          console.log(paintingsArray[mysteryCard]);
          document.getElementById("mystery-card").src = paintingsArray[mysteryCard];

          var mysteryArtist = paintingsArray.indexOf(paintingsArray[mysteryCard]);
          console.log(mysteryArtist);

//Now we start the game aspect, the attributes the user guesses should be compared to mysteryArtist and evaluated if true or false

});


//when the randomly selected image comes up, should be tied to
//OLD FUNCTION ONLY USE FOR REFERENCE:::::
//function for getting prompt data and seeing if attribute is == to any artists and logging in an array and displaying on the screen
//         var beginGuessing = document.getElementsByClassName("guessButton")[0];
//           beginGuessing.addEventListener('click', function(){
//             var guessesArray = [];
//                         var newAtt = (prompt("Is my artist:  "));
//                         guessesArray.push(newAtt);
//                         console.log(Object.prototype.hasOwnProperty.call(attributeSearch, guessesArray));
//                 console.log(newAtt); // checking if variable is stored
//                 console.log(guessesArray); //checking if variable is in array
//         //working up to here and -- if (Object.prototype.hasOwnProperty.call(attributeSearch, guessesArray) === true) works
//           if (Object.prototype.hasOwnProperty.call(attributeSearch, guessesArray) === true) {
//               var node = document.getElementById('displayResults');
//               var guess = document.createTextNode('the artists with this trait are: ' + attributeSearch[newAtt]);
//                   node.appendChild(guess);
//               console.log(node);
//               console.log(guess);
//           } else {
//               alert('guess again');
//           }
//       });





//THE END OF THE DOM CONTENT LOADED FUNCTION
});
