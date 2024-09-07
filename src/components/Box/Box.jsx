import React, { useState } from "react";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "white" : "black",
    width: "100px",
    height: "100px",
    border: "1px solid black",
    margin: "10px",
    borderRadius: "20px 0 ",
   
  };

  // const [on, setOn] = useState(props.on);

  // function handleClick(id) {
  //   // console.log("this state should flip");
  //   console.log("Clicked box from box component:", props.id);
  //   props.handleClick(props.id);
  // }
  // // console.log(props.on);

  return (
    <div>
      {" "}
      {/* <div
        style={styles}
        className="box"
        // onClick={() =>props.handleClick(props.id)}>
        // Alternatively
        onClick={props.handleClick}
      >
        {" "}
      </div> */}
      {/* <div> {squares.on}</div> */}
      <button
        style={styles}
        className="box"
        // onClick={() =>props.handleClick(props.id)}>
        // Alternatively
        onClick={props.handleClick}
      >
        {" "}
      </button>
    </div>
  );
};

export default Box;
