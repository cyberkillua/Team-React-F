import React from 'react';

import Tracks from '../Tracks/Tracks'

const AlbumTracksList = (props) => {
    const { handleClick, currentTrack } = props
    const { tracks, artist_name, name } = props.album
    // console.log(tracks, artist_name, name)
    return ( 
     <div className="text-center my-2" >
         <h1>Album name : {name}</h1>
         <p className="display-4"> By : {artist_name}</p>
           <Tracks tracks={tracks}  handleClick={handleClick} currentTrack={currentTrack} />
     </div>
     );
}
 
export default AlbumTracksList;