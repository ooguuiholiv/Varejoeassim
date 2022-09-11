import React from "react";
import { Container } from "./styles";
import {
  BsFillPeopleFill,
  BsLightbulb,
  BsFillCalendarWeekFill,
  BsClockHistory,
} from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import { FaHandHoldingMedical } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";


function Info() {
  return (
    <Container>
      <div className="info1">
        <div className="text-1">
          <p>
            +10 horas <br /> de conteúdos <br />
            inéditos
          </p>
          <p>
            Acesso <br />
            digital aos <br />
            conteúdos
          </p>
          <p>
            Expositores <br />
            locais
          </p>
          <p>
            Grandes nomes <br />
            do varejo local
          </p>
        </div>
      </div>
      <div className="info2">
        <h1 className="title">
          Um evento diferente de tudo o que você já viu para <br />
          aprender os conceitos de <span>varejo</span> e{" "}
          <span>
            {" "}
            comércio digital
            <br />
          </span>{" "}
          mais inovadores da <span>atualidade</span>
        </h1>
      </div>
      <div className="idea1">
        <ul className="list-items1">
          <li className="list-item1">
            {<BsFillPeopleFill />}{" "}
            <p>
              mais de 10 palestrantes
              <br /> locais e <br />
              nacionais
            </p>{" "}
          </li>
          <li className="list-item1">
            {<BsLightbulb />}{" "}
            <p>
              Oficinas <br />
              oferecidas pelo <br />
              SEBRAE
            </p>
          </li>
          <li className="list-item1">
            {<GoRocket />}{" "}
            <p>
              O maior evento de <br />
              varejo do <br />
              pontal mineiro
              <br />
            </p>
          </li>
          <li className="list-item1">
            {<FaHandHoldingMedical />}{" "}
            <p>
              Grande encontro de <br />
              empreendedores <br />
            </p>
          </li>
        </ul>
      </div>
      <div className="idea2">
        <ul className="list-items2">
          <li className="list-item2">
            {<BsClockHistory />}{" "}
            <p>
              Palestras
              <br /> ao vivo <br />
              no digital
            </p>{" "}
          </li>
          <li className="list-item2">
            {<BsFillCalendarWeekFill />}{" "}
            <p>
              Mais de 10 horas
              <br />
              de conteúdos <br />
              <br />
            </p>
          </li>
          <li className="list-item2">
            {<TbCertificate />}{" "}
            <p>
              Trilhas exclusivas <br />
              de conteúdo para <br />o comércio local
            </p>
          </li>
          <li className="list-item2">
            {<SiReactrouter />}{" "}
            <p>
              Certificação de <br />
              participação
              <br />
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Info;
