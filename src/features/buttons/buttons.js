import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlay } from './action';
import { Buttons as ButtonsView  } from '../../ui/molecules';

export const Buttons = () => {

  const dispatch = useDispatch();
  const playing = useSelector(state => state.buttons.playing);

  return (
    <ButtonsView play={() => dispatch(togglePlay())}  playing={playing} volume={1}/>
  )
}


