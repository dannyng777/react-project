import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const removeHandler = () => {
    setTodos(todos.filter((el) => el.id !==todo.id))
    console.log(todos)
    //compares the element id vs the todo.id
    //then only shows the ones that doesn't match 
  };
  const completedHandler = ()=>{
    setTodos(todos.map((item)=>{
        if(item.id === todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed":""}`/* changing class to completed with CSS*/}>{text}</li>
      <button onClick={completedHandler}className="complete-btn">
        <i className="fas">+</i>
      </button>
      <button onClick={removeHandler} className="trash-btn">
        <i className="fas">-</i>
      </button>
    </div>
  );
};

export default Todo;
