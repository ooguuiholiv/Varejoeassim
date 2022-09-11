import React from "react";
import Logo from "../../assets/va.png";
import { Container } from "./styles";
import { AiFillClockCircle } from "react-icons/ai";

function header() {
  return (
    <Container>
      <div className="header-content">
        <img src={Logo} alt="" className="logo" />
        <div className="header-text">
          <h1 className="primary-text">
            <span>O maior</span> evento <span>do</span> varejo <span>no</span>{" "}
            comércio local <span>no</span> pontal mineiro.
          </h1>
          <p className="second-text">
            Três dias inteiro para você <span>reinventar</span> sua estratégia
            de vendas com grandes especialistas do comércio local e nacional.
            Garanta sua vaga!
          </p>
        </div>
        <div className="data-event">
          <AiFillClockCircle className="clock-event" />
          <p className="event-data">de 5 a 11 de outubro de 2022.</p>
        </div>
        <div className="local-event">
          <p className="primary-text-local">
            Evento presencial: <span>atrium locações</span>
          </p>
          <p className="second-text-local">
            Av. Prof. José Vieira de Mendonça, 1741 - Alvorada, Ituiutaba - MG
          </p>
        </div>
      </div>
      <div className="btn">
        <button
          className="btn-garanta"
          onClick={() => {
            window.location.href =
              "https://www.sympla.com.br/varejo-e-assim__1711101?_gl=1*kgi88a*_ga*MTM1ODY1OTY5NC4xNjYyNjM0MDQy*_ga_KXH10SQTZF*MTY2MjYzNDA0MS4xLjEuMTY2MjYzNzEzMS4wLjAuMA";
          }}
        >
          inscrições abertas
        </button>
      </div>
      <div className="footer">
        <p className="text-footer">
          a transformação do comércio local é agora!
        </p>
      </div>
    </Container>
  );
}
export default header;
