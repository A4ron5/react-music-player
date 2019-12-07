import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './action';
import { ProgressBarUI } from '../../ui/molecules';
import { useAudioPlayer } from './hooks/useAudioPlayer';

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

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const barStart = bar.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = audio.duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  const handleTimeDrag = (e) => {
    dispatch(actions.setClickedTime(calcClickedTime(e)));

    const updateTimeOnMove = eMove => {
      dispatch(actions.setClickedTime(calcClickedTime(eMove)));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }
  return (
    <ProgressBarUI 
      curPercentage={(audio.curTime / audio.duration) * 100} 
      ref={bar} 
      handleMouseDown={e => handleTimeDrag(e)}
    />
  )
};