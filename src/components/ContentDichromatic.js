import React from "react";
import test from "../assets/images/test Ishihara.png";

export default class ContentMonochromatic extends React.Component {
    render() {
        return (
            <div className="content">
                <h3>Dichromatique</h3>
                <p>
                    Il existe le daltonisme dichromatique, il correspond à une absence du
                    gène. Cela implique une perception uniquement à partir de deux
                    couleurs primaires.
                </p>
                <p>
                    Le daltonisme dichromatique existe donc sous 3 formes différentes :
                </p>
                <ul>
                    <li>
                        <span className="bold">Protanopie : </span>perception du vert et du
                        bleu seulement.
                    </li>
                    <li>
                        <span className="bold">Deutéranopie : </span>perception du rouge et
                        du bleu seulement.
                    </li>
                    <li>
                        <span className="bold">Tritanopie : </span>perception du rouge et du
                        vert seulement.
                    </li>
                </ul>
            </div>
        );
    }
}
