import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoitem from "./ToDoitem";

function App() {
  const [items, setItem] = useState([]);

  function addItem(inputText) {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
  }

  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <ToDoitem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
