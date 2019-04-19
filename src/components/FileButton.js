import React from "react";
import { withRipple } from "@material/react-ripple";

class FileButton extends React.Component {
  render() {
    const { initRipple, label } = this.props;
    return (
      <label
        htmlFor="fileInput"
        className="mdc-button mdc-button--outlined file-button"
        ref={initRipple}
      >
        {label}
      </label>
    );
  }
}

export default withRipple(FileButton);
