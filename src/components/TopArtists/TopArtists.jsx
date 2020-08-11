import React from "react";
import { Link } from "react-router-dom";
import "./TopArtists.css";
const TopArtists = ({ artists }) => {
  // id:
  // image:
  // joindate:
  // name:
  // shareurl:
  // shorturl:
  // website:
  return (
    <React.Fragment>
      <div className="row">
        <Link to="/artists" className="see-more-btn">
          See more
        </Link>
        {artists.map((artist, idx) => {
          while (idx < 4) {
            return (
              <Link
                to={`/artists/${artist.id}`}
                className="col-3"
                key={artist.id}
              >
                <img
                  src={
                    artist.image ||
                    "https://pickaface.net/gallery/avatar/dan5276bb68cda93.png"
                  }
                  className="artist-image"
                  alt="Artist"
                />
              </Link>
            );
          }
          return null;
        })}
        ;
      </div>
    </React.Fragment>
  );
};

export default TopArtists;
