import React from "react";

import "./Track.css";

const Track = ({ id, artist_id, artist_name, image, date, title }) => {
  return (
    <div className="col-4 d-flex my-2 align-items-center track">
      <img
        src={image}
        className="mr-2"
        style={{ height: 20, width: 20 }}
        alt=""
      />
      <h6 className="track-title">{title}</h6>
    </div>
  );
};

export default Track;
