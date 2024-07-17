import React from "react";
import { Data } from "./Data";
import { setQuestion } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Congra() {
  const Question = useSelector((state) => state.question);
  console.log("que", Question);

  const Index = useSelector((state)=>state.index);
  console.log("my" , Index);

  const navigation=useNavigate();
  const dispatch = useDispatch();
  let play = () => {
    dispatch(setQuestion(Data[Index])) ;
  };
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
      <button id="play" onClick={play}>Play again</button>
    </div>
  );
}
