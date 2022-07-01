import styled from 'styled-components';

export const Container = styled.div`
  background-color: #433d7d;
  width: 100%;
  
  .header-content{
     width: 90%;
     margin-left: auto;
     margin-right: auto;
   }

  .logo {
    height: 30vh;
    width: auto;
  }

  .header-text{
    width: 55%;
    margin-top: 1.2rem;
  }

  .header-text .primary-text {
    color: white;
    font-size: 2.8rem;
    font-family: 'Raleway', sans-serif;
  }

  .header-text .primary-text span {
    color: #FF6600;
  }

  .header-text .second-text {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: white;
    font-family: 'Barlow', sans-serif;

  }

  .header-text .second-text span {
    text-transform: uppercase;
  }

  .data-event{
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
  }

  .clock-event{
    color: #FF6600;
    font-size: 1.8rem;
  }

  .event-data{
    text-transform: uppercase;
    margin-left: 0.4rem;
    color: #FF6600;
    font-size: 1.2rem;
    margin-top: 0.1rem;
    font-family: 'Barlow', sans-serif;
  }

  .local-event{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1.1rem;
    font-family: 'Barlow', sans-serif;

  }

  .primary-text-local span{
    text-transform: uppercase;
  }

  .btn{
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .btn-garanta{
    height: 7vh;
    width: 15vw;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    background-color: #1ed760;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }

  .btn-garanta:hover{
    background-color: #1db954 ;
    transition: all 1s ease;
  }

  .footer{
    width: 100%;
    margin-top: 1rem;
    background-color: #FF6600;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

`;
