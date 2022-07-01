import styled from "styled-components";
import Meet from "../../assets/meeting.jpg";
export const Container = styled.div`
  width: 100%;
  margin-top: 0;
  background: linear-gradient(rgba(0, 19, 76, 0.7), rgba(0, 19, 76, 1)),
    url(${Meet});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

  .title {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.9rem;
  }
  .subtitle span {
    color: rgba(0,64,255,0.9);
    margin-left: 0.6rem;
    font-weight: bold;
  }

  .content {
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    width: 90%;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
    column-gap: 3rem;
    row-gap: 1.5rem;

    .box {
      background-color: transparent;
      border: 0.2rem solid rgba(0,64,255,0.9);
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 1rem;
      text-align: left;
      align-items: center;
      display: flex;
      color: white;
      font-family: 'Barlow', sans-serif;
    }

    .box p{
      margin-left: 0.8rem;
      font-size: 1.1rem;
    }
    .box span{
      border: 1rem solid rgba(0,64,255,0.9);
      background-color: rgba(0,64,255,0.9);
      margin-left: 1rem;
      border-radius: 0.9rem;
      color: white;
    }
    .box-center{
      grid-column-start: 2;

    }
  }
`;
