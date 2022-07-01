import React from 'react'
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
    </div>
  )
}
export default varejo;