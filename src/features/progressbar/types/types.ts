const SET_DURATION = 'SET_DURATION';
const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
const SET_CLICKED_TIME = 'SET_CLICKED_TIME';

export const constants = {
  SET_DURATION,
  SET_CURRENT_TIME,
  SET_CLICKED_TIME,
};

export interface DurationTimeAction {
  type: typeof constants.SET_DURATION,
  duration: number
};

export interface CurrentTimeAction  {
  type: typeof constants.SET_CURRENT_TIME,
  currentTime: number
};
//TODO: think about clickedTime types
export interface ClickedTimeAction {
  type: typeof constants.SET_CLICKED_TIME,
  clickedTime: number | null
};

export type ProgressBarActionTypes = (DurationTimeAction & CurrentTimeAction & ClickedTimeAction);

export interface ProgressBarState {
  duration: number,
  currentTime: null | number,
  clickedTime: null | number,
};
