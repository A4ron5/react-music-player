import React, { useState } from 'react';
import { Buttons  } from '../ui/molecules';
import useAudioPlayer from '../useAudioPlayer';


export const ButtonsBar = (props) => {

  const [volume, setVolume] = useState(5);

  const play = () => {
    props.setPlaying(prev => !prev)
  }

  return (
    <Buttons play={play}  playing={props.playing} volume={volume}/>
  )
}
