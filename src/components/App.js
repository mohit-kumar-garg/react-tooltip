import React from "react";

import "../assets/css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <button>Hover Here to see Tooltip...</button>

        <div className="configurations">
          <label htmlFor="bg-color">Choose Background Color of Tooltip</label>
          <input type="Color" id="bg-color"></input>

          <br />
          <label htmlFor="font-color">Choose Font Color of Tooltip</label>
          <input type="Color" id="font-color"></input>

          <br />
          <input type="text" placeholder="Enter content of Tooltip"></input>

          <p>Choose Position</p>

          <input
            type="radio"
            name="position"
            value="Top"
            defaultChecked
          ></input>
          <label>Top</label>
          <br />
          <input type="radio" name="position" value="Bottom"></input>
          <label>Bottom</label>
          <br />
          <input type="radio" name="position" value="Left"></input>
          <label>Left</label>
          <br />
          <input type="radio" name="position" value="Right"></input>
          <label>Right</label>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
