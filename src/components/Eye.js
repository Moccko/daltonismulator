import React from "react";
import eye from "../assets/images/eye.svg";
import Content from "./Content";
import NormalEyeContent from "./NormalEyeContent";
import ContentDichromatic from "./ContentDichromatic";
import ContentTrichromatic from "./ContentTrichromatic";
import ContentMonochromatic from "./ContentMonochromatic";

export default class Eye extends React.Component {

    displayContent(disease)
    {
        if(disease === "protanopia" || disease ===  "deuteranopia" || disease === "tritanopia")
        {
            //return <ContentDichromatic/>;
        }
        else if(disease === "protanomaly" || disease ===  "deuteranomaly" || disease === "tritanomaly")
        {
            //return <ContentTrichromatic/>;
        }
        else if(disease === "normal")
        {
            return <NormalEyeContent/>;
        }
        else
        {
           // return <ContentMonochromatic/>
        }
    }
  render() {
    const { position, size, img, background, disease } = this.props;
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
          {this.displayContent(disease)}
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
