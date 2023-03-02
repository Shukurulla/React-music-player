import React, { useState, createContext, useRef, useEffect } from "react";
import Author from "../author/author";
import Buttons from "../buttons/buttons";
import Header from "../header/header";
import Image from "../image/image";
import MusicList from "../music-list/MusicList";
import Progress from "../progres/progres";
import { data } from "../audioData";

export const Context = createContext(null);

const Audio = () => {
  const [active, setActive] = useState(false);
  const [audio, setAudio] = useState(false);
  const [index, setIndex] = useState(0);
  const song = useRef();
  const [width, setWidth] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [audioLength, setaudioLength] = useState();
  const [rand,setRand] = useState(true)
  const onActive = () => {
    setActive(!active);
  };

  const updataProgress = (e) => {
    setWidth(e.target.value);
  };

  const updateIndex = (id) => {
    setAudio(true);
    setIndex(id);
  };

  const playMusic = () => {
    setAudio(!audio);
  };
  
  const updateProgress = (e) => {
    const { duration, currentTime } = e.currentTarget;
    setaudioLength(duration)
    const percent = (currentTime / duration) * 100;
    setProgressWidth(percent);
  };
  const updateSlide = (e) => {
    return (song.current.currentTime = e.target.value);
  };

  useEffect(() => {
    if (audio) {
      song.current.play();
    } else {
      song.current.pause();
    }
  }, [audio, index]);



  const nextMusic = () => {
    setIndex((prev) => prev + 1);
    if (index > data.length - 2) {
      setIndex(0);
    }
    setProgressWidth(0);
  };
  const prevMusic = () => {
    setIndex((prev) => prev - 1);
    if (index == 0) {
      setIndex(6);
    }
    setProgressWidth(0);
  };

  const repeatMiusic = () => {
    song.current.play()
    setaudioLength(0)
  }

  const repeatMusic = () => {

    setRand(!rand)
  }

  const values = {
    active,
    index,
    audio,
    nextMusic,
    prevMusic,
    playMusic,
    updateIndex,
    updataProgress,
    width,
    progressWidth,
    updateSlide,
    song,
    audioLength,
    repeatMusic,
    rand
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${data[index].audioImg})` }}
    >
      <div
        className="audio"
        style={{ backgroundImage: `url(${data[index].audioImg})` }}
      >
        <div className={`audio__content ${active ? "active" : null}`}>
          <Header onActive={onActive} />
          <Context.Provider value={values}>
            <audio
              src={data[index].directory}
              onTimeUpdate={(e) => updateProgress(e)}
              ref={song}
              onEnded={ rand ? nextMusic : repeatMiusic }
            />
            <Image />
            <Author />
            <Progress width={width} />
            <Buttons active={active} onActive={onActive} />
            <MusicList />
          </Context.Provider>
        </div>
      </div>
    </div>
  );
};

export default Audio;
