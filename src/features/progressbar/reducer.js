import { constants } from './action';

const initialState = {
  duration: 0,
  curTime: undefined,
  clickedTime: undefined,
}

export const progressbar = (state = initialState, action) => {
  switch(action.type) {
    case constants.SET_DURATION:
      return { ...state, duration: action.duration }
    case constants.SET_CURRENT_TIME:
      return { ...state, curTime: action.curTime }
    case constants.SET_CLICKED_TIME:
      return { ...state, clickedTime: action.clickedTime }
    default:
      return state;
  }
}