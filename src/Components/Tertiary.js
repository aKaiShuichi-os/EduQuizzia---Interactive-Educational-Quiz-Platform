import React, { useState } from "react";
import t from "../Image/batery0001.png";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function Tertiary(props) {
  const [state, setState] = useState(props.display);
  const [play] = useSound(sound);
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <div
        role="alertdialog"
        className="instruction-text-wrapper  tertiary"
        aria-label="Tertiary consumers make up the fourth trophic level. Tertiary consumers get their energy from secondary consumers. There are very few tertiary consumers in any ecosystem."
      >
        <p className="info-text">
          <b>Tertiary consumers</b> make up the fourth trophic level. Tertiary
          consumers get their energy from secondary consumers. There are very
          few tertiary consumers in any ecosystem.
        </p>
        <div
          role="img"
          className="bttry tertiary"
          aria-label="A battery with almost no charge at all; it has 0.1% available energy."
        >
          <img className="img-fluid" src={t} />
          <div className="percentage-indicator" aria-hidden="true">
            <p>0.1%</p>
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
            onClick={() => {
              setState(!state);
              play();
            }}
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
