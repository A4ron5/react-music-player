import { useEffect } from 'react';
import { actions } from '../action';

export const useAudioPlayer = (dispatch: any, curTime: number, clickedTime: number, playing: boolean) => {

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
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
  }, [dispatch, curTime, clickedTime, playing])

}