import React, { Component } from "react";

// Componets
import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
// import Tracks from "../Tracks/Tracks";
// CSS
import "./Homepage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
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
              {/* <Tracks tracks={this.props.tracks} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
