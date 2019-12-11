import React from 'react';
import { PlayerView } from '../../ui/organisms';
import { AlbumCover } from '../../ui/atom';
import { Audio } from '../../ui/atom';
import { ProgressBar } from '../progressbar';
import { Description } from '../../ui/atom';
import { Buttons } from '../buttons';


export const Player = (props: {cover: string, url: string, artist: string, descr: string}) => {
  
  return (
    <PlayerView>
      <AlbumCover src={props.cover} />
      <Audio src={props.url}/>
      <ProgressBar />
      <Description title={props.artist} descr={props.descr}/>
      <Buttons />
    </PlayerView>
  )
}