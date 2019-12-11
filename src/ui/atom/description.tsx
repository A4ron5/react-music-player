import React from 'react';
import styled from 'styled-components';

const Info = styled.div``

const Title = styled.h1`
  margin-bottom: 0;
`;
const Descr = styled.div``;
const Text = styled.p``;

export const Description = ({ title, descr }: { title: string, descr: string }) => (
  <Info>
    <Title>{title}</Title>
    <Descr>
      <Text>{descr}</Text>
    </Descr>
  </Info>
);