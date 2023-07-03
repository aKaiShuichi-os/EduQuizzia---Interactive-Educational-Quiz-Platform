import React, { useState } from "react";
import s from "../Image/batery0002.png";

export default function Secondary(props) {
  const [state, setState] = useState(props.display);
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <div
        role="alertdialog"
        className="instruction-text-wrapper  secondary"
        aria-label="Secondary consumers make up the third trophic level.  Secondary consumers get their energy from primary consumers."
      >
        <p className="info-text">
          <b>Secondary consumers</b> make up the third trophic level. Secondary
          consumers get their energy from primary consumers.
        </p>
        <div
          role="img"
          className="bttry secondary"
          aria-label="Low battery; it has 1% available energy."
        >
          <img className="img-fluid" src={s} />
          <div className="percentage-indicator" aria-hidden="true">
            <p>1%</p>
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
