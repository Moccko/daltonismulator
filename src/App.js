import React, { Component } from "react";
import "./App.scss";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Eye from "./components/Eye";
import ReactCursorPosition from "react-cursor-position";
import { connect } from "react-redux";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import ContentMonochromatic from "./components/ContentMonochromatic";
import ContentDichromatic from "./components/ContentDichromatic";
import ContentTrichromatic from "./components/ContentTrichromatic";

class App extends Component {
  state = {
    background: ""
  };

  static displayInfo(disease, showImage) {
    if (
      disease === "protanopie" ||
      disease === "deuteranopie" ||
      disease === "tritanopie"
    ) {
      return <ContentDichromatic />;
    } else if (
      disease === "protanomalie" ||
      disease === "deuteranomalie" ||
      disease === "tritanomalie"
    ) {
      return <ContentTrichromatic />;
    } else if (disease === "normal") {
      return <Content displayHiddenInfo={showImage} />;
    } else {
      return <ContentMonochromatic displayHiddenInfo={showImage} />;
    }
  }

  render() {
    const { disease, showImage, diseases } = this.props;
    return (
      <div className="App">
        <Form />
        <ReactCursorPosition
          className="App-header"
          style={{
            backgroundImage: `url(${
              showImage ? diseases[disease] : diseases.normal
            })`
          }}
        >
          {App.displayInfo(disease, showImage)}
          {!showImage && (
            <Eye
              background={diseases[disease]}
              content={App.displayInfo(disease, true)}
              size={this.props.size}
            />
          )}
        </ReactCursorPosition>
        <Footer />
        <img id="testImg" src="" alt="image generator canvas" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disease: state.disease,
  size: state.size,
  showImage: state.showImage,
  diseases: state.diseaseImages
});

export default connect(mapStateToProps)(App);
