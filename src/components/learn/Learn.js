import React from 'react';

import { Container } from './styles';

function Learn() {
  return(
    <>
    <Container>
      <h1 className="title">Veja o que voce vai</h1>
      <h2 className="subtitle">aprender <span> ao vivo </span></h2>
      <div className="content">
        <div className="box box1"><span>1</span><p>Moda como estilo de vida</p></div>
        <div className="box"><span>2</span> <p>Mobilidade</p></div>
        <div className="box"><span>3</span> <p>Alimentação Saudável</p></div>
        <div className="box"><span>4</span> <p>Inteligência Emocional</p></div>
        <div className="box"><span>5</span> <p>Varejo Supermercadista</p></div>
        <div className="box"><span>6</span> <p>Experiência do Cliente</p></div>
        <div className="box"><span>7</span> <p>Ser mais produtivo</p></div>
        <div className="box"><span>8</span> <p>Sexualidade e Bem estar</p></div>
        <div className="box"><span>9</span> <p>Moda Plus Size</p></div>
        <div className="box"><span>10</span> <p>Direito do Consumidor</p></div>
        <div className="box"><span>11</span> <p>A nova Ordem Mercadológica</p></div>
        <div className="box"><span>12</span> <p>A moda como ferramentas de venda</p></div>
        {/* <div className="box box-center"><span>13</span><p>Social Commerce Advanced</p></div> */}
      </div>
    </Container>
    
    </>
  );
}

export default Learn;