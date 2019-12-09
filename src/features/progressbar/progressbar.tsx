import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar as ProgressBarView } from '../../ui/molecules';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { handleTimeDrag } from './utils';

export const ProgressBar = () => {

  const dispatch = useDispatch();
  
  const bar = useRef<HTMLDivElement>(null);
//TODO: fix type any
  const audio = useSelector((state: any) => ({
    duration: state.progressbar.duration,
    currentTime: state.progressbar.currentTime,
    clickedTime: state.progressbar.clickedTime,
    playing: state.buttons.playing
  }))

  useAudioPlayer(dispatch, audio.currentTime, audio.clickedTime, audio.playing);
  console.log(audio.currentTime, audio.duration)
  return (
    <ProgressBarView 
      curPercentage={(audio.currentTime / audio.duration) * 100} 
      ref={bar} 
      handleMouseDown={(e: any) => handleTimeDrag(e, audio.duration, bar, dispatch)}
    />
  )
};