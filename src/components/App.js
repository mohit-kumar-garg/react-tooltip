import React from "react";

import Tippy from "@tippyjs/react";

import styles from "../assets/css/app.module.css";

class App extends React.Component {
  constructor() {
    super();

    // These valus are the default values which we will be using in our tooltip
    this.state = {
      bgcolor: "#000000",
      fontColor: "#ffffff",
      content: "Enter Tooltip Content",
      position: "top",
    };
  }

  render() {
    // Fetching the values from the state to be used in the different components
    const { bgcolor, fontColor, content, position } = this.state;

    // This const contains multiple style attributes which we will be using in tooltip
    const hoverStyle = {
      color: fontColor,
      backgroundColor: bgcolor,
      padding: "5px",
      borderRadius: "10px",
    };

    return (
      <div className={styles.container}>
        {/* Button where the tooltip will be visible on hover */}
        <Tippy
          content={<span style={hoverStyle}>{content}</span>}
          placement={position}
        >
          <button>Hover Here to see Tooltip...</button>
        </Tippy>

        {/* Taking Dynamic values from the user to be used in Tooltip */}
        <div className={styles.configurations}>
          <div>
            <label htmlFor="bg-color">Choose Background Color of Tooltip</label>
            <input
              type="Color"
              id="bg-color"
              value={bgcolor}
              onChange={(e) => {
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
