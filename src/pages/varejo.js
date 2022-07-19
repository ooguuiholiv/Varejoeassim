import React from 'react'
import Apoio from '../components/apoio/Apoio';
import Cuidados from '../components/cuidados/Cuidados';
import Header from '../components/header/header';
import Info from '../components/info/info';
import Learn from '../components/learn/Learn';
import Palestrantes from '../components/palestrantes/palestrantes';





function varejo() {
  return (
    <div>
      <Header />
      <Palestrantes />
      <Info />
      <Learn />
      <Cuidados />
      <Apoio />
    </div>
  )
}
export default varejo;