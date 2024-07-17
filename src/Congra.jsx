import React from "react";

export default function Congra() {
  return (
    <div id="contain">
      <div id="ima"></div>
      <h3 className="text-white text-3xl text-center">
        Congrats! You completed <br></br>the quiz.
      </h3>
      <br></br>
      <br></br>
      <h3 className="text-white text-xl text-center">
        You answer 4/10 correctly.
      </h3>
      <button id="play">Play again</button>
    </div>
  );
}
