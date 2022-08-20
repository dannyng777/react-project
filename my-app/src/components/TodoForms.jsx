import React from "react";

function Forms({ inputText, setInputText, todos, setTodos }) {
  // props.setInputText == {setInputText}
  const inputTextHandler = (e) => {
    console.log(e.target.value, "inputTextHandler");
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000, //work on generate ID later
      },
    ]);
    setInputText("");
  };

  return (
    <form>
      <h3 className="todostatic">Things To Do</h3>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square">+</i>
      </button>
    </form>
  );
}

export default Forms;
