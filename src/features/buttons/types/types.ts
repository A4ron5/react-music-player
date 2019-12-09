export const TOGGLE_PLAY = 'TOGGLE_PLAY';

export type ButtonsAction = {
  type: typeof TOGGLE_PLAY,
}

export interface ButtonsState {
  playing: boolean,
}