import React from "react";
import { Text } from "@chakra-ui/react";
const Home = () => {
  // let's create a toggle function to log click to the console
  function toggle() {
    console.log("Clicked!!");
  }
  return (
    <div>
      <Text fontStyle={"italic"}>
        <h2>home</h2>
        <p>betterpractice</p>

        <Text border={"3px solid dodgerblue"} width={"50"}>
          <button onClick={toggle}>Click me</button>
        </Text>
      </Text>
    </div>
  );
};

export default Home;
