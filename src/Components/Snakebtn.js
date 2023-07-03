import React, { useState } from "react";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function Snakebtn(props) {
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
          className="button-wrapper pyramid-snake secondary"
          style={{ top: "160px", bottom: "-80px", left: "373px" }}
        >
          <div className="bullet"></div>
          <div className="dotted-line"></div>
          <button
            type="button"
            className="btn hotspot-btn label pyramid-button pyramid-snake"
            title="Secondary Consumers"
            aria-label="Secondary Consumers "
            aria-pressed="false"
            onClick={handleEvent}
          >
            <span className="text" aria-hidden="true">
              Secondary Consumers
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={style}></div>
        </div>
      </div>
    </div>
  );
}
