import React ,{useState} from "react";
import "./App.css";

const Counter = () => {
  const [counter,setCounter] =useState(0);

  const plus = () => {
    setCounter(counter +1);
  }

  const minus = () => {
    setCounter(counter -1);
  }

  return (
    <div className="count-box">
      <h2 className="count-num">{counter}</h2>
        <button onClick={plus} className="plus-btn">+</button>
        <button onClick={minus} className="minus-btn">-</button>
    </div>
  )
};

export default Counter;