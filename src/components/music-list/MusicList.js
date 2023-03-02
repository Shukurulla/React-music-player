import React, { useContext } from "react";
import { Context } from "../audio/audio";
import { data } from "../audioData";
import "./music-list.css";

const MusicList = () => {
  const { active, updateIndex, index, audio } = useContext(Context);

  const value = (val) => {
    console.log(val);
  };

  return (
    <div className={`music-list ${active ? "active" : null}`}>
      <ul>
        {data.map((item, id) => {
          return (
            <li
              key={item.id}
              onClick={() => updateIndex(id)}
              className={`music-list__item ${
                index == id && audio ? "active" : null
              } `}
            >
              <div className="music__author">
                <img src={item.audioImg} alt={`music ${id + 1}`} />
                <div className={`author ${index == id ? "active" : ""}`}>
                  <h4>{item.audioTitle}</h4>
                  <p>{item.audioAuthor}</p>
                </div>
              </div>
              <div className="animation-chart">
                <div className="line-one line"></div>
                <div className="line-two line"></div>
                <div className="line-three line"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MusicList;
