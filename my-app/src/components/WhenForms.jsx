import { React, useState } from "react";
import CalculateDays from "./CalculateDays";

function WhenForms({ daysData, setDaysData, showWhen, setShowWhen }) {
  // props.setWhenText == {setWhenText}
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [daysText, setDaysText] = useState("");

  const inputFromHandler = (e) => {
    setFromText(e.target.value);
  };
  const inputToHandler = (e) => {
    setToText(e.target.value);
  };

  const submitWhenHandler = (e) => {
    e.preventDefault();
    setDaysData([
      {
        from: fromText,
        to: toText,
        days: daysText,
      },
    ]);
    setShowWhen((showWhen) => !showWhen);
  };

  return (
    <form className="todostatic">
      <h3>When?</h3>
      <div hidden={showWhen ? false : true}>
        <label htmlFor="from">From:</label>
        <input
          value={fromText}
          onChange={inputFromHandler}
          type="date"
          className="todo-input"
        />
        <label htmlFor="to">To:</label>
        <input
          value={toText}
          onChange={inputToHandler}
          type="date"
          className="todo-input"
        />
        <CalculateDays
          fromText={fromText}
          toText={toText}
          setDaysText={setDaysText}
        />
      </div>
      <button
        hidden={showWhen ? false : true}
        onClick={submitWhenHandler}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square">+</i>
      </button>
    </form>
  );
}

export default WhenForms;
