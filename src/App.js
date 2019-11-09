import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import song from './song1.mp3';
import song1 from './song2.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { VolumeButton } from './volume';

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
const Image = styled.img`
  display: block;
	max-width: 100%;
`;

const AlbumCover = styled.div`
  box-shadow: 0px 1px 10px rgba(0,0,0,0.35);
  margin-bottom: 15px;
`
const SongProgressBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
	height: 3px;
  background: ${props => `linear-gradient(to right, #df405a ${props.curPercentage}%, #ddd 0)`};
  margin: 10px 0;
`

const InnerBarKnob = styled.span`
  position: relative;
  height: 16px;
  width: 16px;
  top: -6px;
  left: ${props => `${props.curPercentage - 2}%`};
  border-radius: 50%;
  background-color: #df405a;
`;

const SongInfo = styled.div``

const SongTitle = styled.h1`
  margin-bottom: 0;
`
const SongDescr = styled.div``;
const SongText = styled.p``;

const PlayerButtons = styled.div`
	display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`
const Block = styled.div`
  width: 36px;
  height: 32px;
`;

function App() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  
  const innerbar = useRef();
  const [volume, setVolume] = useState(5);

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const barStart = innerbar.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = innerbar.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  const handleTimeDrag = (e) => {
    setClickedTime(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      setClickedTime(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Player>
        <audio id="audio">
          <source src={song} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <AlbumCover>
          <Image src='https://avatars.yandex.net/get-music-content/95061/14614cc4.a.7373129-1/m1000x1000'/>
        </AlbumCover>
        <SongProgressBar curPercentage={(curTime / duration) * 100} ref={innerbar} onMouseDown={e => handleTimeDrag(e)}> 
          <InnerBarKnob curPercentage={(curTime / duration) * 100}/>
        </SongProgressBar>
        <SongInfo>
          <SongTitle>NILETTO</SongTitle>
          <SongDescr>
            <SongText>Любимка</SongText>
          </SongDescr>
        </SongInfo>
        <PlayerButtons>
          <FontAwesomeIcon icon={faBackward} size='2x' className='button'/>
          {playing ? ( 
            <FontAwesomeIcon onClick={()=> setPlaying(false)} icon={faPause} size='2x' className='button'/> 
          )  : ( 
            <FontAwesomeIcon onClick={()=> setPlaying(true)} icon={faPlay} size='2x' className='button'/> 
          )}     
          <FontAwesomeIcon  icon={faForward} size='2x' className='button'/>
          <Block>
            <VolumeButton volume={volume} />
          </Block>
        </PlayerButtons>
      </Player>
    </React.Fragment>
  );
}

export default App;
