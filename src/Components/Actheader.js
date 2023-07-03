import React from "react";
import useSound from "use-sound";
import info from "../Image/info_icon.svg";
import reset from "../Image/reset_icon.svg";
import sound from "../Sounds/secondary_click.mp3";

export default function Actheader() {
  const [play] = useSound(sound);
  return (
    <div>
      <header className="activity-header">
        <button
          type="button"
          className="btn header reverse icon reset"
          title="Reset"
          aria-label="Reset"
          onClick={() => {
            play();
          }}
        >
          <span className="text" aria-hidden="true">
            Reset
          </span>
          <span className="icon" aria-hidden="true">
            <img
              className="Icon"
              src={reset}
              alt="reset.png"
              aria-hidden="true"
            />
          </span>
        </button>
        <button
          type="button"
          className="btn header icon-only info"
          title="Info"
          aria-label="Info"
          onClick={play}
        >
          <span className="text" aria-hidden="true">
            Info
          </span>
          <span className="icon" aria-hidden="true">
            <img className="icon" src={info} alt="intro.png" />
          </span>
        </button>
      </header>
    </div>
  );
}
