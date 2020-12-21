import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from "@material-ui/icons/Undo";

const ItemList = (props) => {
  const [lineThrReq, setLineThrReq] = useState(false);
  const cutListItem = () => {
    setLineThrReq(true);
  };

  const removeCutFromItem = () => {
    setLineThrReq(false);
  };
  return (
    <div className="todo_style">
      <span onClick={cutListItem}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: lineThrReq ? "line-through" : "none" }}>
        {props.currentItem}
      </li>

      <span
        style={{ display: !lineThrReq ? "none" : "" }}
        onClick={removeCutFromItem}
      >
        <UndoIcon className="deleteIcon" />
      </span>
    </div>
  );
};

export default ItemList;
