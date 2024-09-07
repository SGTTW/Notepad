import React, { useState } from "react";
import "./Joke.css";
import { Text } from "@chakra-ui/react";
const Joke = (props) => {
  //conditional rendering

  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  /**z
   * Updated Challenge:
   * - Only display the punchline paragraph if `isShown` is true
   */
  const [isShown, setIsShown] = useState(true);
  function handleClick() {
    console.log("value toggler button was clicked!");
    setIsShown((prevIsShown) => !prevIsShown);
    console.log(isShown);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}

      {/* <button onClick={handleClick}>
        {isShown ? <Text>hide punchline</Text> : <Text>show punchline</Text>}
      </button> */}
      {/*  alternatively  ----------------------------*/}
      {isShown && <button onClick={handleClick}> hide punchline</button>}

      {!isShown && <button onClick={handleClick}> show punchline</button>}

      <hr />
    </div>
  );
};

export default Joke;

// {isShown && <button onClick={handleClick}>Hide Punchline</button>}
