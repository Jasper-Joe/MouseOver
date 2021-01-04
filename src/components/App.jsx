import React, { useState } from "react";

function App() {
  var [text, setText] = useState("Hello");
  var [isMouseOver, setBool] = useState(false);
  function change() {
    text === "Hello" ? setText("Submitted") : setText("Hello");
  }

  function changeColor() {
    setBool(true);
  }
  function changeBack() {
    setBool(false);
  }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={change}
        onMouseOut={changeBack}
        onMouseOver={changeColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
