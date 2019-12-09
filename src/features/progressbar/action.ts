import { constants, DurationTimeAction, CurrentTimeAction, ClickedTimeAction } from './types/types';

const setDuration = (duration: number): DurationTimeAction => ({
  type: constants.SET_DURATION,
  duration
});

const setCurrentTime = (currentTime: number): CurrentTimeAction => ({
  type: constants.SET_CURRENT_TIME,
  currentTime
});

const setClickedTime = (clickedTime: number | null): ClickedTimeAction => ({
  type: constants.SET_CLICKED_TIME,
  clickedTime
});

export const actions = {
  setDuration,
  setCurrentTime,
  setClickedTime,
};
