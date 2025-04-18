import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: white;

.parcImg{
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  img{
    width: 85%;
  }
}

  h1 {
    color: black;
    text-align: center;
    padding-top: 2rem;
    font-size: 2.5rem;
    font-family: "Baumans", cursive;
  }

  h2 {
    color: black;
    text-align: center;
    padding-top: 0.5rem;
    font-size: 0.7rem;
  }
  .btn {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  .btn-garanta {
    justify-content: center;
    height: 7vh;
    width: 25%;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    background-color: #ff1ea8;
    border: none;
    border-radius: 0.5rem;
    font-size: max(1vw, 12px);
    margin-bottom: 1.5rem;
  }

  /* Slider */

  .Slides{
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    img{
      width: 50%;
    }
  }

  
`;
