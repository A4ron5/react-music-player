import { TOGGLE_PLAY, GET_TRACKS, NEXT_TRACK, PREV_TRACK, ButtonsState, ButtonsAction } from './types/types';

const initialState: ButtonsState = {
  playing: false,
  tracks: [{
    artist: '',
    track: '',
    url: '',
    cover: ''
  }],
  currentTrackPosition: 0,
}
// That's not best solution to write logic in reducer in NEXT_TRACK and PREV_TRACK,
// but i do it because won't use any library to write logic there

export const buttons = (state = initialState, action: ButtonsAction): ButtonsState => {
  switch(action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing
      }
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.tracks
      }
    case NEXT_TRACK:
      return {
        ...state,
        currentTrackPosition:
          state.currentTrackPosition === (state.tracks.length - 1)
          ? 0 : state.currentTrackPosition + 1
      }
    case PREV_TRACK:
      return {
        ...state,
        currentTrackPosition:
          state.currentTrackPosition === 0
          ? (state.tracks.length - 1) : state.currentTrackPosition - 1
      }
    default: 
      return state;
  }
}