import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown} from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute} from '@fortawesome/free-solid-svg-icons'

//TODO: types should be in other dir
type VolumeButton = {
  volume: number
}

type Buttons = {
  play: any,
  prev: any,
  next: any
  volume: number,
  playing: boolean,
}

const ButtonkWrapper = styled.div`
  width: 36px;
  height: 32px;
`;

const ButtonskWrapper = styled.div`
	display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`

const VolumeButton = ({ volume }: VolumeButton) => {
  let icon: any;

  if(volume === 0) { 
    icon = faVolumeMute;
  }
  if(volume > 0.5) {
    icon = faVolumeUp;
  }
  if(volume < 0.5) { 
    icon = faVolumeDown;
  }
  
  return <FontAwesomeIcon  icon={icon} size='2x' className='button'/>;
}

export const Buttons = ({ play, next, prev, volume, playing }: Buttons) => (
  <ButtonskWrapper>
    <FontAwesomeIcon onClick={prev} icon={faBackward} size='2x' className='button'/>
    {playing ? ( 
      <FontAwesomeIcon onClick={play} icon={faPause} size='2x' className='button'/> 
    )  : ( 
      <FontAwesomeIcon onClick={play} icon={faPlay} size='2x' className='button'/> 
    )}     
    <FontAwesomeIcon onClick={next} icon={faForward} size='2x' className='button'/>
    <ButtonkWrapper>
      <VolumeButton volume={volume} />
    </ButtonkWrapper>
  </ButtonskWrapper>
)

