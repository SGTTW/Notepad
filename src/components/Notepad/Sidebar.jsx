import React from "react";

const Sidebar = (props) => {
  /**
   * Challenge: Try to figure out a way to display only the
   * first line of note.body as the note summary in the
   * sidebar.
   *
   * Hint 1: note.body has "invisible" newline characters
   * in the text every time there's a new line shown. E.g.
   * the text in Note 1 is:
   * "# Note summary\n\nBeginning of the note"
   *
   * Hint 2: See if you can split the string into an array
   * using the "\n" newline character as the divider
   */

  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          {/* displaying only the first line of the body of the note summary and commenting "Note {index + 1)*/}
          {/* Note {index + 1} */}
          {note.body.split("\n")[0]}
          {/* {note.body } */}
        </h4>

        {/* deleting note(s) */}
        {/* <button className="delete-btn" onClick={(event) => props.deleteNote(event,note.id)}> */}
        <button className="delete-btn" onClick={( ) => props.deleteNote( note.id)}>
          {/* //Your onClick event handler here */}
          {/* onClick={(event)=> props.deleteNote(event,note.id)} */}

        
          <i
            className="gg-trash trash-icon"
           
          ></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
