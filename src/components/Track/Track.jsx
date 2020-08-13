import React from "react";

import "./Track.css";

const Track = ({
  id,
  artist_id,
  artist_name,
  image,
  date,
  title,
  handleClick,
}) => {
  return (
    <div
      className="col-4 d-flex my-2 align-items-center track"
      onClick={() => handleClick(id)}
    >
      <img
        src={image}
        className="mr-2"
        style={{ height: 20, width: 20 }}
        alt=""
      />
      <h6 className="track-title">{title}</h6>
      {/* <span className="text-muted">
        by {artist_name} | {date}
      </span> */}
    </div>
  );
};

export default Track;
