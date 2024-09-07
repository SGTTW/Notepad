// export default Freestyle;
import React, { useEffect, useState } from "react";

const WindowTracker = () => {
  /**
   * Challenge:
   * 1. Create state called `windowWidth`, default to
   *    `window.innerWidth`
   * 2. When the window width changes, update the state
   * 3. Display the window width in the h1 so it updates
   *    every time it changes
   */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
    return () => {
      console.log("Cleaning up...");
    };
  }, []);
  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};
//--------------------------------
// const WindowTracker = () => {
//   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

//   React.useEffect(() => {
//     window.addEventListener("resize", function () {
//       setWindowWidth(window.innerWidth);
//     });
//   }, []);

//   return <h1>Window width: {windowWidth}</h1>;
// };
export default WindowTracker;

// import React, { Component } from "react";
// // import reactLogo from "";

// class Freestyle extends Component {
//   render() {
//     return <div></div>;
//   }
// }
