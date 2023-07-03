import React from "react";
import plant from "../Image/pyramid_plant.png";

export default function FourthLevel() {
  return (
    <div>
      <div
        role="img"
        aria-label="Bottom layer of the energy pyramid; plants are included in this layer."
        aria-hidden="true"
        className="pyramid-sections pyramid-plant "
      ></div>
      <div className="button-wrapper pyramid-plant producers">
        <div className="bullet "></div>
        <div className="dotted-line "></div>
        <button
          type="button"
          className="btn hotspot-btn label pyramid-button pyramid-plant "
          title="Producers"
          aria-label="Producers visited"
          aria-pressed="false"
        >
          <span className="text" aria-hidden="true">
            Producers
          </span>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="tick-mark show"></div>
      </div>
    </div>
  );
}
