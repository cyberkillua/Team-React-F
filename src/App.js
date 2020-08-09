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
      artists: [],
      tracks: [],
      currentTrack: "",
      index: 0,
      path: "/",
      featuredClicked: false,
    };
  }

  handlePath = (path) => {
    this.setState({
      path,
    });
  };
  handleClick = (id, featuredClicked = false) => {
    console.log(id);
    let { tracks } = this.state;
    let c = tracks.filter((track) => track.id === id);
    console.log(c);
    this.setState({
      currentTrack: c[0],
      featuredClicked:
        featuredClicked === true
          ? !this.state.featuredClicked
          : this.state.featuredClicked,
    });
  };

  async componentDidMount() {
    try {
      let [albumResponse, artistsResponse] = await Promise.all([
        fetch(
          "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306&limit=all"
        ),
        fetch(
          "https://api.jamendo.com/v3.0/artists/?client_id=d5d26306&limit=all"
        ),
      ]);

      const albumResponseJson = await albumResponse.json();
      const artistsResponseJson = await artistsResponse.json();

      let collectedTracks = [];
      let albums = albumResponseJson.results;
      let artists = artistsResponseJson.results;
      let allTracks = albums.map((album) => {
        return album.tracks.map((t) => t);
      });
      console.log(artists);
      allTracks.forEach((track) => {
        for (let i = 0; i < track.length; i++) {
          collectedTracks.push(track[i]);
        }
      });
      let { index } = this.state;
      let currentTrack = collectedTracks[index];
      this.setState({
        tracks: collectedTracks,
        currentTrack,
        albums,
        artists,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {
      tracks,
      currentTrack,
      path,
      albums,
      featuredClicked,
      artists,
    } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 px-0">
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
                      handleClick={this.handleClick}
                      featuredClicked={featuredClicked}
                      artists={artists}
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
                      artists={artists}
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
