import React from 'react';

export const Audio = ({ src }) => (
  <audio id='audio'>
    <source src='http://d.zaix.ru/g72i.mp3'/>
    Your browser does not support the <code>audio</code> element.
  </audio>
)