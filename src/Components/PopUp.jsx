import React from "react";
import "./Styles/popup.css";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  const [clicked, setClicked] = React.useState(true);

  function handleClick() {
    setClicked(false);
  }
  function handleClick2() {
    setClicked(true);
  }
  return (
    <div className="alertDiv">
      {!clicked && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleClick2}>Proceed</button>
        </div>
      )}
      {clicked && <button onClick={handleClick}>Delete</button>}
    </div>
  );
}
