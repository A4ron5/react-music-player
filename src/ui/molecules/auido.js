import React from 'react';

export const Audio = ({ src }) => (
  <audio id='audio'>
    <source src={src}/>
    Your browser does not support the <code>audio</code> element.
  </audio>
)