import React from "react";
import eye from "../assets/images/eye.svg";
import Content from "./Content";

export default class Eye extends React.Component {
  render() {
    const { position, size, img, background } = this.props;
    const { x, y } = position;
    return (
      <div style={{ cursor: "none" }}>
        <div
          style={{
            // backgroundColor: "black",
            position: "absolute",
            height: `${size / 2}px`,
            width: `${size / 2}px`,
            left: `${x - size / 4}px`,
            top: `${y - size / 4}px`,
            //
            // backgroundImage: `url(${background})`,
            // backgroundAttachment: "fixed",
            // backgroundSize: "cover",
            cursor: "none",
            clipPath: `circle(${size / 4}px)`
          }}
        >
          <img
            src={background}
            style={{
              position: "fixed",
              width: "100vw",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}
          />
          <span
            className="info-text"
            style={{
              top: "150px",
              left: "150px"
            }}
          >
              8% des hommes sont daltoniens.
          </span>
          <span
            className="info-text"
            style={{
              bottom: "150px",
              left: "150px"
            }}
          >
            Mais non ?
          </span>
          <span>OMG</span>
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
        />
      </div>
    );
  }
}
