import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  background: var(--padrao);

  .content {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      margin-top: -14rem;
      color: white;
      font-size: 2rem;
      text-align: center;
      font-family: "Baumans", cursive;
    }
    .subtitle {
      color: white;
      margin-top: 1.5rem;
      font-family: "Barlow", sans-serif;
      font-size: 1rem;
      text-align: center;
    }
  }

  .content-item {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -14rem;
  }
  .item {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .items span {
    color: #ff6600;
    font-size: 2rem;
  }

  .items {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .infotxt {
    color: white;
    text-align: center;
  }

  .consulta {
    display: flex;
    margin-top: 1.5rem;
    color: white;
    background-color: #ff1ea8;
    border: none;
    width: 25vw;
    height: 8vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 0.8rem;
  }
  .consulta:hover {
    background-color: #FF4571;
    transition: all 1s ease-in;
  }
`;
