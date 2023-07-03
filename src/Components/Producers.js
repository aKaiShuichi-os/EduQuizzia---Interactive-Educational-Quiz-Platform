import React, { useState } from "react";
import p from "../Image/batery0004.png";

export default function Producers(props) {
  const [state, setState] = useState(props.display);
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <div
        role="alertdialog"
        className="instruction-text-wrapper  producers"
        aria-label="Producers make up the first trophic level. Producers get all of their energy from the Sun. There are more producers than any other type of organism in every ecosystem."
      >
        <p className="info-text">
          <b>Producers</b> make up the first trophic level. Producers get all of
          their energy from the Sun. There are more producers than any other
          type of organism in every ecosystem.
        </p>
        <div
          role="img"
          className="bttry producers"
          aria-label="Full battery; it has 100% available energy."
        >
          <img className="img-fluid" src={p} />
          <div className="percentage-indicator" aria-hidden="true">
            <p>100%</p>
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
