import React from 'react';
import { faVolumeDown} from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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