import React from "react";
import { Container, PalesList, Pales } from "./styles";

import DBPal from "../../services/users";

function Palestrantes() {
  const pall = DBPal.palestrantes;

  return (
    <Container>
      <h1 className="title">palestrantes</h1>
      <div className="content">
        <PalesList>
          {pall.map((users) => {
            return (
              <Pales key={users.id}>
                <img src={users.img} alt="" />
                {console.log(users.img)}
                <h1 className="nome">{users.nome}</h1>
                <div className="tema-text">
                  <h2>tema: </h2>
                  <p className="tema"> {users.tema}</p>
                  <button
                    className="ins"
                    onClick={() => {
                      alert('Clicou no link')
                    }}
                  >
                    inscreva-se
                  </button>
                </div>
              </Pales>
            );
          })}
        </PalesList>
      </div>
      <p className="more">Muitos outros palestrantes a confirmar...</p>
    </Container>
  );
}

export default Palestrantes;
