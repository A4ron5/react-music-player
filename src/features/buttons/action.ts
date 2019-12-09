import { TOGGLE_PLAY, ButtonsAction } from './types/types';

export const togglePlay = (): ButtonsAction  => ({
  type: TOGGLE_PLAY,
})