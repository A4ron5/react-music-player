import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTracks } from '../../features/buttons/action';
import { fetchTracks } from '../../api';
import { Player } from '../../features/player';


export const Main = () => {
  
  const tracks = useSelector((state: any) => ({
    position: state.buttons.currentTrackPosition,
    tracks: state.buttons.tracks
  }));

  const dispatch = useDispatch();

  const track = tracks.tracks[tracks.position];
  
  useEffect(() => {
    
    dispatch(getTracks(fetchTracks().tracks))
    
  }, [])

  return (
    <Player 
      cover={track.cover}
      url={track.url}
      artist={track.artist}
      descr={track.track}  
    />
  )
}