import React, { Component } from "react";
import Track from "../../components/Track/Track";
import NowPlaying from "../../components/NowPlaying/NowPlaying";

class Tracks extends Component {
  // constructor() {
  //   super();
  // }
  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  render() {
    const { tracks, currentTrack, handleClick } = this.props;
    return (
      <section>
        <div className="jumbotron jumbotron-fluid px-5">
          <h1>TRACKS</h1>
        </div>
        <div className="row my-5 justify-content-center px-5">
          {tracks.map((track) => {
            return (
              <Track
                key={track.id}
                id={track.id}
                artist_id={track.artist_id}
                artist_name={track.artist_name}
                title={track.name}
                image={track.image}
                date={track.releasedate}
                handleClick={handleClick}
              />
            );
          })}
        </div>
        <div className="row">
          <div id="now-playing">
            <NowPlaying currentTrack={currentTrack} />
          </div>
        </div>
      </section>
    );
  }
}

export default Tracks;
