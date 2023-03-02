import React, { useContext } from "react";
import { Context } from "../audio/audio";

const Progress = () => {
  const { progressWidth, updateSlide,audioLength } = useContext(Context);

  return (
    <div className="progress__content">
      <div className="progressbar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>

        <input
          type="range"
          value={progressWidth.toFixed(0)}
          onChange={updateSlide}
          max={audioLength}
          id="progress-slide"
        />
      </div>
      
    </div>
  );
};

export default Progress;
