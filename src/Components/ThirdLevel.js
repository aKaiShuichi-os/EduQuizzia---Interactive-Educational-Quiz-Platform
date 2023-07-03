import React from "react";

export default function ThirdLevel() {
  return (
    <div>
      <div
        role="img"
        aria-label="Second highest layer of the energy pyramid; rabbits are included in this layer."
        aria-hidden="true"
        className="pyramid-sections pyramid-rabbit "
      ></div>
      <div className="button-wrapper pyramid-rabbit primary">
        <div className="bullet "></div>
        <div className="dotted-line "></div>
        <button
          type="button"
          className="btn hotspot-btn label pyramid-button pyramid-rabbit "
          title="Primary Consumers"
          aria-label="Primary Consumers visited"
          aria-pressed="false"
        >
          <span className="text" aria-hidden="true">
            Primary Consumers
          </span>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="tick-mark show"></div>
      </div>
    </div>
  );
}
