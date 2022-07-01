import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  background-color: #433d7d;

  .info1{
    width: 100%;
    background-color: #FF6600;
  }
  .info1 .text-1{
    display: flex;
    height: 25vh;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    color: white;
    font-size: 1.8rem;
    text-align: center;
    width: 80%;
  }

  .info2{
    width: 100%;
    background-color: #433d7d;
    color:  white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size: 2.2rem;
    text-align: center;
  }
  .info2 .title{
    font-family: 'Baumans', cursive;
    margin-top: 4rem;
  }
  .idea1{
    background-color: #433d7d;
    height: 25vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FF6600;
    font-size: 7vh;
    margin-top: 2rem;
  }

  .idea1 ul{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .idea2 ul{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    gap: 2rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .idea1 p{
    margin-top: 0.2rem;
    color: white;
    font-size: 0.9rem;
    text-align: center;
    font-family: 'Barlow', sans-serif;
  }

  .idea2 p{
    margin-top: 0.2rem;
    color: white;
    font-size: 0.9rem;
    text-align: center;
    font-family: 'Barlow', sans-serif;
  }

  .idea2{
    background-color: #433d7d;
    height: 25vh;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FF6600;
    font-size: 7vh;
    margin-top: 2rem;
    
  }
`;
