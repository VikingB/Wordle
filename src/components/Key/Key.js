import React from "react";

function Key({ letter, guessedLetters }) {
  const statusColor = () => {
    const classNames = ["cell"];
    // loop array of objects and find the letter
    // const found = guessedLetters.find(element => element.letter ==== letter);
    // const statusClass = guessedLetters.findAll(function (element) {
    //   if (element.letter ==== letter) {
    //     // if (element.status === "correct") {
    //     //   return "correct";
    //     // }
    //     // if (element.status === "misplaced") {
    //     //   return "misplaced";
    //     // }
    //     // if (element.status === "incorrect") {
    //     //   return "incorrect";
    //     // }
    //   }
    // });
    // if(statusClass ==== undefined) {
    //   statusClass = "incorrect";
    // }

    const guessedLettersLetter = guessedLetters.filter(
      (letterobj) => letterobj.letter === letter
    );
    guessedLettersLetter.forEach((letterobj) => {
      if (letterobj.status === "correct") {
        classNames.push("correct");
      }
    });
    if (classNames.length === 1) {
      guessedLettersLetter.forEach((letterobj) => {
        if (letterobj.status === "misplaced") {
          classNames.push("misplaced");
        }
      });
    }
    if (classNames.length === 1) {
      guessedLettersLetter.forEach((letterobj) => {
        if (letterobj.status === "incorrect") {
          classNames.push("incorrect");
        }
      });
    }

    return classNames.join(" ");
  };
  return <div className={`${statusColor()}`}>{letter}</div>;
}

export default Key;
