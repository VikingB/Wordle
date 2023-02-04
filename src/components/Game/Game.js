import React from "react";

import { sample,uniqueLetters } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInputText from "../GuessInputText";
import GuessList from "../GuessList";
import Banner from "../Banner";
import Keyboard from "../Keyboard";
import { checkGuess as checkGuessHelper } from "../../game-helpers";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log(answer)
  const [guessList, setGuessList] = React.useState([]);
  const [bannerType, setBannerType] = React.useState("");
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function checkGuess(guess) {
    const newGuessedLetters = checkGuessHelper(guess, answer);
    setGuessList((guessList) => [
      ...guessList,
      newGuessedLetters,
    ]);
    const nextGuessedLetters = [...guessedLetters, ...newGuessedLetters];
    

    setGuessedLetters(nextGuessedLetters);


    if (guess === answer) {
      setBannerType("happy");
    }
    else if (guessList.length + 1 === NUM_OF_GUESSES_ALLOWED ) {
      setBannerType("sad");
    }

  }
  // split the answer into an array of letters
  function restartGame() {
    setGuessList([]);
    setBannerType("");
    setAnswer(sample(WORDS));
    setGuessedLetters([]);
  }
  return (
    <>
    <button onClick={restartGame}>New Game</button>
      <GuessList guessList={guessList} />
      { guessList.length < NUM_OF_GUESSES_ALLOWED && <GuessInputText checkGuess={checkGuess} />}
      
      <Keyboard guessedLetters={guessedLetters} />
      {(bannerType === 'happy'||
        bannerType === 'sad') && <Banner answer={answer} guesses={guessList.length} type={bannerType} />}
    </>
  );
}

export default Game;
