import { TOGGLE_PLAY, NEXT_TRACK, PREV_TRACK, GET_TRACKS,
  TogglePlayAction, NextButtonAction, PrevButtonAction, GetTracksAction } from './types/types';

export const togglePlay = (): TogglePlayAction  => ({
  type: TOGGLE_PLAY,
})

export const nextTrack = (): NextButtonAction => ({
  type: NEXT_TRACK,
})

export const prevTrack = (): PrevButtonAction => ({
  type: PREV_TRACK,
})

export const getTracks = (tracks: object[]): GetTracksAction => ({
  type: GET_TRACKS,
  tracks
})