import React from "react";

import Tippy from "@tippyjs/react";

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

    const hoverStyle = {
      color: fontColor,
      backgroundColor: bgcolor,
      padding: "5px",
      borderRadius: "10px",
      transition: "all 1s ease-in-out",
    };

    return (
      <div className={styles.container}>
        <Tippy
          content={<span style={hoverStyle}>{content}</span>}
          placement={position}
        >
          <button

          // onClick={() => {
          //   console.log("Bgcolor: ", bgcolor);
          //   console.log("fontColor: ", fontColor);
          //   console.log("content: ", content);
          //   console.log("position: ", position);
          // }}
          >
            Hover Here to see Tooltip...
          </button>
        </Tippy>

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
              value="top"
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
              value="bottom"
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
              value="left"
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
              value="right"
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
