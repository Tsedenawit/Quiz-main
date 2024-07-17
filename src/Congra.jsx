import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Congra() {
  const Question = useSelector((state) => state.question);
console.log('que',Question);
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
