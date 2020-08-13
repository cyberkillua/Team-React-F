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
      <div className="row mb-4" id="top-artists">
        <div className="col-12">
          <h1 className="main-heading my-4">Monthly Top Artists</h1>
          <Link to="/artists" className="see-all-btn">
            See All
          </Link>
        </div>
        {artists.map((artist, idx) => {
          while (idx < 6) {
            return (
              <Link
                to={`/artists/${artist.id}`}
                className="col-2"
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
