import React from "react";
import { Link } from "react-router-dom";
import "./TopAlbums.css";
const TopAlbums = ({ albums }) => {
  // id:
  // image:
  // joindate:
  // name:
  // shareurl:
  // shorturl:
  // website:
  return (
    <React.Fragment>
      <div className="row my-5" id="top-albums">
        <div className="col-12">
          <h1 className="main-heading my-4">Monthly Top Albums</h1>
          <Link to="/albums" className="see-all-btn">
            See All
          </Link>
        </div>
        {albums.map((album, idx) => {
          while (idx < 4) {
            return (
              <Link to={`/albums/${album.id}`} className="col-3" key={album.id}>
                <img
                  src={
                    album.image ||
                    "https://pickaface.net/gallery/avatar/dan5276bb68cda93.png"
                  }
                  className="album-image"
                  alt="album"
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

export default TopAlbums;
