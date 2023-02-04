import React from "react";
import Guess from "../Guess";
import  {range}  from "../../utils.js";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.js";

function GuessList({ guessList }) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        return (

            <Guess key={i} guess={guessList[i]} />
         
          
        );
      })}
      
    </div>
  );
}

export default GuessList;
