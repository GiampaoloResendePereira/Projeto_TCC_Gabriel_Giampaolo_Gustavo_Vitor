import React from 'react'
import NavBar from '../layout/NavBarElement'

function CalculoFrete() {
  return (
    <>
      <NavBar />
      <div className='frete'>
        <div className='calculo'>
          <div>
            <form action="">
              <label htmlFor="">Digite o CEP de origem</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="">Digite o CEP de origem</label>
              <br />
              <input type="text" />
            </form>
          </div>
          <div>
            <form action=""></form>
          </div>
        </div>
        <div className='informativo'>
          <h6><strong>Tamanho e peso do pacote</strong></h6>
          <p>O pacote pode ter até 30kg e até 100cm em cada lado.</p>
          <p> A soma dos lados não deve ultrapassar 200cm.</p>
        </div>
        <div className='inputs'>
          <label htmlFor="">Lagura  cm</label>
          <input type="text" />
          <label htmlFor="">Altrura  cm</label>
          <input type="text" />
          <br />
          <label htmlFor="">Comprimento  cm</label>
          <input type="text" />
          <label htmlFor="">Peso  kg</label>
          <input type="text" />
          <br />
          <button>Calcular</button>
        </div>
        <div className='entregas'>
          <div className='entega_3d'>
            <div>Entrega em 3 dias</div>
          </div>
          

        </div>
      </div>
    </>


  )
}

export default CalculoFrete
