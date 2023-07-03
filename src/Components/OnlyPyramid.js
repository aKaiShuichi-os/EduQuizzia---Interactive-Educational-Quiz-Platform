import React from "react";
import eagle from "../Image/pyramid_eagle.png";
import snake from "../Image/pyramid_snake.png";
import rabbit from "../Image/pyramid_rabbit.png";
import plant from "../Image/pyramid_plant.png";
import pyramid from "../Image/pyramid_empty.png";

export default function OnlyPyramid() {
  return (
    <div className="myonlypyramid">
      <div className="left-static-bg-image bg-image">
        <img
          className="img-fluid image"
          src={pyramid}
          style={{ top: "320px", left: "110px" }}
        />
        <img
          className="img-fluid image"
          src={eagle}
          style={{ top: "320px", left: "110px" }}
        />
        <img
          className="img-fluid image"
          src={snake}
          style={{ top: "320px", left: "110px" }}
        />
        <img
          className="img-fluid image"
          src={rabbit}
          style={{ top: "320px", left: "110px" }}
        />
        <img
          className="img-fluid image"
          src={plant}
          style={{ top: "320px", left: "110px" }}
        />
      </div>
    </div>
  );
}
