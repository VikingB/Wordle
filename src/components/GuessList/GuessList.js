import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
