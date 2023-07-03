import React from "react";

export default function FirstLevel() {
  return (
    <div>
      <div
        role="img"
        aria-label="The fourth layer of the energy pyramid, which is the top, shows an eagle in the layer."
        aria-hidden="true"
        className="pyramid-sections pyramid-eagle "
      ></div>
      <div className="button-wrapper pyramid-eagle tertiary">
        <div className="bullet "></div>
        <div className="dotted-line "></div>
        <button
          type="button"
          className="btn hotspot-btn label pyramid-button pyramid-eagle "
          title="Tertiary Consumers"
          aria-label="Tertiary Consumers visited"
          aria-pressed="false"
        >
          <span className="text" aria-hidden="true">
            Tertiary Consumers
          </span>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="tick-mark show"></div>
      </div>
    </div>
  );
}
