import React, { Component } from "react";

// Componets
// import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
import WeeklyTopChart from "../../components/Weekly-top-chart/Weekly-top-chart";
import TopArtists from "../../components/TopArtists/TopArtists";
import TopAlbums from "../../components/TopAlbums/TopAlbums";
import TopCharts from "../../components/TopCharts/TopCharts";
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
            <div className="col-6">
              <TopCharts
                tracks={this.props.tracks}
                handleClick={this.props.handleClick}
              />
            </div>
            <div className="col-6">
              <TopArtists artists={this.props.artists} />

              <TopAlbums
                albums={this.props.albums}
                handleClick={this.props.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
