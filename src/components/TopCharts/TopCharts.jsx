import React from "react";
import "./TopCharts.css";
const TopCharts = ({ tracks, handleClick }) => {
  // id:
  // image:
  // joindate:
  // name:
  // shareurl:
  // shorturl:
  // website:
  return (
    <React.Fragment>
      <div className="row" id="top-charts">
        <div className="col-12">
          <h1 className="main-heading mt-3 mb-3">Top Charts</h1>
        </div>
        <ul className="list-unstyled px-3 top-chart-ul">
          {tracks.map((track, idx) => {
            while (idx < 6) {
              return (
                <li onClick={() => handleClick(track.id)} key={track.id}>
                  <span className="numbering">{idx + 1}</span>
                  {track.name}
                </li>
              );
            }

            return null;
          })}
        </ul>
        ;
      </div>
    </React.Fragment>
  );
};

export default TopCharts;
