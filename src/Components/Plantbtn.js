import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function Plantbtn(props) {
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
          className="button-wrapper pyramid-plant producers"
          style={{ top: "450px", bottom: "-80px", left: "470px" }}
        >
          <div className="bullet"></div>
          <div className="dotted-line"></div>
          <button
            type="button"
            className="btn hotspot-btn label pyramid-button pyramid-plant"
            title="Producers"
            aria-label="Producers "
            aria-pressed="false"
            onClick={handleEvent}
          >
            <span className="text" aria-hidden="true">
              Producers
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={style}></div>
        </div>
      </div>
    </div>
  );
}
