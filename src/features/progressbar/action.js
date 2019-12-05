const SET_DURATION = 'SET_DURATION';
const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
const SET_CLICKED_TIME = 'SET_CLICKED_TIME';

export const constants = {
  SET_DURATION,
  SET_CURRENT_TIME,
  SET_CLICKED_TIME,
}

const setDuration = (duration ) => ({
  type: SET_DURATION,
  duration
})

const setCurrentTime = (curTime) => ({
  type: SET_CURRENT_TIME,
  curTime
})

const setClickedTime = (clickedTime) => ({
  type: SET_CLICKED_TIME,
  clickedTime
})

export const actions = {
  setDuration,
  setCurrentTime,
  setClickedTime,
}