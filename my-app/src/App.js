import { React, useState } from "react";
import "./App.css";

//Importing components
import LocationForm from "./components/LocationForm";
import TodoList from "./components/TodoList";
import TodoForms from "./components/TodoForms";
import WhenForms from "./components/WhenForms";
import When from "./components/When";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [daysData, setDaysData] = useState([{ from: "", to: "", days: "" }]);
  const [showWhen, setShowWhen] = useState(true);

  return (
    <div className="App">
      <header>
        <h1>Travel Planner</h1>
      </header>
      <body>
        <LocationForm />
        <WhenForms
          daysData={daysData}
          setDaysData={setDaysData}
          showWhen={showWhen}
          setShowWhen={setShowWhen}
        />
        <When
          daysData={daysData}
          showWhen={showWhen}
          setShowWhen={setShowWhen}
        />
        <TodoForms
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          inputText={inputText}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </body>
    </div>
  );
}

export default App;
