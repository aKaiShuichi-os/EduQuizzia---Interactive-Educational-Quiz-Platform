import React, { useState } from "react";
import Actheader from "./Actheader";
import Tertiary from "./Tertiary";
import Secondary from "./Secondary";
import Primary from "./Primary";
import Producers from "./Producers";
import QuestionArea from "./QuestionArea";

export default function Right(props) {
  return (
    <div>
      <div className="right">
        <div className="right-area">
          <div
            className="right-static"
            style={{
              backgroundColor: "white",
              border: "none",
            }}
          >
            <div className="instuction-area">
              <Actheader />
              <p className="instruction-text">
                Click on each trophic level to find out more.
              </p>
              {props.levelinfo === "tertiary" && <Tertiary display={true} />}
              {props.levelinfo === "secondary" && <Secondary display={true} />}
              {props.levelinfo === "primary" && <Primary display={true} />}
              {props.levelinfo === "producers" && <Producers display={true} />}
              {props.levelinfo === "questionarea" && <QuestionArea />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* show?<Tertiary show={this.show}/>:null  */
}
{
  /* <Secondary show={}/> */
}
{
  /* <Primary show={}/> */
}
{
  /* <Producers show={}/> */
}
