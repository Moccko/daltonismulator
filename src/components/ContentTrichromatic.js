import React from "react";

export default class ContentMonochromatic extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>Trichromate anormal</h3>
        <p>
          Le daltonisme trichromate anormal désigne les personne dont le gène
          est muté, donc le pigment a une sensibilité différente. Ainsi ces
          personnes perçoivent les trois couleurs, mais l'une d'entre elle à une
          intensité anormale.
        </p>
        <p>On distingue également trois cas :</p>
        <ul>
          <li>
            <span className="bold">Protanomal : </span>lacune au niveau de la
            perception du rouge.
          </li>
          <li>
            <span className="bold">Deutéranomal : </span> faible perception du
            vert.
          </li>
          <li>
            <span className="bold">Tritanomal : </span>faible perception du
            bleu.
          </li>
        </ul>
      </div>
    );
  }
}
