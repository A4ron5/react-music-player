import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  box-shadow: 0px 1px 10px rgba(0,0,0,0.35);
  margin-bottom: 15px;
  z-index: 100;
`;

const Image = styled.img`
  display: block;
	max-width: 100%;
  width: 300px;
  height: 300px;
`;

export const AlbumCover = ({ src } : { src: string }) => (
  <Cover>
    <Image src={src}/>
  </Cover>
)

