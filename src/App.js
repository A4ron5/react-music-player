import React from 'react';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import { AlbumCover } from './ui/molecules';
import { Audio } from './ui/molecules';
import { Description } from './ui/molecules';

import { Buttons } from './features/buttons';
import { ProgressBar } from './features/progressbar';

import configureStore from './store';

const store = configureStore();

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
  
  

  return (
    <Provider store={store} >
      <GlobalStyle/>
      <Player>
        <Audio/>
        <AlbumCover path='https://avatars.yandex.net/get-music-content/95061/14614cc4.a.7373129-1/m1000x1000' />
        <ProgressBar />
        <Description />
        <Buttons />
      </Player>
    </Provider>
  );
}

export default App;
