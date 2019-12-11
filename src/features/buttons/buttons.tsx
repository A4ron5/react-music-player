import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlay, nextTrack, prevTrack } from './action';
import { Buttons as ButtonsView  } from '../../ui/molecules';



export const Buttons = () => {

  const dispatch = useDispatch();
  const playing = useSelector((state: any) => state.buttons.playing);

  const play = () => {
    dispatch(togglePlay())
  }

  const next = () => {
    dispatch(nextTrack())
  }

  const prev = () => {
    dispatch(prevTrack())
  }

  return (
    <ButtonsView 
      play={play}
      next={next}
      prev={prev}  
      playing={playing} 
      volume={1}
      />
  )
}


