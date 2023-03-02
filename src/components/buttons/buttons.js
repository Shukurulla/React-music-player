import React, { useContext, useState } from "react";
import Author from "../author/author";
import { data } from "../audioData";
import { Context } from "../audio/audio";

const Buttons = ({ active, onActive }) => {
  const {
    index,
    audio,
    prevMusic,
    playMusic,
    nextMusic,
    repeatMusic,
    rand
  } = useContext(Context);

  return (
    <div className="audio__buttons">
      {active ? (
        <div className="action-show" onClick={onActive}>
          <div className="buttons__img">
            <img src={data[index].audioImg} alt="" />
          </div>
          <Author />
        </div>
      ) : null}
      <button className={`audio__button action ${rand ? 'active' : 'passive'}`} onClick={repeatMusic} >
        <i className="fa-solid fa-shuffle" ></i>
      </button>
      <button className="audio__button action" onClick={prevMusic}>
        <i className="fa-solid fa-backward"></i>
      </button>
      <div className="active__btns">
        <button className="audio__button" onClick={playMusic}>
          <i className={`fa-solid ${!audio ? "fa-play" : "fa-pause"}`}></i>
        </button>
        <button className="audio__button" onClick={nextMusic}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
      <button
        className={`audio__button action ${rand ? 'passive' : 'active'}`} onClick={repeatMusic} 
      >
        <i className="fa-solid fa-repeat"></i>
      </button>
    </div>
  );
};

export default Buttons;
