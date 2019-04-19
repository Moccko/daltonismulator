import React from "react";
import eye from "../assets/images/eye.svg";

export default class Eye extends React.Component {
  render() {
    const { position, size, background, content } = this.props;
    const { x, y } = position;
    return (
      <div style={{ cursor: "none" }}>
        <div
          style={{
            position: "absolute",
            height: `${size / 2}px`,
            width: `${size / 2}px`,
            left: `${x - size / 4}px`,
            top: `${y - size / 4}px`,
            cursor: "none",
            clipPath: `circle(${size / 4}px)`
          }}
        >
          <img src={background} className="image-background" alt="simulation" />
          <span
            className="info-text"
            style={{
              top: "2.1em",
              left: "0px",
              font: ""
            }}
          >
            {content}
          </span>
        </div>
        <img
          src={eye}
          style={{
            position: "absolute",
            height: `${size}px`,
            width: `${size}px`,
            left: `${x - size / 2}px`,
            top: `${y - size / 2}px`,
            filter: "drop-shadow(0px 0px 5px #111)",
            cursor: "none"
          }}
          crossOrigin="anonymous"
          draggable={false}
          // alt={type}
          alt="œil"
        />
      </div>
    );
  }
}
