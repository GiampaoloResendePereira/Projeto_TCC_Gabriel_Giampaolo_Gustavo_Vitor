import React from 'react'

import CalculoFrete from './CalculoFrete'
import EntregasGet from '../Crude/EntregasGet'
import Gerenciamento_entregas from './GerenciamentoEntregas'

function Home() {
  return (
    <>
      <CalculoFrete/>
      <EntregasGet/>
      <Gerenciamento_entregas/>
    </>
  )
}

export default Home
