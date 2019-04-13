import React, { Component } from "react";
import eye from "./eye.svg";
import test from "./test Ishihara.png";
import baseImage from "./baseImage.jpg";
import "./App.css";
import Eye from "./Eye";
import ReactCursorPosition from "react-cursor-position";

class App extends Component {
  constructor(props) {
    super(props);
    this.getDataUri(
      baseImage,
      function(dataUri) {
        this.setState({
          background: dataUri
        });
      }.bind(this)
    );
  }

  state = {
    size: 250,
    background: ""
  };

  getDataUri(url, callback) {
    var image = new Image();

    image.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
      canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

      canvas.getContext("2d").drawImage(this, 0, 0);

      // Get raw image data
      callback(
        canvas
          .toDataURL("image/png")
          .replace(/^data:image\/(png|jpg);base64,/, "")
      );

      // ... or get as Data URI
      callback(canvas.toDataURL("image/png"));
    };

    image.src = url;
  }
  render() {
    return (
      <div className="App">
        <ReactCursorPosition className="App-header">
          <div className="content">
            <h1 className="title">Le daltonisme</h1>
            <p>
              Les daltoniens confondent certaines couleurs entre elles, souvent
              le rouge et le vert. Ils peuvent parfois ne pas distinguer les
              couleurs du tout.
            </p>
            <h3>Quelques chiffres</h3>
            <ul>
              <li>
                4 % de la population française souffre de daltonisme : 8 % des
                hommes… et seulement 0,5 % des femmes
              </li>
              <li>
                Héréditaire, cette anomalie de la vision est due à l’absence ou
                à l’altération des cellules nerveuses réceptrices de la rétine,
                les cônes, qui détectent les couleurs puis transmettent les
                informations au cerveau.
              </li>
              <li>2 670 000 daltoniens en France.</li>
              <li>
                Au total, 32,6 millions en Europe Occidentale, aux Etats-Unis et
                au Japon.
              </li>
            </ul>
            <hr />
            <h2 className="title">Les différents types de daltonisme</h2>
            <h3>Monochromatique</h3>
            <ul>
              <li>
                Elle est dûe aux gènes de la iodopsine qui sont non fonctionnels
                pour les trois types de cônes.
              </li>
              <li>Absence totale de la perception des couleurs.</li>
              <li>
                Voit le monde en noir et blanc ainsi que des nuances de gris
              </li>
              <li>Extrêmement rare : 1 personne sur 40 000 en est atteinte.</li>
            </ul>
            <h3>Dichromatique</h3>
            <p>
              Il existe le daltonisme dichromatique, il correspond à une absence
              du gène. Cela implique une perception uniquement à partir de deux
              couleurs primaires.
            </p>
            <p>
              Le daltonisme dichromatique existe donc sous 3 formes différentes
              :
            </p>
            <ul>
              <li>
                <span className="bold">Protanopie : </span>perception du vert et
                du bleu seulement.
              </li>
              <li>
                <span className="bold">Deutéranopie : </span>perception du rouge
                et du bleu seulement.
              </li>
              <li>
                <span className="bold">Tritanopie : </span>perception du rouge
                et du vert seulement.
              </li>
            </ul>
            <h3>Trichromate anormal</h3>
            <p>
              Le daltonisme trichromate anormal désigne les personne dont le
              gène est muté, donc le pigment a une sensibilité différente. Ainsi
              ces personnes perçoivent les trois couleurs, mais l'une d'entre
              elle à une intensité anormale.
            </p>
            <p>On distingue également trois cas :</p>
            <ul>
              <li>
                <span className="bold">Protanomal : </span>lacune au niveau de
                la perception du rouge.
              </li>
              <li>
                <span className="bold">Deutéranomal : </span> faible perception
                du vert.
              </li>
              <li>
                <span className="bold">Tritanomal : </span>faible perception du
                bleu.
              </li>
            </ul>
            <hr />
            <h2 className="title">Comment le détecter ?</h2>
            <p>
              Le daltonisme peut-être détecté par le biais du test d'Ishihara.
              L'objectif est de lire les chiffres écrits sur la figure suivante.
              Dans le cas ou la lecture est impossible, alors la personne est
              daltonienne.
            </p>
            <img className="center-img" src={test} alt="test" />
          </div>
          <Eye
            img={eye}
            background={this.state.background}
            size={this.state.size}
          />
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
