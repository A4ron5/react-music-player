import React from 'react';
import song from './song1.mp3'

export const Audio = ({ src }) => (
  <audio id='audio'>
    <source src={song}/>
    Your browser does not support the <code>audio</code> element.
  </audio>
)