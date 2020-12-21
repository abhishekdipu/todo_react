import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ItemList from "./ItemList";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const getItemFromInput = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo for the day</h1>
          <br />

          <input
            type="text"
            placeholder="add iteams here"
            onChange={itemEvent}
            value={item}
          ></input>
          <Button className="newBtn" onClick={getItemFromInput}>
            <AddIcon />
          </Button>
          <br />

          <ol>
            {newItem.map((val, index) => (
              <ItemList key={index} currentItem={val} />
            ))}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
