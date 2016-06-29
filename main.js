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
       howToPlay.addEventListener('click', function(){
           alert("Thanks for playing Guess Who: Artist Edition!! \n\n Here are the rules for playing: \n As you may have noticed, you have already been dealt a mystery painting card. Your goal in this game is to guess who the artist of this painting is by eliminating all of the other artists. At the start of each round you will be prompted to guess an attribute. If your artist has this attribute, nothing will happen to the artists on the board but you will have an important piece of information! If your artist does not have this attribute, then all artists with such attribute will disappear. You will have 5 rounds in which to guess your artist, although if you know before 5 rounds are up feel free to click on your guess and see if you're right! Points are scored by how few turns it takes you to guess your artist plus an additional 10 pts if you guess correctly. After you've finished it is your opponents turn to play!")
         })
//WORKING --SET THE MYSTERY CARD
      var getMysteryCard = document.getElementsByClassName("button")[0];
      getMysteryCard.addEventListener('click', function(){
          var paintingsArray = ["images/paintings/bacon-self-portrait.jpg", "images/paintings/bacon-triptych.jpg", "images/paintings/avedon-boyd.png", "images/paintings/avedon-twiggy.jpg", "images/paintings/bonnard-decor.jpg", "images/paintings/bonnard-nu.jpg", "images/paintings/basquiat-glenn.jpg", "images/paintings/basquiat-trumpet.jpg", "images/paintings/bochner-syntax.jpg", "images/paintings/bochner-century.jpg", "images/paintings/caravaggio-boy-lizard.jpg", "images/paintings/caravaggio-cardsharps.jpg", "images/paintings/cassatt-bath.jpg", "images/paintings/cassatt-green.jpg", "images/paintings/chagall-concert.jpg", "images/paintings/chagall-paysage.jpg", "images/paintings/davinci-ermine.jpg", "images/paintings/davinci-vitruvian.jpg", "images/paintings/dali-swans-elephants.jpg", "images/paintings/dali-elephants.jpg", "images/paintings/defeo-rose.jpg", "images/paintings/defeo-untitled.jpg", "images/paintings/degas-bath.jpg", "images/paintings/degas-danceclass.png", "images/paintings/johns-flags.jpg", "images/paintings/johns-racing.jpg", "images/paintings/kahlo-roots.jpg", "images/paintings/kahlo-sunlife.jpg", "images/paintings/klimt-adele.jpg", "images/paintings/klimt-kiss.jpg", "images/paintings/koons-doh.jpg", "images/paintings/koons-hulk.jpg", "images/paintings/kruger-battleground.jpg", "images/paintings/kruger-beautiful.jpg"]
          var mysteryCard = Math.trunc(Math.random()*paintingsArray.length);
          console.log(paintingsArray[mysteryCard]);
          document.getElementById("mystery-card").src = paintingsArray[mysteryCard];
})



  // var guessOne = prompt("Does my artist have:    ")

  var attributeSearch = [
    {avedon: ["richard avedon", "glasses", "20th century", "american", "nice hair", "male", "photographer", "gray hair", "dead"]},
    {bacon: ["male", "painter", "surrealist", "british", "20th century", "intense", "dead"]}]
    // console.log(attributeSearch[0].avedon)


//variables of data for array
  //
  var avedon = {name: "Richard Avedon", medium: "photography", attributes: ["richard avedon", "glasses", "20th century", "american", "nice hair", "male", "photographer", "gray hair", "dead"], arts: ["images/paintings/avedon-boyd.png", "images/paintings/avedon-twiggy.jpg"], stillValid: true};
  var bacon = {name: "Francis Bacon", medium: "painter", attributes: ["male", "painter", "surrealist", "british", "20th century", "intense", "dead"], arts: ["images/paintings/bacon-self-portrait.jpg", "images/paintings/bacon-triptych.jpg"], stillValid: true};
  var basquiat = {name: "Jean-Michel Basquiat", medium: "painter", attributes: ["celebrity", "graffiti", "New Yorker", "nice hair", "well-dressed", "suit", "male", "american", "dated madonna", "20th century", "painter", "dead"], arts: ["images/paintings/basquiat-glenn.jpg", "images/paintings/basquiat-trumpet.jpg"], stillValid: true};
  var bochner = {name: "Mel Bochner", medium: ["collage", "painter", "sculptor"], attributes: ["male", "gray hair", "american", "alive", "20th century", "painter"], arts: ["images/paintings/bochner-syntax.jpg", "images/paintings/bochner-century.jpg"], stillValid: true};
  var bonnard = {name: "Pierre Bonnard", medium: "painter", attributes: ["male", "french", "19th century", "post impressionist", "painter", "moustache", "suit", "pointy nose", "dead"], arts: ["images/paintings/bonnard-nu.jpg", "images/paintings/bochner-syntax.jpg"], stillValid: true};
  var caravaggio = {name: "Michelangelo Merisi da Caravaggio", medium: "painter", attributes: ["male", "italian", "renaissance", "baroque", "painter", "nice hair", "16th century", "pre-photography", "moustache", "dead"], arts: ["images/paintings/caravaggio-boy-lizard.jpg", "images/paintings/caravaggio-cardsharps.jpg"], stillValid: true}
  var cassatt = {name: "Mary Cassatt", medium: "painter", attributes: ["female", "american", "impressionist", "modern", "hat", "fur", "19th century", "pointy nose", "dead"], arts: ["images/paintings/cassatt-bath.jpg", "images/paintings/cassatt-green.jpg"],stillValid: true};
  var chagall = {name: "Marc Chagall", medium: "painter", attributes: ["male", "russian", "french", "cubist", "surrealist", "20th century", "modern", "thin lips", "suit", "dead"], arts: ["images/paintings/chagall-concert.jpg", "images/paintings/chagall-paysage.jpg"], stillValid: true};
  var dali = {name: "Salvador Dali", medium: "painter", attributes: ["male", "spanish", "surrealist", "cubist", "moustache", "20th century", "dead"], arts: ["images/paintings/dali-swans-elephants.jpg", "images/paintings/dali-elephants.jpg"], stillValid: true};
  var davinci = {name: "Leonardo da Vinci", medium: ["painter", "inventor", "sketcher"], attributes: ["male", "pre-photography", "beard", "moustache", "hat", "pointy nose", "italian", "15th century", "painter", "dead"], arts: ["images/paintings/davinci-ermine.jpg", "images/pictures/davinci-vitruvian.jpg"], stillValid: true};
  var defeo = {name: "Jay DeFeo", medium: ["sculptor", "painter", "photographer"], attributes: ["woman", "dead", "20th century", "nice hair", "modern"], arts: ["images/paintings/defeo-rose.jpg", "images/paintings/defeo-untitled.jpg"], stillValid: true};
  var degas = {name: "Edgar Degas", medium: ["sculptor", "painter"], attributes: ["male", "dead", "french", "19th century", "impressionist", "suit", "moustache", "beard"], arts: ["images/paintings/degas-bath.jpg", "images/paintings/degas-danceclass.png"], stillValid: true};
  var johns = {name: "Jasper Johns", medium: ["collage", "painter", "sculptor"], attributes: ["male", "alive", "gay","american", "abstract", "20th century"], arts: ["images/paintings/johns-flags.jpg", "images/paintings/johns-racing.jpg"], stillValid: true};
  var kahlo = {name: "Frida Kahlo", medium: "painter", attributes: ["dead", "woman", "20th century", "mexican", "surrealist", "eyebrows", "nice hair"], arts: ["images/paintings/kahlo-roots.jpg", "images/paintings/kahlo-sunlife.jpg"], stillValid: true};
  var klimt = {name: "Gustav Klimt", medium: "painter", attributes: ["male", "austrian", "gold", "suit", "beard", "moustache", "dead", "19th century", "bald"], arts: ["images/paintings/klimt-adele.jpg", "images/paintings/klimt-kiss.jpg"], stillValid: true};
  var koons = {name: "Jeff Koons", medium: ["painter", "sculptor", "collage"], attribute: ["male", "alive", "21st century", "pop", "suit", "american"], arts: ["images/paintings/koons-doh.jpg", "images/paintings/koons-hulk.jpg"], stillValid: true};
  var kruger = {name: "Barbara Kruger", medium: "collage", attributes: ["woman", "alive", "american", "collage", "feminist", "nice hair", "contemporary"], arts: ["images/paintings/kruger-battleground.jpg", "images/paintings/kruger-beautiful.jpg"], stillValid: true};
  // var matisse =
  // var modigliani =
  // var monet =
  // var nevelson =
  // var o-keeffe =
  // var picasso =
  // var rothko =
  // var van-gogh =
  // var warhol =
  // var weems =



//array storing all the data



//THE END OF THE DOM CONTENT LOADED FUNCTION
});
