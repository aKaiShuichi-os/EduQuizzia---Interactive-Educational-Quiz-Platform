import React from "react";
import useSound from "use-sound";
import next from "../Image/next_arrow_icon.svg";
import sound from "../Sounds/move_to_next_screen.mp3";

export default function NextBtn(props) {
  function allEvents() {
    props.visibility();
    play();
    props.next();
  }
  const [play] = useSound(sound);
  return (
    <div>
      <button
        type="button"
        className="btn right-arrow toast-secondary-button positive next "
        title="Next"
        aria-label="Next"
        onClick={allEvents}
      >
        <span className="text" aria-hidden="true">
          Next
        </span>
        <span className="icon" aria-hidden="true">
          <img className="icon" src={next} alt="" />
        </span>
      </button>
    </div>
  );
}
