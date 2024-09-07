// import React from "react";
// import "./App.css";
// import { ChakraProvider, theme } from "@chakra-ui/react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Works from "./Works/Works";
// // Routing @ 1:35

// const App = () => {
//   // const [user, setUser] = useState("Bob");
//   return (
//     <ChakraProvider theme={theme}>
//       <Router>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route  path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/work" element={<Works />} />
//             {/* <Route path="/" /> */}
//           </Routes>
//         </main>
//       </Router>
//     </ChakraProvider>
//   );
// };

// export default App;

// -----------------------------------

import React from "react";
// import "./App.css";
import {Apps} from "./Apps/Apps";
// import Appss from "./Appss/Appss";
// import Joke from "./Joke/Joke";
// import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
// import Hero from "./components/Hero/Hero";
// import Person from "./components/Person/Person";
// import Boxes from "./components/Boxes/Boxes";
// import Box from "./components/Box/Box";
// import Header from "./components/Header/Header";
// import Memes from "./components/Memes/Memes";
// import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <Apps />
      {/* <Appss /> */}
      {/* <Joke/> */}
      {/* <NavBar /> */}
      {/* <Boxes /> */}
      {/* <Box /> */}
      {/* <Hero /> */}
    </>
  );
  b;
};

export default App;

//---------------
// {
//    <div>
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
//       </p>
// }
