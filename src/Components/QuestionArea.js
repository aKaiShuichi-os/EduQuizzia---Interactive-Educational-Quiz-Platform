import React, { useState } from "react";
import questions from "../jsonfiles/Questions.json";
import useSound from "use-sound";
import sound from "../Sounds/secondary_click.mp3";

export default function QuestionArea() {
  const [index, setIndex] = useState(0);
  const arr = [
    "Producers",
    "Primary Consumers",
    "Secondary Consumers",
    "Tertiary Consumers",
  ];
  const [play] = useSound(sound);

  const q = questions.Questions.map((q, id) => {
    return (
      <>
        <div
          role="heading"
          className="heading"
          aria-level={id + 1}
          aria-label={`Question ${id + 1} of 4.`}
        >
          Question {id + 1} of 4.
        </div>
        <p className="question" id="mcq-question-heading">
          {q.Q}
        </p>
      </>
    );
  });

  return (
    <div className="mcq-question-area">
      <div className="inner-wrapper">
        {q[index]}
        <ul
          role="radiogroup"
          className="radiobuttons"
          aria-labelledby="mcq-question-heading"
        >
          {arr.map((list, id) => {
            return (
              <li role="none" className="radiobutton" key={id}>
                <div className="radiobutton-inner-wrapper">
                  <input
                    id={list.toLowerCase()}
                    name="radiobuttons"
                    rtext={list}
                    aria-hidden="false"
                    type="radio"
                    tabIndex={`${id}`}
                  />
                  <div>
                    <span></span>
                  </div>
                  <label htmlFor={list.toLowerCase()}>{list}</label>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="submit-button">
          <button
            type="button"
            disabled=""
            className="btn primary"
            title="Submit Answer"
            aria-label="Submit Answer"
            onClick={() => {
              index !== 4 ? setIndex(index + 1) : null;
              play();
            }}
          >
            <span className="text" aria-hidden="true">
              Submit Answer
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
