import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";

export default function Home() {
  const [showLevel, setShowLevel] = useState();

  return (
    <div>
      <div className="container">
        <Left levelsummary={(level) => setShowLevel(level)} />
        <Right levelinfo={showLevel} />
      </div>
    </div>
  );
}
