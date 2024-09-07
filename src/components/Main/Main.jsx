import React from "react";

const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      {/* <div className="reactjs-icon">
        <img src="./public/reactjs-icon 2.png" alt="" />
      </div> */}
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>
          Powers thousands of enterprise apps, including <br />
          mobile apps
        </li>
      </ul>
    </main>
  );
};

export default Main;
