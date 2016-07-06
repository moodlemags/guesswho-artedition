# Welcome to GuessWho: Art Edition!
### Technology used --
HTML, CSS, Javascript

### The why --
The game(s) that I built were focused on a huge lack in a niche market that I've noticed over my academic/professional career, which is a resource for learning and studying art history. For this game, I decided to be inspired by my love of art and the board game Guess Who.

### The game --
Guess Who is traditionally played with each player being dealt a mystery face and each player trying to guess their opponents mystery card. There was an inherent problem with having a game like this operate on a single page app, so I reworked the structure of the game to be self-competing with scores compared at the end between players. The goal is for each player to guess the artist who created their artwork in under 5 guesses -- the less points, the better!

### The rules --
The rules of the game are simple: a mystery card is dealt to Player One, who gets 5 guesses to figure out who the artist of the artwork is. Each player must click the guess button and type an attribute of the artists into the prompt -- if they guess an attribute correctly (i.e. "Alive") then they will be notified on the console beneath the painting and the artists who do not fit the descriptor will disappear (i.e. the "Dead" artists). If the attribute is not accurate, nothing will happen other than notification on the console beneath the painting. If you choose to guess the artist before 5 guesses, your points will account for such. At the end of the game, the points will be compared and the winner announced.

### The structure --
The game was more complicated to build than I had initially anticipated due to how much the HTML and JS pages have to interact and update one another. The structure that I built the first time was functional only from the HTML side and the second time only from the JS side -- finally I've merged the two. The primary structures are all based off of the grid of images in HTML - these images are the links between the JS and the main HTML page.

This game relies heavily on for loops, if statements and connectivity w/ DOM manipulation. After the mystery painting (and therefore artist) for the current player is loaded, the game structure has a framework built on the attributes of that artist. Each turn takes in a bit of input (the guess) and is looped through all if/else if statements to see if the guess criteria matches any of the statements. If the criteria is not one that was fleshed out, it will say as much and prompt to guess another criteria (this is a new guess used). If the guess does match the criteria, all artists whose criteria does NOT match the painting/artist is pushed into a new array of no-longer-valid-artists, which are then removed from the board. The next guess refines the artists remaining so on and so forth until there is either only one artist left/no guesses left/player has guessed correctly. In theory, I'd like the end of the game to prompt to learn more about not only the artist but the painting so that it's a learning tool for continuing art education.

### The code --
There were three different sections that I coded.

The first section is the model, it contains the array of paintings that the mysteryCard is dealt out of and the array of objects that contains the artists and all of their attribute data that is used to play the game. This set up took up almost 350 lines of code, which is a LOT. The first time that I made the game, I set up the objects all in a line so that my code was more condensed. This made it very hard to problem-shoot as it was visually quite difficult to parse through. When I realized I had to start again from scratch, I decided that this model would be more efficient if each attribute was aesthetically organized on its own line for clarity and ease to call from the functions.

The second part of my code is the functional set up. This is made up by the DOM Content Loaded listener that waits for the user to click "I'm Ready" before performing any functions. It also holds the code that produces they mystery painting and it's corresponding artist object so that the rest of the game functions.

The third part of the code is a very large if statement with multiple nested loops within. The games movement is all reliant on the actions of the user. The user must press guess to be prompted to provide an attribute and repeat this until they are out of guesses. On the last guess, the user is prompted to guess the artist with their last turn. This part of the code takes the user input and will provide a message and get rid of any artists that they may have eliminated. If the user guesses the artist correctly, then they will have one!

### Difficulties --
Where to begin! My pseudo-code did not take into consideration the complexity of the looping that I had to do, and when I changed the model I still followed my old pseudo code for the final and beginning statements -- which is why they are a bit glitchy, as I only fixed them a bit before the project is due. Additionally, on occasion the function that iterates over all the criteria decides to produce false info -- i.e. remove artists incorrectly or leave incorrectly. I haven't had time to figure out why they are doing so, but I fully intend to as I would like to work more on this game and put it in my portfolio. The ideas I love and I know that there is a much cleaner way to do the code, which I look forward to exploring as we continue to learn.
Here are the problems that I currently would like to fix:
- The user switching/score logging is not currently working
- The user has to guess the artist in the class format (i.e. .monet) otherwise the program won't log if they've won
- If the user guesses the WRONG artist it does not track accurately / especially on the last turn!
