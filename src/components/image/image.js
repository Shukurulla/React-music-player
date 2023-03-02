import React, { useContext } from "react";
import { Context } from "../audio/audio";
import { data } from "../audioData";

const Image = () => {
  const { index, audio } = useContext(Context);
  return (
    <div className={`audio__img ${audio ? "active" : ""}`}>
      <img src={data[index].audioImg} alt="" />
    </div>
  );
};

export default Image;
