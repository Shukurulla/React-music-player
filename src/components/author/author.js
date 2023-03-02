import React, { useContext } from "react";
import { Context } from "../audio/audio";
import { data } from "../audioData";

const Author = () => {
  const author = useContext(Context);

  return (
    <div className="audio__author">
      <h1>{data[author.index].audioTitle}</h1>
      <p>{data[author.index].audioAuthor}</p>
    </div>
  );
};

export default Author;
