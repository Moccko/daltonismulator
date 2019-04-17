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

class App extends Component {
  state = {
    background: ""
  };

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
            <ContentMonochromatic/>
          {!showImage && (
            <Eye background={diseases[disease]} size={this.props.size} />
          )}
        </ReactCursorPosition>
        <Footer />
        <img id="testImg" src="" />
        {/*<img id="testImgProtanopia" src="" />*/}
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
