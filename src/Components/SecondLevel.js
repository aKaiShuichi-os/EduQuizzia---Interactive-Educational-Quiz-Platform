import React from "react";

export default function SecondLevel() {
  return (
    <div>
      <div
        role="img"
        aria-label="Third highest layer of the energy pyramid; snakes are included in this layer."
        aria-hidden="true"
        className="pyramid-sections pyramid-snake"
      ></div>
      <div className="button-wrapper pyramid-snake secondary">
        <div className="bullet "></div>
        <div className="dotted-line "></div>
        <button
          type="button"
          className="btn hotspot-btn label pyramid-button pyramid-snake "
          title="Secondary Consumers"
          aria-label="Secondary Consumers visited"
          aria-pressed="false"
        >
          <span className="text" aria-hidden="true">
            Secondary Consumers
          </span>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="tick-mark show"></div>
      </div>
    </div>
  );
}
