import React from "react";
import boxesData from "../boxesData";

import Box from "../Box/Box";

const Boxes = () => {
  const [squares, setSquares] = React.useState(boxesData);

  // const handleClick = (id) => {
  //   setSquares((prevSquares) =>
  //     prevSquares.map((square) =>
  //       square.id === id ? { ...square, on: !square.on } : square
  //     )
  //   );
  // };
  // let's do this alternatively
  function handleClick(id) {
    setSquares((prevSquares) => {
      // let's use the dotmap method to create a new array and
      //return all in one goal
      // .map returns a new array without modifying the original array
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
    // console.log(id);
  }

  const squareElements = squares.map((square) => (
    // <Box
    //   key={square.id}
    //   on={square.on}
    //   id={square.id}
    //   handleClick={handleClick}
    // />

    // Alternatively
    <Box
      key={square.id}
      on={square.on}
      // id={square.id}
      handleClick={() => handleClick(square.id)}
    />
  ));
  // console.log("Number of squares:", squares.length);

  return <main>{squareElements}</main>;
};

export default Boxes;
