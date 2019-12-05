import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlay } from './action';
import { ButtonsUI  } from '../../ui/molecules';

export const Buttons = () => {

  const dispatch = useDispatch();
  const playing = useSelector(state => state.buttons.playing);

  const play = () => {
    dispatch(togglePlay())
  }

  return (
    <ButtonsUI play={play}  playing={playing} volume={1}/>
  )
}


