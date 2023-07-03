import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function Eaglebtn(props) {
  const [style, setStyle] = useState("tick-mark-hide");
  const [play] = useSound(sound);

  const handleEvent = () => {
    setStyle("tick-mark-show");
    play();
    if (props.handleclick) {
      props.handleclick();
    }
  };

  return (
    <div>
      <div className="myclass">
        <div
          className="button-wrapper pyramid-eagle tertiary"
          style={{ top: "0px", bottom: "-80px", left: "320px" }}
        >
          <div className="bullet"></div>
          <div className="dotted-line"></div>
          <button
            type="button"
            className="btn hotspot-btn label pyramid-button pyramid-eagle"
            title="Tertiary Consumers"
            aria-label="Tertiary Consumers "
            aria-pressed="false"
            onClick={handleEvent}
          >
            <span className="text" aria-hidden="true">
              Tertiary Consumers
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={style}></div>
        </div>
      </div>
    </div>
  );
}
