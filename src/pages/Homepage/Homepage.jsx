import React from "react";

// Componets
import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
// CSS
import "./Homepage.css";

const HomePage = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2" id="sidebar">
          <Sidebar />
        </div>
        <div className="col-10 px-0 w-100">
          <div className="w-100">
            <Featured />
          </div>
          <div className="w-100">
            <div id="now-playing">
              <NowPlaying currentTrack={props.currentTrack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
