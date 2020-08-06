import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Homepage from "./pages/Homepage/Homepage";
import Album from "./pages/Album/Album";
import Tracks from "./pages/Tracks/Tracks";
import Artists from "./pages/Artists/Artists";
import Profile from "./pages/Profile/Profile";
import SigninSignup from "./pages/Signin-Signup/SigninSignup";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      currentTrack: "",
      index: 0,
    };
  }

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
      // "https://api.jamendo.com//v3.0/albums/?client_id=d5d26306"
      //   "https://api.jamendo.com/v3.0/albums/?client_id=d5d26306&format=jsonpretty&artist_name=we+are+fm"
      //   "https://api.jamendo.com/v3.0/albums/file/?client_id=d5d26306&id=2"
      //   "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306"
      const response = await fetch(
        "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306&limit=all"
      );
      const responseJson = await response.json();
      let tracks = responseJson.results;
      let allTracks = tracks.map((track) => {
        return track.tracks.map((t) => t);
      });

      let collectedTracks = [];
      allTracks.forEach((track) => {
        for (let i = 0; i < track.length; i++) {
          collectedTracks.push(track[i]);
        }
      });
      let { index } = this.state;
      let currentTrack = collectedTracks[index];
      console.log(currentTrack);
      this.setState({
        tracks: collectedTracks,
        currentTrack,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { tracks, currentTrack } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Homepage
                {...props}
                tracks={tracks}
                currentTrack={currentTrack}
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
              />
            )}
          />
          <Route
            path="/albums"
            render={(props) => <Album {...props} tracks={tracks} />}
          />
          <Route
            path="/artists"
            render={(props) => <Artists {...props} tracks={tracks} />}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={SigninSignup} />
        </Switch>
      </Router>
    );
  }
}
export default App;
