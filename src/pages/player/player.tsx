import React from 'react';
import { Buttons } from '../../features/buttons';
import { ProgressBar } from '../../features/progressbar';
import { AlbumCover } from '../../ui/atom';
import { Description } from '../../ui/atom';
import { Audio } from '../../ui/atom';
import { PlayerView } from '../../ui/organisms';

export const Player = () => (
  <PlayerView>
    <AlbumCover />
    <Audio />
    <ProgressBar />
    <Description />
    <Buttons />
  </PlayerView>
)