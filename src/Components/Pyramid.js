import React from "react";
import pyramid from "../Image/pyramid_empty.png";
import Eaglebtn from "./Eaglebtn";
import eagle from "../Image/pyramid_eagle.png";
import snake from "../Image/pyramid_snake.png";
import rabbit from "../Image/pyramid_rabbit.png";
import plant from "../Image/pyramid_plant.png";
import { useState } from "react";
import Snakebtn from "./Snakebtn";
import Rabbitbtn from "./Rabbitbtn";
import Plantbtn from "./Plantbtn";

function showImg(s) {
  return <img className="img-fluid image" src={s} />;
}

export default function Pyramid(props) {
  function showLevelSummary(level) {
    props.consumer(level);
  }

  /* const [show, setShow] = useState(false); */
  const visibility = [false, false, false, false];
  const [visible, setVisible] = useState(visibility);
  /* console.log("pyramid="+props.consumer) */
  return (
    <div>
      <div className="empty_pyramid d-flex flex-row-reverse ">
        <img className="img-fluid image" src={pyramid} />
        {visible[0]
          ? showImg(eagle)
          : visible[1]
          ? showImg(snake)
          : visible[2]
          ? showImg(rabbit)
          : visible[3]
          ? showImg(plant)
          : null}
        <Eaglebtn
          handleclick={() => {
            setVisible([true, false, false, false]);
            showLevelSummary("tertiary");
          }}
        />
        <Snakebtn
          handleclick={() => {
            setVisible([false, true, false, false]);
            showLevelSummary("secondary");
          }}
        />
        <Rabbitbtn
          handleclick={() => {
            setVisible([false, false, true, false]);
            showLevelSummary("primary");
          }}
        />
        <Plantbtn
          handleclick={() => {
            setVisible([false, false, false, true]);
            showLevelSummary("producers");
          }}
        />
      </div>
    </div>
  );
}




























{
  /*  */
}

/* import f from "../Image/highlights0003.png";
import s from "../Image/highlights0004.png";
import t from "../Image/highlights0005.png";
import ft from "../Image/highlights0006.png"; */

{
  /*  <button onClick={()=>{console.log(show);setShow(!show) ; }}>start</button> */
}
{
  /* <img className="img-fluid image" src={eagle}/> */
}

{
  /* <img className="img-fluid image" src={s} />
        <img className="img-fluid image" src={t} />
        <img className="img-fluid image" src={ft} /> */
}
