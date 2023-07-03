import React, { useState } from "react";
import Completion from "./Completion";
import FoodChain from "./FoodChain";
import NextBtn from "./NextBtn";
import OnlyPyramid from "./OnlyPyramid";
import Pyramid from "./Pyramid";
import PyramidWrapper from "./PyramidWrapper";

export default function Left(props) {
  const [state, setState] = useState("p");

  return (
    <div>
      <div className="left">
        <FoodChain />

        <div className="">
          <p className="black">Flow of energy in a food chain</p>
          <div className="pos-pyramid">
            {state === "p" && <Pyramid consumer={props.levelsummary} />}
            {state === "p" && (
              <NextBtn
                next={()=>props.levelsummary("null")}
                visibility={() => setState("pw")}
              />
            )}
            {state === "pw" && <PyramidWrapper />}
            {state === "pw" && <NextBtn visibility={() => setState("c")} />}
          </div>
          <p className="d-block text-center">Energy Pyramid</p>
          {state === "c" && (
            <>
              <OnlyPyramid />
              <Completion display={true} questions={props.levelsummary} />{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
/* next={()=>props.levelsummary("null")} */
