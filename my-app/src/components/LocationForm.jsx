import { React, useState } from "react";

function LocationPage() {
  const [locationInput, setLocationInput] = useState("");
  const [locationInfo, setLocationInfo] = useState([{ location: "" }]);
  const [show, setShow] = useState(false);

  const locationInputHandler = (e) => {
    setLocationInput(e.target.value);
  };
  const changeButton = () => {
    setShow(!show);
  };

  const submitLocationHandler = (e) => {
    e.preventDefault();
    setLocationInfo([{ location: locationInput }]);
    setLocationInput("");
    changeButton();
  };

  return (
    <form className="todostatic">
      <h3 hidden={show ? true : false}>Where to?</h3>
      <h3 hidden={!show ? true : false}>
        {locationInfo[0].location}{" "}
        <button className="editButton" onClick={changeButton}>
          Edit
        </button>
      </h3>
      <input
        type="text"
        className="todo-input"
        value={locationInput}
        onChange={locationInputHandler}
        placeholder="Destination"
        hidden={show ? true : false}
      />
      <button
        className="todo-button"
        variant="success"
        onClick={submitLocationHandler}
        hidden={show ? true : false}
        type="submit"
      >
        <i className="fas fa-plus-square">+</i>
      </button>
    </form>
  );
}

export default LocationPage;
