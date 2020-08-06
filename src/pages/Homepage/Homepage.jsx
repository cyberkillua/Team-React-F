import React, { Component } from "react";

// Componets
import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
import Tracks from "../Tracks/Tracks";
// CSS
import "./Homepage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

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

      this.setState({
        tracks,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
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
              <Tracks tracks={this.state.tracks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
