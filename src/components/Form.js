import React from "react";
import Radio, { NativeRadioControl } from "@material/react-radio/dist/index";
import { withRipple } from "@material/react-ripple/dist/index";
import { connect } from "react-redux";
import TabBar, { Tab } from "@material/react-tab-bar";
import * as colorblind from "../colorblind";
import * as colorblindSimu from "../hcirn_colorblind_simulation";
import { clearImageCache } from "../colorblind";

class Form extends React.Component {
  // disabilities = [
  //   "Normal",
  //   "Protanopie",
  //   "Protanomal",
  //   "Deutéranopie",
  //   "Deutéranomal",
  //   "Tritanopie",
  //   "Tritanomal",
  //   "Achromatopsie",
  //   "Achromatomalie"
  // ];
  disabilities = [
    "normal",
    "protanopia",
    "protanomaly",
    "deuteranopia",
    "deuteranomaly",
    "tritanopia",
    "tritanomaly",
    "achromatopsia",
    "achromatomaly"
  ];

  state = {
    activeIndex: 0
  };

  componentDidMount() {}

  onChange = evt => {
    clearImageCache();
    const tgt = evt.target || window.event.srcElement,
      files = tgt.files;
    const myImage = document.getElementById("testImg");
    // FileReader support
    if (FileReader && files && files.length) {
      if (files.length !== 1) {
        alert("Can only show one file at a time");
        return;
      }
      if (!files[0].type.match("image.*")) {
        alert("Was not an image file. :(");
        return;
      }
      const fr = new FileReader();
      fr.onload = () => {
        const img = new Image();
        img.onload = function() {
          //createFilteredImage(this);
          const currentImage = this;
          // filterOrImageChanged();
        };
        myImage.src = fr.result;
        myImage.onload = () => {
          const diseaseImages = {};
          this.disabilities.forEach(d => {
            colorblind.getFilteredImage(myImage, `simpl${d}`, url => {
              diseaseImages[d] = url.src;
              // console.log("coucou", url.src);
              // document.getElementById("testImgProtanopia").src = url.src;
            });
          });
          this.props.dispatch({ type: "UPLOAD_IMAGE", value: diseaseImages });
        };
      };
      fr.readAsDataURL(files[0]);
    }
  };

  render() {
    const { disease } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "row",
        zIndex: 2,
        position: "relative",
        backgroundColor: "white"}}>
        <TabBar
          activeIndex={this.disabilities.indexOf(disease)}
          handleActiveIndexUpdate={index =>
            this.props.dispatch({
              type: "UPDATE_DISEASE",
              value: this.disabilities[index]
            })
          }
        >
          {this.disabilities.map((value, index) => (
            <Tab key={index}>
              <span className="mdc-tab__text-label">{value}</span>
            </Tab>
          ))}
        </TabBar>
        <div style={{ flex: 1}}>
          <label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none"}}
              onChange={this.onChange}
            />
            <FileButton label="Charger image" />
          </label>
        </div>
        <div
          style={{
            flex: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disease: state.disease
});

export default connect(mapStateToProps)(Form);

const FileButton = withRipple(props => (
  <label
    htmlFor="fileInput"
    className="mdc-button mdc-button--outlined"
    ref={props.initRipple}
  >
    {props.label}
  </label>
));
