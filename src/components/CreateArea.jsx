import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = React.useState(false);

  function changeHandler(event) {
    const inputEvent = event.target.value;
    const inputName = event.target.name;
    if (inputName === "title") {
      setNewNote((prevValue) => {
        return {
          title: inputEvent,
          content: prevValue.content
        };
      });
    }
    if (inputName === "content") {
      setNewNote((prevValue) => {
        return {
          title: prevValue.title,
          content: inputEvent
        };
      });
    }
  }

  function clickHandler(event) {
    props.setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setNewNote((prevValue) => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }
  function clickExpander(event) {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={clickHandler}>
        <input
          style={{ display: expand ? "" : "none" }}
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={changeHandler}
          onClick={clickExpander}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={newNote.content}
        />
        <Zoom in={expand}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
