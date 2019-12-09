import { TOGGLE_PLAY, ButtonsState, ButtonsAction } from './types/types';

const initialState: ButtonsState = {
  playing: false
}

export const buttons = (state = initialState, action: ButtonsAction): ButtonsState => {
  switch(action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing
      }
    default: 
      return state;
  }
}