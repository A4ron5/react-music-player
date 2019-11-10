import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  box-shadow: 0px 1px 10px rgba(0,0,0,0.35);
  margin-bottom: 15px;
`;

const Image = styled.img`
  display: block;
	max-width: 100%;
`;

export const AlbumCover = ({ path }) => (
  <Cover>
    <Image src={path}/>
  </Cover>
)