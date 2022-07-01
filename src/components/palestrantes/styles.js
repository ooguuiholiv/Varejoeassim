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
  font-size: 1.5rem;
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
  font-size: 1.5rem;
}
`;


export const PalesList = styled.ul`
margin-top: 5rem;
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  p{
    color: black;
    text-transform: capitalize;
    
  }

`