import React, { useState} from "react";
import { Data } from "./Data";
export default function Definite(){
    const numbers = [{id:1, num:1},
      {id:2, num:2} ,{id:3, num:3}, {id:4, num:4},{id:5, num:5},
      {id:6, num:6},{id:7, num:7},{id:8, num:8},{id:9, num:9},{id:10, num:10}];
   
    // const [answer, setAnswer]=useState([]);
    const [index, Setindex]=useState(0)
  const [Question,setQuestion]=useState(Data[index]);  

    return (
      <div id="cont">
        <div  className="flex ml-20 mr-20 mt-10">
        {numbers.map((ind) => (
          <div key={ind.id} className="num">
            <h3 className="text-center mt-3">{ind.num}</h3>
          </div>
        ))}
        </div>
        <br></br>
        <br></br>
       <div>
        {/* {Data.map((datas)=>
        <div key={datas.IDE}>
        <h3 className="text-white text-center text-xl">{datas.que}</h3>
        {console.log(datas.que)}
        </div>)} */}
        {index + 1}<h3 className="text-white text-center text-xl">{Question.que}</h3>
        <br></br>
        <ul>
          <div className="flex grid-rows-6 grid-flow-col gap-12 justify-center">
          <li>{Question.option1}</li>
          <li>{Question.option2}</li>
          </div>
          <br></br>
          <div className="flex grid-rows-6 grid-flow-col gap-12 justify-center">
          <li>{Question.option3}</li>
          <li>{Question.option4}</li>
          </div>
        </ul>
        <button className="shadow-md w-[100px] h-[50px] bg-slate-600 pl-50 rounded">Next</button>
       </div>
        
          
      </div>
    )
}