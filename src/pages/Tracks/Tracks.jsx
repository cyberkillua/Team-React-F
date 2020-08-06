import React from "react";
import Track from "../../components/Track/Track";
const Tracks = (props) => {
  const tracks = props.tracks;
  return (
    <div className="row my-5 justify-content-center px-4">
      {tracks.map((track) => {
        return (
          <Track
            key={track.id}
            id={track.id}
            artist_id={track.artist_id}
            artist_name={track.artist_name}
            title={track.name}
            image={track.image}
            date={track.releasedate}
          />
        );
      })}
    </div>
  );
};
export default Tracks;
