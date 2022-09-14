import React from 'react'

import Sebrae from '../../assets/apoio/sebrae.jpeg'
import Shopdin from '../../assets/shopdin.png'
import Cdl from '../../assets/cdl.png'
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: white;
  margin-top: 8rem;

  hr{
    color: orange;
  }

  .apoiadores{
    display: flex;
    justify-content: space-evenly;

    img{
      width: 7vw;
    }
  }
`;

export const Footer = () => {
  return(
    <>
    <Container>
      <hr />
      <div className="apoiadores">
        <img src={Sebrae} alt="sebrae" />
        <img src={Shopdin} alt="shopdin" />
        <img src={Cdl} alt="cdl" />
      </div>
    </Container>
    </>
  )
}