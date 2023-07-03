import React from "react";
import imge from "../Image/next_arrow_icon.svg";
import icon from "../Image/attention_icon.svg";
import intro from "../Image/intro.png";

export default function Headerpopup() {
  return (
    <div className="header visually-hidden">
      <div className="popup-container">
        <div className="i-icon">
          <span>
            <img src={icon} />
          </span>
        </div>
        <div>
          <div id="description">
            <h1 className="text">
              Welcome to the beautiful Pineywoods! Today, you will explore how
              energy flows through different organisms in this ecosystem.
            </h1>
            <div className="image-container">
              <img className="image" src={intro} />
            </div>
            <div className="btn-container">
              <button className="btn start" type="button" title="start">
                <span className="btn-text">Start</span>
                <span>
                  <img className="icon" src={imge} alt="intro.png" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
