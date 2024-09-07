// /*

// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.

// import React from "react"
// import ReactDOM from "react-dom"

// function Page() {
//     return (
//         <h1>It's working!</h1>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// function Page() {
//     return (
//         <h1>It's working!</h1>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))

// import React, { Component } from "react";
// // import reactLogo from "";

// class Freestyle extends Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "evening";
//     }

//     return (
//       <div>
//         <h2>good {timeOfDay}</h2>
//       </div>
//     );
//   }
// }

// export default Freestyle;

// */

// /*
// const thingsArray = ["Thing 1", "Thing 2"];

//   /**
//    * Challenge: Map over the thingsArray to generate
//    * a <p> element for each item and render them on the page
//    * below the button
//    */
// /*
//   function handleClick() {
//     const newThingArray = `Thing ${thingsArray.length + 1}`;
//     thingsArray.push(newThingArray);
//     console.log(thingsArray);

//     <p>{thingsArray}</p>;
//   }

//   const thingsElement = thingsArray.map((things, index) => {
//     return (
//       <div key={index}>
//         {/* <h3>{`Thing ${index + 1}`}</h3> */
// /*     <p>{things}</p>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <button onClick={handleClick}>Add Item</button>
//       {thingsElement}
//     </div>
//   );
// };
// export default Person;

// /*

// const thingsArray = ["Thing 1", "Thing 2", "Thing 3"];

// const thingsElement = thingsArray.map((things, index) => {
//   return (
//     <div key={index}>
//       <h3>{`Thing ${index + 1}`}</h3>
//       <p>{things}</p>
//     </div>
//   );
// });

// return <div>{thingsElement}</div>;

// // react state

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

//     function addItem() {
//         const newThingText = `Thing ${things.length + 1}`
//         setThings(prevState => [...prevState, newThingText])
//     }

//     const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// */

// // useState
// // import React from "react";

// // const Person = () => {
// //   const response = React.useState("YES");
// //   console.log(response);
// //   return (
// //     <div state>
// //       <h1 className="state--title">Is state important to know?</h1>
// //       <div className="state--value">
// //         <h1>{response[0]}</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Person;

// /*

// import React from "react";

// // useState array destructuring

// const Person = () => {
//   const [whateverWeWant ,func ]= React.useState("YES");
//   console.log(whateverWeWant);
//   return (
//     <div state>
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1>{whateverWeWant}</h1>
//       </div>
//     </div>
//   );
// };

// export default Person;

// challenge:

// import React from "react";

// // useState array destructuring

// const Person = () => {
//   const [isImportant, setIsImportant] = React.useState("YES");
//   // setIsImportant("No")
//   console.log(isImportant);

//   /**
//    * Challenge:
//    * 1. Create a function called `handleClick` that runs
//    *    setIsImportant("No")
//    * 2. add a click event listener to the div.state--value
//    *    that runs `handleClick` when the div is clicked.
//    */
// /*
//   function handleClick() {
//     setIsImportant("No");
//   }

//   return (
//     <div state>
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1 onClick={handleClick}>{isImportant}</h1>
//       </div>
//     </div>
//   );
// };

// export default Person;

// /*

//  const [isImportant, setIsImportant] = React.useState("YES");
//   // setIsImportant("No")
//   console.log(isImportant);

//   /**
//    * Challenge:
//    * 1. Create a function called `handleClick` that runs
//    *    setIsImportant("No")
//    * 2. add a click event listener to the div.state--value
//    *    that runs `handleClick` when the div is clicked.
//    */
// /*
//   function handleClick() {
//     setIsImportant("No");
//   }

//   return (
//     <div state>
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1 onClick={handleClick}>{isImportant}</h1>
//       </div>
//     </div>
//   );
// */

// /*
// Person.css

// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: "Inter", sans-serif;
//   background-color: #262626;
//   color: #d9d9d9;
//   padding: 20px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
// }
//   /* align-items: center; */

// /*
// .state {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .state--title {
//   text-align: center;
// }

// .state--value {
//   background-color: white;
//   height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #262626;
// }

// */

// // import React from "react";
// // import "./Person.css";

// // // useState array destructuring

// // const Person = () => {
// //   /**
// //    * Challenge: Set up state to track our count (initial value is 0)
// //    */
// //   const [count, setCount] = React.useState(0);

// //   function addButton() {
// //     console.log("Clicked add button!");
// //     setCount((prevCount) => prevCount + 1);
// //   }
// //   function subButton() {
// //     console.log("Clicked sub button!");
// //     setCount((prevCount) => prevCount - 1);
// //   }

// //   return (
// //     <div className="counter">
// //       <button onClick={subButton} className="counter--minus">
// //         –
// //       </button>
// //       <div className="counter--count">
// //         <h1>{count}</h1>
// //       </div>
// //       <button onClick={addButton} className="counter--plus">
// //         +
// //       </button>
// //     </div>
// //   );
// // };

// // export default Person;

// // import React from "react";
// // import "./Person.css";

// // // useState array destructuring

// // const Person = () => {
// //   /**
// //    * Challenge: Set up state to track our count (initial value is 0)
// //    */

// //   /**
// //    * Note: if you ever need the old value of state
// //    * to help you determine the new value of state,
// //    * you should pass a callback function to your
// //    * state setter function instead of using
// //    * state directly. This callback function will
// //    * receive the old value of state as its parameter,
// //    * which you can then use to determine your new
// //    * value of state.
// //    */
// //   const [count, setCount] = React.useState(0);

// //   function addButton() {
// //     console.log("Clicked add button!");
// //     setCount((prevCount) => prevCount + 1);
// //   }
// //   function subButton() {
// //     console.log("Clicked sub button!");
// //     setCount((prevCount) => prevCount - 1);
// //   }
// //   function resetButton() {
// //     setCount(count);

// //     console.log("reset");
// //   }

// //   return (
// //     <div className="counter">
// //       <button onClick={subButton} className="counter--minus">
// //         –
// //       </button>
// //       <div className="counter--count">
// //         <h1>{count}</h1>
// //       </div>
// //       <button onClick={addButton} className="counter--plus">
// //         +
// //       </button>
// //       <button onClick={resetButton} className="reset--plus">
// //         reset
// //       </button>
// //     </div>
// //   );
// // };

// // export default Person;

// // import React from "react";
// // import "./Person.css";

// // // useState array destructuring

// // const Person = () => {
// //   /**
// //    * Challenge: Set up state to track our count (initial value is 0)
// //    */

// //   /**
// //    * Note: if you ever need the old value of state
// //    * to help you determine the new value of state,
// //    * you should pass a callback function to your
// //    * state setter function instead of using
// //    * state directly. This callback function will
// //    * receive the old value of state as its parameter,
// //    * which you can then use to determine your new
// //    * value of state.
// //    */
// //   const [count, setCount] = React.useState(0);

// //   function addButton() {
// //     console.log("Clicked add button!");
// //     setCount((prevCount) => prevCount + 1);
// //   }
// //   function subButton() {
// //     console.log("Clicked sub button!");
// //     setCount((prevCount) => prevCount - 1);
// //   }
// //   function resetButton() {
// //     setCount(count);

// //     console.log("reset");
// //   }

// //   return (
// //     <div className="counter">
// //       <button onClick={subButton} className="counter--minus">
// //         –
// //       </button>
// //       <div className="counter--count">
// //         <h1>{count}</h1>
// //       </div>
// //       <button onClick={addButton} className="counter--plus">
// //         +
// //       </button>
// //       <button onClick={resetButton} className="reset--plus">
// //         reset
// //       </button>
// //     </div>
// //   );
// // };

// // export default Person;

// //the styling

// // * {
// //   box-sizing: border-box;
// // }

// // body {
// //   margin: 0;
// //   font-family: "Inter", sans-serif;
// //   background-color: #262626;
// //   color: #d9d9d9;
// //   padding: 20px;
// //   height: 100vh;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // }

// // .counter {
// //   display: flex;
// //   align-items: flex-end;
// // }

// // .counter > button {
// //   height: 50px;
// //   width: 50px;
// //   border-radius: 50%;
// //   border: none;
// //   cursor: pointer;
// //   background-color: #737373;
// //   color: #d9d9d9;
// //   font-size: 1.5rem;
// // }

// // .counter > button:hover {
// //   background-color: #404040;
// //   color: #d9d9d9;
// // }

// // .counter > button:focus {
// //   outline: none;
// // }

// // .counter--count {
// //   background-color: white;
// //   height: 100px;
// //   width: 100px;
// //   border-radius: 50%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   color: #262626;
// // }

// // .counter--plus {
// //   margin-left: -20px;
// // }

// // .counter--minus {
// //   margin-right: -20px;
// //   z-index: 1;
// // }

// // .reset--plus {
// //   display: flex;
// // }

// /*

// /**
//    * Challenge: Save the random meme URL in state
//    * - Create new state called `memeImage` with an
//    *   empty string as default
//    * - When the getMemeImage function is called, update
//    *   the `memeImage` state to be the random chosen
//    *   image URL
//    * - Below the div.form, add an <img /> and set the
//    *   src to the new `memeImage` state you created
//    */
// // const [memeImage, setMemeImage] = useState("");
// // function getMemeImage() {
// //   const memesArray = memesData.data.memes;
// //   const randomNumber = Math.floor(Math.random() * memesArray.length);
// //   // memesArray[randomNumber].url  <-- this line is incomplete!

// //   //chat gpt solution
// //   const randomMemeUrl = memesArray[randomNumber].url;
// //   setMemeImage(randomMemeUrl);

// //tutorial solution
// //the last two line above can be replaced with this single line below
// // setMemeImage(memesArray[randomNumber].url)
// // }

// // function getFee(isMember) {
// //   return isMember ? '$2.00' : '$10.00';
// // }

// // console.log(getFee(true));
// // Expected output: "$2.00"

// // console.log(getFee(false));
// // // Expected output: "$10.00"

// // console.log(getFee(null));
// // // Expected output: "$10.00"

// // return (
// //   <main>
// //     <div className="form">
// //       <input type="text" placeholder="Top text" className="form--input" />
// //       <input type="text" placeholder="Bottom text" className="form--input" />
// //       <button className="form--button" onClick={getMemeImage}>
// //         Get a new meme image 🖼
// //       </button>
// //     </div>

// //     {/*   chat gpt solution  */}
// //     {/* {memeImage && (
// //       <div className="meme">
// //         <img src={memeImage} alt="Random Meme" srcset="" />
// //       </div>
// //     )} */}

// //     {/* tutorial solution */}
// //     <img src={memeImage} alt="" srcset="" className="memes--image" />
// //   </main>
// // );
// // };

// // export default Memes;

// // */

// // person css
// // * {
// //   box-sizing: border-box;
// // }

// // body {
// //   font-family: "Karla", sans-serif;
// //   margin: 0;
// // }

// // main {
// //   padding: 36px;
// // }

// // .header {
// //   display: flex;
// //   align-items: center;
// //   height: 65px;
// //   background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
// //   color: white;
// //   padding: 20px;
// // }

// // .header--image {
// //   height: 100%;
// //   margin-right: 6px;
// // }

// // .header--title {
// //   font-size: 1.25rem;
// //   margin-right: auto;
// // }

// // .header--project {
// //   font-size: 0.75rem;
// //   font-weight: 500;
// // }

// // .form {
// //   display: grid;
// //   grid-template: 40px 40px / 1fr 1fr;
// //   gap: 17px;
// //   margin: 3rem;
// // }

// // .form--input {
// //   font-family: "Karla", sans-serif;
// //   border-radius: 5px;
// //   border: 1px solid #d5d4d8;
// //   text-indent: 5px;
// // }

// // .form--button {
// //   grid-column: 1 / -1;
// //   font-family: "Karla", sans-serif;
// //   border-radius: 5px;
// //   background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
// //   color: white;
// //   border: none;
// //   cursor: pointer;
// // }

// // Going out teneray challenge
// // function Person() {
// //   /**
// //    * Challenge: Replace the if/else below with a ternary
// //    * to determine the text that should display on the page
// //    */
// //   const isGoingOut = true;

// //   // let answer; // Use ternary here
// //   // if (isGoingOut === true) {
// //   //   answer = "Yes";
// //   // } else {
// //   //   answer = "No";
// //   // }

// //   //solution
// //   // let answer = isGoingOut? "yes" : "no";
// //   /**
// //    * Challenge: move our ternary directly inside of the JSX
// //    * so the "Yes" and "No" are determined inside the <h1>
// //    *
// //    * Hint: you will no longer need the `answer` variable
// //    */

// //   return (
// //     <main>
// //       <div className="state">
// //         <h1 className="state--title">Do I feel like going out tonight?</h1>
// //         <div className="state--value">
// //           <h1>{isGoingOut? "Yes" : "No"}</h1>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// // export default Person;

// // // isGoingOut
// //  /**
// //    * Challenge:
// //    * - Initialize state for `isGoingOut` as a boolean
// //    * - Make it so clicking the div.state--value flips that
// //    *   boolean value (true -> false, false -> true)
// //    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
// //    */

// //  const [isGoingOut, setIsGoingOut] = useState(true);

// //  function handleClick() {
// //    console.log("State changing!");
// //    setIsGoingOut(!isGoingOut);
// //  }
// //  return (
// //    // so now let's make our code more readable
// //    // by changing the properties from div to buttons where necessary

// //    <div className="state">
// //      <h1 className="state--title">Do I feel like going out tonight?</h1>
// //      <button className="state--value" onClick={handleClick}>
// //        {isGoingOut ? "Yes" : "No"}
// //      </button>
// //    </div>
// //  );
// // }

// // export default Person;

// // css - isGoingOut
// // * {
// //   box-sizing: border-box;
// // }

// // body {
// //   margin: 0;
// //   font-family: "Inter", sans-serif;
// //   background-color: #262626;
// //   color: #d9d9d9;
// //   padding: 20px;
// //   height: 100vh;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // }

// // .state {
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // }

// // .state--title {
// //   text-align: center;
// //   margin-bottom: 40px;
// // }

// // .state--value {
// //   background-color: white;
// //   height: 100px;
// //   width: 100px;
// //   border-radius: 50%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   color: #262626;
// //   cursor: pointer;
// //   font-size: 2rem;
// //   font-weight: bold;
// //   font-family: "Inter", sans-serif;
// //   border: none;
// // }

// // let's build from scratch
// /**
//  * Challenge: Convert the code below to use an array
//  * held in state instead of a local variable. Initialize
//  * the state array with the same 2 items below
//  *
//  * Don't worry about fixing `addItem` quite yet.
//  */
// // const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

// // function addItem() {
// //   // We'll work on this next
// //   // const newThingText = `Thing ${thingsArray.length + 1}`
// //   // thingsArray.push(newThingText)
// //   // document.getElementById()
// //   // console.log(thingsArray)
// //   setThingsArray((prevThingsArray) => [
// //     ...prevThingsArray,
// //     `Thing ${prevThingsArray.length + 1}`,
// //   ]);
// // }

// // const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

// // modal stuff

// // import React from "react";
// // import {
// //   Modal,
// //   ModalOverlay,
// //   ModalContent,
// //   ModalHeader,
// //   ModalFooter,
// //   ModalBody,
// //   ModalCloseButton,
// // } from "@chakra-ui/react";
// // import { Heading, Text, Box, Flex } from "@chakra-ui/react";

// // const ViewSchoolModal = ({ isOpen, onClose }) => {
// //   //Data
// //   const courseDetails = {
// //     title: "Mathematics I",
// //     description:
// //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ghhhhghghghggggggggggggggggggg",
// //     instructor: "John Doe",
// //     duration: "4 weeks",
// //   };

// //   return (
// //     <Flex justifyContent={"center"} alignItems={"center"} isCenter>
// //       <Modal isOpen={isOpen} onClose={onClose} isCenter>
// //         <ModalOverlay />
// //         <ModalContent>
// //           <ModalHeader MarginBottom="50px">
// //             <Flex>{courseDetails.title}</Flex>
// //             <Flex gap={5} fontWeight={"light"} fontSize="14px">
// //               <Text fontsize="xl">enrolment</Text>
// //               <Text fontsize="xl">daniel chibuzor</Text>
// //             </Flex>

// //             <Text fontSize="18px">Mathematical Methods</Text>
// //           </ModalHeader>

// //           <ModalCloseButton />
// //           <ModalBody fontSize="14px">
// //             <Box>
// //               <Text>Course Materials</Text>
// //               <Flex gap="3">
// //                 <Text>3 modules</Text>
// //                 <Text>|</Text>
// //                 <Text>24 lessons</Text>
// //               </Flex>
// //               <Box>
// //                 <Flex display={"block"}>
// //                   <Flex gap="2" marginTop={7}>
// //                     <Text>Module 1</Text>
// //                     <Text>Introduction to Maths Method</Text>
// //                     <Text fontWeight={"light"}>-10lessons-25mins</Text>
// //                   </Flex>
// //                   <Flex gap="2">
// //                     <Text>Module 2</Text>
// //                     <Text>Introduction to Math Method</Text>
// //                     <Text fontWeight={"light"}>-10lessons-25mins</Text>
// //                   </Flex>
// //                   <Flex gap="2">
// //                     <Text>Module 3</Text>
// //                     <Text>Introduction to Math Method</Text>
// //                     <Text fontWeight={"light"}>-10lessons-25mins</Text>
// //                   </Flex>
// //                 </Flex>
// //               </Box>
// //             </Box>
// //             {/* <p>{courseDetails.description}</p>
// //             <p>
// //               <strong>Instructor:</strong> {courseDetails.instructor}
// //             </p>
// //             <p>
// //               <strong>Duration:</strong> {courseDetails.duration}
// //             </p> */}
// //           </ModalBody>
// //           <ModalFooter></ModalFooter>
// //         </ModalContent>
// //       </Modal>
// //     </Flex>
// //   );
// // };

// // export default ViewSchoolModal;

// //CoursesTableRowActions

// //conditional statement
// // function getFee(isMember) {
// //   return isMember ? "$2.00" : "$10.00";
// // }

// // console.log(getFee(true));
// // // Expected output: "$2.00"

// // console.log(getFee(false));
// // // Expected output: "$10.00"

// // console.log(getFee(null));
// // // Expected output: "$10.00"
// // //so  what's up

// // contact jsxxx

// // const [contact, setContact] = React.useState({
// //   firstName: "John",
// //   lastName: "Doe",
// //   phone: "+1 (719) 555-1212",
// //   email: "itsmyrealname@example.com",
// //   isFavorite: false,
// // });
// // /**
// //  * Challenge: Fill in the values in the markup
// //  * using the properties of our state object above
// //  * (Ignore `isFavorite` for now)
// //  */

// // let starIcon = contact.isFavorite
// //   ? "../images/star-filled.png"
// //   : "../images/star-empty.png";

// // function toggleFavorite() {
// //   console.log("Toggle Favorite");
// //   setContact((prevContact) => {
// //     return {
// //       ...prevContact,
// //       isFavorite: !prevContact.isFavorite,
// //     };
// //   });
// // }
// // return (
// //   <main>
// //     <article className="card">
// //       <img src="./images/user.png" className="card--image" />
// //       <div className="card--info">
// //         <img
// //           src={`../images/${starIcon}`}
// //           className="card--favorite"
// //           onClick={toggleFavorite}
// //         />
// //         <h2 className="card--name">
// //           {contact.firstName} {contact.lastName}
// //         </h2>
// //         <p className="card--contact">{contact.phone}</p>
// //         <p className="card--contact">{contact.email}</p>
// //       </div>
// //     </article>
// //   </main>
// // );
// // }

// // import React, { useState } from "react";
// // import "./Person.css";
// // import Count from "../Count/Count";

// // // import memesData from "../memesData.js"

// // function Person() {
// //   //  Passing state as props

// //   const [count, setCount] = React.useState(0);
// //   function add() {
// //     setCount((prevCount) => prevCount + 1);
// //   }
// //   function subtract() {
// //     setCount((prevCount) => prevCount - 1);
// //   }
// //   console.log("App component rendered!");
// //   return (
// //     <main>
// //       <div className="counter">
// //         <button className="counter--minus" onClick={subtract}>
// //           –
// //         </button>
// //         <Count number={count} />
// //         <button className="counter--plus" onClick={add}>
// //           +
// //         </button>
// //       </div>
// //     </main>
// //   );
// // }

// // export default Person;

// // // isFavorite ? "./images/star-empty.png" : "./images/star-filled.png"

// //respective css
// /* * {
//   box-sizing: border-box;
// }

// body {
//   background-color: whitesmoke;
//   margin: 0;
//   font-family: "Inter", sans-serif;
// }

// main {
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .card {
//   width: 200px;
//   border: 1px solid lightgray;
//   border-radius: 10px;
//   height: 350px;
//   box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
//   -webkit-box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
//   -moz-box-shadow: 5px 5px 5px 1px rgba(120, 120, 120, 0.44);
// }

// .card--image {
//   width: 100%;
//   padding: 10%;
//   padding-bottom: 0;
// }

// .card--name {
//   margin-block: 13px;
//   color: #333333;
// }

// .card--info {
//   padding: 10px;
// }

// .card--favorite {
//   width: 25px;
//   cursor: pointer;
// }

// .card--contact {
//   font-size: 0.75rem;
//   color: gray;
//   margin-block: 7px;
// } */

// /* * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: 'Inter', sans-serif;
//   background-color: #262626;
//   color: #D9D9D9;
//   padding: 20px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .counter {
//   display: flex;
//   align-items: flex-end;
// }

// .counter > button {
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   border: none;
//   cursor: pointer;
//   background-color: #737373;
//   color: #D9D9D9;
//   font-size: 1.5rem;
// }

// .counter > button:hover {
//   background-color: #404040;
//   color: #D9D9D9;
// }

// .counter > button:focus {
//   outline: none;
// }

// .counter--count {
//   background-color: white;
//   height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #262626;
// }

// .counter--plus {
//   margin-left: -20px;
// }

// // .counter--minus {
// //   margin-right: -20px;
// //   z-index: 1;
// // /

//raising state
// import React, { useState } from "react";
// import "./App.css";
// // import NavBar from "./components/NavBar/NavBar";
// // import Hero from "./components/Hero/Hero";
// // import Person from "./components/Person/Person";
// // import Star from "./components/Star/Star";
// import Body from "./components/Body/Body";
// import Header from "./components/Header/Header";
// // import Memes from "./components/Memes/Memes";
// // import Modal from "./components/Modal/Modal";

// const App = () => {
//   const [user, setUser] = useState("Bob");
//   return (
//     <div>
//       {/* <NavBar /> */}
//       <Header user={user} />
//       {/*  <Hero /> */}
//       {/* <Person /> */}
//       {/* <Star /> */}
//       {/* <Memes /> */}
//       {/* <Modal /> */}
//       <Body user={user} setUser={setUser} />
//     </div>
//   );
// };

// export default App;

// {
//   /* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React </h1>
//       <h2>1 billion +  1 billion?</h2>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>   */
// }

// import React, { useState } from "react";
// import "./Person.css";
// // import Star from "../Star/Star";
// // import Count from "../Count/Count";

// // import memesData from "../memesData.js"

// function Person() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: true,
//   });

//   /**
//    * Challenge: Move the star image into its own component (Star)
//    * - It should receive a prop called `isFilled` that it
//    *   uses to determine which icon it will display
//    * - Import and render that component, passing the value of
//    *   `isFavorite` to the new `isFilled` prop.
//    * - Don't worry about the abiliity to flip this value quite yet.
//    *   Instead, you can test if it's working by manually changing
//    *   `isFavorite` in state above.
//    */

// //   function toggleFavorite() {
// //     setContact((prevContact) => ({
// //       ...prevContact,
// //       isFavorite: !prevContact.isFavorite,
// //     }));
// //   }
// //   return (
// //     <main>
// //       <article className="card">
// //         <img src="userMaleBlack.png" className="card--image" />
// //         <div className="card--info">
// //           <Star isFilled={contact.isFavorite} onClick={toggleFavorite} />

// //           <h2 className="card--name">
// //             {contact.firstName} {contact.lastName}
// //           </h2>
// //           <p className="card--contact">{contact.phone}</p>
// //           <p className="card--contact">{contact.email}</p>

// //         </div>

// //       </article>

// //     </main>
// //   );
// // }

// // // export default Person;

/*
Okayyy like react router

1 route - wwww.sgttw.com
2 route - www. sgttw.com/about
3 route - www.sgttw.com/about/me.



*/

// import React from "react"

// export default function Box(props) {
//     const [on, setOn] = React.useState(props.on)

//     const styles = {
//         backgroundColor: on ? "#222222" : "transparent"
//     }

//     function toggle() {
//         setOn(prevOn => !prevOn)
//     }

//     return (
//         <div style={styles} className="box" onClick={toggle}></div>
//     )
// }

//drop down menu with chakra

// import {
//   Flex,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   IconButton,
// } from "@chakra-ui/react";
// import React from "react";
// // Okayy let's add an hamburger icon from chakra
// import { HamburgerIcon } from "@chakra-ui/icons";

// // color mode switcher
// import { ColorModeSwitcher } from "../../ColorModeSwitcher";
// const NavBar = () => {
//   // more of like the Working Table
//   // Creating variables w/Js that you can below
//   //Using React HoOks , from its library below
//   return (
//     <>
//       {/*more of like the Fiinished Product*/}

//       <Flex bg="gray.300" _dark={{ bg: "RGBA(255,255,255,0.48)" }}>
//         <ColorModeSwitcher />
//         <Menu>
//           <MenuButton
//             as={IconButton}
//             aria-label="Options"
//             icon={<HamburgerIcon />}
//             variant={"outline"}
//           />

//             <MenuList>
//               <MenuItem>Stuff 1</MenuItem>
//               <MenuItem>Stuff 1</MenuItem>
//               <MenuItem>Stuff 1</MenuItem>
//             </MenuList>
//         </Menu>
//       </Flex>
//     </>
//   );
// };

// export default NavBar;

//Box

// import React from "react"

// export default function Box(props) {
//     /**
//      * Challenge: Create state controlling whether
//      * this box is "on" or "off". Use the incoming
//      * `props.on` to determine the initial state.
//      *
//      * Create an event listener so when the box is clicked,
//      * it toggles from "on" to "off".
//      *
//      * Goal: clicking each box should toggle it on and off.
//      */
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "transparent"
//     }

//     return (
//         <div style={styles} className="box"></div>
//     )
// }

{
  /* <button onClick={()=> props.setUser("Jane")}>Set User to Jane</button> */
}

{
  /* <div
  key={square.id}
  style={{
    fontSize: "2rem",
    paddingLeft: "1rem",
    height: "3rem",
    border: "2px solid black",
    display: "inline-block",
    width: "3rem",
    marginRight: "2rem",
    marginBottom: "2rem",
  }}
  >
  {/* Render some content inside the div */
}
{
  /* <p>{square.on ? "On" : "Off"}</p> */
}
// </div> */}

//next challenge
//on click on the box it should flip from true to false and false to true

// Boxes
// import React, { useState } from "react";
// import { Box } from "@chakra-ui/react";
// import boxesData from "../boxesData";
// const Boxes = () => {
//   // let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
//   // const ariaLabel = props.isFilled ? "Mark as favorite" : "Unmark as favorite";
//   /**
//    * Challenge part 1:
//    * 1. Initialize state with the default value of the
//    *    array pulled in from boxes.js
//    * 2. Map over that state array and display each one
//    *    as an empty square (black border, transparent bg color)
//    *    (Don't worry about using the "on" property yet)
//    */
//   const [squares, setSquares] = useState(boxesData);
//   // const squareElement = squares.map((box) => <div key={box.id}>d</div>);

//   const boxElements = squares.map((box) => (
//     <div
//       key={box.id}
//       // className={`box ${box.on ? "on" : "off"}`}
//     > <p>6 boxes should be here</p></div>

//   ));

//   return (
//     <Box
//       fontSize={"2rem"}
//       paddingLeft={"1rem"}
//       height={"10rem"}
//       border={"2px solid black"}
//       display={"inline-block"}
//     >
//       <h1>Boxes will go here</h1>
//       <h2>{boxElements}</h2>
//     </Box>
//   );
// };

// export default Boxes;

// import React from "react";
// import { Text } from "@chakra-ui/react";
// const Boxes = (props) => {
//   // let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
//   // const ariaLabel = props.isFilled ? "Mark as favorite" : "Unmark as favorite";
//   return (
//     <Text>
//       <button
//         onClick={props.onClick}
//         aria-label={ariaLabel}
//         aria-pressed={props.isFilled}
//         className="card-favorite-button"
//       >
//         <img src={starIcon} className="card--favorite" />
//       </button>
//       dfd
//     </Text>
//   );
// };

// export default Boxes;

// // Box.jsx perfectly working from chat
// import React, { useState } from "react";

// const Box = (props) => {
//   const styles = {
//     backgroundColor: props.on ? "green" : "orangeRed",
//     width: "100px",
//     height: "100px",
//     border: "1px solid black",
//     margin: "10px",
//     borderRadius: "20px 0 ",
//   };

//   const handleClick = () => {
//     console.log("Clicked box id:", props.id); // Log the id of the clicked box
//     props.handleClick(props.id);
//   };

//   return (
//     <div>
//       <div style={styles} className="box" onClick={handleClick}></div>
//     </div>
//   );
// };

// export default Box;

// import React from "react";
// import boxesData from "../boxesData";

// import Box from "../Box/Box";

// const Boxes = () => {
//   const [squares, setSquares] = React.useState(boxesData);

//   const handleClick = (id) => {
//     console.log("Clicked box id:", id); // Log the id of the clicked box
//     setSquares((prevSquares) =>
//       prevSquares.map((square) =>
//         square.id === id ? { ...square, on: !square.on } : square
//       )
//     );
//   };

//   const squareElements = squares.map((square) => (
//     <Box
//       key={square.id}
//       on={square.on}
//       id={square.id}
//       handleClick={handleClick}
//     />
//   ));
//   console.log("Number of squares:", squares.length);

//   return <main>{squareElements}</main>;
// };

// export default Boxes;

//  Box component working perfectly from scrimba
// import React, { useState } from "react";

// const Box = (props) => {
//   const styles = {
//     backgroundColor: props.on ? "green" : "orangeRed",
//     width: "100px",
//     height: "100px",
//     border: "1px solid black",
//     margin: "10px",
//     borderRadius: "20px 0 ",
//   };

//   // const [on, setOn] = useState(props.on);

//   function handleClick(id) {
//     // console.log("this state should flip");
//     console.log("Clicked box from box component:", props.id);
//     props.handleClick(props.id);
//   }
//   // console.log(props.on);

//   return (
//     <div>
//       {" "}
//       <div style={styles} className="box" onClick={handleClick}>
//         {" "}
//       </div>
//       {/* <div> {squares.on}</div> */}
//     </div>
//   );
// };

// export default Box;

// Boxex component working from scrimba
// import React from "react";
// import boxesData from "../boxesData";

// import Box from "../Box/Box";

// const Boxes = () => {
//   const [squares, setSquares] = React.useState(boxesData);

//   const handleClick = (id) => {
//     setSquares((prevSquares) =>
//       prevSquares.map((square) =>
//         square.id === id ? { ...square, on: !square.on } : square
//       )
//     );
//   };

//   const squareElements = squares.map((square) => (
//     <Box
//       key={square.id}
//       on={square.on}
//       id={square.id}
//       handleClick={handleClick}
//     />
//   ));
//   console.log("Number of squares:", squares.length);

//   return <main>{squareElements}</main>;
// };

// export default Boxes;

// The same Boxes component but using for loop
// import React from "react";
// import boxesData from "../boxesData";

// import Box from "../Box/Box";

// const Boxes = () => {
//   const [squares, setSquares] = React.useState(boxesData);

//   // const handleClick = (id) => {
//   //   setSquares((prevSquares) =>
//   //     prevSquares.map((square) =>
//   //       square.id === id ? { ...square, on: !square.on } : square
//   //     )
//   //   );
//   // };
//   // let's do this alternatively
//   function handleClick(id) {
//     setSquares((prevSquares) => {
//       const newSquares = [];
//       for (let i = 0; i < prevSquares.length; i++) {
//         const currentSquare = prevSquares[i];
//         if (currentSquare.id === id) {
//           const updatedSquare = {
//             ...currentSquare,
//             on: !currentSquare.on,
//           };
//           newSquares.push(updatedSquare);
//         } else {
//           newSquares.push(currentSquare);
//         }
//       }
//       return newSquares;
//     });
//   }

//   const squareElements = squares.map((square) => (
//     <Box
//       key={square.id}
//       on={square.on}
//       id={square.id}
//       handleClick={handleClick}
//     />
//   ));
//   // console.log("Number of squares:", squares.length);

//   return <main>{squareElements}</main>;
// };

// export default Boxes;

//Jokes

// congruent App
// import React from "react";

// import Joke from "../Joke/Joke";
// import jokesData from "../components/jokesData";
// const Apps = () => {
//   const jokeElements = jokesData.map((joke) => {
//     return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
//   });
//   return <div>{jokeElements}</div>;
// };

// export default Apps;
// ----------------------
// import React, { useState } from "react";
// import "./Joke.css";
// const Joke = (props) => {
//   //conditional rendering

//   /**
//    * Challenge:
//    * - Create state `isShown` (boolean, default to `false`)
//    * - Add a button that toggles the value back and forth
//    */

//   /**
//    * Updated Challenge:
//    * - Only display the punchline paragraph if `isShown` is true
//    */
//   const [isShown, setIsShown] = useState(true);
//   function handleClick() {
//     console.log("value toggler button was clicked!");
//     setIsShown((prevIsShown) => !prevIsShown);
//     console.log(isShown);
//   }
//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       <p>{isShown && props.punchline}</p>
//       <div>
//         <button onClick={handleClick}>Show Punchline</button>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Joke;

// import jokesData from "../components/jokesData";
// const Apps = () => {
//   const [messages, setMessages] = React.useState([""]);
//   /**
//    * Challenge:
//    * - Only display the <h1> below if there are unread messages
//    */
//   return (
//     //to display h1 only when there are no messages
//     <div>
//       {(messages.length > 1 && (
//         <h1>You have {messages.length} unread messages!</h1>
//       )) || <h1>you have no unread messages</h1>}

//     </div>
//   );
// };
// export default Apps;

//Joke jsx
// import React, { useState } from "react";
// import "./Joke.css";
// import { Text } from "@chakra-ui/react";
// const Joke = (props) => {
//   //conditional rendering

//   /**
//    * Challenge:
//    * - Create state `isShown` (boolean, default to `false`)
//    * - Add a button that toggles the value back and forth
//    */

//   /**
//    * Updated Challenge:
//    * - Only display the punchline paragraph if `isShown` is true
//    */
//   const [isShown, setIsShown] = useState(true);
//   function handleClick() {
//     console.log("value toggler button was clicked!");
//     setIsShown((prevIsShown) => !prevIsShown);
//     console.log(isShown);
//   }
//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       {isShown && <p>{props.punchline}</p>}

//       {/* <button onClick={handleClick}>
//         {isShown ? <Text>hide punchline</Text> : <Text>show punchline</Text>}
//       </button> */}
//       {/*  alternatively  ----------------------------*/}
//       {isShown && <button onClick={handleClick}> hide punchline</button>}

//       {!isShown && <button onClick={handleClick}> show punchline</button>}

//       <hr />
//     </div>
//   );
// };

// export default Joke;

// // {isShown && <button onClick={handleClick}>Hide Punchline</button>}

//Apps jsx
// import React from "react";
// import "./Apps.css";
// import { Text } from "@chakra-ui/react";
// import Joke from "../Joke/Joke";
// import jokesData from "../components/jokesData";
// const Apps = () => {
//   const jokeElements = jokesData.map((joke) => {
//     return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
//   });
//   return (
//     <div>
//       <Text color={""}>{jokeElements}</Text>
//     </div>
//   );
// };
// export default Apps;

//-------------------------------------------

// import React from "react";
// import "./Apps.css";
// import { Text } from "@chakra-ui/react";
// // import Joke from "../Joke/Joke";
// // import jokesData from "../components/jokesData";
// const Apps = () => {
//   const [messages, setMessages] = React.useState(["a", "b"]);
/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there are > 0 unread messages, display "You have <n> unread
 *   message(s)"
 *      - If there's exactly 1 unread message, it should read "message"
 *        (singular)
 */
// return (
//   <div>
// {
/* <Text color={"black"} p={"10"} display={"flex"} justifyContent={"center"}> */
// }
// {
/* * - If there are no unread messages, display "You're all caught up!"
        {messages.length === 0 && <Text>You're all caught up</Text>}

        {/* * - If there are > 0 unread messages, display "You have <n> unread
         *   message(s)" */
// }

// {
/* {messages.length > 0 && (
          <Text>You have {messages.length} unread messages </Text>
        )}
        {/* *      - If there's exactly 1 unread message, it should read "message"
         *        (singular) */
// }
// {
/* {/* {messages.length == 1 && <Text> message</Text>} */
// }
// {
/* </Text > */
// }

// {
/*----------------------*/
// }
// {
/* <Text color={"black"} display={"flex"} justifyContent={"center"} fontWeight={"bold"}>
        {messages.length === 0 ? (
          <p>You're all caught up</p>
        ) : (
          <p>
            you have {messages.length} unread{" "}
            {messages.length === 1 ? "message" : "messages"}{" "}
          </p>
        )}
      </Text> */
// }

//Fprm Data

// const [formData, setFormData] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   comments: "",
//   isFriendly: true,
//   employment: "",
//   favColor: "",
// });

// //useId - a react hook for generating unique IDs that
// //can be passed to accessibility attributes
// const id = React.useId();

// // let's log out our formData
// // console.log(formData.favColor);
// // console.log(formData);

// function handleChange(event) {
//   // setFormData((prevFormData) => {
//   //   return {
//   //     ...prevFormData,
//   //     [event.target.name]: event.target.value,
//   //   };
//   // });

//   // -------------------------------------------Alt.
//   setFormData((prevFormData) => {
//     const { name, value, type, checked } = event.target;
//     return {
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     };
//   });
// }
// function handleSubmit(event) {
//   //the preventDefault actually allows you to prevent the page data
//   //from deleting the values that was inputted into the fields
//   event.preventDefault();
//   console.log(formData);
//   // submitToApi(formData);
// }
// return (
//   <div>
//     <Flex
//       color={"black"}
//       borderRadius={"20px"}
//       textIndent={"10px"}
//       height={"50px"}
//       mt={10}
//       ml={10}
//       border={"auto solid gray"}
//     >
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor={id + "-firstName"}>firstName</label>
//         <input
//           name="firstName"
//           type="text"
//           onChange={handleChange}
//           value={formData.firstName}
//           id={id + "-firstName"}
//         />
//         <br />
//         <label htmlFor={id + "-lastName"}>lastName</label>

//         <input
//           name="lastName"
//           type="text"
//           onChange={handleChange}
//           value={formData.lastName}
//           id={id + "-lastName"}
//         />
//         <br />
//         <label htmlFor="">email</label>

//         <input
//           name="email"
//           type="email"
//           onChange={handleChange}
//           value={formData.email}
//         />
//         <br />
//         <label htmlFor={id + "-comments"}>Comments</label>

//         <textarea
//           name="comments"
//           value={formData.comments}
//           onChange={handleChange}
//           id={id + "-comments"}
//         />
//         <br />
//         <input
//           type="checkbox"
//           id={id + "-isFriendly"}
//           checked={formData.isFriendly}
//           name="isFriendly"
//           onChange={handleChange}
//         />
//         <label htmlFor="isFriendly">Are you freindly?</label>
//         <br />

//         <fieldset>
//           <legend>Current employment status</legend>

//           <input
//             type="radio"
//             id={id + "-unemployed"}
//             onChange={handleChange}
//             value="unemployed"
//             name="employment"
//             checked={formData.employment === "unemployed"}
//           />
//           <label htmlFor="unemployed">Unemployed</label>
//           <br />

//           <input
//             type="radio"
//             id={id + "-part-time"}
//             onChange={handleChange}
//             value="part-time"
//             checked={formData.employment === "part-time"}
//             name="employment"
//           />
//           <label htmlFor="part-time">Part-time</label>
//           <br />

//           <input
//             type="radio"
//             id={id + "-full-time"}
//             onChange={handleChange}
//             value="full-time"
//             name="employment"
//             checked={formData.employment === "full-time"}
//           />
//           <label htmlFor="full-time">Full-time</label>
//           <br />
//         </fieldset>

//         <br />

//         <label htmlFor="favColor">What is your favorite color?</label>
//         <br />
//         <select
//           id={id + "-favColor"}
//           value={formData.favColor}
//           onChange={handleChange}
//           name="favColor"
//         >
//           <option value=" "> --Choose Color--</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//           <option value="green">Green</option>
//           <option value="blue">Blue</option>
//           <option value="indigo">Indigo</option>
//           <option value="violet">Violet</option>
//         </select>
//         <br />
//         <button>Submit</button>
//       </form>
//     </Flex>
//   </div>
// );
// };

// export default Form;

// import { Flex } from "@chakra-ui/react";

/**
 * Challenge: Connect the form to local state
 *
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */
// function handleSubmit(event) {
//   event.preventDefault();
// }

//-----------------------------------------------------------
// import React, { useState } from "react";

// const Form = () => {
//   //creating a state object to store values
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     newsletter: true,
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (formData.password === formData.passwordConfirm) {
//       console.log("Successfully signed up");
//     } else {
//       console.log("Passwords do not match");
//       return; // this return statement will not allow not allow the news
//       //letter toast message if password do not match
//     }

//     if (formData.joinedNewsletter) {
//       console.log("Thanks for signing up for our newsletter!");
//     }
//   };

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleChange}>
//         <input
//           type="email"
//           placeholder="Email address"
//           className="form--input"
//           onChange={handleChange}
//           name="email"
//           value={formData.email}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form--input"
//           onChange={handleChange}
//           name="password"
//           value={formData.password}
//         />
//         <input
//           type="password"
//           placeholder="Confirm password"
//           className="form--input"
//           onChange={handleChange}
//           name="confirmPassword"
//           value={formData.confirmPassword}
//         />

//         <div className="form--marketing">
//           <input
//             id="okayToEmail"
//             type="checkbox"
//             onChange={handleChange}
//             name="newsletter"
//             checked={formData.newsletter}
//           />
//           <label htmlFor="okayToEmail">I want to join the newsletter</label>
//         </div>
//         <button className="form--submit" onClick={handleSubmit}>
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

// ---------------challengeeeeeeeeeeeeee
// import React from "react"

// export default function App() {

//     /**
//      * Challenge: Connect the form to local state
//      *
//      * 1. Create a state object to store the 4 values we need to save.
//      * 2. Create a single handleChange function that can
//      *    manage the state of all the inputs and set it up
//      *    correctly
//      * 3. When the user clicks "Sign up", check if the
//      *    password & confirmation match each other. If
//      *    so, log "Successfully signed up" to the console.
//      *    If not, log "passwords to not match" to the console.
//      * 4. Also when submitting the form, if the person checked
//      *    the "newsletter" checkbox, log "Thanks for signing
//      *    up for our newsletter!" to the console.
//      */

//     function handleSubmit(event) {
// the functioin , event.prevent default is used to prevent the default
//behaviour of an event, such as form submission - onchange,  updates
//         event.preventDefault()
//     }

//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email address"
//                     className="form--input"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="form--input"
//                 />
//                 <input
//                     type="password"
//                     placeholder="Confirm password"
//                     className="form--input"
//                 />

//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"

//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>
//     )
// }

// the styles------------------------------
// * {
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   background-color: #639;
//   height: 100vh;
//   font-family: 'Inter', sans-serif;
// }

// .form-container {
//   height: 100vh;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .form {
//   background-color: white;
//   padding: 50px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
// }

// .form--input {
//   width: 100%;
//   margin-bottom: 20px;
//   height: 40px;
//   border-radius: 5px;
//   border: 1px solid gray;
//   padding: 5px;
//   font-family: 'Inter', sans-serif;
// }

// .form--submit {
//   width: 50%;
//   padding: 10px;
//   border-radius: 5px;
//   color: white;
//   background-color: #639;
//   border: none;
//   cursor: pointer;
// }

// .form--marketing {
//   display: flex;
//   margin-bottom: 20px;
//   align-items: center;
// }

// .form--marketing > input {
//   margin-right: 10px;
// }

// --------------memes
// import React, { useState } from "react";
// import "./Memes.css";
// import memesData from "../memesData";
// const Memes = () => {
//   /**
//    * Challenge: Update our state to save the meme-related
//    * data as an object called `meme`. It should have the
//    * following 3 properties:
//    * topText, bottomText, randomImage.
//    *
//    * The 2 text states can default to empty strings for now,
//    * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
//    *
//    * Next, create a new state variable called `allMemeImages`
//    * which will default to `memesData`, which we imported above
//    *
//    * Lastly, update the `getMemeImage` function and the markup
//    * to reflect our newly reformed state object and array in the
//    * correct way.
//    */
//   // const [memeImage, setMemeImage] = useState("");
//   // state meme object
//   const [meme, setMeme] = useState({
//     topText: "",
//     bottomText: "",
//     randomImage: "http://i.imgflip.com/1bij.jpg",
//   });

//   // state allMemeImages
//   const [allMemeImages, setAllMemeImages] = useState(memesData);

//   function getMemeImage() {
//     const memesArray = allMemeImages.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArray.length);
//     // memesArray[randomNumber].url  <-- this line is incomplete!
//     const url = memesArray[randomNumber].url;
//     setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
//   }

//   return (
//     <main>
//       <div className="form">
//         <input type="text" placeholder="Top text" className="form--input" />
//         <input type="text" placeholder="Bottom text" className="form--input" />
//         <button className="form--button" onClick={getMemeImage}>
//           Get a new meme image 🖼
//         </button>
//       </div>

//       {/*   chat gpt solution  */}
//       {/* {memeImage && (
//         <div className="meme">
//           <img src={memeImage} alt="Random Meme" srcset="" />
//         </div>
//       )} */}

//       {/* tutorial solution */}
//       <div className="meme">
//         <img src={meme.randomImage} className="meme--image" />
//         <h2 className="meme--text top">One does not simply</h2>
//         <h2 className="meme--text bottom">Walk into Mordor</h2>
//       </div>
//     </main>
//   );
// };

// export default Memes;

/*   useEffect
//-------------------------------------------

import React, { Component, useState } from "react";
import "./Apps.css";
// import Memes from "../components/Memes/Memes";
// import Header from "../components/Header/Header";
// import Joke from "../Joke/Joke";
// import jokesData from "../components/jokesData";
const Apps = () => {
  //making APi calls
  const [starWarsData, setStarWarsData] = useState({});
  //1. GET the data (fetch) / AXIOUS
  //2. Save the data to state

  // let's log component rendered
  console.log("Component rendered");

  //// to start this off, let's do a fetch request to the starwars APi
  //// info about movies and stuff like that
  fetch("https://swapi.dev/api/people/1")
    //then resolve the promise gotten back from fetch
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  // fetch("https://swapi.dev/api/people", {
  //   agent: new https.Agent({ rejectUnauthorized: false }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => setStarWarsData(data))
  //   .catch((err) => console.error(err));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> </button>
    </div>
  );
};

export default Apps;

// import React, { useState, useEffect } from "react";
// import "./Apps.css";

// const Apps = () => {
//   const [starWarsData, setStarWarsData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/")
//       .then((res) => res.json())
//       .then((data) => setStarWarsData(data));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// };

// export default Apps;

// import React, { useEffect, useState } from "react";

// export default function Apps() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

*/

/*
fetching data from APi

//-------------------------------------------

import React, { Component, useEffect, useState } from "react";
import "./Apps.css";
// import Memes from "../components/Memes/Memes";
// import Header from "../components/Header/Header";
// import Joke from "../Joke/Joke";
// import jokesData from "../components/jokesData";
const Apps = () => {
  //making APi calls
  const [starWarsData, setStarWarsData] = useState({});

  //let's come up with the simplest form of counter app
  const [count, setCount] = useState(0);

  // let's add some inline styles
  const styles = {
    border: "2px solid #000",
    padding: "5px",
    borderRadius: "8px",
    width: "4rem",
    background: "whitesmoke",
    margin: "1rem",
  };

  //1. GET the data (fetch) / AXIOUS
  //2. Save the data to state

  // let's log component rendered
  // console.log("Component rendered");

  useEffect(() => {
    //// to start this off, let's do a fetch request to the starwars APi
    //// info about movies and stuff like that
    fetch(`https://swapi.dev/api/people/ ${count}`)
      //then resolve the promise gotten back from fetch
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
    // .then((data) => setStarWarsData(data));
    // //let's put this fetch inside a useEffect

    // let's do simple console
    console.log("Effect ran");
  }, [count]);

  // fetch("https://swapi.dev/api/people", {
  //   agent: new https.Agent({ rejectUnauthorized: false }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => setStarWarsData(data))
  //   .catch((err) => console.error(err));

  return (
    <div>
      <h2>The count is {count}</h2>
      <button
        style={styles}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        {" "}
        Add{" "}
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default Apps;

// import React, { useState, useEffect } from "react";
// import "./Apps.css";

// const Apps = () => {
//   const [starWarsData, setStarWarsData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/")
//       .then((res) => res.json())
//       .then((data) => setStarWarsData(data));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// };

// export default Apps;

// import React, { useEffect, useState } from "react";

// export default function Apps() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// ----------------------------------


// import React, { useState, useEffect } from "react";
// import "./Apps.css";

// const Apps = () => {
//   const [starWarsData, setStarWarsData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/")
//       .then((res) => res.json())
//       .then((data) => setStarWarsData(data));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// };

// export default Apps;

// import React, { useEffect, useState } from "react";

// export default function Apps() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

*/

// ---------------------------windows tracker
/*
//-------------------------------------------

import React, { Component, useEffect, useState } from "react";
import "./Apps.css";
// import WindowTracker from "../components/Main/WindowTracker";
import Memes from "../components/Memes/Memes";
import Header from "../components/Header/Header";
// import Joke from "../Joke/Joke";
// import jokesData from "../components/jokesData";

const Apps = () => {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

// const [show, setShow] = useState(true);

// const handleShow = () => {
//   setShow(!show);
//   console.log(show);
// };
//   return (
//     <div className="container">
//       <Header />
//       <Memes />

//       {/*
//       <button onClick={handleShow}>Toggle WindowTracker</button>
//      {show && <WindowTracker /> } */}
//     </div>
//   );
// };

// export default Apps;

// */

// -----------------------toggle apps
//-------------------------------------------

// import React, { useState } from "react";
// import "./Apps.css";
// // import WindowTracker from "../components/Main/WindowTracker";
// // import Memes from "../components/Memes/Memes";
// import Header from "../components/Header/Header";
// // import NavBar from "../components/NavBar/NavBar";
// import Main from "../components/Main/Main";
// // import Joke from "../Joke/Joke";
// // import jokesData from "../components/jokesData";

// const Apps = () => {
//   /**
//    * Challenge:
//    * 1. Create state called `show`, default to `true`
//    * 2. When the button is clicked, toggle `show`
//    * 3. Only display `<WindowTracker>` if `show` is `true`
//    */

//   // const [show, setShow] = useState(true);

//   // const handleShow = () => {
//   //   setShow(!show);
//   //   console.log(show);
//   // };

//   // setting the state
//   const [darkMode, setDarkMode] = useState(false);

//   //function to toggle the theme
//   const toggleDarkMode = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <div className="container">
//       <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       {/* <Memes /> */}

//       {/*
//       <button onClick={handleShow}>Toggle WindowTracker</button>
//      {show && <WindowTracker /> } */}

//       {/* <NavBar /> */}
//       <Main darkMode={darkMode} />
//     </div>
//   );
// };

// export default Apps;
