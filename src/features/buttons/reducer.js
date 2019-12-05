import { TOGGLE_PLAY } from './action';

export const buttons = (state = { playing: false }, action) => {
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