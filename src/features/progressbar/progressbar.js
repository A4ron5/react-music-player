import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBarUI } from '../../ui/molecules';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { handleTimeDrag } from './utils';


export const ProgressBar = () => {

  const dispatch = useDispatch();
  
  const bar = useRef();

  const audio = useSelector(state => ({
    duration: state.progressbar.duration,
    curTime: state.progressbar.curTime,
    clickedTime: state.progressbar.clickedTime,
    playing: state.buttons.playing
  }))

  useAudioPlayer(dispatch, audio.curTime, audio.clickedTime, audio.playing);

  return (
    <ProgressBarUI 
      curPercentage={(audio.curTime / audio.duration) * 100} 
      ref={bar} 
      handleMouseDown={e => handleTimeDrag(e, audio.duration, bar, dispatch)}
    />
  )
};