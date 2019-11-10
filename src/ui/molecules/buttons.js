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

const VolumeButton = ({ volume }) => {
  if(volume === 0) { 
    return <FontAwesomeIcon  icon={faVolumeMute} size='2x' className='button'/>;
  }
  if(volume > 0.5) {
    return <FontAwesomeIcon  icon={faVolumeUp} size='2x' className='button'/>;
  }
  if(volume < 0.5) { 
    return <FontAwesomeIcon  icon={faVolumeDown} size='2x' className='button'/>;
  }
}

export const Buttons = ({ start, stop, volume, playing }) => (
  <ButtonskWrapper>
    <FontAwesomeIcon icon={faBackward} size='2x' className='button'/>
    {playing ? ( 
      <FontAwesomeIcon onClick={start} icon={faPause} size='2x' className='button'/> 
    )  : ( 
      <FontAwesomeIcon onClick={stop} icon={faPlay} size='2x' className='button'/> 
    )}     
    <FontAwesomeIcon  icon={faForward} size='2x' className='button'/>
    <ButtonkWrapper>
      <VolumeButton volume={volume} />
    </ButtonkWrapper>
  </ButtonskWrapper>
)
