//MODEL - ARRAY OF PAINTINGS THAT BECOME THE RANDOM CARD
var paintingsArray = ["images/paintings/avedon-boyd.png",  "images/paintings/basquiat-trumpet.jpg", "images/paintings/bochner-syntax.jpg", "images/paintings/bonnard-decor.jpg", "images/paintings/caravaggio-boy-lizard.jpg", "images/paintings/cassatt-bath.jpg", "images/paintings/chagall-paysage.jpg", "images/paintings/creed-ilikethings.jpg", "images/paintings/dali-elephants.jpg", "images/paintings/davinci-ermine.jpg", "images/paintings/defeo-rose.jpg", "images/paintings/degas-danceclass.png", "images/paintings/johns-racing.jpg", "images/paintings/kahlo-roots.jpg", "images/paintings/klimt-kiss.jpg", "images/paintings/kruger-battleground.jpg", "images/paintings/magritte-golconda.jpg", "images/paintings/modigliani-portrait.jpg", "images/paintings/monet-waterlillies.jpg", "images/paintings/nevelson-cathedral.jpg", "images/paintings/picasso-desmoiselles.jpg", "images/paintings/rothko-yellowpurple.jpg", "images/paintings/vangogh-iris.jpg", "images/paintings/weems-manet.jpg"]

//MODEL -- ARTISTS ARRAY w/ DATA
var artists = [
    { name: "Richard Avedon",
      isAlive: false,
      gender: "male",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.avedon',
      artwork: paintingsArray[0],
      html: document.getElementsByClassName('avedon')
    },
    { name: "Jean-Michel Basquiat ",
      isAlive: false,
      gender: "male",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.basquiat',
      artwork: paintingsArray[1],
      html: document.getElementsByClassName('basquiat')
    },
    { name: "Mel Bochner",
      isAlive: true,
      gender: "male",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.bochner',
      artwork: paintingsArray[2],
      html: document.getElementsByClassName('bochner')
    },
    { name: "Pierre Bonnard",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: true,
      hair: true,
      decade: "19th century",
      bearded: false,
      stillValid: true,
      class: '.bonnard',
      artwork: paintingsArray[3],
      html: document.getElementsByClassName('bonnard')
    },
    { name: "Michelangelo Merisi da Caravaggio",
      isAlive: false,
      gender: "male",
      nationality: "italian",
      facialHair: true,
      hair: true,
      decade: "16th century",
      bearded: false,
      stillValid: true,
      class: '.caravaggio',
      artwork: paintingsArray[4],
      html: document.getElementsByClassName('caravaggio')
    },
    { name: "Mary Cassatt",
      isAlive: false,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "19th century",
      bearded: false,
      stillValid: true,
      class: '.cassatt',
      artwork: paintingsArray[5],
      html: document.getElementsByClassName('cassatt')
    },
    { name: "Marc Chagall",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.chagall',
      artwork: paintingsArray[6],
      html: document.getElementsByClassName('chagall')
    },
    { name: "Martin Creed",
      isAlive: true,
      gender: "male",
      nationality: "british",
      facialHair: false,
      hair: false,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.creed',
      artwork: paintingsArray[7],
      html: document.getElementsByClassName('creed')
    },
    { name: "Salvador Dali",
      isAlive: false,
      gender: "male",
      nationality: "spanish",
      facialHair: true,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.dali',
      artwork: paintingsArray[8],
      html: document.getElementsByClassName('dali')
    },
    { name: "Leonardo da Vinci",
      isAlive: false,
      gender: "male",
      nationality: "italian",
      facialHair: true,
      hair: true,
      decade: "15th century",
      bearded: true,
      stillValid: true,
      class: '.davinci',
      artwork: paintingsArray[9],
      html: document.getElementsByClassName('davinci')
    },
    { name: "Jay DeFeo",
      isAlive: false,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.defeo',
      artwork: paintingsArray[10],
      html: document.getElementsByClassName('defeo')
    },
    { name: "Edgar Degas",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: true,
      hair: true,
      decade: "19th century",
      bearded: true,
      stillValid: true,
      class: '.degas',
      artwork: paintingsArray[11],
      html: document.getElementsByClassName('degas')
    },
    { name: "Jasper Johns",
      isAlive: true,
      gender: "male",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.johns',
      artwork: paintingsArray[12],
      html: document.getElementsByClassName('johns')
    },
    { name: "Frieda Kahlo",
      isAlive: false,
      gender: "female",
      nationality: "mexican",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.kahlo',
      artwork: paintingsArray[13],
      html: document.getElementsByClassName('kahlo')
    },
    { name: "Gustav Klimt",
      isAlive: false,
      gender: "male",
      nationality: "austrian",
      facialHair: true,
      hair: false,
      decade: "19th century",
      bearded: true,
      stillValid: true,
      class: '.klimt',
      artwork: paintingsArray[14],
      html: document.getElementsByClassName('klimt')
    },
    { name: "Barbara Kruger",
      isAlive: true,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "21st century",
      bearded: false,
      stillValid: true,
      class: '.kruger',
      artwork: paintingsArray[15],
      html: document.getElementsByClassName('kruger')
    },
    { name: "Rene Magritte",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      class: '.magritte',
      artwork: paintingsArray[16],
      html: document.getElementsByClassName('magritte')
    },
    { name: "Amedeo Modigliani",
      isAlive: false,
      gender: "male",
      nationality: "italian",
      facialHair: false,
      hair: true,
      decade: "19th century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[17],
      class: '.modigliani',
      html: document.getElementsByClassName('modigliani')
    },
    { name: "Claude Monet",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: true,
      hair: false,
      decade: "19th century",
      bearded: true,
      stillValid: true,
      artwork: paintingsArray[18],
      class: '.monet',
      html: document.getElementsByClassName('monet')
    },
    { name: "Louise Nevelson",
      isAlive: false,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[19],
      class: '.nevelson',
      html: document.getElementsByClassName('nevelson')
    },
    { name: "Georgia O'Keeffe",
      isAlive: false,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[20],
      class: '.o-keeffe',
      html: document.getElementsByClassName('o-keeffe')
    },
    { name: "Pablo Picasso",
      isAlive: false,
      gender: "male",
      nationality: "spanish",
      facialHair: false,
      hair: false,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[21],
      class: '.picasso',
      html: document.getElementsByClassName('picasso')
    },
    { name: "Mark Rothko",
      isAlive: false,
      gender: "male",
      nationality: "american",
      facialHair: true,
      hair: false,
      decade: "20th century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[22],
      class: '.rothko',
      html: document.getElementsByClassName('rothko')
    },
    { name: "Vincent van Gogh",
      isAlive: false,
      gender: "male",
      nationality: "french",
      facialHair: true,
      hair: true,
      decade: "19th century",
      bearded: true,
      stillValid: true,
      artwork: paintingsArray[23],
      class: '.van-gogh',
      html: document.getElementsByClassName('van-gogh')
    },
    { name: "Carrie Mae Weems",
      isAlive: true,
      gender: "female",
      nationality: "american",
      facialHair: false,
      hair: true,
      decade: "21st century",
      bearded: false,
      stillValid: true,
      artwork: paintingsArray[24],
      class: '.weems',
      html: document.getElementsByClassName('weems')
    },
  ]
//COMPLETE - MODEL --- alert with rules of how to play once content has loaded
document.addEventListener('DOMContentLoaded', function(){
  alert("Welcome to Guess Who: Artist Edition!")
       var howToPlay = document.getElementsByClassName("rules")[0];
       howToPlay.addEventListener('click', function(){
           alert("Thanks for playing Guess Who: Artist Edition!! \n\n Here are the rules for playing: \n As you may have noticed, you have already been dealt a mystery painting card. Your goal in this game is to guess who the artist of this painting is by eliminating all of the other artists. At the start of each round you will be prompted to guess an attribute. If your artist has this attribute, nothing will happen to the artists on the board but you will have an important piece of information! If your artist does not have this attribute, then all artists with such attribute will disappear. You will have 5 rounds in which to guess your artist, although if you know before 5 rounds are up feel free to click on your guess and see if you're right! Points are scored by how few turns it takes you to guess your artist plus an additional 10 pts if you guess correctly. After you've finished it is your opponents turn to play!")
         });
//MYSTERY CARD FUNCTION --  GET & DISPLAY THE MYSTERY CARD from PAINTINGS ARRAY
//what i just did is move all of the variables out of the function into the global scope; the console logs are printing the arrays etc. before the card is dealt but that's not affecting the user so irrelevant to game play
      var guesses = 0;
      var mysteryArtist = "";
      var mysteryCard = "img src=images/default.jpg";
      var getMysteryCard = document.getElementsByClassName("button")[0];
        getMysteryCard.addEventListener('click', function(){
               mysteryCard = Math.trunc(Math.random()*paintingsArray.length);
                console.log(paintingsArray[mysteryCard]);
                  document.getElementById("mystery-card").src = paintingsArray[mysteryCard];
                  console.log(mysteryCard);
              mysteryArtist = paintingsArray.indexOf(paintingsArray[mysteryCard]);
              console.log(mysteryArtist);
            });
//NO-LONGER VALID ARTISTS
    var grayArtists = [];


//GAMEBEGIN FUNCTION - Now we start the game aspect, the attributes the user guesses should be compared to mysteryArtist and evaluated if true or false

        var beginGuessing = document.getElementsByClassName("guessButton")[0];
          beginGuessing.addEventListener('click', function(){
            if (guesses < 5) {
              guesses ++;
            } else if (guesses == 5)  {
              alert('Hopefully you know who your artist is now! Please use your last turn to guess the artist and win!')
            } else {
              alert(`Game Over! That was 5 rounds -- the artist of your painting was ${paintingsArray[mysteryArtist]}. Now hand it over for player 2!`);
            }
              var userInput = (prompt("Is my artist:  "));
              console.log(userInput);
              console.log(artists);
//large if statement function begins:
              if (userInput == 'alive' || userInput == 'male'|| userInput == 'female' || userInput == 'dead' || userInput == 'moustache' || userInput == 'cool hair' || userInput == '19th century' || userInput == '20th century' || userInput == '15th century' || userInput == ' 16th century' || userInput == 'beard' || userInput == 'american' || userInput == artists[mysteryArtist].class) {
                    if (userInput == 'alive' && artists[mysteryArtist].isAlive == true) {
/*gray dead*/                   var node = document.getElementById('displayResults');
                                var guess = document.createTextNode('you got a live one! all dead artists will be removed from the board');
                                    node.appendChild(guess);
                                // console.log(node);
                                // console.log(guess);
                                for (i=0; i < artists.length; i++) {
                                  if (artists[i].isAlive !== true) {
                                      artists[i].stillValid = false;
                                      grayArtists.push(artists[i].html)
                                      console.log(grayArtists);
                                    console.log(artists)
                                  } else { console.log('alive'); }};
                       }
                       else if (userInput == artists[mysteryArtist].class) {
                          alert("YES! You win!!!")
                           var node = document.getElementById('displayResults');
                           var guess = document.createTextNode(`That is correct! Your artist is ${userInput}. You have won!`);
                           node.appendChild(guess);
}
                         else if (userInput == 'male' && artists[mysteryArtist].gender == 'male') {
/*gray female*/                var node = document.getElementById('displayResults');
                               var guess = document.createTextNode('Great guess - your artist is male. Bye bye lady artists!');
                                      node.appendChild(guess);
                                          for (i=0; i < artists.length; i++) {
                                              if (artists[i].gender == 'female') {
                                                  artists[i].stillValid = false;
                                                  grayArtists.push(artists[i].html)
                                                  console.log(grayArtists);
                                                // console.log(artists)
                                              } else { console.log('male'); }};
                        } else if (userInput == 'female' && artists[mysteryArtist].gender == 'female') {
/*gray male*/                  var node = document.getElementById('displayResults');
                               var guess = document.createTextNode('What luck! Your artist is a woman');
                                          node.appendChild(guess);
                                              for (i=0; i < artists.length; i++) {
                                                 if (artists[i].gender == 'male') {
                                                    artists[i].stillValid = false;
                                                    grayArtists.push(artists[i].html)
                                                    console.log(grayArtists);
                                                    // console.log(artists)
                                              } else { console.log('female'); }};
                        } else if (userInput == 'dead' && artists[mysteryArtist].isAlive !== true) {
/*gray alive*/                  var node = document.getElementById('displayResults');
                                var guess = document.createTextNode('Oh no! Your artist is dead. I am sorry for your loss. But your guess was right!');
                                            node.appendChild(guess);
                                              for (i=0; i < artists.length; i++) {
                                                 if (artists[i].isAlive == true) {
                                                     artists[i].stillValid = false;
                                                     grayArtists.push(artists[i].html)
                                                     console.log(grayArtists);
                                                      // console.log(artists)
                                                } else { console.log('dead'); }};
                        } else if (userInput == 'moustache' && artists[mysteryArtist].facialHair == true) {
/*gray nofacialHair*/          var node = document.getElementById('displayResults');
                               var guess = document.createTextNode('Awesome! Your artist has cool artistic facial hair');
                                            node.appendChild(guess);
                                            for (i=0; i < artists.length; i++) {
                                                if (artists[i].facialHair !== true) {
                                                  artists[i].stillValid = false;
                                                  grayArtists.push(artists[i].html)
                                                  console.log(grayArtists);
                                                  // console.log(artists)
                                            } else { console.log('moustached '); }};
/* gray bad hair*/      } else if (userInput == 'hair' && artists[mysteryArtist].hair == true) {
                               var node = document.getElementById('displayResults');
                               var guess = document.createTextNode('Are you not jealous? Your artist has some cool hair');
                                            node.appendChild(guess);
                                            for (i=0; i < artists.length; i++) {
                                                if (artists[i].hair !== true) {
                                                  artists[i].stillValid = false;
                                                  grayArtists.push(artists[i].class)
                                                  console.log(grayArtists);
                                                  // console.log(artists)
                                            } else { console.log('great hair! '); }};
                        } else if (userInput == 'cool hair' && artists[mysteryArtist].hair !== 'cool hair') {
                            console.log('Dang. Your artist has some average hair');
                        }  else if (userInput == '19th century' && artists[mysteryArtist].decade == '19th century') {
                            console.log('Good guess! Your artist was kickin it during the 1800s');
                        }  else if (userInput == '19th century' && artists[mysteryArtist].decade !== '19th century') {
                              console.log('Nope! Wrong century');
                        }  else if (userInput == '20th century' && artists[mysteryArtist].decade == '20th century') {
                            console.log('Good guess! Your artist was living in the 1900s.... I wonder if he/she is still alive...');
                        }  else if (userInput == '20th century' && artists[mysteryArtist].decade !== '20th century') {
                            console.log('Nope! Wrong century');
                        } else if (userInput == '18th century' && artists[mysteryArtist].decade == '18th century') {
                            console.log('Good guess! Your artist was kickin it during the 1700s');
                        }  else if (userInput == '18th century' && artists[mysteryArtist].decade !== '18th century') {
                            console.log('Nope! Wrong century');
                        } else if (userInput == '17th century' && artists[mysteryArtist].decade == '17th century') {
                            console.log('Good guess! Your artist was kickin it during the 1600s');
                        }  else if (userInput == '17th century' && artists[mysteryArtist].decade !== '17th century') {
                            console.log('Nope! Wrong century');
                        } else if (userInput == '16th century' && artists[mysteryArtist].decade == '16th century') {
                            console.log('Good guess! Your artist was kickin it during the 1500s');
                        }  else if (userInput == '16th century' && artists[mysteryArtist].decade !== '16th century') {
                            console.log('Nope! Wrong century');
                        } else if (userInput == '15th century' && artists[mysteryArtist].decade == '15th century') {
                            console.log('Good guess! Your artist is ancient! Must be Da Vinci or somethin');
                        } else if (userInput == '15th century' && artists[mysteryArtist].decade !== '15th century') {
                            console.log('Nope! Wrong century');
                        }  else if (userInput == 'beard' && artists[mysteryArtist].bearded == true) {
                            console.log('Yes! Your artist has a sick beard.');
                        }  else if (userInput == 'beard' && artists[mysteryArtist].bearded !== true) {
                            console.log('It  unfortunate that your artist does not have a sick beard.'); }
/*alive/dead*/  else if (userInput == 'alive' && artists[mysteryArtist].isAlive !== true) {
                  var node = document.getElementById('displayResults');
                  var guess = document.createTextNode('Oh no! Your artist is dead. I am sorry for your loss -- all living artists will now disappear.');
                  node.appendChild(guess);      }
/*dead/alive*/  else if (userInput == 'dead' && artists[mysteryArtist].isAlive == true) {
                  var node = document.getElementById('displayResults');
                  var guess = document.createTextNode('Bad luck! Your artist is alive, but your guess was wrong');
                  node.appendChild(guess);      }
/*male/female */else if (userInput == 'male' && artists[mysteryArtist].gender !== 'male') {
                  var node = document.getElementById('displayResults');
                  var guess = document.createTextNode('Nope! Not a male artist.');
                  node.appendChild(guess);      }
/*female/male*/else if (userInput == 'female' && artists[mysteryArtist].gender == 'male') {
                  var node = document.getElementById('displayResults');
                  var guess = document.createTextNode('Unfortunately, your artist is not a woman');
                  node.appendChild(guess);      }
/*facial/false*/else if (userInput == 'moustache' && artists[mysteryArtist].facialHair !== true) {
                  var node = document.getElementById('displayResults');
                  var guess = document.createTextNode('Too bad. Your artist does not have a cool moustache');
                  node.appendChild(guess);      }
                  else if (guesses == 5 && userInput !== artists[mysteryArtist].class) {
                    var node = document.getElementById('displayResults');
                    var guess = document.createTextNode(`Sorry, that guess is not correct. Your artist is ${userInput}. Better luck next time!`);
                    node.appendChild(guess);
                  }
                else  { console.log('HELP') }
                }
                // console.log(grayArtists)
        for (var j = 0; j < grayArtists.length; j++){
          console.log(grayArtists[j]);
          grayArtists[j][0].style.display = "none";
        }

              // function removeArtists(el){
              //   for (var j = 0; j < el.length; j++){
              //     console.log(el[j]);
              //     el[j][0].style.display = "none";
              // }
//adding ID to img's in Gray artists
    // console.log(document.getElementsByClassName(for (i = 0; i<grayArtists; i++){

    // }))

//gameOVER
  // var gameOVER = document.querySelectorAll('div');
  //   document.addEventListener('click', function(){
  //       if (div == mysteryArtist) {console.log('win!')}
  //   });



// } /* end of guesses loop */
});
});
