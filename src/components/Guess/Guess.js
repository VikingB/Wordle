import React from "react";
import { range } from "../../utils.js";



function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span key={i} className={`cell ${typeof guess !== 'undefined' ? guess[i].status : ''}`}>
            {typeof guess !== "undefined" && guess.length > 0 ? guess[i].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
