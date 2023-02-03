import React from "react";

function GuessInputText({ checkGuess }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    // console.info({ guess });
    if (guess.length !== 5) {
      alert("Please enter a 5-letter word");
      return;
    }
    checkGuess(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        
        onChange={(e) => {
          if(e.target.value.length <= 5){
            setGuess(e.target.value.toUpperCase());
          }
        }}
      />
    </form>
  );
}

export default GuessInputText;
