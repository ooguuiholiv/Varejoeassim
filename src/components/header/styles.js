import styled from "styled-components";

export const Container = styled.div`
  background-color: #433d7d;
  width: 100%;


  .header-content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  .logo {
    height: 30vh;
    width: auto;
    @media screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .header-text {
    width: 55%;
    margin-top: 1.2rem;
    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .header-text .primary-text {
    color: white;
    font-size: max(3.25vw, 28px);
    font-family: "Raleway", sans-serif;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  .header-text .primary-text span {
    color: #ff6600;
  }

  .header-text .second-text {
    margin-top: 1rem;
    font-size: max(1.4vw, 18px);
    color: white;
    font-family: "Barlow", sans-serif;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  .header-text .second-text span {
    text-transform: uppercase;
  }

  .data-event {
    margin-top: max(1.4vw, 18px);
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  .clock-event {
    color: #ff6600;
    font-size: max(1.4vw, 18px);
  }

  .event-data {
    text-transform: uppercase;
    margin-left: 0.4rem;
    color: #ff6600;
    font-size: max(1.4vw, 18px);
    margin-top: 0.1rem;
    font-family: "Barlow", sans-serif;
  }

  .local-event {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: max(1.4vw, 18px);
    font-family: "Barlow", sans-serif;
    
  }

  .primary-text-local span {
    text-transform: uppercase;
  }

  .btn {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .btn-garanta {
    height: 7vh;
    width: 25%;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    background-color: #1ed760;
    border: none;
    border-radius: 0.5rem;
    font-size: max(1vw, 13px);
  }

  .btn-garanta:hover {
    background-color: #1db954;
    transition: all 1s ease;
  }

  .footer {
    width: 100%;
    margin-top: 1rem;
    background-color: #ff6600;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: max(1.4vw, 13px);
  }
`;
