import React from "react";

export default class DimensionsFallbackScreen extends React.Component {
  render() {
    return (
      <div className="dimensions-fallback">
        <h1>
          Vous devez avoir un ecran de resolution 1680&times;800px ou superieure
          pour visualiser ce contenu
        </h1>
      </div>
    );
  }
}
