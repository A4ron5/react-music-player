import React from 'react';
import styled from 'styled-components';

//TODO: types should be in other dir 'progressbar/types'
type ProgressBar = {
  curPercentage: number
}

type Ref = HTMLDivElement;
//TODO: fix any type
type Props = { curPercentage: number, handleMouseDown: any }

const SongProgressBar = styled.div<ProgressBar>`
  position: relative;
  display: flex;
  width: 100%;
	height: 3px;
  background: ${props => `linear-gradient(to right, #df405a ${props.curPercentage}%, #ddd 0)`};
  margin: 10px 0;
`
const BarKnob = styled.span<ProgressBar>`
  position: relative;
  height: 16px;
  width: 16px;
  top: -6px;
  left: ${props => `${props.curPercentage - 2}%`};
  border-radius: 50%;
  background-color: #df405a;
`;

export const ProgressBar = React.forwardRef<Ref, Props>((props, ref) => (
  <SongProgressBar 
    curPercentage={props.curPercentage} 
    onMouseDown={props.handleMouseDown} 
    ref={ref} 
  >
    <BarKnob curPercentage={props.curPercentage} />
  </SongProgressBar>
));