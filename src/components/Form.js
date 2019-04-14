import React from "react";
import Radio, { NativeRadioControl } from "@material/react-radio/dist/index";
import { withRipple } from "@material/react-ripple/dist/index";
import { connect } from "react-redux";
import TabBar, { Tab } from "@material/react-tab-bar";

class Form extends React.Component {
  disabilities = [
    "Normal",
    "Protanopie",
    "Protanomal",
    "Deutéranopie",
    "Deutéranomal",
    "Tritanopie",
    "Tritanomal",
    "Achromatopsie",
    "Achromatomalie"
  ];

  state = {
    activeIndex: 0
  };

  componentDidMount() {}

  onChange = evt => {
    var tgt = evt.target || window.event.srcElement,
      files = tgt.files;
    readFile(files);

    function readFile(files) {
      document.getElementById("aboutBox").style.display = "none";
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
        fr.onload = function() {
          const img = new Image();
          img.onload = function() {
            //createFilteredImage(this);
            const currentImage = this;

            // filterOrImageChanged();
          };
          img.src = fr.result;
        };
        fr.readAsDataURL(files[0]);
      }
      // Not supported
      else {
        alert("Your Browser does not support the required Features.");
      }
    }
  };

  render() {
    const { disease } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
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
        {/*<div style={{ flex: 1 }}>*/}
        {/*  <label>*/}
        {/*    <input*/}
        {/*      type="file"*/}
        {/*      id="fileInput"*/}
        {/*      style={{ display: "none" }}*/}
        {/*      onChange={this.onChange}*/}
        {/*    />*/}
        {/*    <FileButton label="Choisis une image" />*/}
        {/*  </label>*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    flex: 4,*/}
        {/*    display: "flex",*/}
        {/*    flexDirection: "row",*/}
        {/*    justifyContent: "flex-start"*/}
        {/*  }}*/}
        {/*>*/}
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
