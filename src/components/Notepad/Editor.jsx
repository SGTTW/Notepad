import React from "react";
import ReactMde from "react-mde";
// reactMde css
import "../../../node_modules/react-mde/lib/styles/css/react-mde-all.css";

// /* C:\Users\HP\Desktop\learn-react\node_modules\react-mde\lib\styles\css\react-mde-all.css
// node_modules\react-mde\lib\styles\css\react-mde-all.css
// */
import Showdown from "showdown";

// const Editor = ({ currentNote, updateNote }) => {
const Editor = ({ tempNoteText, setTempNoteText }) => {
  const [selectedTab, setSelectedTab] = React.useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      {/* {currentNote ? ( //check if currentNote is not null */}
      {tempNoteText ? ( //check if currentNote is not null
        <ReactMde
          // value={currentNote?.body}
          value={tempNoteText}
          // onChange={updateNote}
          onChange={setTempNoteText}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(converter.makeHtml(markdown))
          }
          minEditorHeight={80}
          heightUnits="vh"
        />
      ) : (
        <div>No note Selected </div> // Render a message if there's no current note -----modified
      )}
    </section>
  );
};

export default Editor;
