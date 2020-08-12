import React from "react";
import BackgroundImage from "./bg-3.png";
import headset from "./headset.png";
import "./Featured.css";

const Featured = ({ currentTrack }) => {
  return (
    <div
      id="featured"
      className="col-12 d-flex px-0 mx-0 justify-content-center align-items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="col-4">
        <img src={headset} alt="" className="featured-img" />
      </div>
      <div className="col-8">
        <h5 className="featured-tag text-center d-block mt-5">NOW PLAYING</h5>
        <h1 className="featured-title d-block mt-3 mb-0">
          {" "}
          <strong>{currentTrack ? currentTrack.name : null}</strong>
        </h1>
        {/* <p className="featured-artist d-block">{currentTrack }</p> */}

        {/* <i
          className={featuredClicked ? "fa fa-pause my-3" : "fa fa-play my-3"}
          onClick={() => handleClick(tracks[99].id, true)}
        ></i> */}
      </div>
    </div>
  );
};

export default Featured;
