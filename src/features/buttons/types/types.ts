export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';
export const GET_TRACKS = 'GET_TRACKS';

export type TogglePlayAction = {
  type: typeof TOGGLE_PLAY,
}

export type NextButtonAction = {
  type: typeof NEXT_TRACK,
}

export type PrevButtonAction = {
  type: typeof PREV_TRACK,
}

export type GetTracksAction = {
  type: typeof GET_TRACKS,
  tracks: object[],
} 

export type ButtonsAction = TogglePlayAction & GetTracksAction;

export interface ButtonsState {
  playing: boolean,
  tracks: object[],
  currentTrackPosition: number,
}
