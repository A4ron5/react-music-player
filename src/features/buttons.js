import React, { useState } from 'react';
import { Buttons  } from '../ui/molecules';

export const ButtonsBar = ({ setPlaying, playing }) => {

  const play = () => {
    setPlaying(prev => !prev)
  }

  return (
    <Buttons play={play}  playing={playing} volume={volume}/>
  )
}
