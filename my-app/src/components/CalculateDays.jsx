import React from "react";

function CalculateDays({ fromText, toText, setDaysText }) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(fromText);
  const secondDate = new Date(toText);
  const diffDays = setDaysText(
    Math.round(Math.abs((firstDate - secondDate) / oneDay))
  );
  console.log(diffDays);
  return <div></div>;
}

export default CalculateDays;
