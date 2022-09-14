import styled from 'styled-components';

export const Container = styled.div`
background-color: white;
width: 100%;

.title{
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: max(1.8vw, 20px);
}
  
.content{
  width: 90%;
  margin-left: auto;
  margin-right: auto;

}

.more{
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  color: #201d7b;
  font-weight: bold;
  font-size: max(1.8vw, 18px);
}
`;


export const PalesList = styled.ul`
margin-top: 5rem;
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
column-gap: 2rem;
row-gap: 3rem;
`

export const Pales = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a{
    transition: all 0.4s;
  }
  a:hover {
    transform: scale(1.1);
  }
.tema-text{
  display: flex;
flex-direction: column;
align-items: center;
  h2{
    color: orange;
    font-size: 1.3rem;
    padding-top: 0.5rem;
  }
  p{
    margin-top: 0.3rem;
    color: blue;
    text-align: center;
    text-transform: none;
    padding-left: 0.4rem;
    
  }
  .ins {
    width: auto;
    margin-top: 0.4rem;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    background-color: orange;
    color: white;
    border-radius: 0.2rem;
    cursor: pointer;
  }
}
h1 {
  font-size: 1.4rem;
  color: black;
}

`