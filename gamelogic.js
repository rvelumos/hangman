function displayWordSoFar(word, guesses) {
  // WRITE ME

  const letterArray = word.split("");
  let output = '';
  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    const letterGuessed = guesses.includes(letterInWord);    
    if(!letterGuessed){
        output = output + "_ ";
    }else{
        output = output + letterInWord + " ";
    }
  }  
  console.log(output);
  return(output);
}

function isGameWon(word, guesses) {
  // WRITE ME
  const letterArray = word.split("");
  let createdWord = "";

  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    const letterCorrect = guesses.includes(letterInWord);
    if (letterCorrect) {
      createdWord += letterInWord;
    }
  }

  if(createdWord===word) {
      return true;
  }
  return false;
}

function isGameLost(word, guesses) {
  // WRITE ME
  let lives = 7;

  for (let i = 0; i < guesses.length; i++) {
    const inputCorrect = word.includes(guesses[i]);

    if (!inputCorrect) {
        lives--;
    }
  }

  console.log("\nje mag nog " + lives + " foute antwoorden geven.\n");

  if(lives === 0) {
    return true;
  }

  return false;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
