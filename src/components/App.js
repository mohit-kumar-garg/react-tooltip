import React from "react";

import styles from "../assets/css/app.module.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bgcolor: "#000000",
      fontColor: "#ffffff",
      content: "This is sample Tooltip",
      position: "top",
    };
  }

  render() {
    const { bgcolor, fontColor, content, position } = this.state;

    return (
      <div className={styles.container}>
        <button
          onClick={() => {
            console.log("Bgcolor: ", bgcolor);
            console.log("fontColor: ", fontColor);
            console.log("content: ", content);
            console.log("position: ", position);
          }}
        >
          Hover Here to see Tooltip...
        </button>

        <div className={styles.configurations}>
          <div>
            <label htmlFor="bg-color">Choose Background Color of Tooltip</label>
            <input
              type="Color"
              id="bg-color"
              value={bgcolor}
              onChange={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  bgcolor: e.target.value,
                });
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="font-color">Choose Font Color of Tooltip</label>
            <input
              type="Color"
              id="font-color"
              value={fontColor}
              onChange={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  fontColor: e.target.value,
                });
              }}
            ></input>
          </div>

          <div className={styles.content}>
            <input
              type="text"
              placeholder="Enter content of Tooltip"
              value={content}
              onChange={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  content: e.target.value,
                });
              }}
            ></input>
          </div>

          <div>
            <p>Choose Position</p>

            <input
              type="radio"
              name="position"
              value="Top"
              defaultChecked
              onClick={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  position: e.target.value,
                });
              }}
            ></input>
            <label>Top</label>

            <input
              type="radio"
              name="position"
              value="Bottom"
              onClick={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  position: e.target.value,
                });
              }}
            ></input>
            <label>Bottom</label>

            <input
              type="radio"
              name="position"
              value="Left"
              onClick={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  position: e.target.value,
                });
              }}
            ></input>
            <label>Left</label>

            <input
              type="radio"
              name="position"
              value="Right"
              onClick={(e) => {
                // console.log("New value is:", e.target.value);
                this.setState({
                  position: e.target.value,
                });
              }}
            ></input>
            <label>Right</label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
