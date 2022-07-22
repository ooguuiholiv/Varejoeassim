import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  hr{
    opacity: 0.4;
    color: var(--laranja);
  }

  .title{
    margin-top: 2rem;
    font-size: max(1.4rem, 16px);
    text-align: center;
    font-family: 'Baumans', sans-serif;
  }

  .video{
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 1024px){
    iframe {
      width: 65vw;
      height: 50vh;
    }
   }

   @media screen and (min-width: 768px) and (max-width:1023px){
    iframe {
      width: 55vw;
      height: 45vh;
    }
   }
   @media screen and (max-width:767px){
    iframe {
      width: 80%;
      height: 60%;
    }
   }
  }
`;
