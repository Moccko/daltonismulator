import React from "react";
import test from "../assets/images/test Ishihara.png";

export default class NormalEyeContent extends React.Component {
    render() {
        return (
            <div>

                  <span
                      className="info-text"
                      style={{
                          top: "480px",
                          left: "110px"
                      }}
                  >
                      4
                  </span>

                <span
                    className="info-text"
                    style={{
                        top: "480px",
                        left: "1060px"
                    }}
                >
                      8
                </span>
                <span
                    className="info-text"
                    style={{
                        top: "480px",
                        left: "1550px"
                    }}
                >
                    0,5
                </span>
                <span
                    className="info-text"
                    style={{
                        top: "615px",
                        left: "180px"
                    }}
                >
                  2 670 000
                </span>
                <span
                    className="info-text"
                    style={{
                        top: "650px",
                        left: "202px"
                    }}
                >
                  32,6
                </span>

            </div>
        );
    }
}
