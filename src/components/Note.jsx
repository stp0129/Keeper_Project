import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function Note(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
      className="note"
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
