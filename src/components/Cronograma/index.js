import React from "react";
import Crono from "../../assets/cronograma.png";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 35vh;
  }

  img {
    width: 65vw;
    
    @media screen and (max-width: 768px) {
      width: 80vw;
      height: 30vh;
    }
  }
`;

export const Cronograma = () => {
  return (
    <>
      <Container>
        <img src={Crono} alt="" />
      </Container>
    </>
  );
};
