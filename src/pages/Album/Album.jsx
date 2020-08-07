import React, { Component } from "react";

import "./Album.css";

class Album extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  render() {
    const { albums } = this.props;
    return (
      <div className="row justify-content-center">
        {albums.map((album) => {
          return (
            <div className="card col-3 m-2 p-2" key={album.id}>
              <h5>{album.name}</h5>
              <p>Artist id: {album.artist_id}</p>
              <p>Artist name: {album.artist_name}</p>
              <p>Album id: {album.id}</p>
              <img src={album.image} alt="" className="w-25" />
              <p>Release date: {album.releasedate}</p>
              <p>No of tracks: {album.tracks.length}</p>
              {/* <p>Zip link: {album.zip}</p> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Album;
