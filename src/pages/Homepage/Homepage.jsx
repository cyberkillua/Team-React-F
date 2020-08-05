import React, { Component } from "react";

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
            Sidebar
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
