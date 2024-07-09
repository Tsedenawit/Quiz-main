import React, { useEffect, useState} from "react";
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
       <div>
        <h3>{Question.que}</h3>
        <ul>
          <div className="flex grid-rows-6 grid-flow-col gap-12 justify-center">
          <li>{Question.ans}</li>
          <li>{Question.option1}</li>
          </div>
          <div className="flex">
          <li>{Question.option2}</li>
          <li>{Question.option3}</li>
          </div>
        </ul>
       </div>
 
          {/* <div>
  {answer.map((ans) => (
    <div key={ans.tld} className="bg-current w-200 h-100">
     <h3 className="text-white">{ans.name.common}</h3>

    </div>
    
  ))}
</div> */}
          
      </div>
    )
}