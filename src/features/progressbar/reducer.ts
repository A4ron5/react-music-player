import { constants, ProgressBarState, ProgressBarActionTypes } from './types/types';

const initialState: ProgressBarState = {
  duration: 0,
  currentTime: null,
  clickedTime: null,
};

export const progressbar = (state = initialState, action: ProgressBarActionTypes ): ProgressBarState => {
  switch(action.type) {
    case constants.SET_DURATION:
      return { ...state, duration: action.duration }
    case constants.SET_CURRENT_TIME:
      return { ...state, currentTime: action.currentTime }
    case constants.SET_CLICKED_TIME:
      return { ...state, clickedTime: action.clickedTime }
    default:
      return state;
  }
}
