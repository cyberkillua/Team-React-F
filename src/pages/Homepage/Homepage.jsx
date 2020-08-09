import React, { Component } from "react";

// Componets
// import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
import WeeklyTopChart from "../../components/Weekly-top-chart/Weekly-top-chart";
import TopArtists from "../../components/TopArtists/TopArtists";
// CSS
import "./Homepage.css";

class HomePage extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  render() {
    return (
      <div>
        <div className="container-fluid mx-0">
          <Featured
            tracks={this.props.tracks}
            currentTrack={this.props.currentTrack}
          />
          <div className="row">
            <div id="now-playing">
              <NowPlaying
                currentTrack={this.props.currentTrack}
                featuredClicked={this.props.featuredClicked}
              />
            </div>
          </div>
          <div className="row">
            <WeeklyTopChart
              tracks={this.props.tracks}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6" id="top-artists">
              <h1 className="main-heading mt-3 mb-3">Monthly Top Artists</h1>
              <TopArtists artists={this.props.artists} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
