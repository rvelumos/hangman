const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  if(letter.match(/^[A-Za-z]$/)) {
    let characterExists;
    for(let i=0; i<guesses.length;i++){
      if(guesses.includes(letter)){
        characterExists=true;
      }
    }
    if(!characterExists) {
      guesses.push(letter.toLowerCase());
    }else{
      console.log("Je hebt dit teken al gebruikt, probeer een ander \n")
    }
  }else{
    console.log("Ongeldige invoer: alleen 1 alfabetische letter is toegestaan \n");
  }
  const guessedWord = displayWordSoFar(word, guesses);

  // volgende ronde! we roepen game nog een keer aan

  if(isGameLost(word, guesses)){
    console.log(`
   +---+
   |   |
   O   |
  /|\\ |
  / \\ |
       |
  =========
`);
      console.log("\n Helaas, je hebt verloren");
  }else if(isGameWon(word, guesses)) {
      console.log("Je hebt gewonnen!");
  }else{
      game(word, guesses);
  }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);

