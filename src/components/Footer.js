import React from "react";
import { MDCSlider } from "@material/slider";
import Switch from "@material/react-switch";
import { connect } from "react-redux";

class Footer extends React.Component {
  componentDidMount() {}

  initSlider = ref => {
    const slider = new MDCSlider(ref);
    slider.listen("MDCSlider:input", () =>
      this.props.dispatch({
        type: "UPDATE_EYE_SIZE",
        value: Number(slider.value)
      })
    );
  };

  render() {
    const { size, showImage } = this.props;

    return (
      <footer>
        <div className="slider">
          <div
            className="mdc-slider mdc-slider--discrete mdc-slider--display-markers"
            tabIndex="0"
            role="slider"
            aria-valuemin="150"
            aria-valuemax="800"
            data-step="10"
            aria-valuenow={size}
            aria-label="Select Value"
            ref={this.initSlider}
          >
            <div className="mdc-slider__track-container">
              <div className="mdc-slider__track" />
              <div className="mdc-slider__track-marker-container" />
            </div>
            <div className="mdc-slider__thumb-container">
              <div className="mdc-slider__pin">
                <span className="mdc-slider__pin-value-marker" />
              </div>
              <svg className="mdc-slider__thumb" width="21" height="21">
                <circle cx="10.5" cy="10.5" r="7.875" />
              </svg>
              <div className="mdc-slider__focus-ring" />
            </div>
          </div>
        </div>
        <div className="switch">
          <Switch
            nativeControlId="my-switch"
            checked={showImage}
            onChange={e =>
              this.props.dispatch({
                type: "TOGGLE_IMAGE",
                value: e.target.checked
              })
            }
          />
          <label htmlFor="my-switch">Cacher l'œil</label>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  size: state.size,
  showImage: state.showImage
});

export default connect(mapStateToProps)(Footer);
