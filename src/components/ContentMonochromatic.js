import React from "react";
import HiddenInfo from "./HiddenInfo";

export default class ContentMonochromatic extends React.Component {
  render() {
    const displayHiddenInfo = this.props.displayHiddenInfo;
    return (
      <div className="content">
        <h3>Monochromatique</h3>
        <p>
          Le daltonisme monochromatique correspond à une absence partielle ou
          totale de la vision des couleurs. Il existe donc sous deux formes :
        </p>
        <ul>
          <li>
            <span className="bold">Achromatomalie :</span> Il s'agit de la perte
            partielle de la vision des couleurs.
          </li>
          <li>
            <span className="bold">Achromatopsie :</span> Il s'agit de la perte
            totale de la vision des couleurs.
          </li>
        </ul>
        <ul>
          <li>
            Elle est dûe aux gènes de la iodopsine qui sont non fonctionnels
            pour les trois types de cônes.
          </li>
          <li>Absence totale de la perception des couleurs.</li>
          <li>Voit le monde en noir et blanc ainsi que des nuances de gris</li>
          <li>
            Extrêmement rare :{" "}
            <HiddenInfo text={1} display={displayHiddenInfo} /> personne sur{" "}
            <HiddenInfo text={"40 000"} display={displayHiddenInfo} /> environ
            en est atteinte.
          </li>
        </ul>
      </div>
    );
  }
}
