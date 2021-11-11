import React from "react";

function CreateArea(props) {
  // const [notes, setNotes] = React.useState([]);
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: ""
  });

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

  return (
    <div>
      <form onSubmit={clickHandler}>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
