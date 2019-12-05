import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './action';
import { ProgressBarUI } from '../../ui/molecules';

export const ProgressBar = () => {

  const dispatch = useDispatch();

  const duration = useSelector(state => state.progressbar.duration);
  const curTime = useSelector(state => state.progressbar.curTime);
  const clickedTime = useSelector(state => state.progressbar.clickedTime);
  const playing = useSelector(state => state.buttons.playing);

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.volume = 0.2;
    
    const setAudioData = () => {
      dispatch(actions.setDuration(audio.duration));
      dispatch(actions.setCurrentTime(audio.currentTime));
    }

    const setAudioTime = () => {
      dispatch(actions.setCurrentTime(audio.currentTime));
    }

    
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      dispatch(actions.setClickedTime(null));
    } 
    
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  }, [playing, clickedTime, curTime, dispatch]);

  const bar = useRef();

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const barStart = bar.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
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
      curPercentage={(curTime / duration) * 100} 
      ref={bar} 
      handleMouseDown={e => handleTimeDrag(e)}
    />
  )
};