import React, { Component } from "react";

import "./Artists.css";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  async componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);

    const artistsFetch = await fetch(
      "https://api.jamendo.com/v3.0/artists/?client_id=d5d26306&limit=all"
    );
    const artistsJson = await artistsFetch.json();
    const artists = artistsJson.results;
    this.setState({
      artists,
    });
  }
  render() {
    const { artists } = this.state;
    console.log(artists);
    return (
      <div className="row justify-content-center">
        {artists.map((artist) => {
          return (
            <div className="card col-3 m-3">
              <img src={artist.image} alt="" className="w-25" />
              <p>Name: {artist.name}</p>
              <p>Id: {artist.id}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Artists;
