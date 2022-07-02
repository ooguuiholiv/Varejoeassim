import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, PalesList, Pales } from './styles';
import User1 from "../../assets/users/01.jpg";
// import User2 from "../../assets/users/02.jpg";
// import User3 from "../../assets/users/03.jpg";
// import User4 from "../../assets/users/04.jpg";
import DBPal from '../../services/users';


function Palestrantes() {
  const pall = DBPal.palestrantes;
  console.log(pall)
  const [user, setUser] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  // useEffect(() => {
  //   axios.get(apiUrl + '/palestrantes').then(function (response) {
  //     setUser(response.data)
  //     console.log(response);
  //   })
  // }, [])

  return (
    <Container>
      <h1 className="title">palestrantes</h1>
      <div className="content">

        <PalesList>
          {pall.map(users => {
            return (
              <Pales key={users.id}>
                <img src={users.img} alt="" />
                {console.log(users.img)}
                <p className="nome">{users.nome}</p>
                <p className="tema">{users.tema}</p>
                <p className="empresa">{users.empresa}</p>
                {console.log(users.img)}
              </Pales>
            )
          })}

        </PalesList>
      </div>
          <p className="more">Muitos outros palestrantes a confirmar...</p>
    </Container>
  )
}

export default Palestrantes;