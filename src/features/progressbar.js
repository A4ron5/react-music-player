import React, { useRef } from 'react';
import useAudioPlayer from '../useAudioPlayer';
import { ProgressBarUI } from '../ui/molecules';

export const ProgressBar = ({curTime, duration, setClickedTime}) => {

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
    setClickedTime(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      setClickedTime(calcClickedTime(eMove));
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