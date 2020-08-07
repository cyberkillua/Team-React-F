import React, { Component } from "react";

// Componets
// import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
import NowPlaying from "../../components/NowPlaying/NowPlaying";
// CSS
import "./Homepage.css";

class HomePage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  render() {
    return (
      <div>
        <div className="">
          <div className="w-100">
            <Featured />
          </div>
          <div className="w-100">
            <div id="now-playing">
              <NowPlaying currentTrack={this.props.currentTrack} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
