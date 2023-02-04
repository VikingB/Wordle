import React from "react";
import Key from "../Key";
const keyboardLetters = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({guessedLetters}) {
 
  return (
    <div className="keyboard">
      {keyboardLetters.map((row,index) => (
        <div key={row[0]} className={`keyboard--row flex row-${index} `}>
          
          {row.map((letter) => {
            return <Key guessedLetters={guessedLetters } key={letter} letter={letter} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
