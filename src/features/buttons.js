import React, { useState } from 'react';
import { Buttons  } from '../ui/molecules';
import useAudioPlayer from '../useAudioPlayer';


export const ButtonsBar = () => {

  const [volume, setVolume] = useState(5);
  const { playing, setPlaying } = useAudioPlayer();

  const start = () => {
    setPlaying(false)
  }

  const stop = () => {
    setPlaying(true)
  }

  return (
    <Buttons start={start} stop={stop} playing={playing} volume={volume}/>
  )
}
