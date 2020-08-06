import React from "react";
import BackgroundImage from "./bg-3.png";
import headset from "./headset.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div
      id="featured"
      className="p-3 mx-auto row w-100 justify-content-center align-items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="col-4">
        <img src={headset} alt="" className="featured-img" />
      </div>
      <div className="col-8">
        <h5 className="featured-tag text-center d-block mt-5">
          FEATURED OF THE WEEK
        </h5>
        <h1 className="featured-title d-block mt-3 mb-0">
          {" "}
          <strong> WeJapa all the way</strong>
        </h1>
        <p className="featured-artist d-block">Artist ft Artist</p>

        <i className="fa fa-play my-3"></i>
      </div>
    </div>
  );
};

export default Featured;
