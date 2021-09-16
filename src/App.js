import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";


function App() {
  const [itemName, setItemName] = useState("");
  let [ items, setItems ] = useState([]);
  const [Id, setId] = useState(0);

  function handleChange(event) {
    const value = event.target.value;
    setItemName(value);
  }

  function addItem() {
    if(itemName !== ""){
      setItems((prevValue) => {
        return [
          ...prevValue,
          {
            todoItem:itemName,
            uniqueID: Id,
            text: false,
          }
        ]
      });
    }
    let id = Id;
    setId(id+1);
    setItemName("");
  }
  
  function removeItem() {
    if(items.length !== 0){
      items.pop();
      setItems([...items]);
      let id = Id;
      setId(id-1);
    }
  }

  function checkItem(event){
    const itemId = event.target.id;
    items[itemId].text = !items[itemId].text;
    setItems(prevValue => {
      return [
        ...prevValue,
      ]
    });
  }


  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input
        className="input-box"
        placeholder="Enter Item"
        onChange={handleChange}
        value={itemName}
      />
      <Button className="add-button" onClick={addItem} name="Add" />
      <div className="list-box">
        <ol>
        {items.map(todoObj =>(
          <li 
            id={todoObj.uniqueID} 
            key={todoObj.uniqueID} 
            onClick={checkItem} 
            style={(todoObj.text === true) ? {textDecoration:'line-through'} : {textDecoration:'none'}}
            >
              {todoObj.todoItem}
          </li>
        ))}
        </ol>
      </div>

      <footer>
        <Button className="remove-button" onClick={removeItem} name="Remove" />
      </footer>
    </div>
  );
}

export default App;
