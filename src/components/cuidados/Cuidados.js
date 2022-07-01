import React from "react";
import { Container } from "./Styles";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { MdOutlineCleanHands } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

function Cuidados() {
  return (
    <Container>
      <div className="content">
        <h1 className="title">
          Para entregar toda a experiência que só um <br /> evento presencial
          consegue entregar, <br /> precisamos garantir alguns cuidados!
        </h1>
        <h2 className="subtitle">
          Durante o Varejo and Digital Commerce Day, para a segurança de todos,
          precisamos que todos os protocolos de <br /> prevenção a Covid-19
          sejam respeitados.
        </h2>
      </div>
      <div className="content-item">
        <ul className="item">
          <li className="items">
            <span>{<RiSurgicalMaskFill />}</span>
            <p>
              O uso de máscara é <br /> opcional
            </p>
          </li>
          <li className="items">
            <span>{<MdOutlineCleanHands />}</span>
            <p>
              Recomendamos o uso <br /> de álcool em gel
            </p>
          </li>
          <li className="items">
            <span>{<HiIdentification />}</span>
            <p>
              Necessário a apresentação <br /> de comprovante de vacina, <br />
              conforme decreto <br /> municipal.
            </p>
          </li>
          <li className="items">
            <span>{<GiVacuumCleaner />}</span>
            <p>
              Cuidaremos da <br />
              higienização de <br />
              todas as salas.
            </p>
          </li>
        </ul>
      </div>
      <div className="info">
        <h2 className="infotxt">
          Confira abaixo a política com os protocolos necessários para sua
          participação <br />
          no evento presencial:
        </h2>
        <button className="consulta">Consultar outros protocolos vigentes</button>
      </div>
    </Container>
  );
}
export default Cuidados;
