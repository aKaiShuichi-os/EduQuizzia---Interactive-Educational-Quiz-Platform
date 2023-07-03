import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function Rabbitbtn(props) {
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
      <div className="myclassName">
        <div
          className="button-wrapper pyramid-rabbit primary"
          style={{ top: "300px", bottom: "-80px", left: "420px" }}
        >
          <div className="bullet "></div>
          <div className="dotted-line "></div>
          <button
            type="button"
            className="btn hotspot-btn label pyramid-button pyramid-rabbit "
            title="Primary Consumers"
            aria-label="Primary Consumers "
            aria-pressed="false"
            onClick={handleEvent}
          >
            <span className="text" aria-hidden="true">
              Primary Consumers
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={style}></div>
        </div>
      </div>
    </div>
  );
}
