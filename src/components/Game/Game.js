import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInputText from "../GuessInputText";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function checkGuess(guess) {
    setGuessList((guessList) => [...guessList, guess]);
    return guess === answer;
  }

  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInputText checkGuess={checkGuess} />
      {/* <Row>
        <Cell letter="A" />
        <Cell letter="B" />
        <Cell letter="C" />
      </Row> */}
    </>
  );
}

export default Game;
