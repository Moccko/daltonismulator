import React from "react";

export default class Eye extends React.Component {
  render() {
    const { position, size, img, background } = this.props;
    const { x, y } = position;
    return (
      <div
        style={{
          cursor: "none"
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            position: "absolute",
            height: `${size / 2}px`,
            width: `${size / 2}px`,
            left: `${x - size / 4}px`,
            top: `${y - size / 4}px`,

            backgroundImage: `url(data:image/jpeg;base64,${background})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            cursor: "none"
          }}
        />
        <img
          src={img}
          style={{
            position: "absolute",
            height: `${size}px`,
            width: `${size}px`,
            left: `${x - size / 2}px`,
            top: `${y - size / 2}px`,
            filter: "drop-shadow(0px 0px 15px #111)",
            cursor: "none"
          }}
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}
