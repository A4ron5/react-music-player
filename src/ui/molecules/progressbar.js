import React from 'react';
import styled from 'styled-components';

const SongProgressBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
	height: 3px;
  background: ${props => `linear-gradient(to right, #df405a ${props.curPercentage}%, #ddd 0)`};
  margin: 10px 0;
`
const BarKnob = styled.span`
  position: relative;
  height: 16px;
  width: 16px;
  top: -6px;
  left: ${props => `${props.curPercentage - 2}%`};
  border-radius: 50%;
  background-color: #df405a;
`;

export const ProgressBarUI = React.forwardRef(({ curPercentage, handleMouseDown }, ref) => (
  <SongProgressBar curPercentage={curPercentage} onMouseDown={handleMouseDown} ref={ref}>
    <BarKnob curPercentage={curPercentage}/>
  </SongProgressBar>
));