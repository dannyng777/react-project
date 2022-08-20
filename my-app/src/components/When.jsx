import React from "react";
import Card from "react-bootstrap/Card";

function When({ daysData, showWhen, setShowWhen }) {
  console.log(daysData[0]);
  const flipDisplay = () => {
    setShowWhen((showWhen) => !showWhen);
  };
  return (
    <div className="todo-container">
      <h3 className="todos" hidden={showWhen ? true : false}>
        From: {daysData[0].from}
        <br />
        To: {daysData[0].to}
        <br />
        Total Days: {daysData[0].days}
        <br />
        <button className="editButton" onClick={flipDisplay}>
          Edit
        </button>
      </h3>
    </div>
  );
}

export default When;
