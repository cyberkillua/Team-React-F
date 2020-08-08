import React from "react";
import "./NowPlaying.css";
const NowPlaying = (props) => {
  const { currentTrack } = props;
  return (
    <div className="w-100 text-center audio-area d-flex">
      <audio src={currentTrack.audio} controls autoPlay muted></audio>
    </div>
  );
};

export default NowPlaying;
