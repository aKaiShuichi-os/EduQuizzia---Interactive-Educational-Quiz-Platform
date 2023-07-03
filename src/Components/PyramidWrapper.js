import React from "react";
import "../style/pyramidwrapper.css";
import FirstLevel from "./FirstLevel";
import SecondLevel from "./SecondLevel";
import ThirdLevel from "./ThirdLevel";
import FourthLevel from "./FourthLevel";

export default function PyramidWrapper() {
  return (
    <div>
      <div className="pyramid-wrapper">
        <div className="empty-pyramid" style={{ left: "-350px" }}>
          <FirstLevel className="trophic-level" />
          <SecondLevel className="trophic-level" />
          <ThirdLevel className="trophic-level" />
          <FourthLevel className="trophic-level" />
        </div>
      </div>
    </div>
  );
}
