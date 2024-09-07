import React from "react";
// import "./Header.css";
const Header = (props) => {
  //passing data around
  // const [user, setUser] = React.useState("Joe")

  return (
    // <div>
    //   <header className="header">
    //     <img src="./images/troll-face.png" className="header--image" />
    //     <h2 className="header--title">Meme Generator</h2>
    //     <h4 className="header--project">React Course - Project 3</h4>
    //   </header>
    // </div>

    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src="./public/reactLogo.jpeg" />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

//
export default Header;
