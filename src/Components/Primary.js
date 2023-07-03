import React, { useState } from "react";
import pr from "../Image/batery0003.png";

export default function Primary(props) {
  const [state, setState] = useState(props.display);
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <div
        role="alertdialog"
        className="instruction-text-wrapper  primary"
        aria-label="Primary consumers make up the second trophic level. Primary consumers get all of their energy from producers."
      >
        <p className="info-text">
          <b>Primary consumers</b> make up the second trophic level. Primary
          consumers get all of their energy from producers.
        </p>
        <div
          role="img"
          className="bttry primary"
          aria-label="Partially full battery; it has 10% available energy."
        >
          <img className="img-fluid" src={pr} />
          <div className="percentage-indicator" aria-hidden="true">
            <p>10%</p>
          </div>
        </div>
        <p aria-hidden="true" className="bttryText">
          Available Energy
        </p>
        <div>
          <button
            type="button"
            className="btn hotspot-btn close"
            title="Close"
            aria-label="Close"
            onClick={() => setState(!state)}
          >
            <span className="text" aria-hidden="true">
              Close
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
