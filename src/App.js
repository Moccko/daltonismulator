import React, { Component } from "react";
import baseImage from "./assets/images/normal.jpg";
import "./App.scss";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Eye from "./components/Eye";
import ReactCursorPosition from "react-cursor-position";
import { connect } from "react-redux";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";

class App extends Component {
  constructor(props) {
    super(props);
    this.getDataUri(
      baseImage,
      function(dataUri) {
        this.setState({
          background: dataUri
        });
      }.bind(this)
    );
  }

  state = {
    background: ""
  };

  getDataUri(url, callback) {
    var image = new Image();

    image.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
      canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

      canvas.getContext("2d").drawImage(this, 0, 0);

      // Get raw image data
      callback(
        canvas
          .toDataURL("image/png")
          .replace(/^data:image\/(png|jpg);base64,/, "")
      );

      // ... or get as Data URI
      callback(canvas.toDataURL("image/png"));
    };

    image.src = url;
  }
  render() {
    const { disease, showImage } = this.props;

    const diseases = {
      normal: require("./assets/images/normal.jpg"),
      protanopia: require("./assets/images/protanopia.png"),
      protanomaly: require("./assets/images/protanomaly.png"),
      deuteranopia: require("./assets/images/deuteranopia.png"),
      deuteranomaly: require("./assets/images/deuteranomaly.png"),
      tritanopia: require("./assets/images/tritanopia.png"),
      tritanomaly: require("./assets/images/tritanomaly.png"),
      achromatopsia: require("./assets/images/achromatopsia.png"),
      achromatomaly: require("./assets/images/achromatomaly.png")
    };

    return (
      <div className="App">
        <Form />
        <ReactCursorPosition
          className="App-header"
          style={{
            backgroundImage: `url(${showImage ? diseases[disease] : baseImage})`
          }}
        >
          {!showImage && (
            <Eye background={diseases[disease]} size={this.props.size} />
          )}
          {/*<Content />*/}
        </ReactCursorPosition>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disease: state.disease,
  size: state.size,
  showImage: state.showImage
});

export default connect(mapStateToProps)(App);
