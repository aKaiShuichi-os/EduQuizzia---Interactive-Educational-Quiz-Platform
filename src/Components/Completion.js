import React, { useState } from "react";
import next from "../Image/next_arrow_icon.svg";

export default function Completion(props) {
  const [state, setState] = useState(props.display);
  return (
    <div style={{ display: state ? "block" : "none" }}>
      <div className="completion-screen-container">
        <div
          role="dialog"
          aria-modal="true"
          className="completion-screen attention"
          aria-labelledby="completion-screen-heading-completionContinue completion-screen-content-completionContinue"
        >
          <div className="grass-left"></div>
          <div className="completion-screen-content">
            <div className="icon"></div>
            <p
              className="heading"
              id="completion-screen-heading-completionContinue"
            >
              Great job!
            </p>
            <p
              className="content"
              id="completion-screen-content-completionContinue"
            >
              You have successfully explored how energy flows through the
              different trophic levels in an ecosystem. Now it is time to show
              what you know.
            </p>
            <button
              type="button"
              className="btn completion-screen-button attention right-arrow icon"
              title="Continue"
              aria-label="Continue"
              onClick={() => {
                props.questions("questionarea");
                setState(!state);
              }}
            >
              <span className="text" aria-hidden="true">
                Continue
              </span>
              <span className="icon" aria-hidden="true">
                <img className="icon" src={next} alt="" />
              </span>
            </button>
          </div>
          <div className="leaves-left"></div>
          <div className="grass-leaves-right"></div>
        </div>
      </div>
    </div>
  );
}
