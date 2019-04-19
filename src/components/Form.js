import React from "react";
import { connect } from "react-redux";
import TabBar, { Tab } from "@material/react-tab-bar";

class Form extends React.Component {
  render() {
    const { disease } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 2,
          position: "relative",
          backgroundColor: "white"
        }}
      >
        <TabBar
          activeIndex={disabilities.indexOf(disease)}
          handleActiveIndexUpdate={index =>
            this.props.dispatch({
              type: "UPDATE_DISEASE",
              value: disabilities[index]
            })
          }
        >
          {disabilities.map((value, index) => (
            <Tab key={index}>
              <span className="mdc-tab__text-label">{value}</span>
            </Tab>
          ))}
        </TabBar>
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

const disabilities = [
  "normal",
  "protanopie",
  "protanomalie",
  "deuteranopie",
  "deuteranomalie",
  "tritanopie",
  "tritanomalie",
  "achromatopsie",
  "achromatomalie"
];

const mapStateToProps = state => ({
  disease: state.disease
});

export default connect(mapStateToProps)(Form);
