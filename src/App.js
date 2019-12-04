import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AlbumCover } from './ui/molecules';
import { Audio } from './ui/molecules';
import { Description } from './ui/molecules';

import { ButtonsBar } from './features/';
import { ProgressBar } from './features/';

import useAudioPlayer from './useAudioPlayer';

const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    font-family:   'Varela Round', sans-serif;
  }
  body {
    background: #dfe6ff6b;
  }
  .button {
    cursor: pointer;
    &:hover {
      color: #a20555bd;
    }
  }
`;

const Player = styled.div`
  width: 100%;
	max-width: 340px;
	padding: 20px;
	margin: 10px auto;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.35);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
  border-radius: 5px;
  background: #fff;
`

function App() {
  
  const {curTime, duration, playing, setPlaying, setClickedTime} = useAudioPlayer();

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Player>
        <Audio/>
        <AlbumCover path='https://avatars.yandex.net/get-music-content/95061/14614cc4.a.7373129-1/m1000x1000' />
        <ProgressBar curTime={curTime} duration={duration} setClickedTime={setClickedTime}/>
        <Description />
        <ButtonsBar playing={playing} setPlaying={setPlaying}/>
      </Player>
    </React.Fragment>
  );
}

export default App;
