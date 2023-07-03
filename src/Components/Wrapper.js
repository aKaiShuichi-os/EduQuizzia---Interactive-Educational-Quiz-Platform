import React from "react";
import Home from "./Home";
import Headerpopup from "./Headerpopup";
import "../style/Wrapper.css";

export default function Wrapper() {
  return (
    <div>
      <div
        className="scalable-wrapper-container"
        style={{ width: "813.336px", height: "610.002px" }}
      >
        <div
          className="scalable-wrapper-inner"
          style={{ transform: "scale(1.01667)" }}
        >
          <div className="activity-container">
            <Headerpopup />
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}
