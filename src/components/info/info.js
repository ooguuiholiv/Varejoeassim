import React from 'react'
import { Container } from './styles';
import { BsFillPeopleFill, BsLightbulb, BsFillCalendarWeekFill, BsClockHistory } from "react-icons/bs"
import { GoRocket } from "react-icons/go"
import { FaHandHoldingMedical } from "react-icons/fa"
import { SiAbletonlive } from "react-icons/si"
import { TbCertificate } from "react-icons/tb"
import { SiReactrouter } from "react-icons/si"
import { VscTools } from "react-icons/vsc"




function Info() {
  return (
    <Container>
      <div className="info1">
        <div className="text-1">
          <p>+10 horas <br /> de conteúdos <br />inéditos</p>
          <p>Acesso a <br />speakers <br />nacionais</p>
          <p>Expositores <br />e conteúdos</p>
          <p>Grandes nomes <br />do varejo</p>
        </div>
      </div>
      <div className="info2">
        <h1 className="title">
          Um evento diferente de tudo o que você já viu para <br />aprender os conceitos de <span>varejo</span> e <span>digital commerce<br /></span> mais inovadores do mundo na <span>atualidade</span>
        </h1>
        </div>
        <div className="idea1">
          <ul className="list-items1">
            <li className="list-item1">{<BsFillPeopleFill/>} <p>+20 speakers<br /> nacionais e <br />internacionais</p> </li>
            <li className="list-item1">{<BsLightbulb/>} <p>+10 exercicios <br />imersíveis em 1 <br />só dia</p></li>
            <li className="list-item1">{<GoRocket />} <p>A maior feira de <br />negócios para <br />varejotechs e empresas <br />do setor</p></li>
            <li className="list-item1">{<FaHandHoldingMedical/>} <p>O maior encontro de <br />Unicórnios da <br />América Latina</p></li>
            <li className="list-item1">{<SiAbletonlive/>} <p>Mentorias AO VIVO com <br /> várias das maiores <br />referencias do mercado</p></li>
          </ul>
        </div>
        <div className="idea2">
          <ul className="list-items2">
            <li className="list-item2">{<BsClockHistory/>} <p>10 horas de<br /> conteúdo <br />inédito</p> </li>
            <li className="list-item2">{<BsFillCalendarWeekFill/>} <p>Trilha de conteúdos <br />exclusivos do setor (com <br />tendencias e Planner Book <br/>Estratégico)</p></li>
            <li className="list-item2">{<TbCertificate />} <p>Certificação <br />emitida pela <br />Shopdin</p></li>
            <li className="list-item2">{<SiReactrouter/>} <p>Rodas de Negócio <br />para Networking e <br />parcerias</p></li>
            <li className="list-item2">{<VscTools/>} <p>Workshops <br /> PRÁTICOS durante <br />todo o evento</p></li>
          </ul>
        </div>
    </Container>
  )
}

export default Info;