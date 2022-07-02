import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
      font-size: max(2.4vw, 26px);
      text-align: center;
      font-family: "Baumans", cursive;
    }
    .subtitle {
      color: white;
      margin-top: 1.5rem;
      font-family: "Barlow", sans-serif;
      font-size: max(1.2vw, 15px);
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
    gap: 4vw;
  }

  .items p{
    font-size: max(1.2vw, 12px);
  }

  .items span {
    color: #ff6600;
    font-size: max(3vw, 30px);
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
    font-size: max(1.2vw, 15px);
  }

  .consulta {
    display: flex;
    margin-top: 1.5rem;
    color: white;
    background-color: #ff1ea8;
    border: none;
    width: 42%;
    height: 4rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: max(1.4vw, 18px);
    border-radius: 0.8rem;
  }
  .consulta:hover {
    background-color: #FF4571;
    transition: all 1s ease-in;
  }
`;
