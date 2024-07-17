import React, { useState } from "react";
import { Data } from "./Data";
import Congra from "./Congra";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setQuestion } from "./store/store";
export default function Definite() {
  const Question = useSelector((state) => state.question);
  console.log("Question", Question);

  const dispatch = useDispatch();

  const numbers = [
    { id: 1, num: 1 },
    { id: 2, num: 2 },
    { id: 3, num: 3 },
    { id: 4, num: 4 },
    { id: 5, num: 5 },
    { id: 6, num: 6 },
    { id: 7, num: 7 },
    { id: 8, num: 8 },
    { id: 9, num: 9 },
    { id: 10, num: 10 },
  ];

  // const [answer, setAnswer]=useState([]);
  const [index, Setindex] = useState(0);
  const [lock, setLock] = useState(false);
  const navigate = useNavigate();

  let adding = () => {
    if (index < 9) {
      Setindex(index + 1);
      dispatch(setQuestion(Data[index + 1]));
    } else {
      navigate("/Congra");
    }

    let play = () => {
      Setindex(0);
      setQuestion(Data[index]);
    };
  };

  const check = (e, answer) => {
    if (lock === false) {
      if (Question.ans === answer) {
        e.target.classList.add("correct");
        console.log("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        console.log("wrong");
        setLock(true);
      }
    }
  };
  console.log(index);
  //  let redirect =()=>{
  //   return
  //  }
  console.log(index, Question);

  return (
    <div id="cont">
      <div className="flex ml-20 mr-20 mt-10">
        {numbers.map((ind) => (
          <div key={ind.id} className="num">
            <h3 className="text-center mt-3">{ind.num}</h3>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <div>
        <h3 className="text-white text-center text-xl">
          {index + 1}.{Question.que}
        </h3>
        <br></br>
        <ul>
          <div className="flex grid-rows-6 grid-flow-col gap-12 justify-center">
            <li
              onClick={(e) => {
                check(e, 1);
              }}
            >
              {Question.option1}
            </li>
            <li
              onClick={(e) => {
                check(e, 2);
              }}
            >
              {Question.option2}
            </li>
          </div>
          <br></br>
          <div className="flex grid-rows-6 grid-flow-col gap-12 justify-center">
            <li
              onClick={(e) => {
                check(e, 3);
              }}
            >
              {Question.option3}
            </li>
            <li
              onClick={(e) => {
                check(e, 4);
              }}
            >
              {Question.option4}
            </li>
          </div>
        </ul>
        <button
          className="shadow-md w-[100px] h-[50px] bg-slate-600 pl-50 rounded"
          onClick={adding}
        >
          Next
        </button>
      </div>
    </div>
  );
}
