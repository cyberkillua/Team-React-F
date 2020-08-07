import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Homepage from "./pages/Homepage/Homepage";
import Album from "./pages/Album/Album";
import Tracks from "./pages/Tracks/Tracks";
import Artists from "./pages/Artists/Artists";
import Profile from "./pages/Profile/Profile";
import SigninSignup from "./pages/Signin-Signup/SigninSignup";
import Sidebar from "./components/Sidebar/Sidebar";

// CSS
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      tracks: [],
      currentTrack: "",
      index: 0,
      path: "/",
    };
  }

  handlePath = (path) => {
    this.setState({
      path,
    });
  };
  handleClick = (id) => {
    console.log(id);
    let { tracks } = this.state;
    let c = tracks.filter((track) => track.id === id);
    this.setState({
      currentTrack: c[0],
    });
  };

  // Fetch Data from the API
  fetchData = async () => {
    try {
      let collectedTracks = [];
      // "https://api.jamendo.com//v3.0/albums/?client_id=d5d26306"
      //   "https://api.jamendo.com/v3.0/albums/?client_id=d5d26306&format=jsonpretty&artist_name=we+are+fm"
      //   "https://api.jamendo.com/v3.0/albums/file/?client_id=d5d26306&id=2"
      //   "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306"
      const response = await fetch(
        "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306&limit=all"
      );

      const responseJson = await response.json();
      let albums = responseJson.results;
      // console.log(albums);
      let allTracks = albums.map((album) => {
        return album.tracks.map((t) => t);
      });

      allTracks.forEach((track) => {
        for (let i = 0; i < track.length; i++) {
          collectedTracks.push(track[i]);
        }
      });
      let { index } = this.state;
      let currentTrack = collectedTracks[index];
      // console.log(currentTrack);
      this.setState({
        tracks: collectedTracks,
        currentTrack,
        albums,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { tracks, currentTrack, path, albums } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar path={path} />
            </div>
            <div className="col-10 px-0">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Homepage
                      {...props}
                      tracks={tracks}
                      currentTrack={currentTrack}
                      handlePath={this.handlePath}
                    />
                  )}
                />
                <Route
                  path="/tracks"
                  render={(props) => (
                    <Tracks
                      {...props}
                      tracks={tracks}
                      currentTrack={currentTrack}
                      handleClick={this.handleClick}
                      handlePath={this.handlePath}
                    />
                  )}
                />
                <Route
                  path="/albums"
                  render={(props) => (
                    <Album
                      {...props}
                      tracks={tracks}
                      handlePath={this.handlePath}
                      albums={albums}
                    />
                  )}
                />
                <Route
                  path="/artists"
                  render={(props) => (
                    <Artists
                      {...props}
                      tracks={tracks}
                      handlePath={this.handlePath}
                    />
                  )}
                />
                <Route path="/profile" component={Profile} />
                <Route path="/signin" component={SigninSignup} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
