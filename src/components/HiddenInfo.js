import React from "react";

export default class HiddenInfo extends React.Component {
  render() {
    const { text, display } = this.props;
    return (
      <span className={display ? "text-shown" : "text-hidden"}>{text}</span>
    );
  }
}
