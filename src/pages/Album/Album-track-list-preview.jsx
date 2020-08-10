import React from 'react';
import { withRouter } from 'react-router-dom';
import AlbumTracksList from './album.track.list'

const AlbumTracks = (props) => {
    const  albumId  = props.match.params.albumid
    const { albums, currentTrack, handleClick } = props
    return ( 
        <div>
            {
              albums.map( album => {
              return   album.id === albumId ?
             <AlbumTracksList album={album} currentTrack={currentTrack} handleClick={handleClick} key={album.id} /> : 
               null
                })
              }  
        </div> 
     );
}
 
export default withRouter(AlbumTracks) ;