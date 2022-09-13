import React from 'react'
import Crono from '../../assets/cronograma.png'

import styled from 'styled-components';

export const Container = styled.div`
  width  :100% ;
  height: 80vh;
  background-color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;

  img{
    width: 75%;
  }
`;

export const Cronograma = () => {
  return (
    <>
    <Container>
      <img src={Crono} alt="" />
    </Container>
    </>
  )
}