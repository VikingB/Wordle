import React from "react";

function Banner({type,answer,guesses}) {
  
    const happyText = <p>
      <strong>Congratulations!</strong> Got it in {" "}
      <strong>{guesses} guesses</strong>.
    </p>

    const sadText = <p>
      <strong>Sorry!</strong> The answer was {" "}
      <strong>{answer}</strong>.
    </p>

  return (
    <>
      <div className={`${type} banner`}>
        {type === 'happy' && happyText}
        {type === 'sad' && sadText}
       
      </div>
    </>
  );
}

export default Banner;
